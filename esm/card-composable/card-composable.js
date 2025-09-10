import { __assign, __rest } from "tslib";
import * as React from 'react';
import { Image } from '../image';
import { StyledActions, StyledCard, StyledContent, StyledLink, StyledMedia, } from './styled';
import { useTheme } from '../theme';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { withOwnTheme } from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import { CardProvider, useCardContext } from './context';
var useGetOverrides = function (_a, componentName) {
    var overrides = _a.overrides;
    var theme = useTheme();
    return __assign(__assign({}, theme.componentDefaults[componentName]), filterOutFalsyProperties(overrides));
};
var defaultAreas = "\n            media\n            content\n            actions\n          ";
var ThemelessCardComposable = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.areas, areas = _b === void 0 ? defaultAreas : _b, props = __rest(_a, ["children", "areas"]);
    var overrides = useGetOverrides(props, 'cardComposable');
    return (React.createElement(CardProvider, { value: { useAreas: Boolean(areas) } },
        React.createElement(StyledCard, __assign({ ref: ref, areas: areas }, props, { overrides: overrides }), children)));
});
export var CardComposable = withOwnTheme(ThemelessCardComposable)({
    defaults: defaults,
    stylePresets: stylePresets,
});
export var CardMedia = React.forwardRef(function (_a, ref) {
    var media = _a.media, children = _a.children, props = __rest(_a, ["media", "children"]);
    var useAreas = useCardContext().useAreas;
    var overrides = useGetOverrides(props, 'cardMedia');
    return (React.createElement(StyledMedia, __assign({ ref: ref, areaName: useAreas ? 'media' : undefined, overrides: overrides }, props), children || React.createElement(Image, __assign({ alt: "" }, media))));
});
export var CardContent = React.forwardRef(function (props, ref) {
    var useAreas = useCardContext().useAreas;
    var overrides = useGetOverrides(props, 'cardContent');
    return (React.createElement(StyledContent, __assign({ ref: ref, areaName: useAreas ? 'content' : undefined, justifyItems: "start", alignItems: "start", overrides: overrides }, props)));
});
export var CardActions = React.forwardRef(function (props, ref) {
    var useAreas = useCardContext().useAreas;
    var overrides = useGetOverrides(props, 'cardActions');
    return (React.createElement(StyledActions, __assign({ ref: ref, areaName: useAreas ? 'actions' : undefined, justifyContent: "start", alignItems: "start", overrides: overrides }, props)));
});
export var CardLink = React.forwardRef(function (props, ref) {
    var overrides = useGetOverrides(props, 'cardLink');
    return React.createElement(StyledLink, __assign({ ref: ref, overrides: overrides }, props));
});
//# sourceMappingURL=card-composable.js.map