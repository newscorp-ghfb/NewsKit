import { SourcePointConfigTCFV2, SourcePointConfigUnified, ConsentProps, ConsentPropsTCFV2, ConsentPropsUnified, SourcePointConfigNonTCFV1, ConsentPropsNonTCFV1 } from './types';
export declare const getV2Scripts: (config: SourcePointConfigTCFV2) => ({
    content: string;
    src?: undefined;
    async?: undefined;
} | {
    src: string;
    async: boolean;
    content?: undefined;
})[];
export declare const getUnifiedScripts: (config: SourcePointConfigUnified) => [];
export declare const getNonTCFScripts: (config: SourcePointConfigNonTCFV1) => ({
    content: string;
    src?: undefined;
    async?: undefined;
} | {
    src: string;
    async: boolean;
    content?: undefined;
})[];
export declare const isV2Props: (props: ConsentProps) => props is ConsentPropsTCFV2;
export declare const isUnifiedProps: (props: ConsentProps) => props is ConsentPropsUnified;
export declare const isNonTCFV1Props: (props: ConsentProps) => props is ConsentPropsNonTCFV1;
//# sourceMappingURL=consent-utils.d.ts.map