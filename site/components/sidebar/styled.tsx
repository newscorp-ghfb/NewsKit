import {
  styled,
  getTypographyPresetFromTheme,
  getStylePresetFromTheme,
  getSizingFromTheme,
  getSpacingFromTheme,
  // getBorderCssFromTheme,
  // getColorFromTheme,
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
  min-width: 230px;
  padding: ${getSpacingFromTheme('spaceInset030')} 0;
  margin: ${({theme}) => `${theme.spacePresets.space010} 0`};
  text-overflow: ellipsis;
  position: relative;
  ::before {
  ${({$selected}) =>
    $selected &&
    `{
          content: "";
          background: #3358CC;
          height: 40px;
          width: 7px;
          border-radius: 0 5px 5px 0;
          display: block;
          position: absolute;
          top: 0px;
          left: -27px;
      }
    `}
`;

// background: ${getColorFromTheme('blue060')};
// ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};

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
  margin-top: ${getSpacingFromTheme('space010')};
`;

export const StyledSidebarNav = styled.nav`
  ${getTypographyPresetFromTheme('utilityBody030')};
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
