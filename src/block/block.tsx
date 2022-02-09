import React from 'react';
import {TransitionToken} from '../theme/types';
import {
  styled,
  MQ,
  getSpacingFromTheme,
  getSpacingInsetFromTheme,
  getStylePresetFromTheme,
} from '../utils/style';
import {getTransitionPresetFromTheme} from '../utils/style/transition-preset';

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  stylePreset?: MQ<string>;
  overrides?: {
    transitionPreset?: TransitionToken | TransitionToken[];
  };
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
  ${({overrides}) =>
    overrides && getTransitionPresetFromTheme('backgroundColorChange')};
`;

export const Block: React.FC<BlockProps> = props => <StyledDiv {...props} />;
