"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdLevelCard = exports.SecondLevelCard = exports.LeadCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var card_composable_1 = require("../card-composable");
var headline_1 = require("../../headline");
var text_block_1 = require("../../text-block");
var divider_1 = require("../../divider");
var grid_1 = require("../../grid");
var image_1 = require("../../image");
var title = "Short title of the card describing the main content";
var paragraph = "Short paragraph description of the article, outlining main story and focus.";
var LeadCard = function () { return (react_1.default.createElement(card_composable_1.CardComposable, { rowGap: "space040", columnGap: "space040", columns: { md: '3fr 5fr' }, areas: {
        xs: "\n        media\n        content\n            ",
        md: "content media",
    } },
    react_1.default.createElement(card_composable_1.CardContent, { rowGap: "space040", alignContent: "start", justifyItems: "stretch", overrides: { paddingBlockEnd: 'space020' } },
        react_1.default.createElement(grid_1.Visible, { md: true, lg: true, xl: true },
            react_1.default.createElement(divider_1.Divider, { overrides: { marginBlockEnd: 'space020' } })),
        react_1.default.createElement(card_composable_1.CardLink, { expand: true, href: "/" },
            react_1.default.createElement(headline_1.Headline, { headingAs: "h3", overrides: {
                    heading: {
                        stylePreset: 'cardHeadline',
                    },
                    typographyPreset: 'editorialHeadline040',
                } }, title)),
        react_1.default.createElement(text_block_1.TextBlock, { as: "p", typographyPreset: "editorialParagraph020", stylePreset: "inkBase" }, paragraph),
        react_1.default.createElement(grid_1.Visible, { md: true, lg: true, xl: true },
            react_1.default.createElement(text_block_1.TextBlock, { as: "p", typographyPreset: "utilityLabel010", stylePreset: "inkSubtle", paddingBlockStart: "space020" }, "5 min read"))),
    react_1.default.createElement(card_composable_1.CardMedia, { media: {
            src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
            alt: '',
            loadingAspectRatio: '3:2',
        } }))); };
exports.LeadCard = LeadCard;
var SecondLevelCard = function () { return (react_1.default.createElement(card_composable_1.CardComposable, { rowGap: { xs: 'space040', lg: 'space000', xl: 'space040' }, areas: "\n      media\n      content\n    ", overrides: {
        paddingBlockEnd: { xs: 'space020', lg: 'space000', xl: 'space020' },
    } },
    react_1.default.createElement(card_composable_1.CardContent, { alignContent: "start", rowGap: "space040" },
        react_1.default.createElement(card_composable_1.CardLink, { expand: true, href: "/" },
            react_1.default.createElement(headline_1.Headline, { headingAs: "h3", overrides: {
                    heading: {
                        stylePreset: 'cardHeadline',
                    },
                    typographyPreset: {
                        xs: 'editorialHeadline010',
                        md: 'editorialHeadline020',
                    },
                } }, title))),
    react_1.default.createElement(card_composable_1.CardMedia, null,
        react_1.default.createElement(grid_1.Hidden, { lg: true },
            react_1.default.createElement(image_1.Image, { src: "https://storybook.newskit.co.uk/placeholder-3x2.png", alt: "card-media-image", loadingAspectRatio: "3:2" }))))); };
exports.SecondLevelCard = SecondLevelCard;
var ThirdLevelCard = function () { return (react_1.default.createElement(card_composable_1.CardComposable, { columnGap: "space040", columns: "80px 1fr", areas: "media content" },
    react_1.default.createElement(card_composable_1.CardContent, { rowGap: "space040", alignContent: "start", justifyItems: "stretch" },
        react_1.default.createElement(card_composable_1.CardLink, { expand: true, href: "/" },
            react_1.default.createElement(headline_1.Headline, { headingAs: "h3", overrides: {
                    heading: {
                        stylePreset: 'cardHeadline',
                    },
                    typographyPreset: {
                        xs: 'editorialHeadline010',
                        sm: 'editorialHeadline020',
                    },
                } }, "Headline")),
        react_1.default.createElement(text_block_1.TextBlock, { as: "p", typographyPreset: {
                xs: 'editorialSubheadline010',
                sm: 'editorialSubheadline020',
            }, stylePreset: "inkBase" }, paragraph)),
    react_1.default.createElement(card_composable_1.CardMedia, { media: {
            src: 'https://storybook.newskit.co.uk/placeholder-1x1.png',
            alt: 'card-media-image',
            loadingAspectRatio: '1:1',
            overrides: {
                stylePreset: 'imageCircle',
            },
        } }))); };
exports.ThirdLevelCard = ThirdLevelCard;
//# sourceMappingURL=the-times-cards.js.map