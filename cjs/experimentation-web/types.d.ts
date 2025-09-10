/// <reference types="react" />
export interface OptimizelyWebConfig {
    scriptCdn: string;
}
export interface BaseExperimentationWebPros {
    reactHelmet?: React.ComponentType<{
        script?: Array<any>;
    }>;
    async?: boolean;
}
export interface ExperimentationWebProps extends BaseExperimentationWebPros {
    optimizelyWebConfig: OptimizelyWebConfig;
}
//# sourceMappingURL=types.d.ts.map