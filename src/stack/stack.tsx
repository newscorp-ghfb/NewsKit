import React, {ReactChildren} from 'react';
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
import {useTheme, Theme} from '../themes';
import {isStackChild} from '../stack-child';

export const isStack = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,
) =>
  component &&
  component.type &&
  // eslint-disable-next-line no-use-before-define
  component.type.displayName === Stack.displayName;

const wrapChild = (
  $theme: Theme,
  $space: StyledStackProps['$space'],
  $flow: StyledStackProps['$flow'],
  $wrap: StyledStackProps['$wrap'],
) => (
  child: React.ReactNode & {props?: {order?: number; children?: ReactChildren}},
) => {
  const childProps: StyledChildProps = {
    $space,
    $flow,
    $wrap,
  };

  if (isStack(child)) {
    return <Stack flexGrow {...child.props} />;
  }

  if (hasSpacing($theme, $space)) {
    if (isStackChild(child) && child.props.order) {
      const {
        props: {order},
      } = child;
      childProps.$order = order;
    }
    return (
      child && (
        <StyledChildContainer {...childProps}>{child}</StyledChildContainer>
      )
    );
  }
  return child;
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
      $space={space}
      $flow={flow}
      $wrap={wrap}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $flowReverse={flowReverse}
      $stackDistribution={stackDistribution}
      {...props}
    >
      {children &&
        React.Children.map(children, wrapChild(theme, space, flow, wrap))}
    </StyledMasterContainer>
  );
};

Stack.displayName = 'Stack';
