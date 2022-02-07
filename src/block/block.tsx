import React from 'react';
import {TransitionToken} from '../theme/types';
import {
  styled,
  MQ,
  getSpacingFromTheme,
  getSpacingInsetFromTheme,
  getStylePresetFromTheme,
} from '../utils/style';
import {getTransitionPreset} from '../utils/style/transition-preset';
import {withOwnTheme} from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';

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
  ${getTransitionPreset(`block`, '')};
`;

const ThemelessBlock: React.FC<BlockProps> = props => <StyledDiv {...props} />;

export const Block = withOwnTheme(ThemelessBlock)({defaults, stylePresets});
