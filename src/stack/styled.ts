import {css, styled, CSSObject} from '../utils/style';

import {
  Flow,
  ChildProps,
  StyledChildProps,
  StackDistribution,
  StyledStackProps,
} from './types';
import {SizingKeys, Theme} from '../theme';
import {ThemeProp} from '../utils/style-types';

export const flowDictionary = {
  vertical: 'column',
  horizontal: 'row',
};

export const alignmentDictionary = {
  'vertical-left': 'flex-start',
  'vertical-center': 'center',
  'vertical-right': 'flex-end',
  'horizontal-top': 'flex-start',
  'horizontal-center': 'center',
  'horizontal-bottom': 'flex-end',
};

const horizontalFlows = [
  Flow.HorizontalBottom,
  Flow.HorizontalCenter,
  Flow.HorizontalTop,
];

const verticalFlows = [
  Flow.VerticalLeft,
  Flow.VerticalCenter,
  Flow.VerticalRight,
];

export const hasSpacing = (theme: Theme, spaceToken: SizingKeys) =>
  theme.sizing[spaceToken] && parseInt(theme.sizing[spaceToken], 10) !== 0;

export const getSpaceInHalf = (
  theme: Theme,
  spaceToken: SizingKeys,
  negative?: boolean,
) => `calc(${negative ? '-' : ''}${theme.sizing[spaceToken]}/2)`;

const calculateMargins = (negative?: boolean) => ({
  theme,
  space,
  spaceStack,
  $wrap,
  flow,
}: ChildProps & ThemeProp) => {
  const hasWrapping = $wrap === 'wrap';

  const hasSpace = hasSpacing(theme, space);
  const hasSpaceStack = hasSpacing(theme, spaceStack);

  if (!hasSpace && !hasSpaceStack) {
    return undefined;
  }

  const margins = {} as CSSObject;

  const halfSpace = hasSpace ? getSpaceInHalf(theme, space, negative) : '';
  const halfSpaceStack = hasSpaceStack
    ? getSpaceInHalf(theme, spaceStack, negative)
    : '';

  if (verticalFlows.includes(flow as Flow)) {
    margins.marginTop = halfSpace || halfSpaceStack;
    margins.marginBottom = halfSpace || halfSpaceStack;

    if (hasWrapping) {
      margins.marginLeft = halfSpace;
      margins.marginRight = halfSpace;
    }
  } /* istanbul ignore next */ else if (
    horizontalFlows.includes(flow as Flow)
  ) {
    margins.marginLeft = halfSpace;
    margins.marginRight = halfSpace;

    if (hasWrapping) {
      margins.marginTop = halfSpace || halfSpaceStack;
      margins.marginBottom = halfSpace || halfSpaceStack;
    }
  }

  return margins;
};

const getFlexDirection = ({flow, flowReverse}: StyledStackProps) => {
  const flexDir = horizontalFlows.includes(flow as Flow)
    ? flowDictionary.horizontal
    : flowDictionary.vertical;
  const reverse = flowReverse ? '-reverse' : '';
  return flexDir + reverse;
};

export const StyledMasterContainer = styled.div<StyledStackProps>`
  display: ${({inline}) => (inline ? 'inline-flex' : 'flex')};
  height: ${({flow}) =>
    [
      Flow.VerticalLeft,
      Flow.VerticalCenter,
      Flow.VerticalRight,
      Flow.HorizontalCenter,
      Flow.HorizontalBottom,
    ].includes(flow as Flow)
      ? '100%'
      : 'auto'};

  align-items: ${({flow}) => alignmentDictionary[flow]};
  flex-wrap: ${({$wrap}) => ($wrap === true ? 'wrap' : $wrap)};
  flex-grow: ${({flexGrow}) => (flexGrow === true ? 1 : flexGrow)};
  flex-shrink: ${({flexShrink}) => (flexShrink === true ? 1 : flexShrink)};
  flex-direction: ${getFlexDirection};

  justify-content: ${({stackDistribution}) =>
    stackDistribution === StackDistribution.SpaceEvenly
      ? StackDistribution.SpaceAround
      : stackDistribution};

  ${({stackDistribution}) =>
    stackDistribution === StackDistribution.SpaceEvenly
      ? css`
          &:before,
          &:after {
            content: '';
            display: block;
          }
        `
      : ''};

  ${calculateMargins(true)}
`;

export const StyledChildContainer = styled.div<StyledChildProps>`
  display: inline-flex;
  ${calculateMargins()}
  order: ${({$order}) => $order};
  align-self: ${({$alignSelf}) => $alignSelf};
`;

// Stack as list
export const StyledMasterContainerList = styled(StyledMasterContainer)`
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
`.withComponent('ul');

export const StyledMasterContainerListItem = styled(StyledMasterContainer)`
  height: 100%;
`.withComponent('li');

export const StyledChildContainerListItem = styled(StyledChildContainer)`
  height: 100%;
`.withComponent('li');

export const StyledListItem = styled.li`
  height: 100%;
`;
