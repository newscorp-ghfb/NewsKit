import React from 'react';
import { MQ } from '../../utils/style';
import { LogicalProps } from '../../utils/logical-properties';
export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    dropCap?: boolean;
    overrides?: {
        stylePreset?: MQ<string>;
        typographyPreset?: MQ<string>;
        dropCap?: {
            stylePreset?: MQ<string>;
            typographyPreset?: MQ<string>;
        } & LogicalProps;
    } & LogicalProps;
}
export declare const ParagraphText: import("../../utils/with-own-theme").NewsKitReactComponents<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & ParagraphProps & React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement>>;
export declare const ParagraphDropCap: import("../../utils/with-own-theme").NewsKitReactComponents<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & ParagraphProps & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>>;
export declare const getFirstLetter: (children: React.ReactNode[]) => string;
export declare const removeFirstLetter: (children: React.ReactNode[]) => React.ReactNode;
export declare const Paragraph: React.FC<ParagraphProps>;
export declare const P: React.FC<ParagraphProps>;
export declare const Subscript: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export declare const Sub: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export declare const Superscript: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export declare const Sup: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
//# sourceMappingURL=paragraph.d.ts.map