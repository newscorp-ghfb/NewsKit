import { __assign, __rest } from "tslib";
/* istanbul ignore file */
import React, { useState } from 'react';
import { Flag } from '../flag';
import { createTheme, ThemeProvider } from '../theme';
import { Card, CardInset } from '../card';
import { Block } from '../block';
import { Headline } from '../headline';
import { TextBlock } from '../text-block';
import { Tag } from '../tag';
import { IconFilledAddCircle } from '../icons';
import { Button } from '../button';
var themeCheckerTheme = createTheme({
    name: 'themeCheckerTheme',
    overrides: {
        stylePresets: {
            primaryFlag: {
                base: {
                    backgroundColor: '{{colors.interface040}}',
                    color: '{{colors.inkSubtle}}',
                    borderRadius: '{{borders.borderRadiusPill}}',
                },
            },
            secondaryFlag: {
                base: {
                    backgroundColor: '{{colors.interface010}}',
                    color: '{{colors.inkSubtle}}',
                    borderRadius: '{{borders.borderRadiusPill}}',
                },
            },
        },
    },
});
export var LabelFlag = function (_a) {
    var overrides = _a.overrides, children = _a.children, _b = _a.prefix, prefix = _b === void 0 ? 'primary' : _b, props = __rest(_a, ["overrides", "children", "prefix"]);
    return (React.createElement(ThemeProvider, { theme: themeCheckerTheme },
        React.createElement(Flag, __assign({}, props, { overrides: __assign({ typographyPreset: 'utilityLabel010', stylePreset: "".concat(prefix, "Flag") }, overrides), size: "small" }), children)));
};
export var useActiveState = function (initial) {
    if (initial === void 0) { initial = false; }
    var _a = useState(initial), isActive = _a[0], setIsActive = _a[1];
    /* istanbul ignore next */ var open = function () { return setIsActive(true); };
    /* istanbul ignore next */ var close = function () { return setIsActive(false); };
    /* istanbul ignore next */ var toggle = function () { return (isActive ? close() : open()); };
    return [isActive, open, close, toggle];
};
export var returnLastLetterInCamelCase = function (str) {
    if (str) {
        var arr = str.replace(/([A-Z])/g, ' $1').split(' ');
        arr.shift();
        return arr[arr.length - 1];
    }
    /* istanbul ignore next */
    return '';
};
var cardTeaserHeadline = {
    xs: 'space040',
    sm: 'space040',
    md: 'space045',
    lg: 'space050',
};
var cardBody = function (_a) {
    var inset = _a.inset;
    return (React.createElement(React.Fragment, null,
        React.createElement(Block, { spaceStack: "space040" },
            React.createElement(Flag, { overrides: {
                    paddingBlock: 'space010',
                    paddingInline: 'space020',
                    typographyPreset: 'utilityLabel010',
                    minHeight: 'sizing000',
                } },
                React.createElement(IconFilledAddCircle, null),
                "Flag",
                React.createElement(IconFilledAddCircle, null))),
        React.createElement(Block, { spaceStack: cardTeaserHeadline },
            React.createElement(Headline, { kickerText: "SHORT" }, "Arcu risus mauris sodales penatibus sit tincidunt.")),
        React.createElement(Block, { spaceStack: inset ? 'space000' : 'editorialParagraph010' },
            React.createElement(TextBlock, { typographyPreset: "editorialParagraph010" }, "Et libero, congue at condimentum. Id lobortis urna consectetur a, scelerisque lorem amet, magnis fringilla.s."))));
};
export var renderCard = function (layout) { return (React.createElement(Card, { layout: layout, media: {
        src: '/placeholder-3x2.png',
        alt: 'Card Media',
        placeholderIcon: true,
    }, actions: function () { return (React.createElement(Tag, { size: "small", href: "/" }, "News")); } }, cardBody({ inset: false }))); };
export var renderCardInset = function (layout) { return (React.createElement(CardInset, { layout: layout, media: {
        src: '/placeholder-3x2.png',
        alt: 'Card Media',
        placeholderIcon: true,
    }, actions: function () { return (React.createElement(Tag, { size: "small", href: "/" }, "News")); } }, cardBody({ inset: true }))); };
export var CTABtn = function (_a) {
    var children = _a.children, overrides = _a.overrides, restProps = __rest(_a, ["children", "overrides"]);
    return (React.createElement(Button, __assign({ overrides: __assign({ stylePreset: 'buttonSolidInverse', width: '100%' }, overrides) }, restProps), /* istanbul ignore next */ children || 'CTA Button'));
};
//# sourceMappingURL=helper.js.map