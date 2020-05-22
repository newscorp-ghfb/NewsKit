import React, {ReactChildren} from 'react';
import {Flow, StackDistribution, StackProps, StyledChildProps} from './types';
import {
  StyledMasterContainer,
  StyledMasterContainerList,
  StyledMasterContainerListElement,
  StyledChildContainerListElement,
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
  theme: Theme,
  space: NonNullable<StackProps['space']>,
  flow: NonNullable<StackProps['flow']>,
  wrap: NonNullable<StackProps['wrap']>,
  list: StackProps['list'],
) => (
  child: React.ReactNode & {props?: {order?: number; children?: ReactChildren}},
) => {
  const childProps: StyledChildProps = {
    space,
    flow,
    $wrap: wrap,
  };

  if (isStack(child)) {
    return list ? (
      <StyledMasterContainerListElement flexGrow {...child.props}>
        <Stack flexGrow {...child.props} />
      </StyledMasterContainerListElement>
    ) : (
      <Stack flexGrow {...child.props} />
    );
  }

  if (hasSpacing(theme, space)) {
    if (isStackChild(child) && child.props.order) {
      const {
        props: {order},
      } = child;
      childProps.$order = order;
    }

    if (child) {
      const Container = list
        ? StyledChildContainerListElement
        : StyledChildContainer;

      return <Container {...childProps}>{child}</Container>;
    }
  }
  return list ? <li>{child}</li> : child;
};

export const Stack: React.FC<StackProps> = ({
  space = 'sizing000',
  flow = Flow.VerticalLeft,
  wrap = false,
  stackDistribution = StackDistribution.Start,
  flexGrow = false,
  flexShrink = false,
  flowReverse = false,
  inline = false,
  list,
  ariaLabel,
  children,
  ...props
}) => {
  const theme = useTheme();
  const StyledContainer = list
    ? StyledMasterContainerList
    : StyledMasterContainer;

  return (
    <StyledContainer
      space={space}
      flow={flow}
      $wrap={wrap}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      flowReverse={flowReverse}
      stackDistribution={stackDistribution}
      inline={inline}
      aria-label={ariaLabel}
      {...props}
    >
      {children &&
        React.Children.map(children, wrapChild(theme, space, flow, wrap, list))}
    </StyledContainer>
  );
};

Stack.displayName = 'Stack';
