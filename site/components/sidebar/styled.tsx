import {
  styled,
  getTypographyPresetFromTheme,
  getStylePresetFromTheme,
  getSizingFromTheme,
  getSpacingFromTheme,
  getColorFromTheme,
} from 'newskit';

export const StyledLinkItem = styled.div<{
  active: boolean;
}>`
  ${getTypographyPresetFromTheme('utilityButton020', undefined, {
    withCrop: true,
  })};
  ${getStylePresetFromTheme('sidebarNavItem')};
  box-sizing: border-box;
  color: ${({active}) =>
    active ? getColorFromTheme('inkBrand010') : getColorFromTheme('inkSubtle')};
  cursor: 'pointer';
  min-width: 230px;
  padding: ${getSpacingFromTheme('spaceInset030')};
  margin: ${({theme}) => `${theme.spacePresets.space010} 0`};
  text-overflow: ellipsis;
`;

export const StyledFirstLevelHeader = styled.div`
  ${getTypographyPresetFromTheme('utilityHeading020')};
  ${getStylePresetFromTheme('sidebarHeader')};
  min-height: ${getSizingFromTheme('sizing070')};
  padding: ${getSpacingFromTheme('space020')} ${getSpacingFromTheme('space000')};
`;

export const StyledSecondLevelHeader = styled.div`
  ${getTypographyPresetFromTheme('utilityHeading010')};
  ${getStylePresetFromTheme('sidebarHeader')};
  min-height: ${getSizingFromTheme('sizing060')};
  margin-top: ${getSpacingFromTheme('space045')};
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
