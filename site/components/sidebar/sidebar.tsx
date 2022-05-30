import * as React from 'react';
import {Block, Visible} from 'newskit';
import {SidebarNav} from './sidebar-navigation';
import {ThemeSwitch} from '../theme-switch';
import {GitHubLaunch} from '../menu-collapsible/menu-collapsible';
import {StyledSidebarDesktop, StyledDrawer} from './styled';

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
}) => {
  const handleOnClickEvents = () => {
    toggleTheme();
    handleSidebarClick();
  };
  return (
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
            <ThemeSwitch
              toggle={handleOnClickEvents}
              themeMode={themeMode}
              textTheme
            />
          </Block>
        </StyledDrawer>
      </Visible>
      <Visible lg xl>
        <StyledSidebarDesktop
          open={sidebarOpen}
          data-testid="sidebar"
          role="complementary"
          hideSidebar={hideSidebar}
        >
          <Block spaceInset="space010" />

          <SidebarNav />
        </StyledSidebarDesktop>
      </Visible>
    </>
  );
};

export default Sidebar;
