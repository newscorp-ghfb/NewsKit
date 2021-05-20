import {Theme} from '../theme';
import {
  css,
  styled,
  getStylePreset,
  getResponsiveSpace,
  getResponsiveSize,
  getSizingCssFromTheme,
  getMotionCssFromTheme,
} from '../utils/style';
import {DrawerProps} from './types';

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

type DrawerOnlyOverridesAndPlacementProps = Pick<
  DrawerProps,
  'placement' | 'overrides'
>;
type DrawerPanelProps = DrawerOnlyOverridesAndPlacementProps & {
  isOpen: boolean;
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

export const StyledDrawerPanel = styled.div<DrawerPanelProps>`
  box-sizing: border-box;

  position: fixed;
  ${({placement}) => placementOptions[placement!]};
  z-index: 80;
  flex-direction: column;
  overflow: hidden;

  display: flex;

  ${({placement, ...props}) => placementSize[placement!](props)}

  ${getStylePreset('drawer.panel', 'panel')};

  ${({placement, ...props}) =>
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

export const StyledDrawerHeader = styled.div<DrawerOnlyOverridesAndPlacementProps>`
  box-sizing: border-box;
  ${getStylePreset('drawer.header', 'header')};
  ${getSizingCssFromTheme('minHeight', 'sizing080')}
  flex-shrink: 0; //fix min-height issues
`;

export const StyledDrawerHeaderContent = styled.div<
  Pick<DrawerProps, 'placement'>
>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  ${getResponsiveSpace('padding', 'drawer.header', 'header', 'spaceInset')}
`;

export const StyledDrawerContent = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  overflow: hidden auto;
  ${getResponsiveSpace('padding', 'drawer.content', 'content', 'spaceInset')}
`;

// This elements is needed to fill the space behind close button which is positioned absolute
export const StyledFillSpaceCloseButton = styled.div<DrawerOnlyOverridesAndPlacementProps>`
  box-sizing: border-box;
  ${getResponsiveSpace(
    'margin',
    'drawer.closeButton',
    'closeButton',
    'spaceInset',
  )}
  ${getResponsiveSize('width', 'iconButton.medium', '', 'width')}  
  ${getResponsiveSize('height', 'iconButton.medium', '', 'height')}
  ${({placement}) =>
    placement === 'left' ? `margin-right: auto;` : `margin-left: auto;`}
  flex-shrink: 0;
`;

export const StyledCloseButtonContainer = styled.div<DrawerOnlyOverridesAndPlacementProps>`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  ${({placement}) => `${placement}: 0;`}
  ${getResponsiveSpace(
    'padding',
    'drawer.closeButton',
    'closeButton',
    'spaceInset',
  )}
`;
