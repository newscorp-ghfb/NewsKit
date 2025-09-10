import { __assign, __rest } from "tslib";
import React from 'react';
import { isValidNode } from '../utils/component';
import { TextBlock } from '../text-block';
import { useTheme } from '../theme';
import { getToken } from '../utils/get-token';
import { StyledUl, StyledBlock, StyledMarkerBlock, StyledListItem, } from './styled';
import defaults from './defaults';
import { withOwnTheme } from '../utils/with-own-theme';
import { IconFilledCircle } from '../icons';
var ThemelessUnorderedList = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.listItemMarker, ListItemMarker = _b === void 0 ? IconFilledCircle : _b, markerAlign = _a.markerAlign, overrides = _a.overrides, rest = __rest(_a, ["children", "listItemMarker", "markerAlign", "overrides"]);
    var theme = useTheme();
    var itemSpaceToken = getToken({ theme: theme, overrides: overrides }, 'unorderedList', '', 'spaceStack');
    var markerSpaceToken = getToken({ theme: theme, overrides: overrides }, 'unorderedList.marker', 'marker', 'spaceInline');
    var markerSizeToken = getToken({ theme: theme, overrides: overrides }, 'unorderedList.marker', 'marker', 'size');
    var contentTypographyPresetToken = getToken({ theme: theme, overrides: overrides }, 'unorderedList.content', 'content', 'typographyPreset');
    var contentStylePresetToken = getToken({ theme: theme, overrides: overrides }, 'unorderedList.content', 'content', 'stylePreset');
    var markerStylePresetToken = getToken({ theme: theme, overrides: overrides }, 'unorderedList.marker', 'marker', 'stylePreset');
    return (React.createElement(StyledUl, __assign({ ref: ref, overrides: overrides, role: "list" }, rest), React.Children.map(children, function (node) {
        if (!isValidNode(node))
            return null;
        return (React.createElement(StyledListItem, null,
            React.createElement(StyledBlock, { spaceStack: itemSpaceToken },
                React.createElement(StyledMarkerBlock, { spaceInline: markerSpaceToken, "aria-hidden": "true", markerAlign: markerAlign }, ListItemMarker === null ? null : (React.createElement(ListItemMarker, { overrides: {
                        size: markerSizeToken,
                        stylePreset: markerStylePresetToken,
                    } }))),
                React.createElement(TextBlock, { typographyPreset: contentTypographyPresetToken, stylePreset: contentStylePresetToken }, node))));
    })));
});
export var UnorderedList = withOwnTheme(ThemelessUnorderedList)({
    defaults: defaults,
});
//# sourceMappingURL=unordered-list.js.map