import {Theme} from '../theme';
import {css, styled, getStylePreset, getResponsiveSize} from '../utils/style';
import {BaseDialogView} from '../dialog';
import {DrawerProps} from './types';
import {getTransitionPreset} from '../utils/style/transition-preset';

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

export const StyledDrawer = styled(BaseDialogView)<DrawerPanelProps>`
  ${({placement}) => placementOptions[placement!]};
  ${({placement, ...props}) => placementSize[placement!](props)}

  ${getStylePreset('drawer.panel', 'panel')};

  ${({placement, ...props}) =>
    placement &&
    css`
      ${getTransitionPreset(
        `drawer.panel.${placement}`,
        'panel',
        'nk-drawer',
      )(props)};
    `};
`;
