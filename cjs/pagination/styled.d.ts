/// <reference types="react" />
import { PaginationItemProps, PaginationProps } from './types';
import { ButtonOrButtonLinkProps } from '../button';
export declare const StyledNav: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<PaginationProps, "overrides" | "size">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export declare const StyledUnorderedList: import("@emotion/styled").StyledComponent<{
    rowGap?: import("../utils/style").MQ<string> | undefined;
    columnGap?: import("../utils/style").MQ<string> | undefined;
    rows?: import("../utils/style").MQ<string> | undefined;
    columns?: import("../utils/style").MQ<string> | undefined;
    justifyContent?: import("../utils/style").MQ<string> | undefined;
    alignContent?: import("../utils/style").MQ<string> | undefined;
    justifyItems?: import("../utils/style").MQ<string> | undefined;
    alignItems?: import("../utils/style").MQ<string> | undefined;
    areas?: import("../utils/style").MQ<string> | undefined;
    inline?: import("../utils/style").MQ<boolean> | undefined;
    autoColumns?: import("../utils/style").MQ<string> | undefined;
    autoRows?: import("../utils/style").MQ<string> | undefined;
    autoFlow?: import("../utils/style").MQ<string> | undefined;
    children?: import("react").ReactNode | import("../grid-layout/types").GridLayoutRenderProps;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
    overrides?: ({
        width?: import("../utils/style").MQ<string> | undefined;
        minWidth?: import("../utils/style").MQ<string> | undefined;
        maxWidth?: import("../utils/style").MQ<string> | undefined;
        height?: import("../utils/style").MQ<string> | undefined;
        minHeight?: import("../utils/style").MQ<string> | undefined;
        maxHeight?: import("../utils/style").MQ<string> | undefined;
    } & import("../utils/logical-properties").LogicalProps) | undefined;
} & Omit<import("react").HTMLAttributes<HTMLDivElement>, "children"> & import("react").RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export declare const StyledButton: import("@emotion/styled").StyledComponent<((ButtonOrButtonLinkProps & import("react").RefAttributes<HTMLAnchorElement | HTMLButtonElement>) & {
    theme?: import("@emotion/react").Theme | undefined;
}) & (ButtonOrButtonLinkProps & PaginationItemProps), {}, {}>;
//# sourceMappingURL=styled.d.ts.map