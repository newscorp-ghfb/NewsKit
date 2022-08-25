/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {StackProps, StyledChildProps} from './types';
import {
  StyledMasterContainer,
  StyledMasterContainerList,
  StyledChildContainer,
  StyledChildContainerListItem,
  DEFAULT_PROPS,
} from './styled';
import {StackChild, StackChildProps} from '../stack-child';
import {hasMatchingDisplayNameWith, as as asUtil} from '../utils/component';
import {MQ} from '../utils/style/types';
import {extractLogicalPropsFromOverrides} from '../utils/logical-properties';

const getAsProp = (as: StackProps['as'], list: StackProps['list']) =>
  !list && as ? asUtil(as) : null;

const hasSpacing = (spaceStack: MQ<string>, spaceInline: MQ<string>) => {
  if (
    spaceStack &&
    ((typeof spaceStack === 'string' &&
      spaceStack !== DEFAULT_PROPS.spaceStack) ||
      (typeof spaceStack === 'object' && Object.keys(spaceStack).length > 0))
  ) {
    return true;
  }
  if (
    spaceInline &&
    ((typeof spaceInline === 'string' &&
      spaceInline !== DEFAULT_PROPS.spaceInline) ||
      (typeof spaceInline === 'object' && Object.keys(spaceInline).length > 0))
  ) {
    return true;
  }

  return false;
};

const wrapChild = (
  spaceStack: NonNullable<StackProps['spaceStack']>,
  spaceInline: NonNullable<StackProps['spaceInline']>,
  flow: NonNullable<StackProps['flow']>,
  wrap: NonNullable<StackProps['wrap']>,
  list: StackProps['list'],
  inline: NonNullable<StackProps['inline']>,
  as?: StackProps['as'],
) => (
  child: React.ReactNode & {
    props?: StackChildProps;
  },
) => {
  if (!child) return null;

  const childProps: StyledChildProps = {
    spaceStack,
    spaceInline,
    flow,
    $wrap: wrap,
    ...extractLogicalPropsFromOverrides(child.props),
  };
  const hasSpace = hasSpacing(spaceStack, spaceInline);

  const renderAs = getAsProp(as, list);

  const ChildContainer = list
    ? StyledChildContainerListItem
    : StyledChildContainer;

  // If child is a Stack component

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  if (hasMatchingDisplayNameWith(child, Stack)) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const stack = <Stack inline={inline} as={as} {...child.props} />;

    return list || hasSpace ? (
      <ChildContainer {...renderAs} {...childProps}>
        {stack}
      </ChildContainer>
    ) : (
      stack
    );
  }

  // If child is a StackChild component

  if (hasMatchingDisplayNameWith(child, StackChild)) {
    if (child.props.order) {
      childProps.$order = child.props.order;
    }

    if (child.props.alignSelf) {
      childProps.$alignSelf = child.props.alignSelf;
    }

    return (
      <ChildContainer {...renderAs} {...childProps}>
        {child.props.children}
      </ChildContainer>
    );
  }

  // If child is anything else
  return list || hasSpace ? (
    <ChildContainer {...renderAs} {...childProps}>
      {child}
    </ChildContainer>
  ) : (
    child
  );
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      spaceStack = DEFAULT_PROPS.spaceStack,
      spaceInline = DEFAULT_PROPS.spaceInline,
      flow = DEFAULT_PROPS.flow,
      wrap = DEFAULT_PROPS.wrap,
      stackDistribution = DEFAULT_PROPS.stackDistribution,
      flexGrow = DEFAULT_PROPS.flexGrow,
      flexShrink = DEFAULT_PROPS.flexShrink,
      flowReverse = DEFAULT_PROPS.flowReverse,
      inline = DEFAULT_PROPS.inline,
      as,
      list,
      ariaLabel,
      children,
      role,
      height,
      ...props
    },
    ref,
  ) => {
    const MasterContainer = list
      ? StyledMasterContainerList
      : StyledMasterContainer;

    return (
      <MasterContainer
        ref={ref}
        {...getAsProp(as, list)}
        spaceStack={spaceStack}
        spaceInline={spaceInline}
        flow={flow}
        $wrap={wrap}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        flowReverse={flowReverse}
        stackDistribution={stackDistribution}
        inline={inline}
        aria-label={ariaLabel}
        role={role}
        $height={height}
        {...props}
      >
        {children &&
          React.Children.map(
            children,
            wrapChild(spaceStack, spaceInline, flow, wrap, list, inline, as),
          )}
      </MasterContainer>
    );
  },
);

Stack.displayName = 'Stack';
