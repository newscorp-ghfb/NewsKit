/// <reference types="react" />
import { ModalProps } from './types';
type ModalPanelProps = Pick<ModalProps, 'overrides' | 'open'>;
export declare const StyledModalWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<ModalProps, "overrides" | "inline"> & {
    $open: boolean;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledModal: import("@emotion/styled").StyledComponent<import("../dialog/types").BaseDialogViewProps & import("react").RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & ModalPanelProps, {}, {}>;
export {};
//# sourceMappingURL=styled.d.ts.map