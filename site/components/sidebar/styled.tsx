import {
  styled,
  getTypographyPresetFromTheme,
  getStylePresetFromTheme,
} from 'newskit';

export const StyledDefaultNavItem = styled.div<{
  active: boolean;
}>`
  ${getTypographyPresetFromTheme('utilityButton020')};
  ${getStylePresetFromTheme('sidebarNavItem')};
  box-sizing: border-box;
  color: ${({theme, active}) =>
    active ? theme.colors.inkBrand010 : theme.colors.inkSubtle};
  cursor: 'pointer';
  min-height: ${({theme}) => theme.sizing.sizing060};
  min-width: 192px;
  padding: ${({theme}) => theme.spacePresets.space020}
    ${({theme}) => theme.spacePresets.space030};
  text-overflow: ellipsis;
`;

export const StyledFirstLevelHeader = styled.div<{
  firstNavItem?: boolean;
}>`
  ${getTypographyPresetFromTheme('utilityHeading020')};
  ${getStylePresetFromTheme('sidebarHeader')};
  border-top: ${({firstNavItem, theme}) =>
    !firstNavItem && `1px solid ${theme.colors.interface040}`};
  min-height: ${({theme}) => theme.sizing.sizing070};
  padding: ${({firstNavItem, theme}) =>
      firstNavItem ? theme.spacePresets.space020 : theme.spacePresets.space060}
    ${({theme}) => theme.spacePresets.space000}
    ${({theme}) => theme.spacePresets.space020}
    ${({theme}) => theme.spacePresets.space000};
`;

export const StyledSecondLevelHeader = styled.div`
  ${getTypographyPresetFromTheme('utilityHeading010')};
  ${getStylePresetFromTheme('sidebarHeader')};
  min-height: ${({theme}) => theme.sizing.sizing060};
  margin-top: ${({theme}) => theme.spacePresets.space045};
`;

export const StyledContainer = styled.nav`
  ${getTypographyPresetFromTheme('utilityBody030')};
  list-style-type: none;
  margin: 0;
`;

export const NavItemContainer = styled.li`
  list-style-type: none;
  margin: 0px;
`;

export const SubNavContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0;

  :last-child {
    margin-bottom: ${({theme}) => theme.spacePresets.space050};
  }
`;
