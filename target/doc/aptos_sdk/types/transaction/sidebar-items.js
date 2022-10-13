window.SIDEBAR_ITEMS = {"enum":[["EntryABI","How to call a particular Move script (aka. an “ABI”). This is a clone of move_core_types::abi::ScriptABI but with a tweak on EntryFunction -> EntryFunction"],["ExecutionStatus","The status of VM execution, which contains more detailed failure info"],["RawTransactionWithData",""],["Transaction","`Transaction` will be the transaction type used internally in the aptos node to represent the transaction to be processed and persisted."],["TransactionArgument",""],["TransactionInfo","`TransactionInfo` is the object we store in the transaction accumulator. It consists of the transaction as well as the execution result of this transaction."],["TransactionPayload","Different kinds of transactions."],["TransactionStatus","The status of executing a transaction. The VM decides whether or not we should `Keep` the transaction output or `Discard` it based upon the execution of the transaction. We wrap these decisions around a `VMStatus` that provides more detail on the final execution state of the VM."],["WriteSetPayload","Two different kinds of WriteSet transactions."]],"fn":[["parse_transaction_argument",""]],"mod":[["authenticator",""]],"struct":[["AbortInfo",""],["AccountTransactionsWithProof","A list of transactions under an account that are contiguous by sequence number and include proofs."],["ArgumentABI","The description of a (regular) argument in a script."],["ChangeSet",""],["EntryFunction","Call a Move entry function."],["EntryFunctionABI",""],["Module",""],["ModuleBundle",""],["RawTransaction","RawTransaction is the portion of a transaction that a client signs."],["RawTransactionHasher","Cryptographic hasher for an BCS-serializable #item"],["RawTransactionWithDataHasher","Cryptographic hasher for an BCS-serializable #item"],["Script","Call a Move script."],["SignatureCheckedTransaction","A transaction for which the signature has been verified. Created by [`SignedTransaction::check_signature`] and [`RawTransaction::sign`]."],["SignedTransaction","A transaction that has been signed."],["TransactionHasher","Cryptographic hasher for an BCS-serializable #item"],["TransactionInfoHasher","Cryptographic hasher for an BCS-serializable #item"],["TransactionInfoV0",""],["TransactionInfoV0Hasher","Cryptographic hasher for an BCS-serializable #item"],["TransactionListWithProof",""],["TransactionOutput","The output of executing a transaction."],["TransactionOutputListWithProof","This differs from TransactionListWithProof in that TransactionOutputs are stored (no transactions). Events are stored inside each TransactionOutput."],["TransactionScriptABI",""],["TransactionToCommit",""],["TransactionWithProof",""],["TypeArgumentABI","The description of a type argument in a script."],["VMValidatorResult","The result of running the transaction through the VM validator."]],"type":[["AtomicVersion",""],["Version",""]]};