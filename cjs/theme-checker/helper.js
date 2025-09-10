"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTABtn = exports.renderCardInset = exports.renderCard = exports.returnLastLetterInCamelCase = exports.useActiveState = exports.LabelFlag = void 0;
var tslib_1 = require("tslib");
/* istanbul ignore file */
var react_1 = tslib_1.__importStar(require("react"));
var flag_1 = require("../flag");
var theme_1 = require("../theme");
var card_1 = require("../card");
var block_1 = require("../block");
var headline_1 = require("../headline");
var text_block_1 = require("../text-block");
var tag_1 = require("../tag");
var icons_1 = require("../icons");
var button_1 = require("../button");
var themeCheckerTheme = (0, theme_1.createTheme)({
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
var LabelFlag = function (_a) {
    var overrides = _a.overrides, children = _a.children, _b = _a.prefix, prefix = _b === void 0 ? 'primary' : _b, props = tslib_1.__rest(_a, ["overrides", "children", "prefix"]);
    return (react_1.default.createElement(theme_1.ThemeProvider, { theme: themeCheckerTheme },
        react_1.default.createElement(flag_1.Flag, tslib_1.__assign({}, props, { overrides: tslib_1.__assign({ typographyPreset: 'utilityLabel010', stylePreset: "".concat(prefix, "Flag") }, overrides), size: "small" }), children)));
};
exports.LabelFlag = LabelFlag;
var useActiveState = function (initial) {
    if (initial === void 0) { initial = false; }
    var _a = (0, react_1.useState)(initial), isActive = _a[0], setIsActive = _a[1];
    /* istanbul ignore next */ var open = function () { return setIsActive(true); };
    /* istanbul ignore next */ var close = function () { return setIsActive(false); };
    /* istanbul ignore next */ var toggle = function () { return (isActive ? close() : open()); };
    return [isActive, open, close, toggle];
};
exports.useActiveState = useActiveState;
var returnLastLetterInCamelCase = function (str) {
    if (str) {
        var arr = str.replace(/([A-Z])/g, ' $1').split(' ');
        arr.shift();
        return arr[arr.length - 1];
    }
    /* istanbul ignore next */
    return '';
};
exports.returnLastLetterInCamelCase = returnLastLetterInCamelCase;
var cardTeaserHeadline = {
    xs: 'space040',
    sm: 'space040',
    md: 'space045',
    lg: 'space050',
};
var cardBody = function (_a) {
    var inset = _a.inset;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(block_1.Block, { spaceStack: "space040" },
            react_1.default.createElement(flag_1.Flag, { overrides: {
                    paddingBlock: 'space010',
                    paddingInline: 'space020',
                    typographyPreset: 'utilityLabel010',
                    minHeight: 'sizing000',
                } },
                react_1.default.createElement(icons_1.IconFilledAddCircle, null),
                "Flag",
                react_1.default.createElement(icons_1.IconFilledAddCircle, null))),
        react_1.default.createElement(block_1.Block, { spaceStack: cardTeaserHeadline },
            react_1.default.createElement(headline_1.Headline, { kickerText: "SHORT" }, "Arcu risus mauris sodales penatibus sit tincidunt.")),
        react_1.default.createElement(block_1.Block, { spaceStack: inset ? 'space000' : 'editorialParagraph010' },
            react_1.default.createElement(text_block_1.TextBlock, { typographyPreset: "editorialParagraph010" }, "Et libero, congue at condimentum. Id lobortis urna consectetur a, scelerisque lorem amet, magnis fringilla.s."))));
};
var renderCard = function (layout) { return (react_1.default.createElement(card_1.Card, { layout: layout, media: {
        src: '/placeholder-3x2.png',
        alt: 'Card Media',
        placeholderIcon: true,
    }, actions: function () { return (react_1.default.createElement(tag_1.Tag, { size: "small", href: "/" }, "News")); } }, cardBody({ inset: false }))); };
exports.renderCard = renderCard;
var renderCardInset = function (layout) { return (react_1.default.createElement(card_1.CardInset, { layout: layout, media: {
        src: '/placeholder-3x2.png',
        alt: 'Card Media',
        placeholderIcon: true,
    }, actions: function () { return (react_1.default.createElement(tag_1.Tag, { size: "small", href: "/" }, "News")); } }, cardBody({ inset: true }))); };
exports.renderCardInset = renderCardInset;
var CTABtn = function (_a) {
    var children = _a.children, overrides = _a.overrides, restProps = tslib_1.__rest(_a, ["children", "overrides"]);
    return (react_1.default.createElement(button_1.Button, tslib_1.__assign({ overrides: tslib_1.__assign({ stylePreset: 'buttonSolidInverse', width: '100%' }, overrides) }, restProps), /* istanbul ignore next */ children || 'CTA Button'));
};
exports.CTABtn = CTABtn;
//# sourceMappingURL=helper.js.map