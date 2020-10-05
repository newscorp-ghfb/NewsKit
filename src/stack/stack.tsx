import React, {ReactChildren} from 'react';
import {Flow, StackDistribution, StackProps, StyledChildProps} from './types';
import {
  StyledMasterContainer,
  StyledMasterContainerList,
  StyledChildContainer,
  StyledChildContainerListItem,
  hasSpacing,
} from './styled';
import {useTheme, Theme} from '../theme';
import {StackChild, AlignSelfValues} from '../stack-child';
import {hasMatchingDisplayNameWith, as as asUtil} from '../utils/component';

const getAsProp = (as: StackProps['as'], list: StackProps['list']) =>
  !list && as ? asUtil(as) : null;

const wrapChild = (
  theme: Theme,
  spaceStack: NonNullable<StackProps['spaceStack']>,
  spaceInline: NonNullable<StackProps['spaceInline']>,
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
  if (!child) return null;

  const childProps: StyledChildProps = {
    spaceStack,
    spaceInline,
    flow,
    $wrap: wrap,
  };
  const hasSpace =
    hasSpacing(theme, spaceStack) || hasSpacing(theme, spaceInline);

  const renderAs = getAsProp(as, list);

  const ChildContainer = list
    ? StyledChildContainerListItem
    : StyledChildContainer;

  // If child is a Stack component
  // eslint-disable-next-line no-use-before-define
  if (hasMatchingDisplayNameWith(child, Stack)) {
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

export const Stack: React.FC<StackProps> = ({
  spaceStack = 'sizing000',
  spaceInline = 'sizing000',
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
  role,
  ...props
}) => {
  const theme = useTheme();
  const MasterContainer = list
    ? StyledMasterContainerList
    : StyledMasterContainer;

  return (
    <MasterContainer
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
      {...props}
    >
      {children &&
        React.Children.map(
          children,
          wrapChild(
            theme,
            spaceStack,
            spaceInline,
            flow,
            wrap,
            list,
            inline,
            as,
          ),
        )}
    </MasterContainer>
  );
};

Stack.displayName = 'Stack';
