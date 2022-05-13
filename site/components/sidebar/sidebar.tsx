import * as React from 'react';
import {
  getMediaQueryFromTheme,
  styled,
  Devices,
  getDeviceQueryFromTheme,
  css,
  getSpacingCssFromTheme,
  getStylePresetFromTheme,
  Block,
  Visible,
  Drawer,
} from 'newskit';
import {SidebarNav} from './sidebar-navigation';
import {ThemeSwitch} from '../theme-switch';
import {GitHubLaunch} from '../menu-collapsible/menu-collapsible';

interface SidebarProps {
  sidebarOpen: boolean;
  handleSidebarClick: () => void;
  hideSidebar?: boolean;
  toggleTheme: () => void;
  themeMode: string;
}
interface SidebarWrapperProps {
  open: boolean;
  hideSidebar?: boolean;
}

const StyledDrawer = styled(Drawer)`
  // not working on scroll
  ${getSpacingCssFromTheme('marginTop', '48px')};
`;

const SidebarDesktop = styled.div<SidebarWrapperProps>`
  width: 100vw;
  position: fixed;
  overflow: auto;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 3;
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 300ms;
  ${getSpacingCssFromTheme('paddingTop', 'space040')};
  ${getSpacingCssFromTheme('marginTop', 'space080')};
  ${getStylePresetFromTheme('sidebar')};

  ${getMediaQueryFromTheme('lg')} {
    width: 276px;
    display: ${({hideSidebar}) => hideSidebar && 'none'};
    ${getSpacingCssFromTheme('marginTop', 'space100')};
    ${getSpacingCssFromTheme('paddingTop', 'space000')};
    transform: translateX(0);
    overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }

  ${getDeviceQueryFromTheme(
    [Devices.iPadPro],
    css`
      overflow: auto;
    `,
  )};
`;

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  toggleTheme,
  themeMode,
  handleSidebarClick,
  hideSidebar,
}) => (
  <>
    <Visible xs sm md>
      <StyledDrawer
        id="i am a drawer"
        aria-label="drawer on the the bottom"
        open={sidebarOpen}
        onDismiss={handleSidebarClick}
        placement="left"
        closePosition="none"
        hideOverlay
        overrides={{
          content: {
            spaceInset: 'spaceInset000',
          },
          panel: {
            spaceStack: '50px',
            minSize: '100%',
            marginBlock: '0px',
          },
        }}
      >
        <SidebarNav />
        <Block marginInline="space060">
          <GitHubLaunch href="https://github.com/newscorp-ghfb/newskit" />
          <Block spaceStack="space050" />
          <ThemeSwitch toggle={toggleTheme} themeMode={themeMode} textTheme />
        </Block>
      </StyledDrawer>
    </Visible>
    <Visible lg xl>
      <SidebarDesktop
        open={sidebarOpen}
        data-testid="sidebar"
        role="complementary"
        hideSidebar={hideSidebar}
      >
        <Block spaceInset="space010" />

        <SidebarNav />
      </SidebarDesktop>
    </Visible>
  </>
);

export default Sidebar;
