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

const verticalSize = (theme: Theme) => css`
  width: ${getSize('drawer.panel', 'panel')({theme})};
  max-width: ${getMaxSize('drawer.panel', 'panel')({theme})};
  min-width: ${getMinSize('drawer.panel', 'panel')({theme})};
  height: 100%;
`;

const placementSize = {
  left: verticalSize,
  right: verticalSize,
};

export const StyledDialog = styled.div<
  Omit<DrawerProps, 'open'> & {$open: boolean}
>`
    box-sizing: border-box;
  
    position: fixed;
    ${({placement = 'right'}) => placementOptions[placement]}
    z-index: 80;
    ${({$open}) => `display: ${$open ? 'block' : 'none'};`}
  
    ${({placement = 'right', theme}) => placementSize[placement](theme)}
  
    ${getStylePreset('drawer.panel', 'panel')}
  `;
