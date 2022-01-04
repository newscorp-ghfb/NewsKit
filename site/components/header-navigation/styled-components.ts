import {
  getTypePresetFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  styled,
} from 'newskit';

export const Header = styled.header`
  position: sticky;
  top: 0;
  flex-shrink: 0;
  z-index: 1;
`;

export const Root = styled.nav`
  display: flex;
  box-shadow: none;
  padding-left: ${getSizingFromTheme('spacingSize040')};
  padding-right: ${getSizingFromTheme('spacingSize040')};
  background-color: ${getColorFromTheme('interface010')};
  ${getTypePresetFromTheme('body030')}
`;

export const NavigationList = styled.div`
  display: flex;
  flex: none;
  padding-left: ${getSizingFromTheme('spacingSize070')};
  padding-right: ${getSizingFromTheme('spacingSize070')};
  justify-self: flex-start;
  justify-content: flex-start;
  align-self: center;
  margin-left: auto;
  visibility: hidden;

  :first-child,
  :last-child {
    padding: 0;
  }
`;
