import * as React from 'react';
import {Block, Visible} from 'newskit';
import {SidebarNav} from './sidebar-navigation';
import {
  DarkModeToggle,
  GitHubLaunch,
} from '../menu-collapsible/menu-collapsible';
import {StyledSidebarDesktop, StyledDrawer} from './styled';

interface SidebarProps {
  sidebarOpen: boolean;
  handleSidebarClick: () => void;
  hideSidebar?: boolean;
  themeMode: string;
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  handleSidebarClick,
  hideSidebar,
  themeMode,
  toggleTheme,
}) => (
  <>
    <Visible xs sm md>
      <StyledDrawer
        data-testid="sidebar"
        aria-label="drawer menu on the left"
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
            stylePreset: 'sidebar',

            minSize: '100%',
          },
        }}
      >
        <SidebarNav />
        <Block marginInline="space060" marginBlock="space050">
          <GitHubLaunch />
          <Block marginBlock="space050" />
        </Block>
        <Block marginInline="space060" marginBlock="space050">
          <DarkModeToggle themeMode={themeMode} toggleTheme={toggleTheme} />
          <Block marginBlock="space050" />
        </Block>
      </StyledDrawer>
    </Visible>
    <Visible lg xl>
      {!hideSidebar && (
        <StyledSidebarDesktop
          open={sidebarOpen}
          data-testid="sidebar"
          role="complementary"
        >
          <Block spaceInset="space010" />

          <SidebarNav />
        </StyledSidebarDesktop>
      )}
    </Visible>
  </>
);

export default Sidebar;
