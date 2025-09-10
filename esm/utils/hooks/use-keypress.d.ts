import { RefObject } from 'react';
interface Options {
    enabled?: boolean;
    eventType?: 'keydown' | 'keyup';
    target?: RefObject<HTMLElement | null>;
    preventDefault?: boolean;
}
export declare const useKeypress: (key: string | string[], action: ((e: KeyboardEvent) => void) | undefined, opts?: Options) => void;
export {};
//# sourceMappingURL=use-keypress.d.ts.map