import React from 'react';
import {LogicalProps, logicalProps} from '../utils/logical-properties';
import {TransitionToken} from '../theme/types';
import {
  styled,
  MQ,
  getSpacingFromTheme,
  getSpacingInsetFromTheme,
  getStylePresetFromTheme,
} from '../utils/style';
import {getTransitionPresetFromTheme} from '../utils/style/transition-preset';

export interface BlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    LogicalProps {
  as?: keyof JSX.IntrinsicElements;
  stylePreset?: MQ<string>;
  transitionPreset?: TransitionToken | TransitionToken[];
   /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingBlock` and `paddingInline` instead.
   */
  spaceInset?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginInline` instead.
   */
  spaceInline?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginBlock` instead.
   */
  spaceStack?: MQ<string>;
}

const StyledDiv = styled.div<BlockProps>`
  ${logicalProps()}
  ${({stylePreset}) => stylePreset && getStylePresetFromTheme(stylePreset)}
  ${({spaceInset}) => spaceInset && getSpacingInsetFromTheme(spaceInset)}
  ${({spaceInline}) =>
    spaceInline && getSpacingFromTheme(spaceInline, undefined, 'marginRight')}
  ${({spaceStack}) =>
    spaceStack && getSpacingFromTheme(spaceStack, undefined, 'marginBottom')}
  ${({transitionPreset}) =>
    transitionPreset && getTransitionPresetFromTheme(transitionPreset)};
`;

export const Block: React.FC<BlockProps> = props => <StyledDiv {...props} />;
