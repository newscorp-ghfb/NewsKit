import * as React from 'react';
import {
  Grid,
  Cell,
  getMediaQueryFromTheme,
  getTypographyPresetFromTheme,
  styled,
  IconFilledMenu,
  Visible,
  BreakpointKeys,
  Stack,
  StackDistribution,
  Flow,
  getColorCssFromTheme,
  getSpacingCssFromTheme,
  getShadowCssFromTheme,
  getSizingCssFromTheme,
  getStylePresetFromTheme,
  Scroll,
  Block,
} from 'newskit';
import {NewsKitLogo, NewsKitMobileLogo} from './logo';
import {ThemeSwitch} from './theme-switch';
import {handleEnterKeyPress} from '../helpers/a11y';
import routes from '../routes';
import {Link} from './link';

const Header = styled.header`
  flex-shrink: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 4;
  ${getColorCssFromTheme('backgroundColor', 'interfaceBackground')};
  ${getTypographyPresetFromTheme('utilityLabel020')}
  ${getSpacingCssFromTheme('paddingTop', 'space020')};
  ${getSpacingCssFromTheme('paddingBottom', 'space020')};
  ${getShadowCssFromTheme('boxShadow', 'shadow030')};

  ${getMediaQueryFromTheme('lg')} {
    ${getSpacingCssFromTheme('paddingTop', 'space030')};
    ${getSpacingCssFromTheme('paddingBottom', 'space030')};
    ${getShadowCssFromTheme('boxShadow', 'shadow040')};
    ${getSizingCssFromTheme('height', 'sizing100')};
  }
`;

const StyledGrid = styled(Grid)`
  position: sticky;
`;

const MobileMenu = styled.div`
  font-size: 0;
  align-self: center;
  ${getSpacingCssFromTheme('marginRight', 'space040')};
`;

export const StyledLinkItem = styled.div<{
  $selected: boolean;
}>`
  ${getTypographyPresetFromTheme('utilityButton020', undefined, {
    withCrop: true,
  })};
  ${({$selected, ...props}) =>
    getStylePresetFromTheme('headerNavItem', undefined, {
      isSelected: $selected,
    })(props)}
  box-sizing: border-box;
`;

const StyledVisible = styled(Visible)`
  height: 100%;
`;

const MobileLogo: React.FC = () => (
  <Link type="standalone" href="/" overrides={{stylePreset: 'inkBase'}}>
    <NewsKitMobileLogo color="inkBase" />
  </Link>
);

interface HeaderProps {
  handleSidebarClick: () => void;
  toggleTheme: () => void;
  themeMode: string;
  path: string;
}

type HeaderRef = HTMLElement;

type NavItemProps = {
  title: string;
  id: string;
};

const navItems = routes.map(({title, subNav}) => ({title, id: subNav[0].id}));

const SiteHeader = React.forwardRef<HeaderRef, HeaderProps>(
  ({handleSidebarClick, toggleTheme, themeMode, path}, ref) => {
    const renderMobileNavigation = (
      handleClick: () => void,
      breakpoint?: BreakpointKeys,
    ) => (
      <Stack data-testid="logo-container" flow={Flow.HorizontalCenter}>
        {!path.split('/')[1].includes('index') && (
          <MobileMenu
            onClick={handleClick}
            onKeyDown={handleEnterKeyPress(handleClick)}
            tabIndex={0}
            data-testid="mobile-menu-icon"
          >
            <IconFilledMenu
              overrides={{size: 'iconSize030', stylePreset: 'inkBrand010'}}
            />
          </MobileMenu>
        )}
        {breakpoint === 'xs' ? (
          <MobileLogo />
        ) : (
          <Link type="standalone" href="/" overrides={{stylePreset: 'inkBase'}}>
            <NewsKitLogo />
          </Link>
        )}
      </Stack>
    );

    const renderNavItems = (items: NavItemProps[], currentRoute: string) =>
      items.map(({title, id}) => (
        <Block spaceInset="spaceInset010" key={id}>
          <Link
            type="standalone"
            href={id}
            overrides={{
              stylePreset: 'linkTopNavigation',
              typographyPreset: 'utilityButton020',
            }}
          >
            <StyledLinkItem
              aria-current={
                currentRoute.split('/')[1].includes(id.split('/')[1]) ||
                undefined
              }
              $selected={currentRoute.split('/')[1].includes(id.split('/')[1])}
            >
              {title}
            </StyledLinkItem>
          </Link>
        </Block>
      ));

    return (
      <Header data-testid="header-navigation" ref={ref}>
        <StyledGrid maxWidth="9999px">
          <Cell xs={6} xsOrder={1}>
            <Stack
              flow={Flow.HorizontalCenter}
              stackDistribution={StackDistribution.Start}
            >
              <Visible xs sm>
                {renderMobileNavigation(handleSidebarClick, 'xs')}
              </Visible>
              <Visible md>{renderMobileNavigation(handleSidebarClick)}</Visible>
              <Visible lg xl>
                <Link
                  type="standalone"
                  href="/"
                  overrides={{stylePreset: 'inkBase'}}
                >
                  <NewsKitLogo />
                </Link>
              </Visible>
            </Stack>
          </Cell>
          <Cell xs={12} lg={5} xsOrder={3} lgOrder={2}>
            <StyledVisible lg xl>
              <Stack
                flow={Flow.HorizontalCenter}
                stackDistribution={StackDistribution.End}
                flexGrow={1}
                spaceInline="space070"
              >
                <Stack
                  flow={Flow.HorizontalCenter}
                  stackDistribution={StackDistribution.End}
                  spaceInline="space070"
                >
                  {renderNavItems(navItems, path)}
                </Stack>
              </Stack>
            </StyledVisible>
            <Visible xs sm md>
              <Scroll>
                <Stack
                  flow={Flow.HorizontalCenter}
                  stackDistribution={StackDistribution.SpaceAround}
                  spaceInline="space070"
                >
                  {renderNavItems(navItems, path)}
                </Stack>
              </Scroll>
            </Visible>
          </Cell>
          <Cell xs={1} xsOrder={2} lgOrder={3} xsOffset={5} lgOffset={0}>
            <ThemeSwitch toggle={toggleTheme} themeMode={themeMode} />
          </Cell>
        </StyledGrid>
      </Header>
    );
  },
);

export default SiteHeader;
