import {Theme} from '../theme';
import {
  css,
  styled,
  getMaxSize,
  getMinSize,
  getSize,
  getStylePreset,
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

type DrawerContainerProps = Pick<DrawerProps, 'placement' | 'overrides'> & {
  isOpen: boolean;
};

const verticalSize = (
  props: DrawerContainerProps & {
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

export const StyledDrawerContainer = styled.div<DrawerContainerProps>`
  box-sizing: border-box;

  position: fixed;
  ${({placement = 'right'}) => placementOptions[placement]}
  z-index: 80;
  ${({isOpen}) => `display: ${isOpen ? 'flex' : 'none'};`}
  flex-direction: column;
  overflow: hidden;

  ${({placement = 'right', ...props}) => placementSize[placement](props)}

  ${getStylePreset('drawer.panel', 'panel')}
`;

export const StyledDrawerHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDrawerContent = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  overflow: hidden auto;
`;
