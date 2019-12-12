import * as React from 'react';
import {
  Grid,
  Cell,
  Hidden,
  getColorFromTheme,
  getFontsFromTheme,
  getMediaQueryFromTheme,
  getSizingFromTheme,
  getTypePresetFromTheme,
  styled,
} from 'newskit';

import {Block} from './block';
import {Link} from './link';
import {NewsKitMobileLogo} from './logo';
import {MenuIcon, SearchIcon} from './icons';
import {handleEnterKeyPress} from '../helpers/a11y';

const Header = styled.header`
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${getColorFromTheme('interface01')};
  ${getTypePresetFromTheme('body02')}
  padding: ${getSizingFromTheme('spacingSize0500')} 0;

  ${getMediaQueryFromTheme('md')} {
    padding: ${getSizingFromTheme('spacingSize0300')} 0;
    min-height: 64px;
  }
`;

const MobileMenu = styled.div`
  font-size: 0;
  align-self: center;
  margin-right: ${getSizingFromTheme('spacingSize0400')};
`;

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

  li {
    margin-right: ${getSizingFromTheme('spacingSize0600')};
    font-weight: ${getFontsFromTheme('fontWeight0300')};
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const MobileLogo: React.FC = () => (
  <Link href="/">
    <NewsKitMobileLogo $color="inkDefault" $size="spacingSize0700" />
  </Link>
);

interface HeaderProps {
  handleSidebarClick: () => void;
  toggleTheme?: () => void;
}

type HeaderRef = HTMLElement;

const SiteHeader = React.forwardRef<HeaderRef, HeaderProps>(
  ({handleSidebarClick}, ref) => {
    const renderMobileNavigation = (handleClick: () => void) => (
      <Block $display="flex" data-testid="logo-container">
        <MobileMenu
          onClick={handleClick}
          onKeyDown={handleEnterKeyPress(handleClick)}
          tabIndex={0}
          data-testid="mobile-menu-icon"
        >
          <MenuIcon />
        </MobileMenu>
        <MobileLogo />
      </Block>
    );

    return (
      <Header data-testid="header-navigation" ref={ref}>
        <Grid>
          <Cell xs={12} mdHidden lgHidden>
            <Hidden md lg>
              {renderMobileNavigation(handleSidebarClick)}
            </Hidden>
          </Cell>
          <Cell xsHidden smHidden mdHidden lgHidden md={12}>
            <Block
              $display="flex"
              $justifyContent="flex-end"
              $alignItems="center"
              $height="100%"
              $minHeight="40px"
            >
              <nav>
                <NavigationList>
                  <li>
                    <Link href="/components" $noUnderline $color="inkDefault">
                      Components
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" $noUnderline $color="inkDefault">
                      Resources
                    </Link>
                  </li>
                </NavigationList>
              </nav>

              <Hidden xs sm md lg>
                <SearchContainer data-testid="search">
                  <SearchIcon />
                </SearchContainer>
              </Hidden>
            </Block>
          </Cell>
        </Grid>
      </Header>
    );
  },
);

export default SiteHeader;
