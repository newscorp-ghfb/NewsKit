import {MoveFocusInside} from 'react-focus-lock';
import {IconButton} from '../icon-button';
import {
  styled,
  getStylePreset,
  getResponsiveSpace,
  getResponsiveSize,
  getSizingCssFromTheme,
} from '../utils/style';
import {BaseDialogViewProps} from './types';

type BaseDialogViewOverridesAndPathProps = Pick<
  BaseDialogViewProps,
  'path' | 'overrides' | 'inline'
> & {$open?: boolean};

export const StyledDialogPanel = styled.div<BaseDialogViewOverridesAndPathProps>`
  box-sizing: border-box;
  ${({inline}) => ({
    position: inline ? 'absolute' : 'fixed',
  })}
  ${({$open}) => ({
    pointerEvents: $open ? undefined : 'none',
  })}
  ${({path}) =>
    getResponsiveSpace('zIndex', `${path}.panel`, 'panel', 'zIndex')}
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const StyledMoveFocusInside = styled(MoveFocusInside)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden auto;
`;

export const StyledDialogHeader = styled.div<BaseDialogViewOverridesAndPathProps>`
  box-sizing: border-box;
  ${({path}) => getStylePreset(`${path}.header`, 'header')}
  ${getSizingCssFromTheme('minHeight', 'sizing080')}
  flex-shrink: 0; //fix min-height issues
`;

export const StyledDialogHeaderContent = styled.div<BaseDialogViewOverridesAndPathProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  ${({path}) =>
    getResponsiveSpace('padding', `${path}.header`, 'header', 'spaceInset')}
`;

export const StyledDialogContent = styled.div<BaseDialogViewOverridesAndPathProps>`
  box-sizing: border-box;
  flex-grow: 1;
  overflow: hidden auto;
  ${({path}) =>
    getResponsiveSpace('padding', `${path}.content`, 'content', 'spaceInset')}
`;

// This elements is needed to fill the space behind close button which is positioned absolute
export const StyledFillSpaceCloseButton = styled.div<
  BaseDialogViewOverridesAndPathProps &
    Pick<BaseDialogViewProps, 'closePosition'>
>`
  box-sizing: border-box;
  ${({path}) =>
    getResponsiveSpace(
      'margin',
      `${path}.closeButton`,
      'closeButton',
      'spaceInset',
    )}
  ${getResponsiveSize('width', 'iconButton.medium', '', 'width')}  
  ${getResponsiveSize('height', 'iconButton.medium', '', 'height')}
  ${({closePosition}) =>
    closePosition === 'left' ? `margin-right: auto;` : `margin-left: auto;`}
  flex-shrink: 0;
`;

export const StyledCloseButton = styled(IconButton)<
  BaseDialogViewOverridesAndPathProps &
    Pick<BaseDialogViewProps, 'closePosition'>
>`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  ${({closePosition}) => (closePosition === 'left' ? `left: 0;` : `right: 0;`)}
  ${({path}) =>
    getResponsiveSpace(
      margin => ({margin: `0 ${margin}`}),
      `${path}.closeButton`,
      '',
      'spaceInset',
    )}
`;
