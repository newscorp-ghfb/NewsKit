/// <reference types="react" />
import { MenuGroupProps, MenuItemAlign, MenuProps, MenuSubProps } from './types';
export declare const StyledMenu: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & MenuProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export declare const StyledMenuGroup: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<MenuProps, "vertical"> & MenuGroupProps, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
export declare const StyledMenuGroupTitle: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<MenuProps, "vertical"> & MenuGroupProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledMenuItem: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<MenuProps, "vertical"> & Pick<MenuProps, "overrides">, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
export declare const StyledButton: import("@emotion/styled").StyledComponent<((import("../button").ButtonOrButtonLinkProps & import("react").RefAttributes<HTMLAnchorElement | HTMLButtonElement>) & {
    theme?: import("@emotion/react").Theme | undefined;
}) & Pick<MenuProps, "size" | "vertical"> & {
    align?: MenuItemAlign | undefined;
    selected?: boolean | undefined;
}, {}, {}>;
export declare const StyledMenuDivider: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<MenuProps, "vertical"> & Pick<MenuProps, "overrides">, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
export declare const StyledUl: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<MenuProps, "size" | "vertical"> & Pick<MenuSubProps, "overrides" | "expanded">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
//# sourceMappingURL=styled.d.ts.map