import * as React from 'react';
import {
  Grid,
  Cell,
  getMediaQueryFromTheme,
  getTypographyPresetFromTheme,
  styled,
  IconFilledMenu,
  Visible,
  Stack,
  StackDistribution,
  Flow,
  getColorCssFromTheme,
  getSpacingCssFromTheme,
  getSizingCssFromTheme,
  getStylePresetFromTheme,
  IconFilledClose,
  Button,
  ButtonSize,
  IconFilledGitHub,
  getBorderCssFromTheme,
  MenuItem,
  Menu,
} from 'newskit';
import {NewsKitLogo} from './logo';
import {ThemeSwitch} from './theme-switch';
import {handleEnterKeyPress} from '../helpers/a11y';
import routes from '../routes';
import {Link} from './link';
import {getBorderRadius} from './theming-values/colors/utils';
import {MenuItemSize} from '../../src/menu/types';

export const GitHubButton: React.FC<{href?: string}> = ({href}) =>
  href ? (
    <Stack
      flow="horizontal-center"
      spaceInline="space040"
      spaceStack="space000"
    >
      <Button
        size={ButtonSize.Small}
        overrides={{
          typographyPreset: 'utilityButton010',

          stylePreset: 'buttonOutlinedSecondary',
          minWidth: '130px',
          height: '30px',
        }}
        href={href}
        target="_blank"
      >
        <IconFilledGitHub />
        View Github
      </Button>
    </Stack>
  ) : null;
const Header = styled.header`
  border-bottom-style: solid;
  flex-shrink: 0;
  flex-direction: row;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  right: 0;
  left: 0;
  z-index: 4;
  ${getBorderCssFromTheme('borderBottomWidth', 'borderWidth010')};
  ${getColorCssFromTheme('borderBottomColor', 'interface040')};
  ${getColorCssFromTheme('backgroundColor', 'interfaceBackground')};
  ${getTypographyPresetFromTheme('utilityLabel020')}
  ${getSpacingCssFromTheme('paddingTop', 'space000')};
  ${getSpacingCssFromTheme('paddingBottom', 'space000')};

  ${getMediaQueryFromTheme('lg')} {
    ${getSpacingCssFromTheme('paddingTop', 'space030')};
    ${getSpacingCssFromTheme('paddingBottom', 'space030')};
    ${getSizingCssFromTheme('height', 'sizing100')};
    // width:100vw;
    // ${getSpacingCssFromTheme('marginLeft', 'space050')};
    // ${getSpacingCssFromTheme('marginRight', 'space050')};
  }
`;

const StyledGrid = styled(Grid)`
  position: sticky;
`;

const MobileMenu = styled.div`
  font-size: 0;
  align-self: center;
  ${getSpacingCssFromTheme('marginLeft', 'space020')};
`;

export const Indicator = styled.div<{
  $selected: boolean;
}>`
  ${getTypographyPresetFromTheme('utilityButton020', undefined, {
    withCrop: true,
  })};

  ${getSpacingCssFromTheme('marginRight', 'space070')};

  &.selected {
    ${({$selected, ...props}) =>
      getStylePresetFromTheme('linkTopNavigation', undefined, {
        isSelected: $selected,
      })(props)}
    position: static;
    ::before {
      ${getSpacingCssFromTheme('marginTop', 'space000')};
      margin-bottom: 0px;
    }
    ::after {
      border-radius: ${getBorderRadius({first: true, last: false})};
      ${getColorCssFromTheme('background', 'interactivePrimary030')};
      content: ' ';
      position: relative;
      ${getSizingCssFromTheme('height', 'sizing050')};
      margin-top: -10px;
      ${getSpacingCssFromTheme('marginBottom', 'space020')};
      ${getSizingCssFromTheme('top', 'sizing070')};
      ${getSizingCssFromTheme('bottom', 'sizing000')};
    }
  }
`;

const StyledVisible = styled(Visible)`
  height: 100%;
  z-index: 1;
  ${getSpacingCssFromTheme('marginLeft', 'space100')};
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

const SiteHeader = React.forwardRef<HeaderRef, HeaderProps>(
  ({handleSidebarClick, toggleTheme, themeMode, path, sidebarOpen}, ref) => {
    const renderMobileNavigation = (handleClick: () => void) => (
      <Stack
        data-testid="logo-container"
        flow={Flow.HorizontalCenter}
        // stackDistribution="space-between"
      >
        <MobileMenu
          // key={id}
          onClick={handleClick}
          onKeyDown={handleEnterKeyPress(handleClick)}
          tabIndex={0}
          data-testid="mobile-menu-icon"
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
        </MobileMenu>
      </Stack>
    );

    const renderNavItems = (items: NavItemProps[], currentRoute: string) =>
      items.map(({title, id}) => (
        <MenuItem
          href={id}
          size={MenuItemSize.Small}
          overrides={{
            stylePreset: 'linkTopNavigation',
          }}
        >
          <Indicator
            data-testid="styled-indicator"
            key={id}
            aria-current={
              currentRoute.split('/')[1].includes(id.split('/')[1]) || undefined
            }
            $selected={currentRoute.split('/')[1].includes(id.split('/')[1])}
            className={
              currentRoute.split('/')[1].includes(id.split('/')[1])
                ? 'selected'
                : undefined
            }
          >
            {title}
          </Indicator>
        </MenuItem>
      ));

    return (
      <Header data-testid="header-navigation" ref={ref}>
        <StyledGrid maxWidth="9999px">
          <Cell xs={2}>
            <Stack
              flow={Flow.HorizontalCenter}
              stackDistribution={StackDistribution.Start}
            >
              <Visible xs sm md>
                {renderMobileNavigation(handleSidebarClick)}
              </Visible>

              <Visible lg xl>
                <Link
                  type="standalone"
                  href="/"
                  overrides={{stylePreset: 'inkBase'}}
                >
                  <NewsKitLogo />
                </Link>
              </Visible>

              <StyledVisible lg xl>
                <Stack
                  flow={Flow.HorizontalCenter}
                  stackDistribution={StackDistribution.Start}
                  // flexGrow={1}
                >
                  {/* <Stack flow={Flow.HorizontalCenter}> */}
                  <Menu>{renderNavItems(navItems, path)}</Menu>
                  {/* </Stack> */}
                </Stack>
              </StyledVisible>
            </Stack>
          </Cell>
          <Cell xs={8} lg={8} xsOrder={2}>
            <Visible xs sm md>
              <Stack
                flow={Flow.HorizontalCenter}
                stackDistribution={StackDistribution.SpaceAround}
              >
                <Link
                  type="standalone"
                  href="/"
                  overrides={{stylePreset: 'inkBase'}}
                >
                  <NewsKitLogo />
                </Link>
              </Stack>
            </Visible>
          </Cell>
          <Cell xs={2} lg={2} xsOrder={2} lgOrder={3}>
            <Visible lg xl>
              <Stack
                flow={Flow.HorizontalCenter}
                stackDistribution={StackDistribution.End}
                spaceInline="space045"
              >
                <GitHubButton href="https://github.com/newscorp-ghfb/newskit" />
                <ThemeSwitch
                  size={ButtonSize.Medium}
                  toggle={toggleTheme}
                  themeMode={themeMode}
                />
              </Stack>
            </Visible>
          </Cell>
        </StyledGrid>
      </Header>
    );
  },
);

export default SiteHeader;
