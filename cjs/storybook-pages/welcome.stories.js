"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Welcome = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../theme");
var welcome_1 = require("./welcome");
var BADGE = 'a[href="https://badge.fury.io/js/newskit"]';
var Welcome = function () { return react_1.default.createElement(welcome_1.Welcome, null); };
exports.Welcome = Welcome;
exports.Welcome.parameters = {
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
exports.default = {
    title: 'Welcome',
    component: function () { return 'None'; },
    decorators: [
        function (Story) { return (react_1.default.createElement(theme_1.ThemeProvider, { theme: theme_1.newskitLightTheme }, react_1.default.createElement(Story))); },
    ],
};
//# sourceMappingURL=welcome.stories.js.map