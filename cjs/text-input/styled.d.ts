/// <reference types="react" />
import { MQ } from '../utils/style';
import { TextInputProps, TextInputSize } from './types';
import { TextBlockProps } from '../text-block';
import { BlockProps } from '../block';
export declare const StyledTextInputContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Omit<TextInputProps, "label">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface StyledTextInputProps extends Pick<TextInputProps, 'overrides' | 'disabled' | 'icon'> {
    $size: TextInputSize;
    stylePreset?: MQ<string>;
    id?: string;
    invalid?: boolean;
    valid?: boolean;
    role?: string;
    dataTestId?: string;
    hasIcon?: boolean;
}
export declare const InputIconContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StyledTextInputProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const IconContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StyledTextInputProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const StyledInput: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StyledTextInputProps, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export declare const StyledLabel: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StyledTextInputProps, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare const StyledAssistiveText: import("@emotion/styled").StyledComponent<TextBlockProps & import("react").RefAttributes<HTMLParagraphElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Omit<TextBlockProps, "overrides"> & StyledTextInputProps, {}, {}>;
export declare const StyledAssistiveTextContainer: import("@emotion/styled").StyledComponent<BlockProps & import("react").RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Omit<BlockProps, "overrides"> & StyledTextInputProps, {}, {}>;
export {};
//# sourceMappingURL=styled.d.ts.map