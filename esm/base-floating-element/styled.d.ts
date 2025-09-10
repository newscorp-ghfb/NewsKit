/// <reference types="react" />
import { Placement, Strategy } from '@floating-ui/react-dom-interactions';
import { BaseFloatingElementProps } from './types';
export declare const StyledFloatingElement: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & {
    strategy: Strategy;
    placement: Placement;
    $x?: number | null | undefined;
    $y?: number | null | undefined;
    hidePointer: boolean;
    baseTransitionClassname: string;
} & Pick<BaseFloatingElementProps, "overrides" | "path">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledPanel: import("@emotion/styled").StyledComponent<import("../text-block").TextBlockProps & import("react").RefAttributes<HTMLParagraphElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Pick<BaseFloatingElementProps, "overrides" | "path">, {}, {}>;
export declare const StyledPointer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & {
    placement: Placement;
    $x?: number | undefined;
    $y?: number | undefined;
} & Pick<BaseFloatingElementProps, "overrides" | "path">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
//# sourceMappingURL=styled.d.ts.map