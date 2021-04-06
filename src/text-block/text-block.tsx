import {
  styled,
  getStylePresetFromTheme,
  getTypographyPresetFromTheme,
} from '../utils/style';
import {isInlineElement} from '../utils/inline-tags';
import {TextBlockProps} from './types';

const StyledTextBlock = styled.p<TextBlockProps>`
  margin: 0;
  padding: ${({noCrop}) => (noCrop ? '0' : '1px 0')};
  ${({stylePreset}) => stylePreset && getStylePresetFromTheme(stylePreset)};
  ${({typographyPreset, noCrop}) =>
    typographyPreset &&
    getTypographyPresetFromTheme(typographyPreset, undefined, {
      withCrop: !noCrop,
    })};
  ${({as, noCrop}) =>
    as && !noCrop && isInlineElement(as) ? 'display: inline-block;' : ''};
`;

export {StyledTextBlock as TextBlock};
