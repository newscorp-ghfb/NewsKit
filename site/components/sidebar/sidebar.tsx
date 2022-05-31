import * as React from 'react';
import {Block, Visible} from 'newskit';
import {SidebarNav} from './sidebar-navigation';
import {GitHubLaunch} from '../menu-collapsible/menu-collapsible';
import {StyledSidebarDesktop, StyledDrawer} from './styled';

interface SidebarProps {
  sidebarOpen: boolean;
  handleSidebarClick: () => void;
  hideSidebar?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
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
        <SidebarNav />
        <Block marginInline="space060" marginBlock="space050">
          <GitHubLaunch />
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
