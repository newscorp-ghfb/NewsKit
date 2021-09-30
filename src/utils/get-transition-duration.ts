import {Theme} from '../theme';
import {getToken} from './get-token';
import {ThemeProp} from './style-types';

type TimeoutType = {appear: number; enter: number; exit: number};

const getDurationValue = (transitionDuration: string) => {
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

const extractDurationFromPreset = (tokensArray: string[], theme: Theme) =>
  tokensArray.reduce(
    (duration, currentToken) => {
      const transitionPreset = theme.transitionPresets[currentToken];
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
            getDurationValue(appearActive.transitionDuration)) ||
          0;
        const enterDuration =
          (enterActive &&
            enterActive.transitionDuration &&
            getDurationValue(enterActive.transitionDuration)) ||
          0;
        const exitDuration =
          (exitActive &&
            exitActive.transitionDuration &&
            getDurationValue(exitActive.transitionDuration)) ||
          0;

        return {
          appear: Math.max(duration.appear, appearDuration),
          enter: Math.max(duration.enter, enterDuration),
          exit: Math.max(duration.exit, exitDuration),
        };
      }

      const baseDuration =
        (base &&
          base.transitionDuration &&
          getDurationValue(base.transitionDuration)) ||
        0;
      return {
        appear: Math.max(duration.appear, baseDuration),
        enter: Math.max(duration.enter, baseDuration),
        exit: Math.max(duration.exit, baseDuration),
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

export const getTransitionDuration = (
  defaultPath?: string,
  overridePath?: string | false,
) => (props: ThemeProp & {overrides?: unknown}) => {
  const token = getToken(props, defaultPath, overridePath, 'transitionPreset');

  if (!token) return {enter: 0, exit: 0, appear: 0} as TimeoutType;

  const tokensArray: string[] =
    typeof token !== 'string' ? Object.values(token) : [token];

  return extractDurationFromPreset(tokensArray, props.theme);
};
