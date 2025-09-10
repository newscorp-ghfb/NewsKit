import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { sanitize } from 'isomorphic-dompurify';
import { Anchor, Canvas, Story, } from '@storybook/addon-docs/blocks';
import { GridLayout } from '../grid-layout';
import { TextBlock } from '../text-block';
import { Block } from '../block';
import { styled, getColorCssFromTheme } from '../utils/style';
import { get } from '../utils/get';
import { LinkStandalone } from '../link';
import { TitleBar } from '../title-bar';
import { Divider } from '../divider';
export var StorybookHeading = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (React.createElement(TextBlock, { as: "h1", stylePreset: stylePreset || 'inkContrast', typographyPreset: "utilitySubheading020", paddingBlock: "space030" }, children));
};
export var StorybookSubHeading = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (React.createElement(TextBlock, { as: "h2", stylePreset: stylePreset || 'inkContrast', typographyPreset: "utilityBody030", paddingBlock: "space030" }, children));
};
export var StorybookH3 = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (React.createElement(TextBlock, { as: "h3", stylePreset: stylePreset || 'inkContrast', typographyPreset: "utilityBody030", paddingBlock: "space020" }, children));
};
export var StorybookH4 = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (React.createElement(TextBlock, { as: "h3", stylePreset: stylePreset || 'inkContrast', typographyPreset: "utilityBody030", paddingBlock: "space020" }, children));
};
export var StorybookSpan = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (React.createElement(TextBlock, { as: "span", stylePreset: stylePreset || 'inkContrast', typographyPreset: "editorialLabel010" }, children));
};
export var StorybookParah = function (_a) {
    var children = _a.children, stylePreset = _a.stylePreset;
    return (React.createElement(TextBlock, { stylePreset: stylePreset || 'inkContrast', paddingBlockEnd: "space020", typographyPreset: "editorialParagraph010" }, children));
};
export var StorybookLabel = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), getColorCssFromTheme('color', 'inkBase'));
export var StorybookPage = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (React.createElement(GridLayout, __assign({ rowGap: "space080", columnGap: "space080", columns: {
            xs: 'repeat(auto-fill, 1fr)',
            sm: 'repeat(auto-fill, minmax(300px, 1fr))',
        }, alignItems: "start", overrides: {
            marginBlock: { xs: 'space030', sm: 'space050' },
            marginInline: { xs: 'space020', sm: 'space040' },
        } }, rest), children));
};
export var StorybookCase = function (_a) {
    var title = _a.title, inverse = _a.inverse, children = _a.children;
    return (React.createElement(GridLayout, { rowGap: "space045" },
        title && (React.createElement(TextBlock, { typographyPreset: "utilityBody020", stylePreset: inverse ? 'inkInverse' : 'inkBase' }, title.charAt(0).toUpperCase() + title.slice(1))),
        React.createElement(Block, null, children)));
};
export var StoryDocsHeader = function (_a) {
    var context = _a.context;
    var autoTitle = get(context, 'primaryStory.title').split('/').at(-1);
    var title = get(context, 'parameters.nkDocs.title') || autoTitle;
    var description = get(context, 'parameters.nkDocs.description');
    var url = get(context, 'parameters.nkDocs.url');
    var link = function () {
        return url ? (React.createElement(LinkStandalone, { href: url, target: "_blank" }, "Documentation")) : null;
    };
    return (React.createElement(GridLayout, { rowGap: "space040", overrides: { marginBlockEnd: 'space060' } },
        React.createElement(TitleBar, { headingAs: "h1", actionItem: link, overrides: {
                paddingBlock: 'space000',
                paddingInline: 'space000',
                heading: {
                    typographyPreset: 'utilitySubheading050',
                    stylePreset: 'inkBase',
                },
            } }, title),
        description && (React.createElement(TextBlock, { marginBlock: "space020", typographyPreset: "utilityBody030", stylePreset: "inkBase" },
            React.createElement("span", { dangerouslySetInnerHTML: { __html: sanitize(description) } }))),
        React.createElement(Divider, null)));
};
var StyledCanvas = styled(Canvas)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & > div > div {\n    padding: 0;\n    min-height: 400px;\n  }\n"], ["\n  & > div > div {\n    padding: 0;\n    min-height: 400px;\n  }\n"])));
export var DocsStory = function (_a) {
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
    React.createElement(Anchor, { storyId: id },
        subheading && (React.createElement(TextBlock, { typographyPreset: "utilitySubheading020", stylePreset: "inkBase", as: "h2" }, subheading)),
        description && (React.createElement(TextBlock, { typographyPreset: "utilityBody020", stylePreset: "inkBase", as: "div", dangerouslySetInnerHTML: { __html: sanitize(description) } })),
        React.createElement(StyledCanvas, { withToolbar: withToolbar },
            React.createElement(Story, { of: id }))));
};
export var Stories = function (_a) {
    var context = _a.context, title = _a.title, _b = _a.includePrimary, includePrimary = _b === void 0 ? false : _b;
    var componentStories = context.componentStories;
    var stories = componentStories().filter(function (story) { var _a, _b; return !((_b = (_a = story.parameters) === null || _a === void 0 ? void 0 : _a.docs) === null || _b === void 0 ? void 0 : _b.disable); });
    if (!includePrimary)
        stories = stories.slice(1);
    if (!stories || stories.length === 0)
        return null;
    return (React.createElement(React.Fragment, null,
        React.createElement(TextBlock, { typographyPreset: "utilitySubheading020", marginBlockEnd: "space050", stylePreset: "inkBase", as: "h2" }, title),
        stories.map(function (story) {
            return story && (React.createElement(DocsStory, { key: story.id, id: story.id, name: story.name, parameters: story.parameters, expanded: true }));
        })));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=storybook-comps.js.map