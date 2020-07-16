import React from 'react';
import {styled, getTypePreset, MQ} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {StylePresetKeys} from '../themes/mappers/style-preset';
import {isInlineElement} from '../utils/inline-tags';
import {TypePresetKeys} from '../themes';

export interface TextBlockProps {
  overrides?: {
    typePreset?: MQ<TypePresetKeys>;
    stylePreset?: MQ<StylePresetKeys>;
  };
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
}

const StyledBlock = styled.p<TextBlockProps>`
  margin: 0;
  padding: 1px 0;
  ${({overrides}) => overrides && overrides.stylePreset && getStylePreset('')}
  ${({overrides}) =>
    overrides &&
    overrides.typePreset &&
    getTypePreset(undefined, '', {withCrop: true})}
  ${({as}) => as && (isInlineElement(as) ? 'display: inline-block;' : '')}
`;

export const TextBlock: React.FC<TextBlockProps> = ({
  overrides = {},
  as,
  ...props
}) => <StyledBlock as={as} overrides={overrides} {...props} />;
