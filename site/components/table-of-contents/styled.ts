import {
  Block,
  styled,
  getStylePreset,
  getSpacingCssFromTheme,
  getSizingCssFromTheme,
} from 'newskit';
import {Link} from '../link';

export const StyledTableOfContents = styled(Block)`
  position: fixed;
  transition: 0.2s top, bottom ease-in;
  will-change: top, bottom;
  ${getSizingCssFromTheme('top', 'sizing120')}
`;

export const StyledContentsNavItem = styled(Link)<{
  itemKey: number;
  isSelected: boolean;
}>`
  ${({isSelected}) =>
    isSelected && getStylePreset('contentsNavItem', '', {isSelected})}
  border-width: 0;
  border-left-width: ${({...props}) =>
    getStylePreset('contentsNavItem')(props).borderWidth};

  ${getSizingCssFromTheme('minHeight', 'sizing060')}
  ${getSpacingCssFromTheme('padding', 'spaceInsetSquish030')}
`;
