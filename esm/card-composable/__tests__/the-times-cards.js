import React from 'react';
import { CardComposable, CardContent, CardLink, CardMedia, } from '../card-composable';
import { Headline } from '../../headline';
import { TextBlock } from '../../text-block';
import { Divider } from '../../divider';
import { Visible, Hidden } from '../../grid';
import { Image } from '../../image';
var title = "Short title of the card describing the main content";
var paragraph = "Short paragraph description of the article, outlining main story and focus.";
export var LeadCard = function () { return (React.createElement(CardComposable, { rowGap: "space040", columnGap: "space040", columns: { md: '3fr 5fr' }, areas: {
        xs: "\n        media\n        content\n            ",
        md: "content media",
    } },
    React.createElement(CardContent, { rowGap: "space040", alignContent: "start", justifyItems: "stretch", overrides: { paddingBlockEnd: 'space020' } },
        React.createElement(Visible, { md: true, lg: true, xl: true },
            React.createElement(Divider, { overrides: { marginBlockEnd: 'space020' } })),
        React.createElement(CardLink, { expand: true, href: "/" },
            React.createElement(Headline, { headingAs: "h3", overrides: {
                    heading: {
                        stylePreset: 'cardHeadline',
                    },
                    typographyPreset: 'editorialHeadline040',
                } }, title)),
        React.createElement(TextBlock, { as: "p", typographyPreset: "editorialParagraph020", stylePreset: "inkBase" }, paragraph),
        React.createElement(Visible, { md: true, lg: true, xl: true },
            React.createElement(TextBlock, { as: "p", typographyPreset: "utilityLabel010", stylePreset: "inkSubtle", paddingBlockStart: "space020" }, "5 min read"))),
    React.createElement(CardMedia, { media: {
            src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
            alt: '',
            loadingAspectRatio: '3:2',
        } }))); };
export var SecondLevelCard = function () { return (React.createElement(CardComposable, { rowGap: { xs: 'space040', lg: 'space000', xl: 'space040' }, areas: "\n      media\n      content\n    ", overrides: {
        paddingBlockEnd: { xs: 'space020', lg: 'space000', xl: 'space020' },
    } },
    React.createElement(CardContent, { alignContent: "start", rowGap: "space040" },
        React.createElement(CardLink, { expand: true, href: "/" },
            React.createElement(Headline, { headingAs: "h3", overrides: {
                    heading: {
                        stylePreset: 'cardHeadline',
                    },
                    typographyPreset: {
                        xs: 'editorialHeadline010',
                        md: 'editorialHeadline020',
                    },
                } }, title))),
    React.createElement(CardMedia, null,
        React.createElement(Hidden, { lg: true },
            React.createElement(Image, { src: "https://storybook.newskit.co.uk/placeholder-3x2.png", alt: "card-media-image", loadingAspectRatio: "3:2" }))))); };
export var ThirdLevelCard = function () { return (React.createElement(CardComposable, { columnGap: "space040", columns: "80px 1fr", areas: "media content" },
    React.createElement(CardContent, { rowGap: "space040", alignContent: "start", justifyItems: "stretch" },
        React.createElement(CardLink, { expand: true, href: "/" },
            React.createElement(Headline, { headingAs: "h3", overrides: {
                    heading: {
                        stylePreset: 'cardHeadline',
                    },
                    typographyPreset: {
                        xs: 'editorialHeadline010',
                        sm: 'editorialHeadline020',
                    },
                } }, "Headline")),
        React.createElement(TextBlock, { as: "p", typographyPreset: {
                xs: 'editorialSubheadline010',
                sm: 'editorialSubheadline020',
            }, stylePreset: "inkBase" }, paragraph)),
    React.createElement(CardMedia, { media: {
            src: 'https://storybook.newskit.co.uk/placeholder-1x1.png',
            alt: 'card-media-image',
            loadingAspectRatio: '1:1',
            overrides: {
                stylePreset: 'imageCircle',
            },
        } }))); };
//# sourceMappingURL=the-times-cards.js.map