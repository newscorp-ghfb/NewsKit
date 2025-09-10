import { MQ } from '../utils/style';
interface OverlayProps {
    open: boolean;
    onClick?: () => void;
    overrides?: {
        zIndex?: number;
        stylePreset?: MQ<string>;
    };
}
export declare const Overlay: import("../utils/with-own-theme").NewsKitReactComponents<OverlayProps>;
export {};
//# sourceMappingURL=overlay.d.ts.map