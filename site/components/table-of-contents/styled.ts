import {
  Block,
  styled,
  Link,
  getStylePreset,
  getSpacingInsetFromTheme,
} from 'newskit';

export const StyledTableOfContents = styled(Block)`
  top: 435px;
  position: fixed;
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

  min-height: ${({theme}) => theme.sizing.sizing060};
  ${getSpacingInsetFromTheme('spaceInset040')}
`;
