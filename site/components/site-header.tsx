import * as React from 'react';
import {
  Grid,
  Cell,
  Hidden,
  getColorFromTheme,
  getFontsFromTheme,
  getMediaQueryFromTheme,
  getSizingFromTheme,
  getShadowFromTheme,
  getTypographyPresetFromTheme,
  styled,
} from 'newskit';

import {LegacyBlock} from './legacy-block';
import {Link} from './link';
import {NewsKitMobileLogo} from './logo';
import {MenuIcon, SearchIcon} from './icons';
import {ThemeSwitch} from './theme-switch';
import {handleEnterKeyPress} from '../helpers/a11y';

const Header = styled.header`
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 1;
  min-height: 72px;
  background-color: ${getColorFromTheme('interface010')};
  ${getTypographyPresetFromTheme('utilityLabel020')}
  padding: ${getSizingFromTheme('sizing030')} 0;
  box-shadow: ${getShadowFromTheme('shadow030')};

  ${getMediaQueryFromTheme('lg')} {
    min-height: 72px;
    box-shadow: none; // Remove this line when header links are displayed
  }
`;

const MobileMenu = styled.div`
  font-size: 0;
  align-self: center;
  margin-right: ${getSizingFromTheme('sizing040')};
`;

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

  li {
    margin-right: ${getSizingFromTheme('sizing060')};
    font-weight: ${getFontsFromTheme('fontWeight030')};
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const MobileLogo: React.FC = () => (
  <Link href="/" overrides={{stylePreset: 'linkLogo'}}>
    <NewsKitMobileLogo color="inkBase" size="sizing070" />
  </Link>
);

interface HeaderProps {
  handleSidebarClick: () => void;
  toggleTheme: () => void;
  themeMode: string;
}

type HeaderRef = HTMLElement;

const SiteHeader = React.forwardRef<HeaderRef, HeaderProps>(
  ({handleSidebarClick, toggleTheme, themeMode}, ref) => {
    const renderMobileNavigation = (handleClick: () => void) => (
      <LegacyBlock display="flex" data-testid="logo-container">
        <MobileMenu
          onClick={handleClick}
          onKeyDown={handleEnterKeyPress(handleClick)}
          tabIndex={0}
          data-testid="mobile-menu-icon"
        >
          <MenuIcon />
        </MobileMenu>
        <MobileLogo />
      </LegacyBlock>
    );

    return (
      <Header data-testid="header-navigation" ref={ref}>
        <Grid>
          <Cell xs={12}>
            <LegacyBlock
              display="flex"
              alignItems="center"
              height="100%"
              minHeight="40px"
            >
              <Hidden lg xl>
                {renderMobileNavigation(handleSidebarClick)}
              </Hidden>

              <LegacyBlock
                display="flex"
                flexGrow={1}
                justifyContent="flex-end"
              >
                <Hidden xs sm md lg xl>
                  <nav>
                    <NavigationList>
                      <li>
                        <Link href="/components" noUnderline color="inkSubtle">
                          Components
                        </Link>
                      </li>
                      <li>
                        <Link href="/styleguides" noUnderline color="inkSubtle">
                          Styleguides
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources" noUnderline color="inkSubtle">
                          Resources
                        </Link>
                      </li>
                    </NavigationList>
                  </nav>
                </Hidden>

                <Hidden xs sm md lg xl>
                  <SearchContainer data-testid="search">
                    <SearchIcon />
                  </SearchContainer>
                </Hidden>
                <ThemeSwitch toggle={toggleTheme} themeMode={themeMode} />
              </LegacyBlock>
            </LegacyBlock>
          </Cell>
        </Grid>
      </Header>
    );
  },
);

export default SiteHeader;
