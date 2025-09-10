/// <reference types="react" />
import { TextBlockProps } from '../text-block/types';
export declare const StyledAssistiveText: import("@emotion/styled").StyledComponent<TextBlockProps & import("react").RefAttributes<HTMLParagraphElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Omit<TextBlockProps, "overrides"> & import("react").HTMLAttributes<HTMLParagraphElement> & Omit<import("../with-enhancers/types").WithEnhancersProps, "isFocused" | "enhancersType" | "componentDefaultsPath"> & {
    overrides?: (import("../form/types").EnhancerOverrides & {
        stylePreset?: import("../utils/style").MQ<string> | undefined;
        typographyPreset?: import("../utils/style").MQ<string> | undefined;
        minHeight?: import("../utils/style").MQ<string> | undefined;
    }) | undefined;
}, {}, {}>;
//# sourceMappingURL=styled.d.ts.map