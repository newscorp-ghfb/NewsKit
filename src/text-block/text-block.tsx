import {HTMLAttributes} from 'react';
import {
  styled,
  MQ,
  getStylePresetFromTheme,
  getTypographyPresetFromTheme,
} from '../utils/style';
import {isInlineElement} from '../utils/inline-tags';

export interface TextBlockProps extends HTMLAttributes<HTMLElement> {
  typographyPreset?: MQ<string>;
  stylePreset?: MQ<string>;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
}

const StyledTextBlock = styled.p<TextBlockProps>`
  margin: 0;
  padding: 1px 0;
  ${({stylePreset}) => stylePreset && getStylePresetFromTheme(stylePreset)}
  ${({typographyPreset}) =>
    typographyPreset &&
    getTypographyPresetFromTheme(typographyPreset, undefined, {withCrop: true})}
  ${({as}) => as && (isInlineElement(as) ? 'display: inline-block;' : '')}
`;

export {StyledTextBlock as TextBlock};
