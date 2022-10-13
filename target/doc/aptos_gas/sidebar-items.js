window.SIDEBAR_ITEMS = {"constant":[["LATEST_GAS_FEATURE_VERSION",""]],"enum":[["AbstractValueUnit","Unit of abstract value size – a conceptual measurement of the memory space a Move value occupies."],["Arg","Unit for counting arguments."],["Byte","Unit for counting bytes."],["GasUnit","Unit of (external) gas."],["InternalGasUnit","Unit of internal gas."],["Octa","Unit of gas currency. 1 Octa = 10^-8 Aptos coins."]],"mod":[["gen",""]],"struct":[["AbstractValueSizeGasParameters",""],["AptosGasMeter","The official gas meter used inside the Aptos VM. It maintains an internal gas counter, measured in internal gas units, and carries an environment consisting all the gas parameters, which it can lookup when performing gas calculations."],["AptosGasParameters","Gas parameters for everything that is needed to run the Aptos blockchain, including instructions, transactions and native functions from various packages."],["GasQuantity","An opaque representation of a certain quantity, with the unit being encoded in the type. This type implements checked addition and subtraction, and only permits type-safe multiplication."],["InstructionGasParameters",""],["MiscGasParameters","Miscellaneous gas parameters."],["NativeGasParameters","Gas parameters for all native functions."],["StorageGasParameters",""],["TransactionGasParameters",""],["UnitDiv","A derived unit resulted from the division of two given units. This is used to permit type-safe multiplications."]],"trait":[["FromOnChainGasSchedule","A trait for converting from a map representation of the on-chain gas schedule."],["InitialGasSchedule","A trait for defining an initial value to be used in the genesis."],["ToOnChainGasSchedule","A trait for converting to a list of entries of the on-chain gas schedule."]],"type":[["AbstractValueSize",""],["AbstractValueSizePerArg",""],["Fee",""],["FeePerGasUnit",""],["Gas",""],["GasScalingFactor",""],["InternalGas",""],["InternalGasPerAbstractValueUnit",""],["InternalGasPerArg",""],["InternalGasPerByte",""],["NumArgs",""],["NumBytes",""]]};