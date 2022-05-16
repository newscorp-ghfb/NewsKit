import * as React from 'react';
import {
  getMediaQueryFromTheme,
  getTypographyPresetFromTheme,
  styled,
  IconFilledMenu,
  Visible,
  getColorCssFromTheme,
  getSpacingCssFromTheme,
  getSizingCssFromTheme,
  IconFilledClose,
  Button,
  ButtonSize,
  IconFilledGitHub,
  getBorderCssFromTheme,
  MenuItem,
  Menu,
  GridLayout,
  GridLayoutItem,
  IconButton,
} from 'newskit';
import {NewsKitLogo} from './logo';
import {ThemeSwitch} from './theme-switch';
import {handleEnterKeyPress} from '../helpers/a11y';
import routes from '../routes';
import {Link} from './link';

export const GitHubButton: React.FC<{href?: string}> = () => (
  <Button
    size={ButtonSize.Small}
    overrides={{
      typographyPreset: 'utilityButton010',
      stylePreset: 'buttonOutlinedSecondary',
      minWidth: '130px',
      height: '30px',
    }}
    href="https://github.com/newscorp-ghfb/newskit"
    target="_blank"
  >
    <IconFilledGitHub />
    View Github
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
  // align-self: center;
  ${getSpacingCssFromTheme('marginLeft', 'space040')};
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
logo menu . github theme 

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
          key={id}
          href={id}
          size="small"
          selected={currentRoute.split('/')[1].includes(id.split('/')[1])}
          overrides={{
            stylePreset: 'linkTopNavigation',
            minHeight: '80px',
            // paddingInline: '8px',
            marginInline: '10px',
          }}
        >
          {title}
        </MenuItem>
      ));

    return (
      <Header data-testid="header-navigation" ref={ref}>
        <Visible xs sm md>
          <GridLayout columns={{xs: '1fr 60%'}}>
            <GridLayoutItem justifySelf="start" alignSelf="center">
              {renderMobileNavigation(handleSidebarClick)}
            </GridLayoutItem>
            <GridLayoutItem justifySelf="start" alignSelf="center">
              <Link
                type="standalone"
                href="/"
                overrides={{stylePreset: 'inkBase'}}
              >
                <NewsKitLogo />
              </Link>
            </GridLayoutItem>
          </GridLayout>
        </Visible>
        <Visible lg xl>
          <GridLayout
            columns={{lg: '276px 400px 1fr  1fr 80px'}}
            columnGap="20px"
            areas={{
              lg: siteheaderAreas,
            }}
          >
            {Areas => (
              <>
                <Areas.Logo alignSelf="center" justifySelf="start">
                  <Link
                    type="standalone"
                    href="/"
                    overrides={{stylePreset: 'inkBase'}}
                  >
                    <NewsKitLogo />
                  </Link>
                </Areas.Logo>

                <Areas.Menu alignSelf="center" justifySelf="center">
                  <Menu aria-label="main-navigation">
                    {renderNavItems(navItems, path)}
                  </Menu>
                </Areas.Menu>
                <Areas.Github alignSelf="center" justifySelf="end">
                  <GitHubButton href="https://github.com/newscorp-ghfb/newskit" />
                </Areas.Github>
                <Areas.Theme alignSelf="center" justifySelf="start">
                  <ThemeSwitch
                    size={ButtonSize.Medium}
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
