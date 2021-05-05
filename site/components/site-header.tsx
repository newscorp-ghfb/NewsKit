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
} from 'newskit';

import {Link} from './link';
import {NewsKitLogo, NewsKitMobileLogo} from './logo';
import {ThemeSwitch} from './theme-switch';
import {handleEnterKeyPress} from '../helpers/a11y';

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
  ${getSizingCssFromTheme('height', 'sizing090')};

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

const MobileLogo: React.FC = () => (
  <Link href="/" overrides={{stylePreset: 'inkBase'}}>
    <NewsKitMobileLogo color="inkBase" />
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
    const renderMobileNavigation = (
      handleClick: () => void,
      breakpoint?: BreakpointKeys,
    ) => (
      <Stack data-testid="logo-container" flow={Flow.HorizontalCenter}>
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
        {breakpoint === 'xs' ? (
          <MobileLogo />
        ) : (
          <Link href="/" overrides={{stylePreset: 'inkBase'}}>
            <NewsKitLogo />
          </Link>
        )}
      </Stack>
    );

    return (
      <Header data-testid="header-navigation" ref={ref}>
        <StyledGrid maxWidth="9999px">
          <Cell xs={6}>
            <Stack
              flow={Flow.HorizontalCenter}
              stackDistribution={StackDistribution.Start}
            >
              <Visible xs sm>
                {renderMobileNavigation(handleSidebarClick, 'xs')}
              </Visible>
              <Visible md>{renderMobileNavigation(handleSidebarClick)}</Visible>
              <Visible lg xl>
                <Link href="/" overrides={{stylePreset: 'inkBase'}}>
                  <NewsKitLogo />
                </Link>
              </Visible>
            </Stack>
          </Cell>
          <Cell xs={6}>
            <Stack
              flow={Flow.HorizontalCenter}
              stackDistribution={StackDistribution.End}
              flexGrow={1}
            >
              <ThemeSwitch toggle={toggleTheme} themeMode={themeMode} />
            </Stack>
          </Cell>
        </StyledGrid>
      </Header>
    );
  },
);

export default SiteHeader;
