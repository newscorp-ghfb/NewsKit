import React from 'react';
import {styled, getTypePresetFromTheme, MQ} from '../utils/style';
import {as as emotionAs} from '../utils/component';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {StylePresetKeys} from '../themes/mappers/style-preset';
import {isInlineElement} from '../utils/inline-tags';

interface Overrides {
  typePreset?: MQ<'body010' | 'body020' | 'body030'>;
  stylePreset?: MQ<StylePresetKeys>;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

export interface TextBlockProps {
  overrides?: Omit<Overrides, 'as'>;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

const StyledBlock = styled.p<Overrides>`
  padding: 1px 0;
  ${getTypePresetFromTheme(undefined, 'typePreset', {withCrop: true})}
  ${getStylePresetFromTheme(undefined, 'stylePreset')}
  ${({as}) => as && (isInlineElement(as) ? '' : 'display: block')}
`;

export const TextBlock: React.FC<TextBlockProps> = ({
  overrides,
  as,
  children,
}) => {
  const asProp = as ? emotionAs(as as keyof JSX.IntrinsicElements) : {};
  return (
    <StyledBlock renderAs={as} {...asProp} {...overrides}>
      {children}
    </StyledBlock>
  );
};
