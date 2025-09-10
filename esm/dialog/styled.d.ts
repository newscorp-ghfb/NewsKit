/// <reference types="react" />
import { MoveFocusInside } from 'react-focus-lock';
import { css } from '../utils/style';
import { BaseDialogViewProps } from './types';
export declare const createCssGrid: (props: Pick<BaseDialogViewProps, 'closePosition'>) => ReturnType<typeof css>;
export declare const StyledDialogPanel: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<BaseDialogViewProps, "overrides" | "path" | "inline" | "closePosition"> & {
    $open?: boolean | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledMoveFocusInside: import("@emotion/styled").StyledComponent<import("react-focus-lock/dist/cjs/interfaces").AutoFocusProps & {
    theme?: import("@emotion/react").Theme | undefined;
} & Pick<BaseDialogViewProps, "closePosition">, {}, {
    ref?: import("react").Ref<MoveFocusInside> | undefined;
}>;
export declare const StyledDialogHeaderBG: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<BaseDialogViewProps, "overrides" | "path" | "inline" | "closePosition"> & {
    $open?: boolean | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledDialogHeader: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<BaseDialogViewProps, "overrides" | "path" | "inline" | "closePosition"> & {
    $open?: boolean | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledDialogContent: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<BaseDialogViewProps, "overrides" | "path" | "inline" | "closePosition"> & {
    $open?: boolean | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledCloseButtonContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<BaseDialogViewProps, "overrides" | "path" | "inline" | "closePosition"> & {
    $open?: boolean | undefined;
} & Pick<BaseDialogViewProps, "closePosition">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
//# sourceMappingURL=styled.d.ts.map