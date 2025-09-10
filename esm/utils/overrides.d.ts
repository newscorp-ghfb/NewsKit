/// <reference types="react" />
export type ComponentOverrides = {
    overrides?: object;
};
export type Override<TCO extends ComponentOverrides> = TCO['overrides'] | {
    props: Partial<TCO>;
} | React.ComponentType<TCO>;
export declare const getComponentOverrides: <TCO extends ComponentOverrides>(OverridesValue: Override<TCO> | undefined, DefaultComponent: import("react").ComponentType<TCO>, componentProps: Object) => [import("react").ComponentType<TCO>, Object];
//# sourceMappingURL=overrides.d.ts.map