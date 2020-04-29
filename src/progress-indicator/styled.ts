import {styled, getSizingFromTheme} from '../utils/style';
import {IconSizeKeys} from '../themes/newskit-light/spacing';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {Theme} from '../themes/creator';
import {
  CircularProgressIndicatorSizeProps,
  CircularTrackProps,
  CircularIndicatorProps,
} from './types';

const indicatorStylePresetDefault = 'circularProgressIndicatorIndicatorPrimary';
const trackStylePresetDefault = 'circularProgressIndicatorTrackPrimary';

const animationDuration = '1.4s';

const circleProgressIndicatorSizeDefault: IconSizeKeys = 'iconSize020';
const getSize = (
  props: CircularProgressIndicatorSizeProps & {theme: Theme},
) => {
  const size = getSizingFromTheme(
    circleProgressIndicatorSizeDefault,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    'size' as any,
  )(props);
  return {
    height: size,
    width: size,
  };
};

export const StyledCircularProgressIndicator = styled.div<
  CircularProgressIndicatorSizeProps
>`
  ${getSize}
  position: relative;
`;

export const StyledCircularTrack = styled.div<CircularTrackProps>`
  box-sizing: border-box;
  ${getSize}
  ${getStylePresetFromTheme(trackStylePresetDefault, 'sliderTrackStylePreset')};
  border-radius: 50%;
`;

export const StyledCircularIndicator = styled.div<CircularIndicatorProps>`
  box-sizing: border-box;
  ${getSize}
  ${getStylePresetFromTheme(
    indicatorStylePresetDefault,
    'sliderIndicatorTrackStylePreset',
  )};
  border-radius: 50%;
`;

export const StyledCircularProgressIndicatorFills = styled.div<
  CircularIndicatorProps
>`
  @keyframes fills-outer-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
  transform: translateZ(0);
  animation: fills-outer-rotate ${animationDuration}
    cubic-bezier(0.25, 0.78, 0.48, 0.89) infinite;
  transform-origin: center;
`;

export const StyledLeftHalfCircle = styled.div<
  CircularProgressIndicatorSizeProps
>`
  box-sizing: border-box;
  width: calc(
    ${getSizingFromTheme(circleProgressIndicatorSizeDefault, 'size')} / 2
  );
  height: ${getSizingFromTheme(circleProgressIndicatorSizeDefault, 'size')};
  transform-origin: 100% center;
  transform: rotate(90deg);
  overflow: hidden;
  position: absolute;
`;

export const StyledRightHalfCircle = styled(StyledLeftHalfCircle)<
  CircularProgressIndicatorSizeProps
>`
  transform: rotate(-90deg);
`;

export const StyledLeftHalfContainer = styled.div<
  CircularProgressIndicatorSizeProps
>`
  @keyframes left-wobble {
    0% {
      transform: rotate(90deg);
    }

    1.69% {
      transform: rotate(72.3deg);
    }

    3.39% {
      transform: rotate(55.5deg);
    }

    5.08% {
      transform: rotate(40.3deg);
    }

    6.78% {
      transform: rotate(25deg);
    }

    8.47% {
      transform: rotate(10.6deg);
    }

    10.17% {
      transform: rotate(0deg);
    }

    40.68% {
      transform: rotate(0deg);
    }

    42.37% {
      transform: rotate(5.3deg);
    }

    44.07% {
      transform: rotate(13.4deg);
    }

    45.76% {
      transform: rotate(20.6deg);
    }

    47.46% {
      transform: rotate(29deg);
    }

    49.15% {
      transform: rotate(36.5deg);
    }

    50.85% {
      transform: rotate(42.6deg);
    }

    52.54% {
      transform: rotate(48.8deg);
    }

    54.24% {
      transform: rotate(54.2deg);
    }

    55.93% {
      transform: rotate(59.4deg);
    }

    57.63% {
      transform: rotate(63.2deg);
    }

    61.02% {
      transform: rotate(70.8deg);
    }

    67.8% {
      transform: rotate(80.6deg);
    }

    83.05% {
      transform: rotate(89.2deg);
    }

    84.75% {
      transform: rotate(89.2deg);
    }

    88.14% {
      transform: rotate(89.9deg);
    }

    89.83% {
      transform: rotate(89.7deg);
    }

    94.92% {
      transform: rotate(90.1deg);
    }

    98.31% {
      transform: rotate(89.8deg);
    }

    100% {
      transform: rotate(90deg);
    }
  }

  width: calc(
    ${getSizingFromTheme(circleProgressIndicatorSizeDefault, 'size')} / 2
  );
  height: ${getSizingFromTheme(circleProgressIndicatorSizeDefault, 'size')};
  transform-origin: 100% center;
  overflow: hidden;

  will-change: transform;
  transform: translateZ(0);
  animation: left-wobble ${animationDuration} linear infinite;
`;

export const StyledRightHalfContainer = styled(StyledLeftHalfContainer)<
  CircularProgressIndicatorSizeProps
>`
  @keyframes right-wobble {
    0% {
      transform: rotate(180deg);
    }

    8.47% {
      transform: rotate(180deg);
    }

    10.17% {
      transform: rotate(179.2deg);
    }

    11.86% {
      transform: rotate(164deg);
    }

    13.56% {
      transform: rotate(151.8deg);
    }

    15.25% {
      transform: rotate(140.8deg);
    }

    16.95% {
      transform: rotate(130.3deg);
    }

    18.64% {
      transform: rotate(120.4deg);
    }

    20.34% {
      transform: rotate(110.8deg);
    }

    22.03% {
      transform: rotate(101.6deg);
    }

    23.73% {
      transform: rotate(93.5deg);
    }

    25.42% {
      transform: rotate(85.4deg);
    }

    28.81% {
      transform: rotate(71.2deg);
    }

    30.51% {
      transform: rotate(89.1deg);
    }

    32.2% {
      transform: rotate(105.5deg);
    }

    33.9% {
      transform: rotate(121.3deg);
    }

    35.59% {
      transform: rotate(135.5deg);
    }

    37.29% {
      transform: rotate(148.4deg);
    }

    38.98% {
      transform: rotate(161deg);
    }

    40.68% {
      transform: rotate(173.5deg);
    }

    42.37% {
      transform: rotate(180deg);
    }

    71.02% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(180deg);
    }
  }

  animation: right-wobble ${animationDuration} linear infinite;
`;
