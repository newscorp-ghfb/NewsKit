import * as React from 'react';
import {
  Visible,
  getSizingFromTheme,
  getColorFromTheme,
  getMediaQueryFromTheme,
  styled,
} from 'newskit';

import {LegacyBlock} from '../legacy-block';

import {Overlay} from '../overlay';
import {SidebarNav} from './sidebar-navigation';
import {CloseIcon} from '../icons';
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

  ${getMediaQueryFromTheme('md')} {
    transform: translateX(0);
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${getColorFromTheme('interface020')};
  padding-left: ${getSizingFromTheme('sizing040')};
  padding-right: ${getSizingFromTheme('sizing040')};
  padding-top: ${getSizingFromTheme('sizing020')};
  padding-bottom: ${getSizingFromTheme('sizing020')};
  width: 100%;
  position: sticky;
  top: 0;

  ${getMediaQueryFromTheme('md')} {
    padding-top: ${getSizingFromTheme('sizing030')};
    padding-bottom: ${getSizingFromTheme('sizing030')};
    margin-bottom: ${getSizingFromTheme('sizing060')};
  }
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
        <Link href="/">
          <NewsKitLogo color="inkBase" size="sizing120" />
        </Link>
        <Visible xs sm>
          <LegacyBlock display="flex" height="100%">
            <IconWrapper
              onClick={handleSidebarClick}
              onKeyDown={handleEnterKeyPress(handleSidebarClick)}
              tabIndex={0}
              data-testid="close-icon"
            >
              <CloseIcon />
            </IconWrapper>
          </LegacyBlock>
        </Visible>
      </SidebarHeader>
      <SidebarNav path={path} />
    </SidebarWrapper>

    <Overlay
      isOpen={sidebarOpen}
      handleSidebarClick={handleSidebarClick}
      zIndex={2}
      lockScroll={sidebarOpen}
      hideAtBreakpoint="md"
    />
  </React.Fragment>
);

export default Sidebar;
