import {Theme} from '../theme';
import {
  css,
  styled,
  getStylePreset,
  getResponsiveSpace,
  getResponsiveSize,
  getSizingCssFromTheme,
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

type DrawerPanelProps = Pick<DrawerProps, 'placement' | 'overrides'> & {
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
  ${({placement}) => placementOptions[placement!]}
  z-index: 80;
  ${({isOpen}) => `display: ${isOpen ? 'flex' : 'none'};`}
  flex-direction: column;
  overflow: hidden;

  ${({placement, ...props}) => placementSize[placement!](props)}

  ${getStylePreset('drawer.panel', 'panel')}
`;

export const StyledDrawerHeader = styled.div<
  Pick<DrawerProps, 'placement' | 'overrides'>
>`
  box-sizing: border-box;
  ${getStylePreset('drawer.header', 'header')};
  ${getSizingCssFromTheme('minHeight', 'sizing080')}
  flex-shrink: 0; //fix min-height issues
`;

export const StyledDrawerHeaderContent = styled.div<
  Pick<DrawerProps, 'placement'>
>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  ${getResponsiveSpace('padding', 'drawer.header', 'header', 'spaceInset')}
`;

export const StyledCloseButtonContainer = styled.div<
  Pick<DrawerProps, 'placement' | 'overrides'>
>`
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

export const StyledDrawerContent = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  overflow: hidden auto;
  ${getResponsiveSpace('padding', 'drawer.content', 'content', 'spaceInset')}
`;

// These elements are needed to fill the space behind close button which is positioned absolute
export const StyledFillSpaceCloseButtonContainer = styled.div<
  Pick<DrawerProps, 'placement' | 'overrides'>
>`
  ${({placement}) =>
    placement === 'left' ? `margin-right: auto;` : `margin-left: auto;`}
`;
export const StyledFillSpaceCloseButton = styled.div<
  Pick<DrawerProps, 'placement' | 'overrides'>
>`
  ${getResponsiveSpace(
    'padding',
    'drawer.closeButton',
    'closeButton',
    'spaceInset',
  )}
  ${getResponsiveSize('width', 'iconButton.medium', '', 'width')}  
  ${getResponsiveSize('height', 'iconButton.medium', '', 'height')}
`;
