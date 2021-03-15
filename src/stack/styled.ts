import {css, styled, CSSObject} from '../utils/style';

import {
  Flow,
  ChildProps,
  StyledChildProps,
  StackDistribution,
  StyledStackProps,
} from './types';
import {Theme} from '../theme';
import {ThemeProp} from '../utils/style-types';

const flowDictionary = {
  vertical: 'column',
  horizontal: 'row',
};

const alignmentDictionary = {
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
  theme.spacePresets[spaceToken] &&
  parseInt(theme.spacePresets[spaceToken], 10) !== 0;

const getSpaceInHalf = (theme: Theme, spaceToken: string, negative?: boolean) =>
  `calc(${negative ? '-' : ''}${theme.sizing[spaceToken]}/2)`;

const calculateMargins = (negative?: boolean) => ({
  theme,
  spaceStack,
  spaceInline,
  $wrap,
  flow,
}: ChildProps & ThemeProp) => {
  const hasWrapping = $wrap === 'wrap';

  const hasSpaceStack = hasSpacing(theme, spaceStack);
  const hasSpaceInline = hasSpacing(theme, spaceInline);

  if (!hasSpaceStack && !hasSpaceInline) {
    return undefined;
  }

  const margins = {} as CSSObject;

  const halfSpaceStack = hasSpaceStack
    ? getSpaceInHalf(theme, spaceStack, negative)
    : '';
  const halfSpaceInline = hasSpaceInline
    ? getSpaceInHalf(theme, spaceInline, negative)
    : '';

  if (verticalFlows.includes(flow as Flow)) {
    margins.marginTop = halfSpaceInline;
    margins.marginBottom = halfSpaceInline;

    if (hasWrapping && hasSpaceStack) {
      margins.marginLeft = halfSpaceStack;
      margins.marginRight = halfSpaceStack;
    }
  } /* istanbul ignore next */ else if (
    horizontalFlows.includes(flow as Flow)
  ) {
    margins.marginLeft = halfSpaceInline;
    margins.marginRight = halfSpaceInline;

    if (hasWrapping && hasSpaceStack) {
      margins.marginTop = halfSpaceStack;
      margins.marginBottom = halfSpaceStack;
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
  height: ${({height}) => height || '100%'};
  align-items: ${({flow}) => alignmentDictionary[flow]};
  align-content: ${({flow, $wrap}) => ($wrap ? alignmentDictionary[flow] : '')};
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
  /* Needed for nesting horizontal cards inside a stack:  */
  /* Use min-width to force IE11 recalculate containers width */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    max-width: 100%;
  }

`;

// Stack as list
export const StyledMasterContainerList = styled(StyledMasterContainer)`
  list-style-type: none;
  padding: 0;

  ${({theme, spaceStack, spaceInline, flow}) => {
    const isVertical = [
      Flow.VerticalLeft,
      Flow.VerticalCenter,
      Flow.VerticalRight,
    ].includes(flow as Flow);

    const isHorizontal = [
      Flow.HorizontalTop,
      Flow.HorizontalCenter,
      Flow.HorizontalBottom,
    ].includes(flow as Flow);

    const marginReset =
      (isVertical && hasSpacing(theme, spaceInline)) ||
      (isHorizontal && hasSpacing(theme, spaceStack))
        ? null
        : {
            marginTop: 0,
            marginBottom: 0,
          };
    return marginReset;
  }}
`.withComponent('ul');

export const StyledChildContainerListItem = styled(
  StyledChildContainer,
)``.withComponent('li');
