import { __assign, __rest } from "tslib";
import React from 'react';
import { Divider } from '../divider';
import { renderIfReactComponent } from '../utils/component';
import { StyledToastContainer, StyledContentContainer, StyledMessageContainer, StyledIconContainer, StyledDividerContainer, StyledActionsContainer, StyledTitleContainer, StyledToastInnerContainer, } from './styled';
import { useTheme } from '../theme';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { splitAriaProps } from '../utils/a11y';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { childrenIsString } from '../utils/react-children-utilities';
import { omitLogicalPropsFromOverrides } from '../utils/logical-properties';
var ThemelessToast = React.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, children = _a.children, icon = _a.icon, actions = _a.actions, title = _a.title, _c = _a.ariaLive, ariaLive = _c === void 0 ? 'polite' : _c, _d = _a.role, role = _d === void 0 ? 'status' : _d, restProps = __rest(_a, ["overrides", "children", "icon", "actions", "title", "ariaLive", "role"]);
    var theme = useTheme();
    var dividerOverrides = __assign(__assign({}, theme.componentDefaults.toast.divider), filterOutFalsyProperties(overrides.divider));
    var _e = splitAriaProps(restProps), aria = _e.aria, rest = _e.rest;
    var nonLogicalOverrides = omitLogicalPropsFromOverrides(overrides);
    return (React.createElement(StyledToastContainer, __assign({ "data-testid": "toast-container", overrides: overrides, ref: ref }, rest),
        React.createElement(StyledToastInnerContainer, null,
            icon && (React.createElement(StyledIconContainer, { "aria-hidden": "true", overrides: nonLogicalOverrides }, icon)),
            React.createElement(StyledContentContainer, __assign({ role: role, "aria-live": ariaLive }, aria, { overrides: nonLogicalOverrides, actions: actions }),
                title && (React.createElement(StyledTitleContainer, { overrides: nonLogicalOverrides }, title)),
                React.createElement(StyledMessageContainer, { overrides: nonLogicalOverrides, as: childrenIsString(children) ? 'p' : 'div' }, children))),
        actions && (React.createElement(StyledDividerContainer, { overrides: nonLogicalOverrides },
            React.createElement(Divider, { vertical: true, overrides: dividerOverrides }))),
        actions && (React.createElement(StyledActionsContainer, null, renderIfReactComponent(actions)))));
});
export var Toast = withOwnTheme(ThemelessToast)({ defaults: defaults, stylePresets: stylePresets });
//# sourceMappingURL=toast.js.map