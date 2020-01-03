import {getShadowFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;
  box-shadow: ${getShadowFromTheme('shadow020', $boxShadow)};
`;