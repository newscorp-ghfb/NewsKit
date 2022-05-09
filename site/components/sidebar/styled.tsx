import {
  styled,
  getTypographyPresetFromTheme,
  getStylePresetFromTheme,
  getSizingFromTheme,
  getSpacingFromTheme,
  getSpacingCssFromTheme,
  MenuItem,
  getColorFromTheme,
} from 'newskit';

export const DesktopNavigationDivider = styled.div`
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
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

export const StyledFirstLevelHeader = styled.div`
  ${getTypographyPresetFromTheme('utilityLabel020')};
  ${getStylePresetFromTheme('sidebarHeader')};
  min-height: ${getSizingFromTheme('sizing070')};
  padding: ${getSpacingFromTheme('space040')} ${getSpacingFromTheme('space000')};
`;
export const StyledSecondLevelHeader = styled.div`
  ${getTypographyPresetFromTheme('sidebarFirstLevelHeader')};
  ${getStylePresetFromTheme('sidebarHeader')};
  min-height: ${getSizingFromTheme('sizing060')};
  ${getSpacingCssFromTheme('marginTop', 'space010')};
  ${getSpacingCssFromTheme('marginBottom', 'space040')};
`;

export const StyledSidebarNav = styled.div`
  ${getTypographyPresetFromTheme('utilityHeading030')};
  & ul > li > div {
    display: block;
  }
`;

export const StyledSectionContainer = styled.li`
  margin-bottom: ${getSpacingFromTheme('space050')};
`;

export const StyledNavigationWrapper = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0;

  :last-child {
    margin-bottom: ${getSpacingFromTheme('space050')};
  }
`;

export const StyledNavigationSection = styled.div`
  margin-bottom: ${getSpacingFromTheme('space050')};
`;
