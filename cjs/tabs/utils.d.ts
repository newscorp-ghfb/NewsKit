import { ScrollProps } from '../scroll';
import { Theme } from '../theme';
export declare const getLayoutParams: (el: HTMLElement | undefined, theme: Theme, vertical: boolean, sizeOverride?: string) => {
    size: number;
    distance: number;
};
export declare const KEYBOARD_ACTION: {
    next: string;
    previous: string;
    start: string;
    end: string;
};
export declare const KEYBOARD_ARROWS: {
    left: number;
    up: number;
    right: number;
    down: number;
    home: number;
    end: number;
};
export declare const parseKeyDown: (event: React.KeyboardEvent, vertical: boolean) => string | null;
export declare const getTabsBarIndicatorStyle: (theme: Theme, size?: number, distance?: number, vertical?: boolean, keyUpdated?: number, overrides?: {}) => {
    width: any;
    height: any;
    transform: string;
    transition: string | undefined;
};
export declare const getFirstParentElementWithRole: (element: Node | null, role: string) => HTMLElement;
export declare const getDescendantOnlyFromFirstChild: (element: Node | null, role: string) => ChildNode | null;
export declare const getScrollAlign: (index: number, tabArray: unknown[]) => ScrollProps['snapAlign'];
//# sourceMappingURL=utils.d.ts.map