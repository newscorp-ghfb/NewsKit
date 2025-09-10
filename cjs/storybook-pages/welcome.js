"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Welcome = exports.ThemelessWelcome = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var typography_1 = require("../typography");
var divider_1 = require("../divider");
var link_1 = require("../link");
var block_1 = require("../block");
var image_1 = require("../image");
var utils_1 = require("../utils");
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var grid_layout_1 = require("../grid-layout");
var links = [
    { label: 'NewsKit website', url: 'https://newskit.co.uk/' },
    { label: 'GitHub', url: 'https://github.com/newscorp-ghfb/newskit' },
    {
        label: 'Figma component library (internal only)',
        url: 'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components',
    },
    { label: 'Changelog', url: 'https://newskit.co.uk/about/release-notes/' },
    { label: 'About', url: 'https://newskit.co.uk/about/overview/' },
    {
        label: 'Report an issue',
        url: 'https://github.com/newscorp-ghfb/newskit/issues/new/choose',
    },
];
var WelcomeTitle = (0, utils_1.styled)(typography_1.H1)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  max-width: 200px;\n"], ["\n  max-width: 200px;\n"])));
var WelcomeDescription = (0, utils_1.styled)(typography_1.P)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  max-width: 300px;\n"], ["\n  max-width: 300px;\n"])));
var WelcomeContainer = (0, utils_1.styled)(block_1.Block)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  /* Welcome screen is not themeable so its only appearance is in newskit light theme. */\n  /* Doing this to stretch the internals of the Welcome screen from side to side to avoid cases where the dark theme is selected and there are dark borders around it. */\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  ", ";\n"], ["\n  /* Welcome screen is not themeable so its only appearance is in newskit light theme. */\n  /* Doing this to stretch the internals of the Welcome screen from side to side to avoid cases where the dark theme is selected and there are dark borders around it. */\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  ", ";\n"])), (0, utils_1.getColorCssFromTheme)('backgroundColor', 'inkLight010'));
var ThemelessWelcome = function () { return (react_1.default.createElement(WelcomeContainer, { paddingInline: "space050", paddingBlock: "space050", marginInline: "-16px", marginBlock: "-16px" },
    react_1.default.createElement(block_1.Block, { stylePreset: "welcomeBanner", marginBlockEnd: "space100", paddingInline: "space080", paddingBlock: "space080" },
        react_1.default.createElement(WelcomeTitle, { overrides: {
                typographyPreset: 'utilityHeading050',
                marginBlockEnd: 'space030',
            } }, "Welcome to NewsKit"),
        react_1.default.createElement(WelcomeDescription, { overrides: { typographyPreset: 'utilityBody030' } }, "An open source design system built by News UK, for everyone")),
    react_1.default.createElement(typography_1.H2, { overrides: {
            typographyPreset: 'utilitySubheading050',
            marginBlockEnd: 'space030',
        } }, "Explore"),
    react_1.default.createElement(divider_1.Divider, { overrides: { marginBlockEnd: 'space060' } }),
    react_1.default.createElement(grid_layout_1.GridLayout, { rowGap: "space040" }, links.map(function (_a) {
        var label = _a.label, url = _a.url;
        return (react_1.default.createElement(grid_layout_1.GridLayoutItem, { key: url },
            react_1.default.createElement(link_1.LinkStandalone, { target: "_blank", overrides: { typographyPreset: 'utilityBody030' }, href: url }, label)));
    })),
    react_1.default.createElement(link_1.LinkStandalone, { external: false, href: "https://badge.fury.io/js/newskit", overrides: { marginBlockStart: 'space070' } },
        react_1.default.createElement(image_1.Image, { src: "https://badge.fury.io/js/newskit.svg", alt: "npm version badge" })))); };
exports.ThemelessWelcome = ThemelessWelcome;
exports.Welcome = (0, with_own_theme_1.withOwnTheme)(exports.ThemelessWelcome)({
    defaults: {},
    stylePresets: style_presets_1.default,
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=welcome.js.map