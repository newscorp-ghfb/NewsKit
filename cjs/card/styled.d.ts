/// <reference types="react" />
import { CardProps, HasHref } from './types';
import { HeadlineOverrides } from '../headline/types';
export declare const StyledCardContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<CardProps, "overrides" | "layout" | "className"> & HasHref, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledCardContainerMedia: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<CardProps, "overrides" | "layout" | "mediaInteractive"> & HasHref, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledCardContainerTeaserAndActions: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<CardProps, "overrides" | "layout"> & HasHref, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledCardContainerTeaser: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<CardProps, "overrides" | "layout"> & HasHref, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledCardLink: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & HeadlineOverrides, import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;
export declare const StyledCardContainerActions: import("@emotion/styled").StyledComponent<import("../stack").StackProps & import("react").RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Pick<CardProps, "overrides"> & HasHref, {}, {}>;
//# sourceMappingURL=styled.d.ts.map