import {Theme} from '../theme';
import {
  css,
  styled,
  getStylePreset,
  getResponsiveSize,
  getMotionCssFromTheme,
} from '../utils/style';
import {BaseDialogView} from '../dialog';
import {DrawerProps} from './types';

type DrawerPanelProps = Pick<DrawerProps, 'placement' | 'overrides' | 'open'>;

const placementOptions = {
  left: {
    top: 0,
    left: 0,
  },
  right: {
    top: 0,
    right: 0,
  },
  top: {
    top: 0,
    left: 0,
  },
  bottom: {
    bottom: 0,
    left: 0,
  },
};

const verticalSize = (
  props: DrawerPanelProps & {
    theme: Theme;
  },
) => css`
  ${getResponsiveSize('width', 'drawer.panel', 'panel', 'size')(props)}
  ${getResponsiveSize('maxWidth', 'drawer.panel', 'panel', 'maxSize')(props)}
    ${getResponsiveSize('minWidth', 'drawer.panel', 'panel', 'minSize')(props)}
    height: 100%;
`;

const horizontalSize = (
  props: DrawerPanelProps & {
    theme: Theme;
  },
) => css`
  ${getResponsiveSize('height', 'drawer.panel', 'panel', 'size')(props)}
  ${getResponsiveSize('maxHeight', 'drawer.panel', 'panel', 'maxSize')(props)}
    ${getResponsiveSize('minHeight', 'drawer.panel', 'panel', 'minSize')(props)}
    width: 100%;
`;

const placementSize = {
  left: verticalSize,
  right: verticalSize,
  top: horizontalSize,
  bottom: horizontalSize,
};

const transitions = {
  left: '-100%, 0, 0',
  right: '100%, 0, 0',
  top: '0, -100%, 0',
  bottom: '0, 100%, 0',
};

export const StyledDrawer = styled(BaseDialogView, {
  shouldForwardProp: prop => prop !== 'open',
})<DrawerPanelProps>`
  ${({placement}) => placementOptions[placement!]};
  ${({placement, ...props}) => placementSize[placement!](props)}

  ${getStylePreset('drawer.panel', 'panel')};

  ${({placement, ...props}) =>
    placement &&
    css`
      transform: translate3d(${transitions[placement]});
      opacity: 0;

      &.nk-drawer-enter,
      &.nk-drawer-exit-done {
        transform: translate3d(${transitions[placement]});
        opacity: 0;
      }
      &.nk-drawer-enter-active {
        transform: translate3d(0, 0, 0);
        opacity: 1;

        transition-property: transform, opacity;
        ${getMotionCssFromTheme(
          'transitionDuration',
          'motionDuration020',
        )(props)};
        ${getMotionCssFromTheme(
          'transitionTimingFunction',
          'motionEaseInAndOut',
        )(props)};
      }
      &.nk-drawer-enter-done,
      &.nk-drawer-exit {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
      &.nk-drawer-exit-active {
        transform: translate3d(${transitions[placement]});
        opacity: 0;

        transition-property: transform, opacity;
        ${getMotionCssFromTheme(
          'transitionDuration',
          'motionDuration020',
        )(props)};
        ${getMotionCssFromTheme(
          'transitionTimingFunction',
          'motionEaseInAndOut',
        )(props)};
      }

      @media (prefers-reduced-motion: reduce) {
        opacity: 0;

        &.nk-drawer-enter,
        &.nk-drawer-exit-done {
          opacity: 0;
        }
        &.nk-drawer-enter-active {
          opacity: 1;

          transition-property: opacity;
          ${getMotionCssFromTheme(
            'transitionDuration',
            'motionDuration020',
          )(props)}
          ${getMotionCssFromTheme(
            'transitionTimingFunction',
            'motionEaseIn',
          )(props)};
        }
        &.nk-drawer-enter-done,
        &.nk-drawer-exit {
          opacity: 1;
        }
        &.nk-drawer-exit-active {
          opacity: 0;

          transition-property: opacity;
          ${getMotionCssFromTheme(
            'transitionDuration',
            'motionDuration020',
          )(props)}
          ${getMotionCssFromTheme(
            'transitionTimingFunction',
            'motionEaseOut',
          )(props)};
        }
      }
    `};
`;
