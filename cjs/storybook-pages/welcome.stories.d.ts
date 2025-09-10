import React from 'react';
import { StoryFn as StoryType } from '@storybook/react';
export declare const Welcome: {
    (): React.JSX.Element;
    parameters: {
        viewMode: string;
        backgrounds: {
            disable: boolean;
        };
        previewTabs: {
            'storybook/docs/panel': {
                hidden: boolean;
            };
        };
        percy: {
            percyCSS: string;
        };
    };
};
declare const _default: {
    title: string;
    component: () => string;
    decorators: ((Story: StoryType) => React.JSX.Element)[];
};
export default _default;
//# sourceMappingURL=welcome.stories.d.ts.map