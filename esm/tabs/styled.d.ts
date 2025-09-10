/// <reference types="react" />
import { TabsProps, DistributionWrapperProps, TabsBarProps, TabButtonProps } from './types';
import { TextBlockProps } from '../text-block';
import { ButtonProps } from '../button';
export declare const StyledTabGroup: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<TabsProps, "overrides" | "vertical" | "distribution">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledTabsBar: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & TabsBarProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledInnerTabGroup: import("@emotion/styled").StyledComponent<import("../stack").StackProps & import("react").RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Pick<TabsProps, "overrides">, {}, {}>;
export declare const StyledDistributionWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & DistributionWrapperProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledTabsBarIndicator: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<TabsProps, "overrides" | "vertical" | "indicatorPosition">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledTabsBarTrack: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<TabsProps, "overrides" | "vertical" | "indicatorPosition">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledTabButton: import("@emotion/styled").StyledComponent<((import("../button").ButtonOrButtonLinkProps & import("react").RefAttributes<HTMLAnchorElement | HTMLButtonElement>) & {
    theme?: import("@emotion/react").Theme | undefined;
}) & Omit<ButtonProps, "loading"> & TabButtonProps, {}, {}>;
export declare const StyledTabPanelBlock: import("@emotion/styled").StyledComponent<TextBlockProps & import("react").RefAttributes<HTMLParagraphElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & {
    selected: boolean;
    isFocused: boolean;
}, {}, {}>;
export declare const StyledDividerWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<TabsProps, "overrides" | "vertical">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
//# sourceMappingURL=styled.d.ts.map