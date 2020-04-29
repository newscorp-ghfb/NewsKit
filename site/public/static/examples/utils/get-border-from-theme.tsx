import {getBorderFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;
  border-width: ${getBorderFromTheme('borderWidth010', border)};
`;
