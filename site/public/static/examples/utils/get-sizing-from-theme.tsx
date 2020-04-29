import {getSizingFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: ${getSizingFromTheme('sizing030', 'marginBottom')};
`;
