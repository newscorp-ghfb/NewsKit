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
} from 'newskit';
import {Overlay} from '../overlay';
import {SidebarNav} from './sidebar-navigation';

interface SidebarProps {
  sidebarOpen: boolean;
  handleSidebarClick: () => void;
  hideSidebar?: boolean;
}
interface SidebarWrapperProps {
  open: boolean;
  hideSidebar?: boolean;
}

const SidebarWrapper = styled.div<SidebarWrapperProps>`
  width: 100%;
  ${getSpacingCssFromTheme('paddingLeft', 'space050')};
  ${getSpacingCssFromTheme('paddingRight', 'space050')};
  position: fixed;
  overflow: auto;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 3;
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 300ms;
  ${getSpacingCssFromTheme('paddingTop', 'space020')};
  ${getSpacingCssFromTheme('marginTop', 'space080')};
  ${getStylePresetFromTheme('sidebar')};

  ${getMediaQueryFromTheme('lg')} {
    width: 276px;
    display: ${({hideSidebar}) => hideSidebar && 'none'};
    ${getSpacingCssFromTheme('marginTop', 'space100')};
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
  handleSidebarClick,
  hideSidebar,
}) => (
  <>
    <SidebarWrapper
      open={sidebarOpen}
      data-testid="sidebar"
      role="complementary"
      hideSidebar={hideSidebar}
    >
      <Block spaceInset="space010" />
      <SidebarNav />
    </SidebarWrapper>

    <Overlay
      open={sidebarOpen}
      handleSidebarClick={handleSidebarClick}
      zIndex={2}
      lockScroll={sidebarOpen}
      hideAtBreakpoint="lg"
    />
  </>
);

export default Sidebar;
