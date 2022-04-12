import * as React from 'react';
import {
  Visible,
  getMediaQueryFromTheme,
  styled,
  Devices,
  getDeviceQueryFromTheme,
  css,
  getSpacingCssFromTheme,
  getStylePresetFromTheme,
  Block,
} from 'newskit';

import {LegacyBlock} from '../legacy-block';

import {Overlay} from '../overlay';
import {SidebarNav} from './sidebar-navigation';
import {handleEnterKeyPress} from '../../helpers/a11y';

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
  width: 276px;
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
  ${getSpacingCssFromTheme('marginTop', 'space090')};
  ${getStylePresetFromTheme('sidebar')};

  ${getMediaQueryFromTheme('lg')} {
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

const IconWrapper = styled.div`
  align-self: center;
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
      <Block spaceInset="space080">
        <Visible xs sm md>
          <LegacyBlock display="flex" height="100%">
            <IconWrapper
              onClick={handleSidebarClick}
              onKeyDown={handleEnterKeyPress(handleSidebarClick)}
              tabIndex={0}
              data-testid="close-icon"
            >
              {/* <IconFilledClose
                overrides={{
                  stylePreset: 'closeIcon',
                  size: 'iconSize010',
                }}
              /> */}
            </IconWrapper>
          </LegacyBlock>
        </Visible>
      </Block>
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
