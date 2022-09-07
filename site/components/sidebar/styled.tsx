import {
  css,
  Devices,
  Drawer,
  getDeviceQueryFromTheme,
  getMediaQueryFromTheme,
  getSpacingCssFromTheme,
  getStylePresetFromTheme,
  styled,
  TextBlock,
} from 'newskit';

interface SidebarWrapperProps {
  open: boolean;
  hideSidebar?: boolean;
}

export const StyledTitle = styled(TextBlock)`
  ${getSpacingCssFromTheme('marginLeft', 'space060')};
  ${getSpacingCssFromTheme('marginBottom', 'space040')};
`;

export const DesktopNavigationDivider = styled.div`
  width: 100%;
  position: relative;

  ${getSpacingCssFromTheme('marginTop', 'space045')};
  ${getSpacingCssFromTheme('marginBottom', 'space060')};
`;

export const StyledDrawer = styled(Drawer)`
  ${getSpacingCssFromTheme('marginTop', '48px')};
  height: calc(100vh - 48px);

  ${getMediaQueryFromTheme('lg')} {
    display: none;
  }
`;

export const StyledSidebarDesktop = styled.div<SidebarWrapperProps>`
  position: fixed;
  overflow: auto;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 3;
  ${getSpacingCssFromTheme('paddingTop', 'space040')};
  ${getSpacingCssFromTheme('marginTop', 'space080')};
  ${getStylePresetFromTheme('sidebar')};

  width: 276px;

  ${getSpacingCssFromTheme('marginTop', 'space100')};
  ${getSpacingCssFromTheme('paddingTop', 'space000')};
  overflow: hidden;
  &:hover {
    overflow: auto;
  }

  ${getDeviceQueryFromTheme(
    [Devices.iPadPro],
    css`
      overflow: auto;
    `,
  )};
`;
