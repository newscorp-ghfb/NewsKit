import {
  styled,
  getTypePresetFromTheme,
  getSizingFromTheme,
  getColorFromTheme,
} from 'newskit';

export const StyledNavItem = styled.div<{
  active: boolean;
  hasActiveChild: boolean;
  level: number;
}>`
  ${getTypePresetFromTheme('body020')};
  line-height: 1.5rem;
  background-color: transparent;
  box-sizing: border-box;
  color: ${({theme, active}) =>
    active ? theme.colors.interactive010Pressed : theme.colors.inkSubtle};
  cursor: pointer;
  font-weight: ${({active}) => (active ? '500' : 'normal')};
  height: ${getSizingFromTheme('sizing070')};
  padding-left: ${({theme}) => theme.sizing.sizing030};
  padding-top: ${({theme}) => theme.sizing.sizing020};
  padding-right: ${({theme}) => theme.sizing.sizing050};
  border-radius: ${getSizingFromTheme('sizing020')};
  text-overflow: ellipsis;
  overflow: hidden;

  :hover {
    color: ${getColorFromTheme('inkBase')};
    background-color: ${({theme}) => theme.colors.interfaceHover};
  }

  :focus {
    outline: none;
    color: ${getColorFromTheme('inkInverse')};
    background-color: ${({theme}) => theme.colors.interfaceActive};

    & svg polygon {
      fill: ${getColorFromTheme('inkInverse')};
    }
  }

  & a {
    color: ${getColorFromTheme('inkContrast')};
    text-decoration: none;
    font-weight: normal;
    width: 100%;
    height: 100%;
  }

  & a:visited {
    color: ${getColorFromTheme('inkContrast')};
  }
`;

export const StyledContainer = styled.nav`
  ${getTypePresetFromTheme('body030')};
  list-style-type: none;
  margin: 0;
`;

export const NavItemContainer = styled.li`
  list-style-type: none;
  margin: 0px;
  padding: 0 ${getSizingFromTheme('sizing040')};

  & &,
  & & & {
    padding-right: 0;
  }
`;

export const SubNavContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0;
`;
