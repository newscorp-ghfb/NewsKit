import * as React from 'react';
import {Block, Drawer, useBreakpointKey, Visible} from 'newskit';
import {SidebarNav} from './sidebar-navigation';
import {
  DarkModeToggle,
  GitHubLaunch,
} from '../menu-collapsible/menu-collapsible';
import {StyledSidebarDesktop} from './styled';

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
}) => {
  const bp = useBreakpointKey();
  const shouldHide = bp === 'lg' || bp === 'xl';

  return (
    <>
      <Visible xs sm md>
        <Drawer
          data-testid="sidebar"
          aria-label="drawer menu on the left"
          open={sidebarOpen}
          onDismiss={handleSidebarClick}
          placement="left"
          closePosition="none"
          hideOverlay
          inline={shouldHide}
          overrides={{
            content: {
              spaceInset: 'spaceInset000',
            },
            panel: {
              stylePreset: 'sidebar',
              marginBlockStart: 'space080',
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
        </Drawer>
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
};
export default Sidebar;
