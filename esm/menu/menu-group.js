import { __assign, __rest } from "tslib";
import React from 'react';
import { useMenuContext } from './context';
import { StyledMenuGroup, StyledMenuGroupTitle } from './styled';
import { TextBlock } from '../text-block';
import { splitAriaProps } from '../utils/a11y';
import { renderIfReactComponent } from '../utils/component';
import { getToken } from '../utils/get-token';
import { useTheme } from '../theme';
import { useReactKeys } from '../utils/hooks';
var renderTitle = function (_a, titleID, theme) {
    var MenuTitle = _a.title, overrides = _a.overrides;
    if (typeof MenuTitle === 'string') {
        var stylePreset = getToken({ theme: theme, overrides: overrides }, 'menuGroup.title', 'title', 'stylePreset');
        var typographyPreset = getToken({ theme: theme, overrides: overrides }, 'menuGroup.title', 'title', 'typographyPreset');
        var titleOverrides = {
            stylePreset: stylePreset,
            typographyPreset: typographyPreset,
        };
        return (React.createElement(TextBlock, __assign({ as: "h2", id: titleID }, titleOverrides), MenuTitle));
    }
    return renderIfReactComponent(MenuTitle);
};
export var MenuGroup = React.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, children = _a.children, title = _a.title, restProps = __rest(_a, ["overrides", "children", "title"]);
    var theme = useTheme();
    var vertical = useMenuContext().vertical;
    var _b = splitAriaProps(restProps), aria = _b.aria, rest = _b.rest;
    var titleID = useReactKeys(1)[0];
    var shouldRenderTitle = vertical && Boolean(title);
    return (React.createElement(StyledMenuGroup, __assign({ className: "nk-menu-group" }, rest, { overrides: overrides, vertical: vertical, ref: ref }),
        shouldRenderTitle && (React.createElement(StyledMenuGroupTitle, { overrides: overrides }, renderTitle({ title: title, overrides: overrides }, titleID, theme))),
        React.createElement("ul", __assign({}, (shouldRenderTitle && __assign({ 'aria-labelledby': titleID }, aria))), children)));
});
MenuGroup.displayName = 'MenuGroup';
//# sourceMappingURL=menu-group.js.map