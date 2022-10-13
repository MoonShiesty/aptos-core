window.SIDEBAR_ITEMS = {"constant":[["MAX_RECURSIVE_TYPES_ALLOWED","Maximum number of recursive types Currently, this is allowed up to the serde limit of 16"],["X_APTOS_BLOCK_HEIGHT","Current block height of the chain"],["X_APTOS_CHAIN_ID","Chain ID of the current chain"],["X_APTOS_EPOCH","Current epoch of the chain"],["X_APTOS_LEDGER_OLDEST_VERSION","Oldest non-pruned ledger version of the chain"],["X_APTOS_LEDGER_TIMESTAMP","Current timestamp of the chain"],["X_APTOS_LEDGER_VERSION","Current ledger version of the chain"],["X_APTOS_OLDEST_BLOCK_HEIGHT","Oldest non-pruned block height of the chain"]],"enum":[["AccountSignature","Account signature scheme"],["AptosErrorCode","These codes provide more granular error information beyond just the HTTP status code of the response."],["GenesisPayload","The writeset payload of the Genesis transaction"],["MoveFunctionVisibility","Move function visibility"],["MoveType","An enum of Move’s possible types on-chain"],["MoveValue","An enum of the possible Move value types"],["Transaction","Enum of the different types of transactions in Aptos"],["TransactionData","Transaction data"],["TransactionId","A transaction identifier"],["TransactionPayload","An enum of the possible transaction payloads"],["TransactionSignature","An enum representing the different transaction signatures available"],["WriteSet","The associated writeset with a payload"],["WriteSetChange","A final state change of a transaction on a resource or module"]],"fn":[["deserialize_from_string",""],["new_vm_utf8_string",""],["verify_field_identifier",""],["verify_function_identifier",""],["verify_module_identifier",""]],"mod":[["mime_types",""]],"struct":[["AccountData","Account data"],["Address","The address of an account"],["AptosError","This is the generic struct we use for all API errors, it contains a string message and an Aptos API specific error code."],["BcsBlock","A Block with or without transactions for encoding in BCS"],["Block","A Block with or without transactions"],["BlockMetadataTransaction","A block metadata transaction"],["DeleteModule","Delete a module"],["DeleteResource","Delete a resource"],["DeleteTableItem","Delete a table item"],["DirectWriteSet",""],["Ed25519Signature","A single Ed25519 signature"],["EncodeSubmissionRequest","Request to encode a submission"],["EntryFunctionId","Entry function id"],["EntryFunctionPayload","Payload which runs a single entry function"],["Event","An event from a transaction"],["EventGuid",""],["GasEstimation","Struct holding the outputs of the estimate gas API"],["GasEstimationBcs","Struct holding the outputs of the estimate gas API"],["GenesisTransaction","The genesis transaction"],["HashValue","A hex encoded 32-byte hash value"],["HexEncodedBytes","Hex encoded bytes to allow for having bytes represented in JSON"],["IdentifierWrapper","A wrapper of a Move identifier"],["IndexResponse","The struct holding all data returned to the client by the index endpoint (i.e., GET “/”).  Only for responding in JSON"],["IndexResponseBcs","The struct holding all data returned to the client by the index endpoint (i.e., GET “/”).  This is just for the BCS response and cannot change"],["LedgerInfo","The Ledger information representing the current state of the chain"],["ModuleBundlePayload",""],["MoveAbility","A move ability e.g. drop, store"],["MoveConverter","The Move converter for converting Move types to JSON"],["MoveFunction","Move function"],["MoveFunctionGenericTypeParam","Move function generic type param"],["MoveModule","A Move module"],["MoveModuleBytecode","Move module bytecode along with it’s ABI"],["MoveModuleId","A Move module Id"],["MoveResource","A parsed Move resource"],["MoveScriptBytecode","Move script bytecode"],["MoveStruct","A move struct"],["MoveStructField","Move struct field"],["MoveStructTag","A Move struct tag for referencing an onchain struct type"],["MultiAgentSignature","Multi agent signature for multi agent transactions"],["MultiEd25519Signature","A Ed25519 multi-sig signature"],["PendingTransaction","A transaction waiting in mempool"],["ScriptPayload","Payload which runs a script that can run multiple functions"],["ScriptWriteSet",""],["SubmitTransactionRequest","A request to submit a transaction"],["TableItemRequest","Table Item request for the GetTableItem API"],["TransactionInfo","Information related to how a transaction affected the state of the blockchain"],["TransactionOnChainData","A committed transaction"],["TransactionSigningMessage","A hex encoded BCS encoded transaction from the EncodeSubmission API"],["TransactionsBatchSingleSubmissionFailure","Information telling which batch submission transactions failed"],["TransactionsBatchSubmissionResult","Batch transaction submission result"],["U128","A string encoded U128"],["U64","A string encoded U64"],["UserCreateSigningMessageRequest","Request to create signing messages"],["UserTransaction","A transaction submitted by a user to change the state of the blockchain"],["UserTransactionRequest",""],["VersionedEvent","An event from a transaction with a version"],["WriteModule","Write a new module or update an existing one"],["WriteResource","Write a resource or update an existing one"],["WriteSetPayload","A writeset payload, used only for genesis"],["WriteTableItem","Change set to write a table item"]],"trait":[["AsConverter",""],["Bytecode",""],["ExplainVMStatus",""],["VerifyInput","For verifying a given struct"],["VerifyInputWithRecursion","For verifying a given struct that needs to limit recursion"]]};