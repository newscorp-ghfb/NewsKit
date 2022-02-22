import {
  styled,
  getStylePresetFromTheme,
  getTypographyPresetFromTheme,
} from '../utils/style';
import {isInlineElement} from '../utils/inline-tags';
import {TextBlockProps} from './types';
import {logicalProps} from '../utils/logical-properties';

const StyledTextBlock = styled.p<TextBlockProps>`
  ${logicalProps()}
  margin: 0;
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
