import React from 'react';
import { newskitLightTheme, ThemeProvider } from '../theme';
import { Welcome as WelcomeComponent } from './welcome';
var BADGE = 'a[href="https://badge.fury.io/js/newskit"]';
export var Welcome = function () { return React.createElement(WelcomeComponent, null); };
Welcome.parameters = {
    viewMode: 'story',
    backgrounds: { disable: true },
    previewTabs: {
        'storybook/docs/panel': {
            hidden: true,
        },
    },
    percy: {
        percyCSS: "".concat(BADGE, " { display: none; }"),
    },
};
export default {
    title: 'Welcome',
    component: function () { return 'None'; },
    decorators: [
        function (Story) { return (React.createElement(ThemeProvider, { theme: newskitLightTheme }, React.createElement(Story))); },
    ],
};
//# sourceMappingURL=welcome.stories.js.map