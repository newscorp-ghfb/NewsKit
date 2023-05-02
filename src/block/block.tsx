import React from 'react';
import {LogicalProps, logicalProps} from '../utils/logical-properties';
import {TransitionToken} from '../theme/types';
import {
  styled,
  MQ,
  getSpacingFromTheme,
  getStylePresetFromTheme,
  ContainerQueryProps,
} from '../utils/style';
import {getTransitionPresetFromTheme} from '../utils/style/transition-preset';

export interface BlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    LogicalProps,
    ContainerQueryProps {
  as?: keyof JSX.IntrinsicElements;
  stylePreset?: MQ<string>;
  transitionPreset?: TransitionToken | TransitionToken[];
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginInlineEnd` instead.
   */
  spaceInline?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginBlockEnd` instead.
   */
  spaceStack?: MQ<string>;
}

const StyledDiv = styled.div<BlockProps>`
  ${({containerType}) => containerType && `container-type: ${containerType}`}
  ${({containerName}) => containerName && `container-name: ${containerName}`}
  ${({stylePreset}) => stylePreset && getStylePresetFromTheme(stylePreset)}
  ${({spaceInline}) =>
    spaceInline && getSpacingFromTheme(spaceInline, undefined, 'marginRight')}
  ${({spaceStack}) =>
    spaceStack && getSpacingFromTheme(spaceStack, undefined, 'marginBottom')}
  ${logicalProps()}
  ${({transitionPreset}) =>
    transitionPreset && getTransitionPresetFromTheme(transitionPreset)};
`;

export const Block = React.forwardRef<HTMLDivElement, BlockProps>(
  ({...props}, ref) => <StyledDiv {...props} ref={ref} />,
);
