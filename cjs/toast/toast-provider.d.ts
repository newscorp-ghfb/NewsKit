import React from 'react';
import { ToastOptions, ToastID, ToastProviderProps, ToastAsFunction, Renderable } from './types';
export declare const ToastProvider: ({ position, autoHideDuration, horizontalOffset, verticalOffset, }: ToastProviderProps) => React.JSX.Element;
export declare const toast: (component: ToastAsFunction | Renderable, toastOptions?: ToastOptions) => ToastID;
//# sourceMappingURL=toast-provider.d.ts.map