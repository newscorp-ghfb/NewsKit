import React from 'react';
import {
  StackProps,
  Flow,
  StackDistribution,
  StyledStackProps,
  StyledChildProps,
} from './types';
import {
  StyledMasterContainer,
  StyledChildContainer,
  hasSpacing,
} from './styled';
import {useTheme} from '../themes';
import {isStackChild} from '../stack-child';

const wrapChild = (
  space: StyledStackProps['space'],
  flow: StyledStackProps['flow'],
  wrap: StyledStackProps['wrap'],
) => (child: React.ReactNode & {props?: {order?: number}}) => {
  const childProps: StyledChildProps = {
    space,
    flow,
    wrap,
  };

  if (isStackChild(child) && child.props.order) {
    const {
      props: {order},
    } = child;
    childProps.order = order;
  }
  return (
    child && (
      <StyledChildContainer {...childProps}>{child}</StyledChildContainer>
    )
  );
};

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
