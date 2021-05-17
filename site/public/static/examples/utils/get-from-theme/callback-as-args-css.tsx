import {getSizingCssFromTheme, styled} from 'newskit';
const cb = size => ({maxWidth: `${size}`});
const Paragraph = styled.p`
  text-align: center;
  ${getSizingCssFromTheme(cb, 'sizing050')};
`;

import {getSpacingCssFromTheme, styled} from 'newskit';
const cb = space => ({padding: `${space} 0`});
const Paragraph = styled.p`
  text-align: center;
  ${getSpacingCssFromTheme(cb, 'space050')};
`;
