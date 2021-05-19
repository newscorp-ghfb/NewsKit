import {keyframes} from '@emotion/react';
import {TextBlock} from '../text-block';
import {
  getSpacingCssFromTheme,
  getMotionCssFromTheme,
  styled,
  MQ,
  getStylePreset,
  getResponsiveSize,
  getTypographyPreset,
  getResponsiveSpace,
} from '../utils/style';
import {ToastProviderProps, ToastPosition, ToastProps} from './types';
import {
  getHorizontalPosition,
  getVerticalPosition,
  getSpaceBetweenToasts,
} from './utils';

const enterAnimation = (factor: number) => keyframes`
  0% {transform: translate3d(0, ${factor * -100}%, 0) scale(0.1); opacity: 0;}
  100% {transform: translate3d(0, 0, 0) scale(1); opacity:1;}
`;

const exitAnimation = (factor: number) => keyframes`
  0% {transform: translate3d(0, 0, 0) scale(1); opacity:1;}
  100% {transform: translate3d(0,${factor * -100}%,0) scale(0.1); opacity:0;}
`;

const getAnimation = (position: ToastPosition, visible: boolean) => {
  const factor = getVerticalPosition(position) === 'top' ? 1 : -1;
  return visible ? enterAnimation(factor) : exitAnimation(factor);
};

export const StyledToastProvider = styled.div<
  Omit<ToastProviderProps, 'autoHideDuration'>
>`
  position: fixed;
  pointer-events: none;
  ${props =>
    getSpacingCssFromTheme(
      offset => ({left: offset, right: offset}),
      props.horizontalOffset as MQ<string>,
    )(props)}
  ${props =>
    getSpacingCssFromTheme(
      offset => ({
        [getVerticalPosition(props.position as ToastPosition)]: offset,
      }),
      props.verticalOffset as MQ<string>,
    )(props)}
`;

export const StyledToastBar = styled.div<{
  position: ToastPosition;
  visible: boolean;
}>`
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  ${({position, ...props}) =>
    getSpacingCssFromTheme(getSpaceBetweenToasts(position), 'space020')(props)}

  ${({position}) => ({
    alignItems: getHorizontalPosition(position),
    [getVerticalPosition(position)]: 0,
  })};
  transition-property: top, bottom;
  animation-fill-mode: forwards;
  animation-name: ${({visible, position}) => getAnimation(position, visible)};
  ${getMotionCssFromTheme('transitionDuration', 'motionDuration020')}
  ${getMotionCssFromTheme('transitionTimingFunction', 'motionEaseInAndOut')};
  ${getMotionCssFromTheme('animationDuration', 'motionDuration020')}
  ${getMotionCssFromTheme('animationTimingFunction', 'motionEaseInAndOut')};

  > * {
    // allow events to all direct children
    pointer-events: ${({visible}) => (visible ? 'initial' : 'none')};
  }
`;

export const StyledToastContainer = styled.div<ToastProps>`
  ${getStylePreset('toast', '')};
  ${getResponsiveSize('width', 'toast', '', 'width')}
  ${getResponsiveSize('minWidth', 'toast', '', 'minWidth')}
  ${getResponsiveSize('maxWidth', 'toast', '', 'maxWidth')}
  ${getResponsiveSize('minHeight', 'toast', '', 'minHeight')}
  ${getResponsiveSpace('padding', 'toast', '', 'spaceInset')}
  box-sizing: border-box;
  display: inline-flex;
`;

export const StyledContentContainer = styled.div<Pick<ToastProps, 'overrides'>>`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledMessageContainer = styled(TextBlock)<
  Pick<ToastProps, 'overrides'>
>`
  ${getTypographyPreset('toast.content.message', 'content.message', {
    withCrop: true,
  })};

  ${getStylePreset('toast.content.message', 'content.message')};
`;

export const StyledIconContainer = styled.div<Pick<ToastProps, 'overrides'>>`
  ${getResponsiveSpace('marginRight', 'toast.icon', 'icon', 'spaceInline')}

  // clean inline space
  svg {
    display: block;
  }
`;
