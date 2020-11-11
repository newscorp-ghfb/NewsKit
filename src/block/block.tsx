import React from 'react';
import {
  styled,
  MQ,
  getSpacingFromTheme,
  getSpacingInsetFromTheme,
  getStylePresetFromTheme,
} from '../utils/style';

export interface BlockProps {
  as?: keyof JSX.IntrinsicElements;
  stylePreset?: MQ<string>;
  spaceInset?: MQ<string>;
  spaceInline?: MQ<string>;
  spaceStack?: MQ<string>;
}

const StyledDiv = styled.div<BlockProps>`
  ${({stylePreset}) => stylePreset && getStylePresetFromTheme(stylePreset)}
  ${({spaceInset}) => spaceInset && getSpacingInsetFromTheme(spaceInset)}
  ${({spaceInline}) =>
    spaceInline && getSpacingFromTheme(spaceInline, undefined, 'marginRight')}
  ${({spaceStack}) =>
    spaceStack && getSpacingFromTheme(spaceStack, undefined, 'marginBottom')}
`;

export const Block: React.FC<BlockProps> = props => <StyledDiv {...props} />;
