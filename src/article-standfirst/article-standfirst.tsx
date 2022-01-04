import {
  getColorFromTheme,
  getTypePresetFromTheme,
  styled,
} from '../utils/style';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';

import {H3} from '../typography';

export const ArticleStandfirst = styled(H3)`
  color: ${getColorFromTheme('standfirstText')};
  ${getTypePresetFromTheme('standfirst100')}

  ${getMediaQueryFromTheme('md')} {
    ${getTypePresetFromTheme('standfirst200')}
  }
`;

ArticleStandfirst.defaultProps = {itemProp: 'description'};
