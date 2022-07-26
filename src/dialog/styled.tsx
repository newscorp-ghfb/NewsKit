import {MoveFocusInside} from 'react-focus-lock';
import {
  styled,
  getStylePreset,
  getResponsiveSpace,
  getSizingCssFromTheme,
  getTypographyPreset,
  css,
} from '../utils/style';
import {BaseDialogViewProps} from './types';

type BaseDialogViewOverridesAndPathProps = Pick<
  BaseDialogViewProps,
  'path' | 'overrides' | 'inline' | 'closePosition'
> & {$open?: boolean};

export const createCssGrid: (
  props: Pick<BaseDialogViewProps, 'closePosition'>,
) => ReturnType<typeof css> = ({closePosition}) =>
  closePosition === 'left'
    ? css`
        display: grid;
        grid-template-areas:
          'close header'
          'content content';
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
      `
    : css`
        display: grid;
        grid-template-areas:
          'header close'
          'content content';
        grid-template-columns: 1fr auto;
        grid-template-rows: auto 1fr;
      `;

export const StyledDialogPanel = styled.div<BaseDialogViewOverridesAndPathProps>`
  box-sizing: border-box;
  ${({inline}) => ({
    position: inline ? 'absolute' : 'fixed',
  })}
  ${({$open}) => ({
    pointerEvents: $open ? undefined : 'none',
  })}
  ${({closePosition}) => createCssGrid({closePosition})}  
  overflow: hidden;
`;

export const StyledMoveFocusInside = styled(MoveFocusInside)<
  Pick<BaseDialogViewProps, 'closePosition'>
>`
  height: 100%;
  overflow: hidden auto;
  ${({closePosition}) => createCssGrid({closePosition})};
  // it makes this container to take full space form it parent grid
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
`;

// This is empty div that sits behind header content and close button so that style-preset can be applied to it.
export const StyledDialogHeaderBG = styled.div<BaseDialogViewOverridesAndPathProps>`
  ${({path}) => getStylePreset(`${path}.header`, 'header')};
  // takes the space of header and close grid area
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const StyledDialogHeader = styled.div<BaseDialogViewOverridesAndPathProps>`
  box-sizing: border-box;
  ${getSizingCssFromTheme('minHeight', 'sizing080')}
  display: flex;
  grid-area: header;
  align-items: center;
  ${({path}) =>
    getResponsiveSpace('padding', `${path}.header`, 'header', 'spaceInset')}
  ${({path}) => getStylePreset(`${path}.header`, 'header')};
  ${({path}) => getTypographyPreset(`${path}.header`, 'header')};
`;

export const StyledDialogContent = styled.div<BaseDialogViewOverridesAndPathProps>`
  box-sizing: border-box;
  grid-area: content;
  overflow: hidden auto;
  ${({path}) =>
    getResponsiveSpace('padding', `${path}.content`, 'content', 'spaceInset')}
`;

export const StyledCloseButtonContainer = styled.div<
  BaseDialogViewOverridesAndPathProps &
    Pick<BaseDialogViewProps, 'closePosition'>
>`
  grid-area: close;
  box-sizing: border-box;
  align-self: center;

  ${({path}) =>
    getResponsiveSpace(
      'padding',
      `${path}.closeButton`,
      'closeButton',
      'spaceInset',
    )};
  ${({closePosition}) =>
    closePosition === 'left' ? `padding-right: 0;` : `padding-left: 0;`}
`;
