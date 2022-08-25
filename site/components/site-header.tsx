import * as React from 'react';
import {
  getMediaQueryFromTheme,
  getTypographyPresetFromTheme,
  styled,
  Visible,
  getColorCssFromTheme,
  getSpacingCssFromTheme,
  getSizingCssFromTheme,
  ButtonSize,
  getBorderCssFromTheme,
  MenuItem,
  Menu,
  GridLayout,
  IconButton,
  toNewsKitIcon,
  Button,
} from 'newskit';
import {Menu as FilledMenu} from '@emotion-icons/material/Menu';
import {Close as FilledClose} from '@emotion-icons/material/Close';

import {NewsKitLogo} from './logo';
import {ThemeSwitch} from './theme-switch';
import {handleEnterKeyPress} from '../helpers/a11y';
import routes from '../routes';
import {Link} from './link';
import {Search} from './search';
import {IconFilledGitHub} from './icons';

const IconFilledMenu = toNewsKitIcon(FilledMenu);
const IconFilledClose = toNewsKitIcon(FilledClose);

export const GitHubButton = () => (
  <Button
    size="small"
    overrides={{
      typographyPreset: 'utilityButton010',
      stylePreset: 'buttonOutlinedSecondary',
      minWidth: '130px',
      height: '40px',
    }}
    href="https://github.com/newscorp-ghfb/newskit"
    target="_blank"
  >
    <IconFilledGitHub />
    View GitHub
  </Button>
);

const Header = styled.header`
  border-bottom-style: solid;
  position: fixed;

  right: 0;
  left: 0;
  z-index: 4;
  ${getSizingCssFromTheme('height', 'sizing080')};
  ${getBorderCssFromTheme('borderBottomWidth', 'borderWidth010')};
  ${getColorCssFromTheme('borderBottomColor', 'interface040')};
  ${getColorCssFromTheme('backgroundColor', 'interfaceBackground')};
  ${getTypographyPresetFromTheme('utilityLabel020')}
  ${getSpacingCssFromTheme('paddingTop', 'space000')};
  ${getSpacingCssFromTheme('paddingBottom', 'space000')};

  ${getMediaQueryFromTheme('lg')} {
    ${getSizingCssFromTheme('height', 'sizing100')};
  }
`;

const MobileMenu = styled.div`
  font-size: 0;
  ${getSpacingCssFromTheme('marginLeft', 'space040')};
  ${getSpacingCssFromTheme('marginBottom', 'space010')};
`;

interface HeaderProps {
  handleSidebarClick: () => void;
  toggleTheme: () => void;
  themeMode: string;
  path: string;
  sidebarOpen?: boolean;
}

type HeaderRef = HTMLElement;

type NavItemProps = {
  title: string;
  id: string;
};

const navItems = routes.map(({title, subNav}) => ({title, id: subNav[0].id}));
const siteheaderAreas = `
logo menu search github theme
 `;
const SiteHeader = React.forwardRef<HeaderRef, HeaderProps>(
  ({handleSidebarClick, toggleTheme, themeMode, path, sidebarOpen}, ref) => {
    const renderMobileNavigation = (handleClick: () => void) => (
      <MobileMenu>
        <IconButton
          aria-label="menu button"
          onClick={handleClick}
          onKeyDown={handleEnterKeyPress(handleClick)}
          tabIndex={0}
          data-testid="mobile-menu-icon"
          overrides={{
            stylePreset: 'iconButtonMinimalPrimary',
          }}
        >
          {sidebarOpen ? (
            <IconFilledClose
              overrides={{size: 'iconSize020', stylePreset: 'closeIcon'}}
            />
          ) : (
            <IconFilledMenu
              overrides={{size: 'iconSize020', stylePreset: 'inkContrast'}}
            />
          )}
        </IconButton>
      </MobileMenu>
    );

    const renderNavItems = (items: NavItemProps[], currentRoute: string) =>
      items.map(({title, id}) => (
        <MenuItem
          data-testid="styled-indicator"
          key={id}
          href={id.substring(1)}
          size="small"
          selected={currentRoute.split('/')[1].includes(id.split('/')[1])}
          overrides={{
            stylePreset: 'linkTopNavigation',
            minHeight: '80px',
            marginInline: '10px',
            paddingInline: {lg: '3px', xl: '16px'},
          }}
        >
          {title}
        </MenuItem>
      ));

    return (
      <Header data-testid="header-navigation" ref={ref}>
        <Visible xs sm md>
          <GridLayout
            data-testid="logo-container"
            columns={{xs: '50px 1fr 50px'}}
            alignItems="center"
            justifyItems="center"
          >
            {renderMobileNavigation(handleSidebarClick)}

            <Link
              type="standalone"
              href="/"
              overrides={{stylePreset: 'inkBase'}}
            >
              <NewsKitLogo />
            </Link>
            <Search />
          </GridLayout>
        </Visible>
        <Visible lg xl>
          <GridLayout
            columns={{lg: '276px 1fr auto auto 80px'}}
            columnGap="20px"
            alignItems="center"
            areas={{
              lg: siteheaderAreas,
            }}
          >
            {Areas => (
              <>
                <Areas.Logo justifySelf="start">
                  <Link type="standalone" href="/">
                    <NewsKitLogo />
                  </Link>
                </Areas.Logo>

                <Areas.Menu justifySelf="start">
                  <Menu aria-label="main-navigation">
                    {renderNavItems(navItems, path)}
                  </Menu>
                </Areas.Menu>
                <Areas.Search>
                  <Search />
                </Areas.Search>
                <Areas.Github>
                  <GitHubButton />
                </Areas.Github>
                <Areas.Theme>
                  <ThemeSwitch
                    size="medium"
                    toggle={toggleTheme}
                    themeMode={themeMode}
                  />
                </Areas.Theme>
              </>
            )}
          </GridLayout>
        </Visible>
      </Header>
    );
  },
);

export default SiteHeader;
