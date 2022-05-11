import {
  styled,
  getStylePresetFromTheme,
  getSizingFromTheme,
  getSpacingCssFromTheme,
  getColorFromTheme,
  MenuItem,
} from 'newskit';

export const DesktopNavigationDivider = styled.div`
  width: 100vw;
  position: relative;

  ${getSpacingCssFromTheme('marginTop', 'space045')};
  ${getSpacingCssFromTheme('marginBottom', 'space060')};
`;

export const Indicator = styled.div`
  &.selected {
    position: relative;
    overflow: visible;
    ::before {
      content: '';
      position: absolute;
      background: ${getColorFromTheme('blue060')};
      height: ${getSizingFromTheme('sizing070')};
      width: ${getSizingFromTheme('sizing010')};

      border-width: 4px;
      border-radius: 0 4px 4px 0;
    }
  }
`;

export const MenuItemStyled = styled(MenuItem)<{
  $selected: boolean;
}>`
  ${({$selected, ...props}) =>
    getStylePresetFromTheme('sidebarNavItem', undefined, {
      isSelected: $selected,
    })(props)}
  width: 276px;
`;
