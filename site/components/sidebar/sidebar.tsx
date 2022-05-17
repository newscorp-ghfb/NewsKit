import * as React from 'react';
import {Block, Visible} from 'newskit';
import {SidebarNav} from './sidebar-navigation';
import {ThemeSwitch} from '../theme-switch';
import {GitHubLaunch} from '../menu-collapsible/menu-collapsible';
import {SidebarDesktop, StyledDrawer} from './styled';

interface SidebarProps {
  sidebarOpen: boolean;
  handleSidebarClick: () => void;
  hideSidebar?: boolean;
  toggleTheme: () => void;
  themeMode: string;
}

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
            stylePreset: 'drawerBackground',
            minSize: '100%',
            marginBlock: '0px',
          },
        }}
      >
        <Block spaceInset="space020" id="i am space" />
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
