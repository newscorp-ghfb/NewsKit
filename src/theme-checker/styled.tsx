import {Stack} from '../stack';
import {
  getBorderCssFromTheme,
  getColorCssFromTheme,
  getSpacingCssFromTheme,
  styled,
} from '../utils';

export const Container = styled.div`
  ${getSpacingCssFromTheme('margin', 'space030')};
`;
export const ContainerWithFixedWidth = styled.div`
  width: 360px;
  display: block;
  ${getSpacingCssFromTheme('margin', 'space030')};
`;

export const ContainerWithFixedHeight = styled.div`
  height: 360px;
  ${getSpacingCssFromTheme('margin', 'space030')};
`;

export const ContainerWithBorder = styled.div`
  border: solid 1px;
  ${getColorCssFromTheme('borderColor', 'interface040')};
  ${getBorderCssFromTheme('border-radius', 'borderRadiusRounded020')};
`;
export const InverseContainer = styled.div`
  ${getColorCssFromTheme('backgroundColor', 'black')};
  ${getColorCssFromTheme('color', 'white')};
`;
export const StyledStack = styled(Stack)`
  ${getSpacingCssFromTheme('marginTop', {xs: 'space040', md: 'space050'})};
  ${getSpacingCssFromTheme('marginBottom', {xs: 'space040', md: 'space070'})};
`;
