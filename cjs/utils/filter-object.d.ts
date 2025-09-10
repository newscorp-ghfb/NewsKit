export declare const filterObject: <T extends Record<string, unknown>>(target: T, filterKeys?: (keyof T)[]) => Partial<T>;
export declare const rejectObject: <T extends Record<string, unknown>>(target: T, rejectKeys?: (keyof T)[]) => Partial<T>;
export declare const filterOutFalsyProperties: <T>(target: T) => Partial<T>;
//# sourceMappingURL=filter-object.d.ts.map