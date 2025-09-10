import { ToastPosition } from './types';
export declare const getHorizontalPosition: (position: ToastPosition) => "center" | "flex-end" | "flex-start";
export declare const getVerticalPosition: (position: ToastPosition) => "bottom" | "top";
export declare const getSpaceBetweenToasts: (position: ToastPosition) => (space: string) => {
    [x: string]: string;
};
//# sourceMappingURL=utils.d.ts.map