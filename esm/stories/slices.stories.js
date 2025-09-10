import { __assign } from "tslib";
import * as React from 'react';
import { Divider, GridLayout, GridLayoutItem, IconButton, ThemeProvider, TitleBar, } from '..';
import { createCustomThemeWithBaseThemeSwitch } from '../test/theme-select-object';
import { IconFilledChevronRight } from '../icons';
import { CardVerticalResponsive, CardHorizontalResponsive, stylePresets as stylePresetsTheSun, } from '../card-composable/__tests__/the-sun-cards';
import { LeadCard as TheTimesLeadCard, SecondLevelCard as TheTimesSecondLevelCard, ThirdLevelCard as TheTimesThirdLevelCard, } from '../card-composable/__tests__/the-times-cards';
import { defaultFocusVisible } from '../utils/default-focus-visible';
var themeOverrides = {
    overrides: {
        stylePresets: __assign({ divider: {
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
                'focus-visible': defaultFocusVisible,
            } }, stylePresetsTheSun),
        componentDefaults: {
            cardLink: {
                stylePreset: 'cardLink',
            },
        },
    },
};
export default {
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
            return (React.createElement(ThemeProvider, { theme: createCustomThemeWithBaseThemeSwitch((_b = (_a = context === null || context === void 0 ? void 0 : context.globals) === null || _a === void 0 ? void 0 : _a.backgrounds) === null || _b === void 0 ? void 0 : _b.value, themeOverrides, context === null || context === void 0 ? void 0 : context.name) }, React.createElement(Story, {})));
        },
    ],
};
export var TheSunStory = function () { return (React.createElement(GridLayout, { overrides: {
        maxWidth: { xs: '340px', md: '620px', lg: '940px' },
        marginInline: 'auto',
    }, columns: { xs: '1fr', lg: '2fr 1fr' }, columnGap: "space040", rowGap: "space050" },
    React.createElement(GridLayoutItem, null,
        React.createElement(CardVerticalResponsive, null)),
    React.createElement(GridLayout, { columns: { xs: '1fr', md: '1fr 1fr', lg: '1fr' }, columnGap: "space040", rowGap: "space050", alignContent: "space-between" },
        React.createElement(CardHorizontalResponsive, null),
        React.createElement(CardHorizontalResponsive, null),
        React.createElement(CardHorizontalResponsive, null),
        React.createElement(CardHorizontalResponsive, null)))); };
TheSunStory.storyName = 'The Sun';
var SecondLevelArticlesGroup = function () {
    var areas = {
        xs: "\n      p1 d1 p2\n      d2 d1 d3\n      p3 d1 p4\n    ",
        md: "\n      p1 d1 p2 d2 p3 d3 p4\n    ",
        lg: "\n      p1\n      d1\n      p2\n      d2\n      p3\n      d3\n      p4\n    ",
        xl: "\n      p1 d1 p2\n      d2 d1 d3\n      p3 d1 p4\n    ",
    };
    return (React.createElement(GridLayout, { areas: areas, columns: {
            xs: '1fr auto 1fr',
            md: '1fr auto 1fr auto 1fr auto 1fr',
            lg: '1fr',
            xl: '1fr auto 1fr',
        }, columnGap: "space040", rowGap: "space040" },
        React.createElement(GridLayoutItem, { area: "p1" },
            React.createElement(TheTimesSecondLevelCard, null)),
        React.createElement(GridLayoutItem, { area: "d1" },
            React.createElement(Divider, { vertical: { xs: true, lg: false, xl: true } })),
        React.createElement(GridLayoutItem, { area: "p2" },
            React.createElement(TheTimesSecondLevelCard, null)),
        React.createElement(GridLayoutItem, { area: "d2" },
            React.createElement(Divider, { vertical: { xs: false, md: true, lg: false } })),
        React.createElement(GridLayoutItem, { area: "p3" },
            React.createElement(TheTimesSecondLevelCard, null)),
        React.createElement(GridLayoutItem, { area: "d3" },
            React.createElement(Divider, { vertical: { xs: false, md: true, lg: false } })),
        React.createElement(GridLayoutItem, { area: "p4" },
            React.createElement(TheTimesSecondLevelCard, null))));
};
var ThirdLevelArticlesGroup = function () { return (React.createElement(GridLayout, { columns: {
        xs: '1fr',
        md: '1fr auto 1fr',
    }, columnGap: "space040", rowGap: "space040" },
    React.createElement(TheTimesThirdLevelCard, null),
    React.createElement(Divider, { vertical: { xs: false, md: true } }),
    React.createElement(TheTimesThirdLevelCard, null))); };
export var TheTimesStory = function () {
    var button = function () { return (React.createElement(IconButton, { href: "/", size: "medium", title: "more articles" },
        React.createElement(IconFilledChevronRight, null))); };
    var mainAreas = {
        xs: "\n      lead\n      d1\n      second\n      d2\n      third\n    ",
        lg: "\n      lead  d1 second\n      d2    d1 second\n      third d1 second\n    ",
    };
    return (React.createElement(GridLayout, { overrides: { maxWidth: '1300px', marginInline: 'auto' }, rowGap: "space040" },
        React.createElement(TitleBar, { headingAs: "h2", actionItem: button, overrides: {
                paddingInline: 'space000',
                heading: {
                    typographyPreset: 'editorialHeadline040',
                },
            } }, "Title bar"),
        React.createElement(GridLayout, { areas: mainAreas, columnGap: "space040", rowGap: "space040", columns: {
                xs: '1fr',
                lg: '1fr auto 232px',
                xl: '1fr auto 402px',
            } },
            React.createElement(GridLayoutItem, { area: "lead" },
                React.createElement(TheTimesLeadCard, null)),
            React.createElement(GridLayoutItem, { area: "d1" },
                React.createElement(Divider, { vertical: { xs: false, lg: true } })),
            React.createElement(GridLayoutItem, { area: "second" },
                React.createElement(SecondLevelArticlesGroup, null)),
            React.createElement(GridLayoutItem, { area: "d2" },
                React.createElement(Divider, null)),
            React.createElement(GridLayoutItem, { area: "third" },
                React.createElement(ThirdLevelArticlesGroup, null)))));
};
TheTimesStory.storyName = 'The Times';
//# sourceMappingURL=slices.stories.js.map