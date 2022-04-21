import {
  styled,
  getTypographyPresetFromTheme,
  getStylePresetFromTheme,
  getSizingFromTheme,
  getSpacingFromTheme,
  getColorFromTheme,
  getBorderCssFromTheme,
  getSpacingCssFromTheme,
} from 'newskit';

export const StyledLinkItem = styled.div<{
  $selected: boolean;
}>`
  ${getTypographyPresetFromTheme('utilityButton020', undefined, {
    withCrop: true,
  })};
  ${({$selected, ...props}) =>
    getStylePresetFromTheme('sidebarNavItem', undefined, {
      isSelected: $selected,
    })(props)}
  box-sizing: border-box;
  cursor: 'pointer';
  height: ${getSizingFromTheme('sizing070')};
  min-width: 230px;
  padding: ${getSpacingFromTheme('spaceInset030')} 0;
  margin: ${({theme}) => `${theme.spacePresets.space010} 0`};
  text-overflow: ellipsis;
  position: relative;
  &.selected {
    ::before {
      position: absolute;
      left: -${getSizingFromTheme('sizing060')};
      background: ${getColorFromTheme('blue060')};
      height: ${getSizingFromTheme('sizing070')};
      width: ${getSizingFromTheme('sizing030')};
      top: ${getSizingFromTheme('sizing000')};
      ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
    }
  }
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
