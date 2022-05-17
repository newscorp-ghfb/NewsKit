import {
  css,
  Devices,
  Drawer,
  getDeviceQueryFromTheme,
  getMediaQueryFromTheme,
  getSpacingCssFromTheme,
  getStylePresetFromTheme,
  styled,
} from 'newskit';

interface SidebarWrapperProps {
  open: boolean;
  hideSidebar?: boolean;
}

export const DesktopNavigationDivider = styled.div`
  width: 100vw;
  position: relative;

  ${getSpacingCssFromTheme('marginTop', 'space045')};
  ${getSpacingCssFromTheme('marginBottom', 'space060')};
`;

export const StyledDrawer = styled(Drawer)`
  ${getSpacingCssFromTheme('marginTop', '48px')};
  height: calc(100vh - 48px);
`;

export const SidebarDesktop = styled.div<SidebarWrapperProps>`
  width: 100vw;
  position: fixed;
  overflow: auto;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 3;
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 300ms;
  ${getSpacingCssFromTheme('paddingTop', 'space040')};
  ${getSpacingCssFromTheme('marginTop', 'space080')};
  ${getStylePresetFromTheme('sidebar')};

  ${getMediaQueryFromTheme('lg')} {
    width: 276px;
    display: ${({hideSidebar}) => hideSidebar && 'none'};
    ${getSpacingCssFromTheme('marginTop', 'space100')};
    ${getSpacingCssFromTheme('paddingTop', 'space000')};
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
