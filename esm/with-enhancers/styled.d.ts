/// <reference types="react" />
import { EnhancerOverrides } from '../form/types';
import { EnhancerProps, WithEnhancersProps } from './types';
import { TextFieldSize } from '../text-field/types';
export declare const StyledEnhancer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & EnhancerProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledInputContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Omit<WithEnhancersProps, "size"> & {
    size?: TextFieldSize | undefined;
    componentDefaultsPath: string;
    focused?: boolean | undefined;
    overrides?: EnhancerOverrides | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
//# sourceMappingURL=styled.d.ts.map