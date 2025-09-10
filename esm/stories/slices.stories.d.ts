import * as React from 'react';
import { StoryFn as StoryType } from '@storybook/react';
declare const _default: {
    title: string;
    component: () => string;
    parameters: {
        previewTabs: {
            'storybook/canvas/panel': {
                index: number;
            };
            'storybook/docs/panel': {
                hidden: boolean;
            };
        };
        viewMode: string;
        docs: {
            page: null;
        };
    };
    decorators: ((Story: StoryType, context: {
        name: string;
        globals: {
            backgrounds: {
                value: string;
            };
        };
    }) => React.JSX.Element)[];
};
export default _default;
export declare const TheSunStory: {
    (): React.JSX.Element;
    storyName: string;
};
export declare const TheTimesStory: {
    (): React.JSX.Element;
    storyName: string;
};
//# sourceMappingURL=slices.stories.d.ts.map