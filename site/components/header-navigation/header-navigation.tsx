import * as React from 'react';
import {
  Hidden,
  Grid,
  Cell,
  getMediaQueryFromTheme,
  getSizingFromTheme,
  Link as StyledLink,
  styled,
  GitHub,
} from 'newskit';
import {Block} from '../block';
import Tonality from '../tonality';
import {Root, NavigationList, Header} from './styled-components';
import {MenuIcon} from '../icons';
import HeaderLogo from './header-logo';
import {handleEnterKeyPress} from '../../helpers/a11y';

const StyledMenuItem = styled(StyledLink)`
  display: none;
  height: 24px;

  ${getMediaQueryFromTheme('xs')} {
    display: block;
  }
`;

const StyledMobileMenu = styled.div`
  align-self: center;
  font-size: 0;
  margin-right: ${getSizingFromTheme('spacingSize040')};

  ${getMediaQueryFromTheme('md')} {
    display: none;
  }
`;

interface NavigationProps {
  toggleTheme: () => void;
  handleSidebarClick: () => void;
}

type HeaderRef = HTMLElement;

const HeaderNavigation = React.forwardRef<HeaderRef, NavigationProps>(
  ({toggleTheme, handleSidebarClick}, ref) => (
    <Header data-testid="header-navigation" ref={ref}>
      <Grid>
        <Cell xs={12}>
          <Root role="navigation" aria-label="Header">
            <StyledMobileMenu
              onClick={handleSidebarClick}
              onKeyDown={handleEnterKeyPress(handleSidebarClick)}
              tabIndex={0}
              data-testid="mobile-menu-icon"
            >
              <MenuIcon />
            </StyledMobileMenu>
            <Hidden md lg>
              <HeaderLogo />
            </Hidden>
            <NavigationList data-testid="navigation-icons">
              <Block $display="flex" $alignItems="center">
                <StyledMenuItem
                  href="https://github.com/newscorp-ghfb/ncu-newskit"
                  target="_blank"
                >
                  <GitHub $size="sizing050" />
                </StyledMenuItem>
                <StyledMenuItem href="#" onClick={toggleTheme}>
                  <Block as="span" $font="body030">
                    <Tonality $size="sizing070" $color="inkBase" />
                  </Block>
                </StyledMenuItem>
              </Block>
            </NavigationList>
          </Root>
        </Cell>
      </Grid>
    </Header>
  ),
);

export default HeaderNavigation;
