"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stories = exports.DocsStory = exports.StoryDocsHeader = exports.StorybookCase = exports.StorybookPage = exports.StorybookLabel = exports.StorybookParah = exports.StorybookSpan = exports.StorybookH4 = exports.StorybookH3 = exports.StorybookSubHeading = exports.StorybookHeading = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var isomorphic_dompurify_1 = require("isomorphic-dompurify");
var blocks_1 = require("@storybook/addon-docs/blocks");
var grid_layout_1 = require("../grid-layout");
var text_block_1 = require("../text-block");
var block_1 = require("../block");
var style_1 = require("../utils/style");
var get_1 = require("../utils/get");
var link_1 = require("../link");
var title_bar_1 = require("../title-bar");
var divider_1 = require("../divider");
var StorybookHeading = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (react_1.default.createElement(text_block_1.TextBlock, { as: "h1", stylePreset: stylePreset || 'inkContrast', typographyPreset: "utilitySubheading020", paddingBlock: "space030" }, children));
};
exports.StorybookHeading = StorybookHeading;
var StorybookSubHeading = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (react_1.default.createElement(text_block_1.TextBlock, { as: "h2", stylePreset: stylePreset || 'inkContrast', typographyPreset: "utilityBody030", paddingBlock: "space030" }, children));
};
exports.StorybookSubHeading = StorybookSubHeading;
var StorybookH3 = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (react_1.default.createElement(text_block_1.TextBlock, { as: "h3", stylePreset: stylePreset || 'inkContrast', typographyPreset: "utilityBody030", paddingBlock: "space020" }, children));
};
exports.StorybookH3 = StorybookH3;
var StorybookH4 = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (react_1.default.createElement(text_block_1.TextBlock, { as: "h3", stylePreset: stylePreset || 'inkContrast', typographyPreset: "utilityBody030", paddingBlock: "space020" }, children));
};
exports.StorybookH4 = StorybookH4;
var StorybookSpan = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (react_1.default.createElement(text_block_1.TextBlock, { as: "span", stylePreset: stylePreset || 'inkContrast', typographyPreset: "editorialLabel010" }, children));
};
exports.StorybookSpan = StorybookSpan;
var StorybookParah = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (react_1.default.createElement(text_block_1.TextBlock, { stylePreset: stylePreset || 'inkContrast', paddingBlockEnd: "space020", typographyPreset: "editorialParagraph010" }, children));
};
exports.StorybookParah = StorybookParah;
exports.StorybookLabel = style_1.styled.label(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), (0, style_1.getColorCssFromTheme)('color', 'inkBase'));
var StorybookPage = function (_a) {
    var children = _a.children, rest = tslib_1.__rest(_a, ["children"]);
    return (react_1.default.createElement(grid_layout_1.GridLayout, tslib_1.__assign({ rowGap: "space080", columnGap: "space080", columns: {
            xs: 'repeat(auto-fill, 1fr)',
            sm: 'repeat(auto-fill, minmax(300px, 1fr))',
        }, alignItems: "start", overrides: {
            marginBlock: { xs: 'space030', sm: 'space050' },
            marginInline: { xs: 'space020', sm: 'space040' },
        } }, rest), children));
};
exports.StorybookPage = StorybookPage;
var StorybookCase = function (_a) {
    var title = _a.title, inverse = _a.inverse, children = _a.children;
    return (react_1.default.createElement(grid_layout_1.GridLayout, { rowGap: "space045" },
        title && (react_1.default.createElement(text_block_1.TextBlock, { typographyPreset: "utilityBody020", stylePreset: inverse ? 'inkInverse' : 'inkBase' }, title.charAt(0).toUpperCase() + title.slice(1))),
        react_1.default.createElement(block_1.Block, null, children)));
};
exports.StorybookCase = StorybookCase;
var StoryDocsHeader = function (_a) {
    var context = _a.context;
    var autoTitle = (0, get_1.get)(context, 'primaryStory.title').split('/').at(-1);
    var title = (0, get_1.get)(context, 'parameters.nkDocs.title') || autoTitle;
    var description = (0, get_1.get)(context, 'parameters.nkDocs.description');
    var url = (0, get_1.get)(context, 'parameters.nkDocs.url');
    var link = function () {
        return url ? (react_1.default.createElement(link_1.LinkStandalone, { href: url, target: "_blank" }, "Documentation")) : null;
    };
    return (react_1.default.createElement(grid_layout_1.GridLayout, { rowGap: "space040", overrides: { marginBlockEnd: 'space060' } },
        react_1.default.createElement(title_bar_1.TitleBar, { headingAs: "h1", actionItem: link, overrides: {
                paddingBlock: 'space000',
                paddingInline: 'space000',
                heading: {
                    typographyPreset: 'utilitySubheading050',
                    stylePreset: 'inkBase',
                },
            } }, title),
        description && (react_1.default.createElement(text_block_1.TextBlock, { marginBlock: "space020", typographyPreset: "utilityBody030", stylePreset: "inkBase" },
            react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: (0, isomorphic_dompurify_1.sanitize)(description) } }))),
        react_1.default.createElement(divider_1.Divider, null)));
};
exports.StoryDocsHeader = StoryDocsHeader;
var StyledCanvas = (0, style_1.styled)(blocks_1.Canvas)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  & > div > div {\n    padding: 0;\n    min-height: 400px;\n  }\n"], ["\n  & > div > div {\n    padding: 0;\n    min-height: 400px;\n  }\n"])));
var DocsStory = function (_a) {
    var _b;
    var id = _a.id, name = _a.name, _c = _a.expanded, expanded = _c === void 0 ? true : _c, _d = _a.withToolbar, withToolbar = _d === void 0 ? false : _d, _e = _a.parameters, parameters = _e === void 0 ? {} : _e;
    var description;
    var docs = parameters.docs;
    if (expanded && docs) {
        description = (_b = docs.description) === null || _b === void 0 ? void 0 : _b.story;
        if (!description) {
            description = docs.storyDescription;
        }
    }
    var subheading = expanded && name;
    return (
    // Have to ignore because the library typings are missing `children` prop.
    // @ts-ignore
    react_1.default.createElement(blocks_1.Anchor, { storyId: id },
        subheading && (react_1.default.createElement(text_block_1.TextBlock, { typographyPreset: "utilitySubheading020", stylePreset: "inkBase", as: "h2" }, subheading)),
        description && (react_1.default.createElement(text_block_1.TextBlock, { typographyPreset: "utilityBody020", stylePreset: "inkBase", as: "div", dangerouslySetInnerHTML: { __html: (0, isomorphic_dompurify_1.sanitize)(description) } })),
        react_1.default.createElement(StyledCanvas, { withToolbar: withToolbar },
            react_1.default.createElement(blocks_1.Story, { of: id }))));
};
exports.DocsStory = DocsStory;
var Stories = function (_a) {
    var context = _a.context, title = _a.title, _b = _a.includePrimary, includePrimary = _b === void 0 ? false : _b;
    var componentStories = context.componentStories;
    var stories = componentStories().filter(function (story) { var _a, _b; return !((_b = (_a = story.parameters) === null || _a === void 0 ? void 0 : _a.docs) === null || _b === void 0 ? void 0 : _b.disable); });
    if (!includePrimary)
        stories = stories.slice(1);
    if (!stories || stories.length === 0)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(text_block_1.TextBlock, { typographyPreset: "utilitySubheading020", marginBlockEnd: "space050", stylePreset: "inkBase", as: "h2" }, title),
        stories.map(function (story) {
            return story && (react_1.default.createElement(exports.DocsStory, { key: story.id, id: story.id, name: story.name, parameters: story.parameters, expanded: true }));
        })));
};
exports.Stories = Stories;
var templateObject_1, templateObject_2;
//# sourceMappingURL=storybook-comps.js.map