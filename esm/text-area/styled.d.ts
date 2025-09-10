/// <reference types="react" />
import { TextAreaProps } from './types';
export declare const StyledTextArea: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Omit<TextAreaProps, "size"> & {
    $size: TextAreaProps['size'];
    placeholderColor?: string | undefined;
}, import("react").DetailedHTMLProps<import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, {}>;
//# sourceMappingURL=styled.d.ts.map