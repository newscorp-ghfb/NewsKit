import {Theme} from '../theme';
import {
  css,
  styled,
  getMaxSize,
  getMinSize,
  getSize,
  getStylePreset,
  getSpacingInset,
  getSizingFromTheme,
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
  width: ${getSize('drawer.panel', 'panel')(props)};
  max-width: ${getMaxSize('drawer.panel', 'panel')(props)};
  min-width: ${getMinSize('drawer.panel', 'panel')(props)};
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
  Pick<DrawerPanelProps, 'overrides'>
>`
  box-sizing: border-box;
  ${getStylePreset('drawer.header', 'header')};
  min-height: ${getSizingFromTheme('sizing080')};
  flex-shrink: 0; //fix min-height issues
`;

export const StyledDrawerHeaderContent = styled.div<
  Pick<DrawerProps, 'placement'>
>`
  display: flex;
  align-items: center;
  ${getSpacingInset('drawer.header', 'header')};
`;

export const StyledCloseButtonContainer = styled.div<
  Pick<DrawerProps, 'placement' | 'overrides'>
>`
  ${getSpacingInset('drawer.closeButton', 'closeButton')};
  ${({placement}) =>
    placement === 'left' ? `margin-right: auto;` : `margin-left: auto;`}
`;

export const StyledDrawerContent = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  overflow: hidden auto;
  ${getSpacingInset('drawer.content', 'content')}
`;
