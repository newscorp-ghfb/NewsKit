/// <reference types="react" />
import { MenuProps } from './types';
export type OnExpandedChangeFn = (nestedId: string | null) => void;
export declare const MenuContext: import("react").Context<Pick<MenuProps, "overrides" | "size" | "vertical" | "align"> & {
    updateExpandedMenuSubId: OnExpandedChangeFn;
    expandedMenuSubId: string | null;
    isSubMenu?: boolean | undefined;
    parentSubMenuId: string | null;
}>;
export declare const MenuContextProvider: import("react").Provider<Pick<MenuProps, "overrides" | "size" | "vertical" | "align"> & {
    updateExpandedMenuSubId: OnExpandedChangeFn;
    expandedMenuSubId: string | null;
    isSubMenu?: boolean | undefined;
    parentSubMenuId: string | null;
}>;
export declare const useMenuContext: () => Pick<MenuProps, "overrides" | "size" | "vertical" | "align"> & {
    updateExpandedMenuSubId: OnExpandedChangeFn;
    expandedMenuSubId: string | null;
    isSubMenu?: boolean | undefined;
    parentSubMenuId: string | null;
};
//# sourceMappingURL=context.d.ts.map