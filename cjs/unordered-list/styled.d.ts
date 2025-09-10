/// <reference types="react" />
import { UnorderedListProps } from './types';
export declare const StyledUl: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & {
    overrides: UnorderedListProps['overrides'];
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
export declare const StyledListItem: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
}, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
export declare const StyledBlock: import("@emotion/styled").StyledComponent<import("../block").BlockProps & import("react").RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export declare const StyledMarkerBlock: import("@emotion/styled").StyledComponent<import("../block").BlockProps & import("react").RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Pick<UnorderedListProps, "markerAlign">, {}, {}>;
//# sourceMappingURL=styled.d.ts.map