import {
  styled,
  getStylePresetFromTheme,
  getTypographyPresetFromTheme,
} from '../utils/style';
import {isInlineElement} from '../utils/inline-tags';
import {TextBlockProps} from './types';

const StyledTextBlock = styled.p<TextBlockProps>`
  margin: 0;
  ${({stylePreset}) => stylePreset && getStylePresetFromTheme(stylePreset)};
  ${({typographyPreset, noCrop}) =>
    typographyPreset &&
    getTypographyPresetFromTheme(typographyPreset, undefined, {
      withCrop: !noCrop,
    })};
  ${({as, noCrop}) =>
    as && !noCrop && isInlineElement(as) ? 'display: inline-block;' : ''};
  ${({lineTruncation}) =>
    lineTruncation
      ? `display: -webkit-box;-webkit-line-clamp:${lineTruncation};-webkit-box-orient: vertical;overflow: hidden;`
      : ''};
`;

export {StyledTextBlock as TextBlock};
