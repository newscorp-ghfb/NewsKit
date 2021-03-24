import {getColorCssFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;
  ${getColorCssFromTheme('color', 'blue020')};
`;
