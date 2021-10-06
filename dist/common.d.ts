export declare enum Int53Type {
    Int64BE = "Int64BE",
    Int64LE = "Int64LE",
    UInt64BE = "UInt64BE",
    UInt64LE = "UInt64LE"
}
export declare const assert: (test: boolean, message: string) => void;
export declare const onesComplement: (number: number) => number;
export declare const uintHighLow: (number: number) => number[];
export declare const intHighLow: (number: number) => number[];
export declare const toDouble: (high: number, low: number, signed: boolean) => number;
