/// <reference types="react" />
import { CellProps } from '../grid';
import { StructuredListCellProps, StructuredListItemProps, StructuredListProps } from './types';
export declare const StyledGrid: import("@emotion/styled").StyledComponent<import("../grid").GridProps & {
    theme?: import("@emotion/react").Theme | undefined;
} & Pick<StructuredListItemProps, "overrides"> & {
    hasHref: boolean;
}, {}, {}>;
export declare const StyledWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StructuredListCellProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledListItemContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<StructuredListItemProps, "overrides" | "disabled">, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
export declare const StyledLink: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StructuredListItemProps, import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;
export declare const StyledListWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StructuredListProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
export declare const StyledCell: import("@emotion/styled").StyledComponent<CellProps & {
    theme?: import("@emotion/react").Theme | undefined;
} & Pick<StructuredListCellProps, "align">, {}, {}>;
//# sourceMappingURL=styled.d.ts.map