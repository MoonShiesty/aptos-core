window.SIDEBAR_ITEMS = {"constant":[["APTOS_MAX_KNOWN_VERSION",""],["APTOS_VERSION_2",""],["APTOS_VERSION_3",""],["APTOS_VERSION_4",""],["ON_CHAIN_CONFIG_REGISTRY","State sync will panic if the value of any config in this registry is uninitialized"]],"enum":[["ConsensusScheme",""],["FeatureFlag","The feature flags define in the Move source. This must stay aligned with the constants there."],["LeaderReputationType",""],["OnChainConsensusConfig","The on-chain consensus config, in order to be able to add fields, we use enum to wrap the actual struct."],["ProposerElectionType",""]],"fn":[["access_path_for_config",""],["new_epoch_event_key",""],["struct_tag_for_config",""]],"struct":[["ApprovedExecutionHashes",""],["ConfigID","To register an on-chain config in Rust:"],["ConfigurationResource",""],["ConsensusConfigV1",""],["Features","Representation of features on chain as a bitset."],["GasSchedule",""],["GasScheduleV2",""],["OnChainConfigPayload",""],["StorageGasSchedule",""],["ValidatorSet",""],["Version","Defines the version of Aptos Validator software."]],"trait":[["ConfigStorage","Trait to be implemented by a storage type from which to read on-chain configs"],["OnChainConfig","Trait to be implemented by a Rust struct representation of an on-chain config that is stored in storage as a serialized byte array"]]};