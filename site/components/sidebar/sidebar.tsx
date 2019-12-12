import * as React from 'react';
import {
  Visible,
  getSizingFromTheme,
  getColorFromTheme,
  getMediaQueryFromTheme,
  styled,
} from 'newskit';

import {Block} from '../block';

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
  background-color: ${getColorFromTheme('interface010')};
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${getColorFromTheme('interface030')};
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 300ms;

  ${getMediaQueryFromTheme('md')} {
    transform: translateX(0);
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${getColorFromTheme('interface010')};
  padding-left: ${getSizingFromTheme('spacingSize040')};
  padding-right: ${getSizingFromTheme('spacingSize040')};
  padding-top: ${getSizingFromTheme('spacingSize020')};
  padding-bottom: ${getSizingFromTheme('spacingSize020')};
  width: 100%;
  position: sticky;
  top: 0;

  ${getMediaQueryFromTheme('md')} {
    padding-top: ${getSizingFromTheme('spacingSize030')};
    padding-bottom: ${getSizingFromTheme('spacingSize030')};
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
          <NewsKitLogo $color="inkBase" $size="spacingSize120" />
        </Link>
        <Visible xs sm>
          <Block $display="flex" $height="100%">
            <IconWrapper
              onClick={handleSidebarClick}
              onKeyDown={handleEnterKeyPress(handleSidebarClick)}
              tabIndex={0}
              data-testid="close-icon"
            >
              <CloseIcon />
            </IconWrapper>
          </Block>
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
