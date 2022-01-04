import {getSizingFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: ${getSizingFromTheme('spacingSize030', $marginBottom)};
`;
