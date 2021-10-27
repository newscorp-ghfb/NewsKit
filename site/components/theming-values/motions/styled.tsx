import {
  styled,
  getColorCssFromTheme,
  getMotionDurationValue,
  keyframes,
  getSpacingCssFromTheme,
} from 'newskit';
import {percentFrom, getTotalDuration} from './utils';
import {
  MotionDurationSwatchCircleProps,
  MotionTimingSwitchProps,
} from './types';

const generateAnimation = (
  duration: number,
  maxDuration: number,
  stayDuration: number,
  offset: number,
) => {
  const totalDuration = getTotalDuration(stayDuration, maxDuration);
  const currentStayTime = maxDuration - duration + stayDuration + offset;

  const movePercent = percentFrom(totalDuration, duration);
  const stayPercent = percentFrom(totalDuration, currentStayTime);
  const offsetPercent = percentFrom(totalDuration, offset);
  const step1 = stayPercent;
  const step2 = stayPercent + movePercent;
  const step3 = 100 - movePercent + offsetPercent;

  // from 0 to step1 = stay
  // from step1 to step2 = move
  // from step2 to step3 = stay
  // from step3 to 100% = move
  return keyframes`
    0% {
		  transform: translateX(0px);
	  }
    ${step1}% {
      transform: translateX(0px);
    }
    // move
    ${step2}% {
      transform: translateX(52px);
    }
    // stay
    ${step3}% {
      transform: translateX(52px);
    }
    // move back
    100% {
      transform: translateX(0px);
    }
  `;
};

export const MotionDurationSwatchBox = styled.div`
  width: 100px;
  height: 80px;
  border-radius: 50%;
  border-radius: 8px;
  position: relative;
  box-sizing: border-box;
  ${getSpacingCssFromTheme('padding', 'spaceInsetSquish020')};
  ${getColorCssFromTheme('backgroundColor', 'interface020')};
`;

export const MotionDurationSwatchCircle = styled.div<MotionDurationSwatchCircleProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 15px);
  left: 10px;
  transform-box: fill-box;
  transform-origin: 50% 50%;
  ${({color}) => getColorCssFromTheme('backgroundColor', color)};

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({name, duration, maxDuration}) => {
      const durationValue = getMotionDurationValue(duration);
      let offset = 0;

      // eslint-disable-next-line default-case
      switch (name) {
        case 'light':
          offset = 90;
          break;
        case 'mid':
          offset = 45;
          break;
        case 'dark':
          offset = 0;
          break;
      }

      const stayDuration = 200;
      const animationName = generateAnimation(
        durationValue,
        maxDuration,
        stayDuration,
        offset,
      );

      return durationValue > 0
        ? {
            animationDuration: `${getTotalDuration(
              stayDuration,
              maxDuration,
            )}ms`,

            animationName,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDirection: 'normal',
            animationFillMode: 'forwards',
            animationPlayState: 'running',
          }
        : {};
    }}
  }
`;

const motionTimingAnimation = keyframes`
    from {
        top: 60px;
    }
    to {
        top: 6px;
    }
`;

export const MotionTimingSwatchAxis = styled.div`
  border-width: 0 0 2px 2px;
  border-style: none none solid solid;
  ${getColorCssFromTheme('borderColor', 'illustrationSubtle010')}
  padding: 0 0 6px 6px;
  border-radius: 0 0 0 3px;
  box-sizing: border-box;
  width: 62px;
  height: 62px;
`;

export const MotionTimingSwatchDot = styled.div<MotionTimingSwitchProps>`
  display: none;
  position: absolute;
  right: 10px;
  will-change: top;
  @media screen and (prefers-reduced-motion: no-preference) {
    display: block;
    animation-name: ${motionTimingAnimation};
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-timing-function: ${props => props.timing};
  }

  &:after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 0 50% 50% 50%;
    transform: rotate(-45deg);
    ${getColorCssFromTheme('backgroundColor', 'illustrationHighlight010')}
  }
`;
