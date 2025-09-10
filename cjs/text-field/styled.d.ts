/// <reference types="react" />
import { FormInputTextFieldProps, TextFieldSize } from './types';
interface StyledTextFieldProps extends FormInputTextFieldProps {
    $size: TextFieldSize;
}
export declare const StyledInput: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StyledTextFieldProps & {
    placeholderColor?: string | undefined;
}, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export {};
//# sourceMappingURL=styled.d.ts.map