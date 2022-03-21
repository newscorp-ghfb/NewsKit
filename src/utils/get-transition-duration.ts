import {BreakpointKeys, Theme, TransitionToken} from '../theme';
import {getToken} from './get-token';
import {getMediaQueryFromTheme, isResponsive} from './responsive-helpers';
import {MQ} from './style';
import {ThemeProp} from './style-types';
import {isArrayLikeObject, unifyTransition} from './style/utils';

type TimeoutType = {appear: number; enter: number; exit: number};

export const getMotionDurationValue = (transitionDuration: string) => {
  const splitStr = transitionDuration.split(/(\d+)/);
  const duration = parseInt(splitStr[1], 10);

  if (!duration) {
    return 0;
  }

  const time = splitStr[splitStr.length - 1];
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

const extractDurationFromPreset = (
  tokensArray: TransitionToken[],
  theme: Theme,
) =>
  tokensArray.reduce(
    (duration, currentToken) => {
      const transitionPreset = unifyTransition(theme, currentToken);
      if (!transitionPreset || !Object.keys(transitionPreset).length)
        return duration;

      const {base, appearActive, enterActive, exitActive} = transitionPreset;

      // React Transition Group docs:  *-active classes represent which styles you want to animate to,
      // so it's important to add transition declaration only to them,
      // otherwise transitions might not behave as intended!
      // http://reactcommunity.org/react-transition-group/css-transition
      if (appearActive || enterActive || exitActive) {
        const appearDuration =
          (appearActive &&
            appearActive.transitionDuration &&
            getMotionDurationValue(appearActive.transitionDuration)) ||
          0;
        const appearDelay =
          (appearActive &&
            appearActive.transitionDelay &&
            getMotionDurationValue(appearActive.transitionDelay)) ||
          0;
        const enterDuration =
          (enterActive &&
            enterActive.transitionDuration &&
            getMotionDurationValue(enterActive.transitionDuration)) ||
          0;
        const enterDelay =
          (enterActive &&
            enterActive.transitionDelay &&
            getMotionDurationValue(enterActive.transitionDelay)) ||
          0;
        const exitDuration =
          (exitActive &&
            exitActive.transitionDuration &&
            getMotionDurationValue(exitActive.transitionDuration)) ||
          0;
        const exitDelay =
          (exitActive &&
            exitActive.transitionDelay &&
            getMotionDurationValue(exitActive.transitionDelay)) ||
          0;

        return {
          appear: Math.max(duration.appear, appearDuration + appearDelay),
          enter: Math.max(duration.enter, enterDuration + enterDelay),
          exit: Math.max(duration.exit, exitDuration + exitDelay),
        };
      }

      const baseDuration =
        (base &&
          base.transitionDuration &&
          getMotionDurationValue(base.transitionDuration)) ||
        0;
      const baseDelay =
        (base &&
          base.transitionDelay &&
          getMotionDurationValue(base.transitionDelay)) ||
        0;
      return {
        appear: Math.max(duration.appear, baseDuration + baseDelay),
        enter: Math.max(duration.enter, baseDuration + baseDelay),
        exit: Math.max(duration.exit, baseDuration + baseDelay),
      };
    },
    {enter: 0, exit: 0, appear: 0} as TimeoutType,
  );

export const getTransitionDurationFromTheme = (
  themeToken: string | string[],
) => (props: ThemeProp & {overrides?: unknown}) => {
  const tokensArray: string[] =
    typeof themeToken === 'string' ? [themeToken] : themeToken;

  return extractDurationFromPreset(tokensArray, props.theme);
};

// getTransitionDuration is passed to timeout in CSSTransitions which defines the entire timeframe of the transition.
// Reduced motion is not added here because it has no visual changes and might cause issues in rendering transitions.
export const getTransitionDuration = (
  defaultPath?: string,
  overridePath?: string | false,
) => (props: ThemeProp & {overrides?: unknown}) => {
  const token = getToken(
    props,
    defaultPath,
    overridePath,
    'transitionPreset',
  ) as MQ<TransitionToken> | MQ<TransitionToken>[];

  if (!token) return {enter: 0, exit: 0, appear: 0} as TimeoutType;

  if (isResponsive(token, props.theme.breakpoints)) {
    return Object.entries(token).reduce(
      (acc, [key, transitionPresetToken], index, arr) => {
        const nextKey = arr[index + 1] ? arr[index + 1][0] : undefined;

        const mediaQuery = getMediaQueryFromTheme(
          key as BreakpointKeys,
          nextKey as BreakpointKeys,
        )({
          theme: props.theme,
        });

        if (isArrayLikeObject(transitionPresetToken)) {
          const tokensArray = Object.values(transitionPresetToken) as string[];
          acc[mediaQuery] = extractDurationFromPreset(tokensArray, props.theme);
        } else {
          const tokensArray = [transitionPresetToken];
          acc[mediaQuery] = extractDurationFromPreset(tokensArray, props.theme);
        }
        return acc;
      },
      {} as {[index: string]: TimeoutType},
    );
  }

  const tokensArray: string[] = isArrayLikeObject(token)
    ? Object.values(token)
    : [token];

  return extractDurationFromPreset(tokensArray, props.theme);
};
