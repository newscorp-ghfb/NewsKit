export type MaybeArray<T> = T | T[];
export declare const toArray: <T>(arr: MaybeArray<T>) => T[];
export declare const map: <T, R = unknown>(arr: MaybeArray<T>, fn: (x: T, i: number, arr: MaybeArray<T>) => R) => R[];
//# sourceMappingURL=array.d.ts.map