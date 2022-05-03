// Copyright (c) Aptos
// SPDX-License-Identifier: Apache-2.0

mod storage_interface;

pub use crate::storage_interface::DBDebuggerInterface;

use anyhow::{anyhow, Result};
use aptos_state_view::StateView;
use aptos_types::{
    account_address::AccountAddress,
    account_config,
    account_state::AccountState,
    account_view::AccountView,
    contract_event::EventWithProof,
    event::EventKey,
    on_chain_config::ValidatorSet,
    state_store::{state_key::StateKey, state_value::StateValue},
    transaction::{Transaction, Version},
};
use move_binary_format::file_format::CompiledModule;

// TODO(skedia) Clean up this interfact to remove account specific logic and move to state store
// key-value interface with fine grained storage project
pub trait AptosValidatorInterface: Sync {
    fn get_account_state_by_version(
        &self,
        account: AccountAddress,
        version: Version,
    ) -> Result<Option<AccountState>>;

    fn get_state_value_by_version(
        &self,
        state_key: &StateKey,
        version: Version,
    ) -> Result<Option<StateValue>>;

    fn get_events(&self, key: &EventKey, start_seq: u64, limit: u64)
        -> Result<Vec<EventWithProof>>;

    fn get_committed_transactions(&self, start: Version, limit: u64) -> Result<Vec<Transaction>>;

    fn get_latest_version(&self) -> Result<Version>;

    fn get_version_by_account_sequence(
        &self,
        account: AccountAddress,
        seq: u64,
    ) -> Result<Option<Version>>;

    fn get_framework_modules_by_version(&self, version: Version) -> Result<Vec<CompiledModule>> {
        let mut acc = vec![];
        for module_bytes in self
            .get_account_state_by_version(account_config::CORE_CODE_ADDRESS, version)?
            .ok_or_else(|| anyhow!("Failure reading diem root address state"))?
            .get_modules()
        {
            acc.push(
                CompiledModule::deserialize(module_bytes)
                    .map_err(|e| anyhow!("Failure deserializing module: {:?}", e))?,
            )
        }
        Ok(acc)
    }

    /// Get the account states of the most critical accounts, including:
    /// 1. Diem Framework code address
    /// 2. Diem Root address
    /// 3. All validator addresses
    fn get_admin_accounts(&self, version: Version) -> Result<Vec<(AccountAddress, AccountState)>> {
        let mut result = vec![];
        let aptos_root = self
            .get_account_state_by_version(account_config::aptos_root_address(), version)?
            .ok_or_else(|| anyhow!("aptos_root_address doesn't exist"))?;

        // Get all validator accounts
        let validators = aptos_root
            .get_config::<ValidatorSet>()?
            .ok_or_else(|| anyhow!("validator_config doesn't exist"))?;

        // Get code account, aptos_root
        result.push((
            account_config::CORE_CODE_ADDRESS,
            self.get_account_state_by_version(account_config::CORE_CODE_ADDRESS, version)?
                .ok_or_else(|| anyhow!("core_code_address doesn't exist"))?,
        ));
        result.push((account_config::aptos_root_address(), aptos_root));

        // Get all validator accounts
        for validator_info in validators.payload() {
            let addr = *validator_info.account_address();
            result.push((
                addr,
                self.get_account_state_by_version(addr, version)?
                    .ok_or_else(|| anyhow!("validator {:?} doesn't exist", addr))?,
            ));
        }
        Ok(result)
    }
}

pub struct DebuggerStateView<'a> {
    db: &'a dyn AptosValidatorInterface,
    version: Option<Version>,
}

impl<'a> DebuggerStateView<'a> {
    pub fn new(db: &'a dyn AptosValidatorInterface, version: Option<Version>) -> Self {
        Self { db, version }
    }

    fn get_state_value_internal(
        &self,
        state_key: &StateKey,
        version: Version,
    ) -> Result<Option<Vec<u8>>> {
        match self.db.get_state_value_by_version(state_key, version)? {
            None => Ok(None),
            Some(state_value) => Ok(state_value.maybe_bytes),
        }
    }
}

impl<'a> StateView for DebuggerStateView<'a> {
    fn get_state_value(&self, state_key: &StateKey) -> Result<Option<Vec<u8>>> {
        match self.version {
            None => Ok(None),
            Some(version) => self.get_state_value_internal(state_key, version),
        }
    }

    fn is_genesis(&self) -> bool {
        false
    }
}
