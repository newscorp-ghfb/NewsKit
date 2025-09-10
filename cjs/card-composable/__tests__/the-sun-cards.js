"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylePresets = exports.CardHorizontalResponsive = exports.CardHorizontalTheSun = exports.CardVerticalResponsive = exports.CardVerticalTheSun = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icons_1 = require("../../icons");
var grid_layout_1 = require("../../grid-layout");
var Videocam_1 = require("@emotion-icons/material/Videocam");
var Share_1 = require("@emotion-icons/material/Share");
var card_composable_1 = require("../card-composable");
var flag_1 = require("../../flag");
var headline_1 = require("../../headline");
var text_block_1 = require("../../text-block");
var tag_1 = require("../../tag");
var default_focus_visible_1 = require("../../utils/default-focus-visible");
var IconFilledVideoCam = (0, icons_1.toNewsKitIcon)(Videocam_1.Videocam);
var IconFilledShare = (0, icons_1.toNewsKitIcon)(Share_1.Share);
var href = '/';
var map = {
    small: '375px',
    medium: '640px',
    large: '920px',
};
// The Sun --- ends here
var typographyPresetMap = {
    small: 'editorialDisplay003',
    medium: 'editorialDisplay004',
    large: 'editorialDisplay005',
};
var CardVerticalTheSun = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b;
    return (react_1.default.createElement(card_composable_1.CardComposable, { overrides: { width: map[size], stylePreset: 'cardComposableVertical' }, style: {
            overflow: 'hidden',
        } },
        react_1.default.createElement(card_composable_1.CardMedia, { media: {
                src: size === 'small'
                    ? 'https://storybook.newskit.co.uk/placeholder-1x1.png'
                    : 'https://storybook.newskit.co.uk/placeholder-3x2.png',
                alt: 'card-media-image',
                loadingAspectRatio: size === 'small' ? '1:1' : '3:2',
            } }),
        react_1.default.createElement(grid_layout_1.GridLayoutItem, { area: "media", alignSelf: "end", justifySelf: "start", style: { zIndex: 2 }, marginInlineStart: "space040" },
            react_1.default.createElement(flag_1.Flag, { overrides: { typographyPreset: 'editorialLabel020' } }, "EXCLUSIVE")),
        react_1.default.createElement(card_composable_1.CardContent, { "data-testid": "card-content", rowGap: "space045", overrides: {
                paddingInline: 'space040',
                paddingBlock: 'space040',
            } },
            react_1.default.createElement(card_composable_1.CardLink, { expand: true, href: href, overrides: { stylePreset: 'linkTheSun' } },
                react_1.default.createElement(headline_1.Headline, { headingAs: "h3", overrides: {
                        typographyPreset: typographyPresetMap[size],
                    } }, "LOREM IPSUM Dolor sit amet, consectetur adipiscing elit, proin molestie sem at consectetur euismod maecenas ut")),
            react_1.default.createElement(text_block_1.TextBlock, { as: "p", typographyPreset: "editorialParagraph020", stylePreset: "inkBase" }, "When asked about his trips as a royal around the Commonwealth, Harry told the Armchair Expert podcast: \"It\u2019s the job right? Grin and bear it, get on with it.\"")),
        react_1.default.createElement(card_composable_1.CardActions, { "data-testid": "card-actions", columns: "auto auto", alignItems: "center", justifyContent: "space-between", overrides: {
                paddingBlock: 'space050',
                paddingInline: 'space040',
            } },
            react_1.default.createElement(tag_1.Tag, { href: href, overrides: {
                    stylePreset: 'cameraTag',
                    typographyPreset: 'utilityButton020',
                    paddingInline: 'space000',
                    spaceInline: 'space020',
                } },
                "Category",
                react_1.default.createElement(IconFilledVideoCam, null)),
            react_1.default.createElement(tag_1.Tag, { href: href, overrides: {
                    stylePreset: 'shareTag',
                    typographyPreset: 'utilityButton010',
                    paddingInline: 'space000',
                    spaceInline: 'space020',
                } },
                react_1.default.createElement(IconFilledShare, null),
                "Share"))));
};
exports.CardVerticalTheSun = CardVerticalTheSun;
var CardVerticalResponsive = function () { return (react_1.default.createElement(card_composable_1.CardComposable, { overrides: { stylePreset: 'cardComposableVertical', minHeight: '100%' }, rows: "auto 1fr auto" },
    react_1.default.createElement(card_composable_1.CardMedia, { media: {
            src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
            alt: 'card-media-image',
            loadingAspectRatio: '3:2',
        } }),
    react_1.default.createElement(grid_layout_1.GridLayoutItem, { area: "media", alignSelf: "end", justifySelf: "start", style: { zIndex: 2 }, marginInlineStart: "space040" },
        react_1.default.createElement(flag_1.Flag, { overrides: { typographyPreset: 'editorialLabel020' } }, "EXCLUSIVE")),
    react_1.default.createElement(card_composable_1.CardContent, { "data-testid": "card-content", rowGap: { xs: 'space045', md: 'space040' }, overrides: {
            paddingInline: 'space040',
            paddingBlock: 'space040',
        } },
        react_1.default.createElement(card_composable_1.CardLink, { expand: true, href: href, overrides: { stylePreset: 'linkTheSun' } },
            react_1.default.createElement(headline_1.Headline, { headingAs: "h3", overrides: {
                    kicker: {
                        stylePreset: 'inkBrand020',
                    },
                    typographyPreset: {
                        xs: 'editorialHeadline030',
                        md: 'editorialHeadline040',
                    },
                }, kickerText: "KICKER" }, "Short title of the card describing the main content")),
        react_1.default.createElement(text_block_1.TextBlock, { as: "p", typographyPreset: {
                xs: 'editorialParagraph010',
                md: 'editorialParagraph020',
            }, stylePreset: "inkBase" }, "Short paragraph description of the article, outlining main story and focus.")),
    react_1.default.createElement(card_composable_1.CardActions, { "data-testid": "card-actions", columns: "auto auto", alignItems: "center", justifyContent: "space-between", overrides: {
            paddingBlock: 'space010',
            paddingInline: 'space040',
        } },
        react_1.default.createElement(tag_1.Tag, { href: href, overrides: {
                stylePreset: 'cameraTag',
                typographyPreset: 'utilityButton020',
                paddingInline: 'space000',
                spaceInline: 'space020',
            } },
            "Category",
            react_1.default.createElement(IconFilledVideoCam, null)),
        react_1.default.createElement(tag_1.Tag, { href: href, overrides: {
                stylePreset: 'shareTag',
                typographyPreset: 'utilityButton010',
                paddingInline: 'space000',
                spaceInline: 'space020',
            } },
            react_1.default.createElement(IconFilledShare, null),
            "Share")))); };
exports.CardVerticalResponsive = CardVerticalResponsive;
var CardHorizontalTheSun = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.area, area = _c === void 0 ? "\n  media content\n  actions actions\n" : _c;
    return (react_1.default.createElement(card_composable_1.CardComposable, { overrides: { width: map[size], stylePreset: 'cardComposableHorizontal' }, style: {
            overflow: 'hidden',
        }, columns: size === 'medium' ? '1.5fr 1fr' : '1fr 1fr', columnGap: "space040", rowGap: "space045", areas: area },
        react_1.default.createElement(card_composable_1.CardMedia, { media: {
                src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
                alt: 'card-media-image',
                loadingAspectRatio: '3:2',
            } }),
        react_1.default.createElement(grid_layout_1.GridLayoutItem, { area: "media", alignSelf: "end", justifySelf: "start", style: { zIndex: 2 } },
            react_1.default.createElement(flag_1.Flag, { size: "small", overrides: {
                    typographyPreset: 'editorialLabel010',
                } }, "EXCLUSIVE")),
        react_1.default.createElement(card_composable_1.CardContent, { rowGap: "space030", "data-testid": "card-content", rows: "min-content" },
            react_1.default.createElement(card_composable_1.CardLink, { expand: true, href: href, overrides: { stylePreset: 'linkTheSun' } },
                react_1.default.createElement(headline_1.Headline, { headingAs: "h3", overrides: {
                        typographyPreset: typographyPresetMap[size],
                    } }, "Short title of the card describing the main content")),
            !(size === 'small') && (react_1.default.createElement(text_block_1.TextBlock, { as: "p", typographyPreset: "editorialParagraph010", stylePreset: "inkBase" }, "When asked about his trips as a royal around the Commonwealth, Harry told the Armchair Expert podcast: \"It\u2019s the job right? Grin and bear it, get on with it.\""))),
        react_1.default.createElement(card_composable_1.CardActions, { "data-testid": "card-actions", columns: "auto auto", alignItems: "center", justifyContent: "space-between" },
            react_1.default.createElement(tag_1.Tag, { href: href, overrides: {
                    stylePreset: 'cameraTag',
                    typographyPreset: 'utilityButton020',
                    paddingInline: 'space000',
                    spaceInline: 'space020',
                } },
                "Category",
                react_1.default.createElement(IconFilledVideoCam, null)),
            react_1.default.createElement(tag_1.Tag, { href: href, overrides: {
                    stylePreset: 'shareTag',
                    typographyPreset: 'utilityButton010',
                    paddingInline: 'space000',
                    spaceInline: 'space020',
                } },
                react_1.default.createElement(IconFilledShare, null),
                "Share"))));
};
exports.CardHorizontalTheSun = CardHorizontalTheSun;
var CardHorizontalResponsive = function () { return (react_1.default.createElement(card_composable_1.CardComposable, { overrides: { stylePreset: 'cardComposableHorizontal' }, columnGap: "space040", rowGap: { xs: 'space045', md: 'space000' }, alignItems: "space-around", areas: "\n      media content\n      actions actions\n    " },
    react_1.default.createElement(card_composable_1.CardMedia, { media: {
            src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
            alt: 'card-media-image',
            loadingAspectRatio: '3:2',
            overrides: {
                width: {
                    xs: '133px',
                    md: '147px',
                },
            },
        } }),
    react_1.default.createElement(grid_layout_1.GridLayoutItem, { area: "media", alignSelf: "end", justifySelf: "start", style: { zIndex: 2 } },
        react_1.default.createElement(flag_1.Flag, { size: "small", overrides: {
                typographyPreset: 'editorialLabel010',
            } }, "EXCLUSIVE")),
    react_1.default.createElement(card_composable_1.CardContent, { rowGap: "space030", "data-testid": "card-content", rows: "min-content" },
        react_1.default.createElement(card_composable_1.CardLink, { expand: true, href: href, overrides: { stylePreset: 'linkTheSun' } },
            react_1.default.createElement(headline_1.Headline, { headingAs: "h3", overrides: {
                    typographyPreset: {
                        xs: 'editorialHeadline020',
                        lg: 'editorialHeadline010',
                    },
                } }, "Short title of the card describing the main content"))),
    react_1.default.createElement(card_composable_1.CardActions, { "data-testid": "card-actions", columns: "auto auto", alignItems: "center", justifyContent: "space-between" },
        react_1.default.createElement(tag_1.Tag, { href: href, overrides: {
                stylePreset: 'cameraTag',
                typographyPreset: 'utilityButton020',
                paddingInline: 'space000',
                spaceInline: 'space020',
            } },
            "Category",
            react_1.default.createElement(IconFilledVideoCam, null)),
        react_1.default.createElement(tag_1.Tag, { href: href, overrides: {
                stylePreset: 'shareTag',
                typographyPreset: 'utilityButton010',
                paddingInline: 'space000',
                spaceInline: 'space020',
            } },
            react_1.default.createElement(IconFilledShare, null),
            "Share")))); };
exports.CardHorizontalResponsive = CardHorizontalResponsive;
exports.stylePresets = {
    linkTheSun: {
        hover: {
            textDecoration: 'none',
        },
        'focus-visible': default_focus_visible_1.defaultFocusVisible,
    },
    cameraTag: {
        base: {
            borderStyle: 'none',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
        },
        'focus-visible': default_focus_visible_1.defaultFocusVisible,
    },
    shareTag: {
        base: {
            borderStyle: 'none',
            color: '{{colors.inkBase}}',
            iconColor: '{{colors.inkBase}}',
        },
        'focus-visible': default_focus_visible_1.defaultFocusVisible,
    },
    cardComposableVertical: {
        base: {
            borderStyle: 'solid',
            borderColor: '{{colors.interface030}}',
            borderWidth: "{{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth010}} {{borders.borderWidth010}}",
        },
    },
    cardComposableHorizontal: {
        base: {
            borderStyle: 'solid',
            borderColor: '{{colors.interface030}}',
            borderWidth: "{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}}",
        },
    },
};
//# sourceMappingURL=the-sun-cards.js.map