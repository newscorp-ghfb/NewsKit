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
  top: calc(var(--heading-size) + var(--page-offset));
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
