import * as React from 'react';
import {
  Visible,
  getSizingFromTheme,
  getColorFromTheme,
  getMediaQueryFromTheme,
  styled,
  IconFilledClose,
  Devices,
  getDeviceQueryFromTheme,
  css,
} from 'newskit';

import {LegacyBlock} from '../legacy-block';

import {Overlay} from '../overlay';
import {SidebarNav} from './sidebar-navigation';
import {handleEnterKeyPress} from '../../helpers/a11y';
import {NewsKitLogo} from '../logo';
import {Link} from '../link';

interface SidebarProps {
  path: string;
  sidebarOpen: boolean;
  handleSidebarClick: () => void;
}
interface SidebarWrapperProps {
  open: boolean;
}

const SidebarWrapper = styled.div<SidebarWrapperProps>`
  width: 276px;
  padding: 0 ${getSizingFromTheme('sizing050')};
  position: fixed;
  overflow: auto;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: ${getColorFromTheme('interface020')};
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${getColorFromTheme('interface040')};
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 300ms;

  ${getMediaQueryFromTheme('lg')} {
    transform: translateX(0);
  }

  ${getMediaQueryFromTheme('lg')} {
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

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${getColorFromTheme('interface020')};
  padding-top: ${getSizingFromTheme('sizing040')};
  padding-bottom: ${getSizingFromTheme('sizing060')};
  width: 100%;
  position: sticky;
  top: 0;
`;

const IconWrapper = styled.div`
  align-self: center;
`;

const Sidebar: React.FC<SidebarProps> = ({
  path,
  sidebarOpen,
  handleSidebarClick,
}) => (
  <React.Fragment>
    <SidebarWrapper
      open={sidebarOpen}
      data-testid="sidebar"
      role="complementary"
    >
      <SidebarHeader>
        <Link href="/" overrides={{stylePreset: 'linkLogo'}}>
          <NewsKitLogo color="inkBase" size="sizing120" />
        </Link>
        <Visible xs sm md>
          <LegacyBlock display="flex" height="100%">
            <IconWrapper
              onClick={handleSidebarClick}
              onKeyDown={handleEnterKeyPress(handleSidebarClick)}
              tabIndex={0}
              data-testid="close-icon"
            >
              <IconFilledClose
                overrides={{
                  stylePreset: 'closeIcon',
                  size: 'iconSize010',
                }}
              />
            </IconWrapper>
          </LegacyBlock>
        </Visible>
      </SidebarHeader>
      <SidebarNav path={path} />
    </SidebarWrapper>

    <Overlay
      open={sidebarOpen}
      handleSidebarClick={handleSidebarClick}
      zIndex={2}
      lockScroll={sidebarOpen}
      hideAtBreakpoint="lg"
    />
  </React.Fragment>
);

export default Sidebar;
