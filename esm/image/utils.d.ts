import { BreakpointKeys } from '../theme/types';
import { CSSObject } from '../utils/style';
import { ThemeProp } from '../utils/style-types';
import { ImageCommonProps } from './types';
export declare const getResponsiveAspectRatioFromProps: ({ width: propWidth, height: propHeight, overrides, ...props }: ImageCommonProps & ThemeProp, handler: (values: {
    width: string;
    height: string;
    paddingTop: string;
}) => string | CSSObject) => string | CSSObject;
export declare const useClientSide: (callback: () => boolean | void, imgRef: React.RefObject<HTMLImageElement | null>) => void;
export declare const getNextBreakpoint: (current: BreakpointKeys, all: BreakpointKeys[]) => BreakpointKeys | undefined;
//# sourceMappingURL=utils.d.ts.map