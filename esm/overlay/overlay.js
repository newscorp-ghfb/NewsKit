import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTheme } from '../theme';
import { getTransitionDuration } from '../utils/get-transition-duration';
import { useLockBodyScroll } from '../utils/hooks';
import { styled, getStylePreset } from '../utils/style';
import { getTransitionPreset } from '../utils/style/transition-preset';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
// getResponsiveSpace('zIndex') will be replaced with a new function once PPDSC-1711 is done
var StyledOverlay = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n  ", ";\n\n  ", ";\n"], ["\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n  ", ";\n\n  ", ";\n"])), getStylePreset('overlay', ''), getTransitionPreset('overlay', '', 'nk-overlay'));
var BaseOverlay = React.forwardRef(function (props, transitionRef) {
    useLockBodyScroll();
    return React.createElement(StyledOverlay, __assign({ "data-testid": "overlay", ref: transitionRef }, props));
});
var ThemlessOverlay = function (_a) {
    var open = _a.open, overrides = _a.overrides, props = __rest(_a, ["open", "overrides"]);
    var theme = useTheme();
    // To learn more about why this is needed: https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
    var cssTransitionNodeRef = React.useRef(null);
    return (React.createElement(CSSTransition, { nodeRef: cssTransitionNodeRef, in: open, timeout: getTransitionDuration('overlay', '')({ theme: theme, overrides: overrides }), classNames: "nk-overlay", mountOnEnter: true, unmountOnExit: true, appear: true },
        React.createElement(BaseOverlay, __assign({}, props, { ref: cssTransitionNodeRef, overrides: overrides }))));
};
export var Overlay = withOwnTheme(ThemlessOverlay)({
    defaults: defaults,
    stylePresets: stylePresets,
});
var templateObject_1;
//# sourceMappingURL=overlay.js.map