window.SIDEBAR_ITEMS = {"enum":[["EntryFunctionCall","Structured representation of a call into a known Move entry function."]],"fn":[["account_offer_signer_capability","Offers signer capability on behalf of `account` to the account at address `recipient_address`. An account can delegate its signer capability to only one other address at one time. `signer_capability_key_bytes` is the `SignerCapabilityOfferProofChallengeV2` signed by the account owner’s key `account_scheme` is the scheme of the account (ed25519 or multi_ed25519) `account_public_key_bytes` is the public key of the account owner `recipient_address` is the address of the recipient of the signer capability - note that if there’s an existing `recipient_address` in the account owner’s `SignerCapabilityOffer`, this will replace the previous `recipient_address` upon successful verification (the previous recipient will no longer have access to the account owner’s signer capability)"],["account_revoke_signer_capability",""],["account_rotate_authentication_key","Generic authentication key rotation function that allows the user to rotate their authentication key from any scheme to any scheme. To authorize the rotation, a signature by the current private key on a valid RotationProofChallenge (`cap_rotate_key`) demonstrates that the user intends to and has the capability to rotate the authentication key. A signature by the new private key on a valid RotationProofChallenge (`cap_update_table`) verifies that the user has the capability to update the value at key `auth_key` on the `OriginatingAddress` table. `from_scheme` refers to the scheme of the `from_public_key` and `to_scheme` refers to the scheme of the `to_public_key`. A scheme of 0 refers to an Ed25519 key and a scheme of 1 refers to Multi-Ed25519 keys."],["aptos_account_create_account","Basic account creation methods."],["aptos_account_transfer",""],["aptos_coin_claim_mint_capability","Only callable in tests and testnets where the core resources account exists. Claim the delegated mint capability and destroy the delegated token."],["aptos_coin_delegate_mint_capability","Only callable in tests and testnets where the core resources account exists. Create delegated token for the address so the account could claim MintCapability later."],["aptos_coin_mint","Only callable in tests and testnets where the core resources account exists. Create new coins and deposit them into dst_addr’s account."],["aptos_coin_transfer",""],["aptos_governance_add_approved_script_hash_script",""],["aptos_governance_create_proposal","Create a proposal with the backing `stake_pool`. @param execution_hash Required. This is the hash of the resolution script. When the proposal is resolved, only the exact script with matching hash can be successfully executed."],["aptos_governance_vote","Vote on proposal with `proposal_id` and voting power from `stake_pool`."],["code_publish_package_txn","Same as `publish_package` but as an entry function which can be called as a transaction. Because of current restrictions for txn parameters, the metadata needs to be passed in serialized form."],["coin_transfer","Transfers `amount` of coins `CoinType` from `from` to `to`."],["coin_upgrade_supply","Upgrade total supply to use a parallelizable implementation if it is available."],["managed_coin_burn","Withdraw an `amount` of coin `CoinType` from `account` and burn it."],["managed_coin_initialize","Initialize new coin `CoinType` in Aptos Blockchain. Mint and Burn Capabilities will be stored under `account` in `Capabilities` resource."],["managed_coin_mint","Create new coins `CoinType` and deposit them into dst_addr’s account."],["managed_coin_register","Creating a resource that stores balance of `CoinType` on user’s account, withdraw and deposit event handlers. Required if user wants to start accepting deposits of `CoinType` in his account."],["resource_account_create_resource_account","Creates a new resource account and rotates the authentication key to either the optional auth key if it is non-empty (though auth keys are 32-bytes) or the source accounts current auth key."],["resource_account_create_resource_account_and_fund","Creates a new resource account, transfer the amount of coins from the origin to the resource account, and rotates the authentication key to either the optional auth key if it is non-empty (though auth keys are 32-bytes) or the source accounts current auth key. Note, this function adds additional resource ownership to the resource account and should only be used for resource accounts that need access to Coin."],["resource_account_create_resource_account_and_publish_package","Creates a new resource account, publishes the package under this account transaction under this account and leaves the signer cap readily available for pickup."],["stake_add_stake","Add `amount` of coins from the `account` owning the StakePool."],["stake_increase_lockup","Similar to increase_lockup_with_cap but will use ownership capability from the signing account."],["stake_initialize_stake_owner","Initialize the validator account and give ownership to the signing account except it leaves the ValidatorConfig to be set by another entity. Note: this triggers setting the operator and owner, set it to the account’s address to set later."],["stake_initialize_validator","Initialize the validator account and give ownership to the signing account."],["stake_join_validator_set","This can only called by the operator of the validator/staking pool."],["stake_leave_validator_set","Request to have `pool_address` leave the validator set. The validator is only actually removed from the set when the next epoch starts. The last validator in the set cannot leave. This is an edge case that should never happen as long as the network is still operational."],["stake_reactivate_stake","Move `amount` of coins from pending_inactive to active."],["stake_rotate_consensus_key","Rotate the consensus key of the validator, it’ll take effect in next epoch."],["stake_set_delegated_voter","Allows an owner to change the delegated voter of the stake pool."],["stake_set_operator","Allows an owner to change the operator of the stake pool."],["stake_unlock","Similar to unlock_with_cap but will use ownership capability from the signing account."],["stake_update_network_and_fullnode_addresses","Update the network and full node addresses of the validator. This only takes effect in the next epoch."],["stake_withdraw","Withdraw from `account`’s inactive stake."],["staking_contract_add_stake","Add more stake to an existing staking contract."],["staking_contract_create_staking_contract","Staker can call this function to create a simple staking contract with a specified operator."],["staking_contract_distribute","Allow anyone to distribute already unlocked funds. This does not affect reward compounding and therefore does not need to be restricted to just the staker or operator."],["staking_contract_request_commission","Unlock commission amount from the stake pool. Operator needs to wait for the amount to become withdrawable at the end of the stake pool’s lockup period before they can actually can withdraw_commission."],["staking_contract_reset_lockup","Convenient function to allow the staker to reset their stake pool’s lockup period to start now."],["staking_contract_switch_operator","Allows staker to switch operator without going through the lenghthy process to unstake."],["staking_contract_switch_operator_with_same_commission","Allows staker to switch operator without going through the lenghthy process to unstake, without resetting commission."],["staking_contract_unlock_rewards","Unlock all accumulated rewards since the last recorded principals."],["staking_contract_unlock_stake","Staker can call this to request withdrawal of part or all of their staking_contract. This also triggers paying commission to the operator for accounting simplicity."],["staking_contract_update_voter","Convenient function to allow the staker to update the voter address in a staking contract they made."],["staking_proxy_set_operator",""],["staking_proxy_set_stake_pool_operator",""],["staking_proxy_set_stake_pool_voter",""],["staking_proxy_set_staking_contract_operator",""],["staking_proxy_set_staking_contract_voter",""],["staking_proxy_set_vesting_contract_operator",""],["staking_proxy_set_vesting_contract_voter",""],["staking_proxy_set_voter",""],["version_set_version","Updates the major version to a larger version. This can be called by on chain governance."],["vesting_admin_withdraw","Withdraw all funds to the preset vesting contract’s withdrawal address. This can only be called if the contract has already been terminated."],["vesting_distribute","Distribute any withdrawable stake from the stake pool."],["vesting_reset_beneficiary","Remove the beneficiary for the given shareholder. All distributions will sent directly to the shareholder account."],["vesting_reset_lockup",""],["vesting_set_beneficiary",""],["vesting_set_beneficiary_resetter",""],["vesting_set_management_role",""],["vesting_terminate_vesting_contract","Terminate the vesting contract and send all funds back to the withdrawal address."],["vesting_unlock_rewards","Unlock any accumulated rewards."],["vesting_update_operator",""],["vesting_update_operator_with_same_commission",""],["vesting_update_voter",""],["vesting_vest","Unlock any vested portion of the grant."]],"mod":[["aptos_token_stdlib",""]]};