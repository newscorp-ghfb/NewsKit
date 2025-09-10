export interface UseControlledProps<T = unknown> {
    controlledValue: T | undefined;
    defaultValue: T | undefined;
}
export declare function useControlled<T = unknown>({ controlledValue, defaultValue, }: UseControlledProps<T>): [T | undefined, (state: T) => void];
//# sourceMappingURL=use-controlled.d.ts.map