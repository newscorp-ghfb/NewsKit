import React, {ReactChildren} from 'react';
import {Flow, StackDistribution, StackProps, StyledChildProps} from './types';
import {
  StyledMasterContainer,
  StyledMasterContainerList,
  StyledMasterContainerListElement,
  StyledChildContainerListElement,
  StyledListItem,
  StyledChildContainer,
  hasSpacing,
} from './styled';
import {useTheme, Theme} from '../themes';
import {StackChild, AlignSelfValues} from '../stack-child';
import {hasMatchingDisplayNameWith, as as asUtil} from '../utils/component';

const asInline = (inline?: StackProps['inline'], as?: StackProps['as']) => {
  if (as) {
    return asUtil(as);
  }
  return inline ? asUtil(as || 'span') : null;
};

const wrapChild = (
  theme: Theme,
  space: NonNullable<StackProps['space']>,
  flow: NonNullable<StackProps['flow']>,
  wrap: NonNullable<StackProps['wrap']>,
  list: StackProps['list'],
  inline: NonNullable<StackProps['inline']>,
  as?: StackProps['as'],
) => (
  child: React.ReactNode & {
    props?: {
      order?: number;
      children?: ReactChildren;
      alignSelf?: AlignSelfValues;
    };
  },
) => {
  const childProps: StyledChildProps = {
    space,
    flow,
    $wrap: wrap,
  };

  // eslint-disable-next-line no-use-before-define
  if (hasMatchingDisplayNameWith(child, Stack)) {
    const stack = <Stack inline={inline} as={as} flexGrow {...child.props} />;
    return list ? (
      <StyledMasterContainerListElement flexGrow {...child.props}>
        {stack}
      </StyledMasterContainerListElement>
    ) : (
      stack
    );
  }

  if (hasSpacing(theme, space)) {
    if (hasMatchingDisplayNameWith(child, StackChild)) {
      if (child.props.order) {
        const {
          props: {order},
        } = child;
        childProps.$order = order;
      }

      if (child.props.alignSelf) {
        const {
          props: {alignSelf},
        } = child;
        childProps.$alignSelf = alignSelf;
      }
    }

    if (child) {
      const Container = list
        ? StyledChildContainerListElement
        : StyledChildContainer;

      return (
        <Container {...asInline(inline, as)} {...childProps}>
          {hasMatchingDisplayNameWith(child, StackChild) && child.props.children
            ? child.props.children
            : child}
        </Container>
      );
    }
  }
  return list ? <StyledListItem>{child}</StyledListItem> : child;
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
  as,
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
      {...asInline(inline, as)}
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
        React.Children.map(
          children,
          wrapChild(theme, space, flow, wrap, list, inline, as),
        )}
    </StyledContainer>
  );
};

Stack.displayName = 'Stack';
