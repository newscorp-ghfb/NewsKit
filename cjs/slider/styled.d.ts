/// <reference types="react" />
import { StyledTrackProps, SliderProps, ThumbLabelProps } from './types';
import { StackProps } from '../stack';
type VerticalProp = Pick<SliderProps, 'vertical'> & Partial<StackProps>;
type CursorProps = Pick<StyledTrackProps, 'disabled' | 'dragged' | 'values'>;
export declare const StackContainer: import("@emotion/styled").StyledComponent<StackProps & import("react").RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Pick<SliderProps, "vertical"> & Partial<StackProps>, {}, {}>;
export declare const LabelContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<SliderProps, "overrides" | "labelPosition"> & Pick<SliderProps, "vertical"> & Partial<StackProps>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledTrack: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StyledTrackProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
type StyledThumbProps = VerticalProp & Pick<ThumbLabelProps, 'disabled' | 'overrides'> & CursorProps;
export declare const StyledThumb: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<SliderProps, "vertical"> & Partial<StackProps> & Pick<ThumbLabelProps, "overrides" | "disabled"> & CursorProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledThumbFeedback: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<StyledThumbProps, "overrides" | "disabled">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const StyledThumbValue: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<SliderProps, "vertical"> & Partial<StackProps> & Pick<SliderProps, "disabled"> & Pick<ThumbLabelProps, "overrides">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface StyledSliderLabelProps extends Pick<SliderProps, 'vertical' | 'disabled' | 'labelPosition'>, Pick<ThumbLabelProps, 'overrides'> {
    labelType: 'min' | 'max';
    text: boolean;
}
export declare const StyledSliderLabel: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & StyledSliderLabelProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export {};
//# sourceMappingURL=styled.d.ts.map