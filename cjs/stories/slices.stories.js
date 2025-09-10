"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheTimesStory = exports.TheSunStory = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("..");
var theme_select_object_1 = require("../test/theme-select-object");
var icons_1 = require("../icons");
var the_sun_cards_1 = require("../card-composable/__tests__/the-sun-cards");
var the_times_cards_1 = require("../card-composable/__tests__/the-times-cards");
var default_focus_visible_1 = require("../utils/default-focus-visible");
var themeOverrides = {
    overrides: {
        stylePresets: tslib_1.__assign({ divider: {
                base: {
                    borderStyle: 'solid',
                    borderColor: '{{colors.interface030}}',
                    borderWidth: '{{borders.borderWidthDefault}}',
                },
            }, cardContainer: {
                base: {
                    backgroundColor: '{{colors.transparent}}',
                },
            }, cardHeadline: {
                base: {
                    color: 'currentColor',
                },
            }, cardLink: {
                base: {
                    textDecoration: 'none',
                    color: '{{colors.inkContrast}}',
                },
                hover: {
                    color: '{{colors.interactiveLink020}}',
                },
                'focus-visible': default_focus_visible_1.defaultFocusVisible,
            } }, the_sun_cards_1.stylePresets),
        componentDefaults: {
            cardLink: {
                stylePreset: 'cardLink',
            },
        },
    },
};
exports.default = {
    title: 'Composed/Slices',
    component: function () { return 'None'; },
    parameters: {
        previewTabs: {
            'storybook/canvas/panel': { index: -1 },
            'storybook/docs/panel': { hidden: true },
        },
        viewMode: 'story',
        docs: {
            page: null,
        },
    },
    decorators: [
        function (Story, context) {
            var _a, _b;
            return (React.createElement(__1.ThemeProvider, { theme: (0, theme_select_object_1.createCustomThemeWithBaseThemeSwitch)((_b = (_a = context === null || context === void 0 ? void 0 : context.globals) === null || _a === void 0 ? void 0 : _a.backgrounds) === null || _b === void 0 ? void 0 : _b.value, themeOverrides, context === null || context === void 0 ? void 0 : context.name) }, React.createElement(Story, {})));
        },
    ],
};
var TheSunStory = function () { return (React.createElement(__1.GridLayout, { overrides: {
        maxWidth: { xs: '340px', md: '620px', lg: '940px' },
        marginInline: 'auto',
    }, columns: { xs: '1fr', lg: '2fr 1fr' }, columnGap: "space040", rowGap: "space050" },
    React.createElement(__1.GridLayoutItem, null,
        React.createElement(the_sun_cards_1.CardVerticalResponsive, null)),
    React.createElement(__1.GridLayout, { columns: { xs: '1fr', md: '1fr 1fr', lg: '1fr' }, columnGap: "space040", rowGap: "space050", alignContent: "space-between" },
        React.createElement(the_sun_cards_1.CardHorizontalResponsive, null),
        React.createElement(the_sun_cards_1.CardHorizontalResponsive, null),
        React.createElement(the_sun_cards_1.CardHorizontalResponsive, null),
        React.createElement(the_sun_cards_1.CardHorizontalResponsive, null)))); };
exports.TheSunStory = TheSunStory;
exports.TheSunStory.storyName = 'The Sun';
var SecondLevelArticlesGroup = function () {
    var areas = {
        xs: "\n      p1 d1 p2\n      d2 d1 d3\n      p3 d1 p4\n    ",
        md: "\n      p1 d1 p2 d2 p3 d3 p4\n    ",
        lg: "\n      p1\n      d1\n      p2\n      d2\n      p3\n      d3\n      p4\n    ",
        xl: "\n      p1 d1 p2\n      d2 d1 d3\n      p3 d1 p4\n    ",
    };
    return (React.createElement(__1.GridLayout, { areas: areas, columns: {
            xs: '1fr auto 1fr',
            md: '1fr auto 1fr auto 1fr auto 1fr',
            lg: '1fr',
            xl: '1fr auto 1fr',
        }, columnGap: "space040", rowGap: "space040" },
        React.createElement(__1.GridLayoutItem, { area: "p1" },
            React.createElement(the_times_cards_1.SecondLevelCard, null)),
        React.createElement(__1.GridLayoutItem, { area: "d1" },
            React.createElement(__1.Divider, { vertical: { xs: true, lg: false, xl: true } })),
        React.createElement(__1.GridLayoutItem, { area: "p2" },
            React.createElement(the_times_cards_1.SecondLevelCard, null)),
        React.createElement(__1.GridLayoutItem, { area: "d2" },
            React.createElement(__1.Divider, { vertical: { xs: false, md: true, lg: false } })),
        React.createElement(__1.GridLayoutItem, { area: "p3" },
            React.createElement(the_times_cards_1.SecondLevelCard, null)),
        React.createElement(__1.GridLayoutItem, { area: "d3" },
            React.createElement(__1.Divider, { vertical: { xs: false, md: true, lg: false } })),
        React.createElement(__1.GridLayoutItem, { area: "p4" },
            React.createElement(the_times_cards_1.SecondLevelCard, null))));
};
var ThirdLevelArticlesGroup = function () { return (React.createElement(__1.GridLayout, { columns: {
        xs: '1fr',
        md: '1fr auto 1fr',
    }, columnGap: "space040", rowGap: "space040" },
    React.createElement(the_times_cards_1.ThirdLevelCard, null),
    React.createElement(__1.Divider, { vertical: { xs: false, md: true } }),
    React.createElement(the_times_cards_1.ThirdLevelCard, null))); };
var TheTimesStory = function () {
    var button = function () { return (React.createElement(__1.IconButton, { href: "/", size: "medium", title: "more articles" },
        React.createElement(icons_1.IconFilledChevronRight, null))); };
    var mainAreas = {
        xs: "\n      lead\n      d1\n      second\n      d2\n      third\n    ",
        lg: "\n      lead  d1 second\n      d2    d1 second\n      third d1 second\n    ",
    };
    return (React.createElement(__1.GridLayout, { overrides: { maxWidth: '1300px', marginInline: 'auto' }, rowGap: "space040" },
        React.createElement(__1.TitleBar, { headingAs: "h2", actionItem: button, overrides: {
                paddingInline: 'space000',
                heading: {
                    typographyPreset: 'editorialHeadline040',
                },
            } }, "Title bar"),
        React.createElement(__1.GridLayout, { areas: mainAreas, columnGap: "space040", rowGap: "space040", columns: {
                xs: '1fr',
                lg: '1fr auto 232px',
                xl: '1fr auto 402px',
            } },
            React.createElement(__1.GridLayoutItem, { area: "lead" },
                React.createElement(the_times_cards_1.LeadCard, null)),
            React.createElement(__1.GridLayoutItem, { area: "d1" },
                React.createElement(__1.Divider, { vertical: { xs: false, lg: true } })),
            React.createElement(__1.GridLayoutItem, { area: "second" },
                React.createElement(SecondLevelArticlesGroup, null)),
            React.createElement(__1.GridLayoutItem, { area: "d2" },
                React.createElement(__1.Divider, null)),
            React.createElement(__1.GridLayoutItem, { area: "third" },
                React.createElement(ThirdLevelArticlesGroup, null)))));
};
exports.TheTimesStory = TheTimesStory;
exports.TheTimesStory.storyName = 'The Times';
//# sourceMappingURL=slices.stories.js.map