import {
  getBorderCssFromTheme,
  getColorCssFromTheme,
  getShadowCssFromTheme,
  styled,
} from 'newskit';

export const StyledDebugDropdown = styled.div<{left: number | 'unset'}>`
  position: fixed;
  top: 10px;
  left: ${({left}) => left};
  width: 80px;
  height: 60px;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${getColorCssFromTheme('backgroundColor', 'interfaceBrand030')};
  ${getColorCssFromTheme('color', 'inkInverse')};
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
  ${getShadowCssFromTheme('boxShadow', 'shadow030')};
`;
