import {getColorFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;
  color: ${getColorFromTheme('blue020', 'color')};
`;