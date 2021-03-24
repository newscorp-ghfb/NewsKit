import {getSizingCssFromTheme, styled} from 'newskit';
const cb = size => ({padding: `${size} 0`);
const Paragraph = styled.p`
  text-align: center;
  ${getSizingCssFromTheme(cb, 'sizing045')};
`;
