import React from 'react';
import {StackProps, Flow, StackDistribution, StyledStackProps} from './types';
import {StyledMasterContainer, StyledChildContainer} from './styled';

const wrapChild = (
  space: StyledStackProps['space'],
  flow: StyledStackProps['flow'],
  wrap: StyledStackProps['wrap'],
) => (child: React.ReactNode) => (
  <StyledChildContainer space={space} flow={flow} wrap={wrap}>
    {child}
  </StyledChildContainer>
);

export const Stack: React.FC<StackProps> = ({
  space = 'sizing000',
  flow = Flow.VerticalLeft,
  wrap = 'nowrap',
  stackDistribution = StackDistribution.Start,
  children,
}) => (
  <StyledMasterContainer
    space={space}
    flow={flow}
    wrap={wrap}
    stackDistribution={stackDistribution}
  >
    {children && space
      ? React.Children.map(children, wrapChild(space, flow, wrap))
      : children}
  </StyledMasterContainer>
);
