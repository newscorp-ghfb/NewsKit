import { __makeTemplateObject } from "tslib";
import React from 'react';
import { H1, H2, P } from '../typography';
import { Divider } from '../divider';
import { LinkStandalone } from '../link';
import { Block } from '../block';
import { Image } from '../image';
import { getColorCssFromTheme, styled } from '../utils';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { GridLayout, GridLayoutItem } from '../grid-layout';
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
var WelcomeTitle = styled(H1)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 200px;\n"], ["\n  max-width: 200px;\n"])));
var WelcomeDescription = styled(P)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 300px;\n"], ["\n  max-width: 300px;\n"])));
var WelcomeContainer = styled(Block)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  /* Welcome screen is not themeable so its only appearance is in newskit light theme. */\n  /* Doing this to stretch the internals of the Welcome screen from side to side to avoid cases where the dark theme is selected and there are dark borders around it. */\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  ", ";\n"], ["\n  /* Welcome screen is not themeable so its only appearance is in newskit light theme. */\n  /* Doing this to stretch the internals of the Welcome screen from side to side to avoid cases where the dark theme is selected and there are dark borders around it. */\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  ", ";\n"])), getColorCssFromTheme('backgroundColor', 'inkLight010'));
export var ThemelessWelcome = function () { return (React.createElement(WelcomeContainer, { paddingInline: "space050", paddingBlock: "space050", marginInline: "-16px", marginBlock: "-16px" },
    React.createElement(Block, { stylePreset: "welcomeBanner", marginBlockEnd: "space100", paddingInline: "space080", paddingBlock: "space080" },
        React.createElement(WelcomeTitle, { overrides: {
                typographyPreset: 'utilityHeading050',
                marginBlockEnd: 'space030',
            } }, "Welcome to NewsKit"),
        React.createElement(WelcomeDescription, { overrides: { typographyPreset: 'utilityBody030' } }, "An open source design system built by News UK, for everyone")),
    React.createElement(H2, { overrides: {
            typographyPreset: 'utilitySubheading050',
            marginBlockEnd: 'space030',
        } }, "Explore"),
    React.createElement(Divider, { overrides: { marginBlockEnd: 'space060' } }),
    React.createElement(GridLayout, { rowGap: "space040" }, links.map(function (_a) {
        var label = _a.label, url = _a.url;
        return (React.createElement(GridLayoutItem, { key: url },
            React.createElement(LinkStandalone, { target: "_blank", overrides: { typographyPreset: 'utilityBody030' }, href: url }, label)));
    })),
    React.createElement(LinkStandalone, { external: false, href: "https://badge.fury.io/js/newskit", overrides: { marginBlockStart: 'space070' } },
        React.createElement(Image, { src: "https://badge.fury.io/js/newskit.svg", alt: "npm version badge" })))); };
export var Welcome = withOwnTheme(ThemelessWelcome)({
    defaults: {},
    stylePresets: stylePresets,
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=welcome.js.map