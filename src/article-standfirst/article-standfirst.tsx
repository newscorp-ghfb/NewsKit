import React from 'react';
import {styled, getTypePresetFromTheme} from '../utils/style';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {isInlineElement} from '../utils/inline-tags';

interface ArticleStandfirstProps {
  stylePreset?: string;
  typePreset?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
}

const stylePresetDefault = 'articleStandfirst';
const typePresetDefault = 'articleStandfirst';

const StyledText = styled.h2<ArticleStandfirstProps>`
  ${getStylePresetFromTheme(stylePresetDefault, 'stylePreset', {
    filterStates: ['base'],
    filterStyles: ['color'],
  })};
  ${getTypePresetFromTheme(typePresetDefault, 'typePreset')}
  padding: 1px 0;
  ${({as}) => as && (isInlineElement(as) ? 'display: inline-block' : '')}
`;

export const ArticleStandfirst: React.FC<ArticleStandfirstProps> = ({
  children,
  ...props
}) => <StyledText {...props}>{children}</StyledText>;
