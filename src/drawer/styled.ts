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

const placementSize = {
  left: verticalSize,
  right: verticalSize,
};

export const StyledDrawer = styled(BaseDialogView, {
  shouldForwardProp: prop => prop !== 'open',
})<DrawerPanelProps>`
  ${({placement = 'left'}) => placementOptions[placement!]};
  ${({placement = 'left', ...props}) => placementSize[placement!](props)}

  ${getStylePreset('drawer.panel', 'panel')};

  ${({placement = 'left', ...props}) =>
    css`
      transform: translate3d(${placement === 'left' ? '-100%' : '100%'}, 0, 0);
      visibility: hidden;

      &.nk-drawer-enter,
      &.nk-drawer-exit-done {
        transform: translate3d(
          ${placement === 'left' ? '-100%' : '100%'},
          0,
          0
        );
        visibility: hidden;
      }
      &.nk-drawer-enter-active {
        transform: translate3d(0, 0, 0);
        visibility: visible;

        transition-property: transform, visibility;
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
        visibility: visible;
      }
      &.nk-drawer-exit-active {
        transform: translate3d(
          ${placement === 'left' ? '-100%' : '100%'},
          0,
          0
        );
        visibility: hidden;

        transition-property: transform, visibility;
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
        transform: translate3d(0, 0, 0);
        opacity: 0;
        visibility: hidden;

        &.nk-drawer-enter,
        &.nk-drawer-exit-done {
          transform: translate3d(0, 0, 0);
          opacity: 0;
          visibility: hidden;
        }
        &.nk-drawer-enter-active {
          transform: translate3d(0, 0, 0);
          opacity: 1;
          visibility: visible;

          transition-property: opacity, visibility;
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
          transform: translate3d(0, 0, 0);
          opacity: 1;
          visibility: visible;
        }
        &.nk-drawer-exit-active {
          transform: translate3d(0, 0, 0);
          opacity: 0;
          visibility: hidden;

          transition-property: opacity, visibility;
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
