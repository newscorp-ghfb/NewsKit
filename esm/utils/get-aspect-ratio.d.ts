/// <reference types="react" />
import { HeightProperty, WidthProperty } from 'csstype';
export interface GetAspectRatioProp {
    children?: React.ReactNode;
    aspectRatio?: string;
    height?: HeightProperty<string>;
    width?: WidthProperty<string>;
}
export declare const getAspectRatioStyles: ({ aspectRatio, height, width, }: GetAspectRatioProp) => {
    paddingTop: string;
    height: string | undefined;
    width: string | undefined;
} | {
    height: string | undefined;
    width: string | undefined;
    paddingTop?: undefined;
};
//# sourceMappingURL=get-aspect-ratio.d.ts.map