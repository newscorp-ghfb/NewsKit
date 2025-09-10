import { getToken } from './get-token';
import { isResponsive } from './responsive-helpers';
import { isArrayLikeObject, unifyTransition } from './style/utils';
export var getMotionDurationValue = function (transitionDuration) {
    var splitStr = transitionDuration.split(/(\d+)/);
    var duration = parseInt(splitStr[1], 10);
    if (!duration) {
        return 0;
    }
    var time = splitStr[splitStr.length - 1];
    /* istanbul ignore else */
    if (time === 'ms') {
        return duration;
    }
    /* istanbul ignore else */
    if (time === 's') {
        return duration * 1000;
    }
    return 0;
};
var extractDurationFromPreset = function (tokensArray, theme) {
    return tokensArray.reduce(function (duration, currentToken) {
        var transitionPreset = unifyTransition(theme, currentToken);
        if (!transitionPreset || !Object.keys(transitionPreset).length)
            return duration;
        var base = transitionPreset.base, appearActive = transitionPreset.appearActive, enterActive = transitionPreset.enterActive, exitActive = transitionPreset.exitActive;
        // React Transition Group docs:  *-active classes represent which styles you want to animate to,
        // so it's important to add transition declaration only to them,
        // otherwise transitions might not behave as intended!
        // http://reactcommunity.org/react-transition-group/css-transition
        if (appearActive || enterActive || exitActive) {
            var appearDuration = (appearActive &&
                appearActive.transitionDuration &&
                getMotionDurationValue(appearActive.transitionDuration)) ||
                0;
            var appearDelay = (appearActive &&
                appearActive.transitionDelay &&
                getMotionDurationValue(appearActive.transitionDelay)) ||
                0;
            var enterDuration = (enterActive &&
                enterActive.transitionDuration &&
                getMotionDurationValue(enterActive.transitionDuration)) ||
                0;
            var enterDelay = (enterActive &&
                enterActive.transitionDelay &&
                getMotionDurationValue(enterActive.transitionDelay)) ||
                0;
            var exitDuration = (exitActive &&
                exitActive.transitionDuration &&
                getMotionDurationValue(exitActive.transitionDuration)) ||
                0;
            var exitDelay = (exitActive &&
                exitActive.transitionDelay &&
                getMotionDurationValue(exitActive.transitionDelay)) ||
                0;
            return {
                appear: Math.max(duration.appear, appearDuration + appearDelay),
                enter: Math.max(duration.enter, enterDuration + enterDelay),
                exit: Math.max(duration.exit, exitDuration + exitDelay),
            };
        }
        var baseDuration = (base &&
            base.transitionDuration &&
            getMotionDurationValue(base.transitionDuration)) ||
            0;
        var baseDelay = (base &&
            base.transitionDelay &&
            getMotionDurationValue(base.transitionDelay)) ||
            0;
        return {
            appear: Math.max(duration.appear, baseDuration + baseDelay),
            enter: Math.max(duration.enter, baseDuration + baseDelay),
            exit: Math.max(duration.exit, baseDuration + baseDelay),
        };
    }, { enter: 0, exit: 0, appear: 0 });
};
export var getTransitionDurationFromTheme = function (themeToken) { return function (props) {
    var tokensArray = typeof themeToken === 'string' ? [themeToken] : themeToken;
    return extractDurationFromPreset(tokensArray, props.theme);
}; };
// getTransitionDuration is passed to timeout in CSSTransitions which defines the entire timeframe of the transition.
// Reduced motion is not added here because it has no visual changes and might cause issues in rendering transitions.
export var getTransitionDuration = function (defaultPath, overridePath) { return function (props) {
    var token = getToken(props, defaultPath, overridePath, 'transitionPreset');
    if (!token)
        return { enter: 0, exit: 0, appear: 0 };
    if (isResponsive(token, props.theme.breakpoints)) {
        return Object.entries(token).reduce(function (acc, _a) {
            var transitionPresetToken = _a[1];
            var tokensArray = isArrayLikeObject(transitionPresetToken)
                ? Object.values(transitionPresetToken)
                : [transitionPresetToken];
            var currentDuration = extractDurationFromPreset(tokensArray, props.theme);
            return {
                appear: Math.max(currentDuration.appear, acc.appear),
                enter: Math.max(currentDuration.enter, acc.enter),
                exit: Math.max(currentDuration.exit, acc.exit),
            };
        }, { enter: 0, exit: 0, appear: 0 });
    }
    var tokensArray = isArrayLikeObject(token)
        ? Object.values(token)
        : [token];
    return extractDurationFromPreset(tokensArray, props.theme);
}; };
//# sourceMappingURL=get-transition-duration.js.map