"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardLink = exports.CardActions = exports.CardContent = exports.CardMedia = exports.CardComposable = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var image_1 = require("../image");
var styled_1 = require("./styled");
var theme_1 = require("../theme");
var filter_object_1 = require("../utils/filter-object");
var with_own_theme_1 = require("../utils/with-own-theme");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var context_1 = require("./context");
var useGetOverrides = function (_a, componentName) {
    var overrides = _a.overrides;
    var theme = (0, theme_1.useTheme)();
    return tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults[componentName]), (0, filter_object_1.filterOutFalsyProperties)(overrides));
};
var defaultAreas = "\n            media\n            content\n            actions\n          ";
var ThemelessCardComposable = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.areas, areas = _b === void 0 ? defaultAreas : _b, props = tslib_1.__rest(_a, ["children", "areas"]);
    var overrides = useGetOverrides(props, 'cardComposable');
    return (React.createElement(context_1.CardProvider, { value: { useAreas: Boolean(areas) } },
        React.createElement(styled_1.StyledCard, tslib_1.__assign({ ref: ref, areas: areas }, props, { overrides: overrides }), children)));
});
exports.CardComposable = (0, with_own_theme_1.withOwnTheme)(ThemelessCardComposable)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
exports.CardMedia = React.forwardRef(function (_a, ref) {
    var media = _a.media, children = _a.children, props = tslib_1.__rest(_a, ["media", "children"]);
    var useAreas = (0, context_1.useCardContext)().useAreas;
    var overrides = useGetOverrides(props, 'cardMedia');
    return (React.createElement(styled_1.StyledMedia, tslib_1.__assign({ ref: ref, areaName: useAreas ? 'media' : undefined, overrides: overrides }, props), children || React.createElement(image_1.Image, tslib_1.__assign({ alt: "" }, media))));
});
exports.CardContent = React.forwardRef(function (props, ref) {
    var useAreas = (0, context_1.useCardContext)().useAreas;
    var overrides = useGetOverrides(props, 'cardContent');
    return (React.createElement(styled_1.StyledContent, tslib_1.__assign({ ref: ref, areaName: useAreas ? 'content' : undefined, justifyItems: "start", alignItems: "start", overrides: overrides }, props)));
});
exports.CardActions = React.forwardRef(function (props, ref) {
    var useAreas = (0, context_1.useCardContext)().useAreas;
    var overrides = useGetOverrides(props, 'cardActions');
    return (React.createElement(styled_1.StyledActions, tslib_1.__assign({ ref: ref, areaName: useAreas ? 'actions' : undefined, justifyContent: "start", alignItems: "start", overrides: overrides }, props)));
});
exports.CardLink = React.forwardRef(function (props, ref) {
    var overrides = useGetOverrides(props, 'cardLink');
    return React.createElement(styled_1.StyledLink, tslib_1.__assign({ ref: ref, overrides: overrides }, props));
});
//# sourceMappingURL=card-composable.js.map