import React from 'react';
import {
  styled,
  getStylePresetFromTheme,
  getTypographyPresetFromTheme,
} from '../utils/style';
import {isInlineElement} from '../utils/inline-tags';
import {TextBlockProps} from './types';
import {logicalProps} from '../utils/logical-properties';

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
  ${logicalProps()}
`;

export const TextBlock = React.forwardRef<HTMLParagraphElement, TextBlockProps>(
  ({...props}, ref) => <StyledTextBlock {...props} ref={ref} />,
);
