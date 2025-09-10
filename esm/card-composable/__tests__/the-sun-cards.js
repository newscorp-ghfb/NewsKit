import React from 'react';
import { toNewsKitIcon } from '../../icons';
import { GridLayoutItem } from '../../grid-layout';
import { Videocam as FilledVideocam } from '@emotion-icons/material/Videocam';
import { Share as FilledShare } from '@emotion-icons/material/Share';
import { CardActions, CardComposable, CardContent, CardLink, CardMedia, } from '../card-composable';
import { Flag } from '../../flag';
import { Headline } from '../../headline';
import { TextBlock } from '../../text-block';
import { Tag } from '../../tag';
import { defaultFocusVisible } from '../../utils/default-focus-visible';
var IconFilledVideoCam = toNewsKitIcon(FilledVideocam);
var IconFilledShare = toNewsKitIcon(FilledShare);
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
export var CardVerticalTheSun = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b;
    return (React.createElement(CardComposable, { overrides: { width: map[size], stylePreset: 'cardComposableVertical' }, style: {
            overflow: 'hidden',
        } },
        React.createElement(CardMedia, { media: {
                src: size === 'small'
                    ? 'https://storybook.newskit.co.uk/placeholder-1x1.png'
                    : 'https://storybook.newskit.co.uk/placeholder-3x2.png',
                alt: 'card-media-image',
                loadingAspectRatio: size === 'small' ? '1:1' : '3:2',
            } }),
        React.createElement(GridLayoutItem, { area: "media", alignSelf: "end", justifySelf: "start", style: { zIndex: 2 }, marginInlineStart: "space040" },
            React.createElement(Flag, { overrides: { typographyPreset: 'editorialLabel020' } }, "EXCLUSIVE")),
        React.createElement(CardContent, { "data-testid": "card-content", rowGap: "space045", overrides: {
                paddingInline: 'space040',
                paddingBlock: 'space040',
            } },
            React.createElement(CardLink, { expand: true, href: href, overrides: { stylePreset: 'linkTheSun' } },
                React.createElement(Headline, { headingAs: "h3", overrides: {
                        typographyPreset: typographyPresetMap[size],
                    } }, "LOREM IPSUM Dolor sit amet, consectetur adipiscing elit, proin molestie sem at consectetur euismod maecenas ut")),
            React.createElement(TextBlock, { as: "p", typographyPreset: "editorialParagraph020", stylePreset: "inkBase" }, "When asked about his trips as a royal around the Commonwealth, Harry told the Armchair Expert podcast: \"It\u2019s the job right? Grin and bear it, get on with it.\"")),
        React.createElement(CardActions, { "data-testid": "card-actions", columns: "auto auto", alignItems: "center", justifyContent: "space-between", overrides: {
                paddingBlock: 'space050',
                paddingInline: 'space040',
            } },
            React.createElement(Tag, { href: href, overrides: {
                    stylePreset: 'cameraTag',
                    typographyPreset: 'utilityButton020',
                    paddingInline: 'space000',
                    spaceInline: 'space020',
                } },
                "Category",
                React.createElement(IconFilledVideoCam, null)),
            React.createElement(Tag, { href: href, overrides: {
                    stylePreset: 'shareTag',
                    typographyPreset: 'utilityButton010',
                    paddingInline: 'space000',
                    spaceInline: 'space020',
                } },
                React.createElement(IconFilledShare, null),
                "Share"))));
};
export var CardVerticalResponsive = function () { return (React.createElement(CardComposable, { overrides: { stylePreset: 'cardComposableVertical', minHeight: '100%' }, rows: "auto 1fr auto" },
    React.createElement(CardMedia, { media: {
            src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
            alt: 'card-media-image',
            loadingAspectRatio: '3:2',
        } }),
    React.createElement(GridLayoutItem, { area: "media", alignSelf: "end", justifySelf: "start", style: { zIndex: 2 }, marginInlineStart: "space040" },
        React.createElement(Flag, { overrides: { typographyPreset: 'editorialLabel020' } }, "EXCLUSIVE")),
    React.createElement(CardContent, { "data-testid": "card-content", rowGap: { xs: 'space045', md: 'space040' }, overrides: {
            paddingInline: 'space040',
            paddingBlock: 'space040',
        } },
        React.createElement(CardLink, { expand: true, href: href, overrides: { stylePreset: 'linkTheSun' } },
            React.createElement(Headline, { headingAs: "h3", overrides: {
                    kicker: {
                        stylePreset: 'inkBrand020',
                    },
                    typographyPreset: {
                        xs: 'editorialHeadline030',
                        md: 'editorialHeadline040',
                    },
                }, kickerText: "KICKER" }, "Short title of the card describing the main content")),
        React.createElement(TextBlock, { as: "p", typographyPreset: {
                xs: 'editorialParagraph010',
                md: 'editorialParagraph020',
            }, stylePreset: "inkBase" }, "Short paragraph description of the article, outlining main story and focus.")),
    React.createElement(CardActions, { "data-testid": "card-actions", columns: "auto auto", alignItems: "center", justifyContent: "space-between", overrides: {
            paddingBlock: 'space010',
            paddingInline: 'space040',
        } },
        React.createElement(Tag, { href: href, overrides: {
                stylePreset: 'cameraTag',
                typographyPreset: 'utilityButton020',
                paddingInline: 'space000',
                spaceInline: 'space020',
            } },
            "Category",
            React.createElement(IconFilledVideoCam, null)),
        React.createElement(Tag, { href: href, overrides: {
                stylePreset: 'shareTag',
                typographyPreset: 'utilityButton010',
                paddingInline: 'space000',
                spaceInline: 'space020',
            } },
            React.createElement(IconFilledShare, null),
            "Share")))); };
export var CardHorizontalTheSun = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.area, area = _c === void 0 ? "\n  media content\n  actions actions\n" : _c;
    return (React.createElement(CardComposable, { overrides: { width: map[size], stylePreset: 'cardComposableHorizontal' }, style: {
            overflow: 'hidden',
        }, columns: size === 'medium' ? '1.5fr 1fr' : '1fr 1fr', columnGap: "space040", rowGap: "space045", areas: area },
        React.createElement(CardMedia, { media: {
                src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
                alt: 'card-media-image',
                loadingAspectRatio: '3:2',
            } }),
        React.createElement(GridLayoutItem, { area: "media", alignSelf: "end", justifySelf: "start", style: { zIndex: 2 } },
            React.createElement(Flag, { size: "small", overrides: {
                    typographyPreset: 'editorialLabel010',
                } }, "EXCLUSIVE")),
        React.createElement(CardContent, { rowGap: "space030", "data-testid": "card-content", rows: "min-content" },
            React.createElement(CardLink, { expand: true, href: href, overrides: { stylePreset: 'linkTheSun' } },
                React.createElement(Headline, { headingAs: "h3", overrides: {
                        typographyPreset: typographyPresetMap[size],
                    } }, "Short title of the card describing the main content")),
            !(size === 'small') && (React.createElement(TextBlock, { as: "p", typographyPreset: "editorialParagraph010", stylePreset: "inkBase" }, "When asked about his trips as a royal around the Commonwealth, Harry told the Armchair Expert podcast: \"It\u2019s the job right? Grin and bear it, get on with it.\""))),
        React.createElement(CardActions, { "data-testid": "card-actions", columns: "auto auto", alignItems: "center", justifyContent: "space-between" },
            React.createElement(Tag, { href: href, overrides: {
                    stylePreset: 'cameraTag',
                    typographyPreset: 'utilityButton020',
                    paddingInline: 'space000',
                    spaceInline: 'space020',
                } },
                "Category",
                React.createElement(IconFilledVideoCam, null)),
            React.createElement(Tag, { href: href, overrides: {
                    stylePreset: 'shareTag',
                    typographyPreset: 'utilityButton010',
                    paddingInline: 'space000',
                    spaceInline: 'space020',
                } },
                React.createElement(IconFilledShare, null),
                "Share"))));
};
export var CardHorizontalResponsive = function () { return (React.createElement(CardComposable, { overrides: { stylePreset: 'cardComposableHorizontal' }, columnGap: "space040", rowGap: { xs: 'space045', md: 'space000' }, alignItems: "space-around", areas: "\n      media content\n      actions actions\n    " },
    React.createElement(CardMedia, { media: {
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
    React.createElement(GridLayoutItem, { area: "media", alignSelf: "end", justifySelf: "start", style: { zIndex: 2 } },
        React.createElement(Flag, { size: "small", overrides: {
                typographyPreset: 'editorialLabel010',
            } }, "EXCLUSIVE")),
    React.createElement(CardContent, { rowGap: "space030", "data-testid": "card-content", rows: "min-content" },
        React.createElement(CardLink, { expand: true, href: href, overrides: { stylePreset: 'linkTheSun' } },
            React.createElement(Headline, { headingAs: "h3", overrides: {
                    typographyPreset: {
                        xs: 'editorialHeadline020',
                        lg: 'editorialHeadline010',
                    },
                } }, "Short title of the card describing the main content"))),
    React.createElement(CardActions, { "data-testid": "card-actions", columns: "auto auto", alignItems: "center", justifyContent: "space-between" },
        React.createElement(Tag, { href: href, overrides: {
                stylePreset: 'cameraTag',
                typographyPreset: 'utilityButton020',
                paddingInline: 'space000',
                spaceInline: 'space020',
            } },
            "Category",
            React.createElement(IconFilledVideoCam, null)),
        React.createElement(Tag, { href: href, overrides: {
                stylePreset: 'shareTag',
                typographyPreset: 'utilityButton010',
                paddingInline: 'space000',
                spaceInline: 'space020',
            } },
            React.createElement(IconFilledShare, null),
            "Share")))); };
export var stylePresets = {
    linkTheSun: {
        hover: {
            textDecoration: 'none',
        },
        'focus-visible': defaultFocusVisible,
    },
    cameraTag: {
        base: {
            borderStyle: 'none',
            color: '{{colors.inkBrand010}}',
            iconColor: '{{colors.inkBrand010}}',
        },
        'focus-visible': defaultFocusVisible,
    },
    shareTag: {
        base: {
            borderStyle: 'none',
            color: '{{colors.inkBase}}',
            iconColor: '{{colors.inkBase}}',
        },
        'focus-visible': defaultFocusVisible,
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