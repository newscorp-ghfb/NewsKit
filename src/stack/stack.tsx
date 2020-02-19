import React from 'react';
import {StackProps, Flow, StackDistribution, StyledStackProps} from './types';
import {
  StyledMasterContainer,
  StyledChildContainer,
  hasSpacing,
} from './styled';
import {useTheme} from '../themes';

const wrapChild = (
  space: StyledStackProps['space'],
  flow: StyledStackProps['flow'],
  wrap: StyledStackProps['wrap'],
) => (child: React.ReactNode) =>
  child && (
    <StyledChildContainer space={space} flow={flow} wrap={wrap}>
      {child}
    </StyledChildContainer>
  );

export const Stack: React.FC<StackProps> = ({
  space = 'sizing000',
  flow = Flow.VerticalLeft,
  wrap = false,
  stackDistribution = StackDistribution.Start,
  flexGrow = false,
  flexShrink = false,
  flowReverse = false,
  children,
  ...props
}) => {
  const theme = useTheme();
  return (
    <StyledMasterContainer
      space={space}
      flow={flow}
      wrap={wrap}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      flowReverse={flowReverse}
      stackDistribution={stackDistribution}
      {...props}
    >
      {children && hasSpacing(theme, space)
        ? React.Children.map(children, wrapChild(space, flow, wrap))
        : children}
    </StyledMasterContainer>
  );
};
