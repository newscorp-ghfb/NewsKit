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
import {logicalProps} from '../utils/logical-properties';

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
  ${getMotionCssFromTheme(
    'transitionTimingFunction',
    'motionTimingEaseInAndOut',
  )};
  ${getMotionCssFromTheme('animationDuration', 'motionDuration020')}
  ${getMotionCssFromTheme(
    'animationTimingFunction',
    'motionTimingEaseInAndOut',
  )};
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
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  ${logicalProps()}
`;

export const StyledToastInnerContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledContentContainer = styled.div<
  Pick<ToastProps, 'overrides' | 'actions'>
>`
  align-self: center;
  ${props =>
    props.actions &&
    getResponsiveSpace(
      'marginRight',
      'toast.contentAndActions',
      'contentAndActions',
      'spaceInline',
    )(props)}
`;

export const StyledMessageContainer = styled(TextBlock)<
  Pick<ToastProps, 'overrides'>
>`
  ${getTypographyPreset('toast.content.message', 'content.message', {
    withCrop: true,
  })};
  ${getStylePreset('toast.content.message', 'content.message')};
`;

export const StyledTitleContainer = styled(TextBlock)<
  Pick<ToastProps, 'overrides'>
>`
  ${getTypographyPreset('toast.content.title', 'content.title', {
    withCrop: true,
  })};
  ${getStylePreset('toast.content.title', 'content.title')};
  ${getResponsiveSpace(
    'marginBottom',
    'toast.content.title',
    'content.title',
    'spaceStack',
  )}
`;

export const StyledIconContainer = styled.div<Pick<ToastProps, 'overrides'>>`
  ${getResponsiveSpace('marginRight', 'toast.icon', 'icon', 'spaceInline')}
  // clean inline space
  svg {
    display: block;
  }
`;

export const StyledDividerContainer = styled.div<Pick<ToastProps, 'overrides'>>`
  align-self: stretch;
  ${getResponsiveSpace(
    'marginRight',
    'toast.contentAndActions',
    'contentAndActions',
    'spaceInline',
  )}
`;

export const StyledActionsContainer = styled.div`
  align-self: center;
`;
