import React from 'react';
import { DocsContextProps } from '@storybook/addon-docs/blocks';
import { MQ } from '../utils/style';
import { GridLayoutProps } from '../grid-layout/types';
interface DocsStoryProps {
    id: string;
    name?: string;
    expanded?: boolean;
    withToolbar?: boolean;
    parameters?: Record<string, any>;
}
interface StoriesProps {
    title?: React.ReactElement | string;
    includePrimary?: boolean;
    context: DocsContextProps;
}
interface Props {
    children: React.ReactNode;
    stylePreset?: MQ<string>;
}
export declare const StorybookHeading: React.FC<Props>;
export declare const StorybookSubHeading: React.FC<Props>;
export declare const StorybookH3: React.FC<Props>;
export declare const StorybookH4: React.FC<Props>;
export declare const StorybookSpan: React.FC<Props>;
export declare const StorybookParah: React.FC<Props>;
export declare const StorybookLabel: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
}, React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare const StorybookPage: ({ children, ...rest }: GridLayoutProps) => React.JSX.Element;
type StorybookCaseProps = {
    title?: string;
    inverse?: boolean;
    children?: React.ReactNode;
};
export declare const StorybookCase: ({ title, inverse, children, }: StorybookCaseProps) => React.JSX.Element;
export declare const StoryDocsHeader: ({ context }: {
    context: DocsContextProps;
}) => React.JSX.Element;
export declare const DocsStory: ({ id, name, expanded, withToolbar, parameters, }: DocsStoryProps) => React.JSX.Element;
export declare const Stories: ({ context, title, includePrimary, }: StoriesProps) => React.JSX.Element | null;
export {};
//# sourceMappingURL=storybook-comps.d.ts.map