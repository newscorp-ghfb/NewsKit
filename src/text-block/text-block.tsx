import React from 'react';
import {styled, getTypographyPreset, MQ, getStylePreset} from '../utils/style';
import {StylePresetKeys, TypographyPresetKeys} from '../theme';
import {isInlineElement} from '../utils/inline-tags';

export interface TextBlockProps {
  overrides?: {
    typographyPreset?: MQ<TypographyPresetKeys>;
    stylePreset?: MQ<StylePresetKeys>;
  };
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
}

const StyledBlock = styled.p<TextBlockProps>`
  margin: 0;
  padding: 1px 0;
  ${getStylePreset('textBlock')}
  ${getTypographyPreset('textBlock', '', {withCrop: true})}
  ${({as}) => as && (isInlineElement(as) ? 'display: inline-block;' : '')}
`;

export const TextBlock: React.FC<TextBlockProps> = ({
  overrides = {},
  as,
  ...props
}) => <StyledBlock as={as} overrides={overrides} {...props} />;
