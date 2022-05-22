import * as React from 'react';
import {Block, styled, Visible} from 'newskit';
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
const ThemeWrapper = styled.div``;
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
        <Block paddingBlock="space020" />
        <SidebarNav />
        <Block marginInline="space060" marginBlock="space050">
          <GitHubLaunch />
          <Block marginBlock="space050" />
          <ThemeWrapper onClick={handleSidebarClick}>
            <ThemeSwitch toggle={toggleTheme} themeMode={themeMode} textTheme />
          </ThemeWrapper>
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
