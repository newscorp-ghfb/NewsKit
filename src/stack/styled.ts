/* eslint-disable import/no-extraneous-dependencies */
import {FlexDirectionProperty, FlexWrapProperty, Properties} from 'csstype';
import {css, styled, CSSObject, handleResponsiveProp} from '../utils/style';
import {
  Flow,
  FlexWrap,
  StyledChildProps,
  StyledStackProps,
  DefaultStackProps,
} from './types';
import {Theme} from '../theme';
import {ThemeProp} from '../utils/style-types';
import {logicalProps} from '../utils/logical-properties';

export const DEFAULT_PROPS: DefaultStackProps = {
  spaceStack: 'space000',
  spaceInline: 'space000',
  flow: 'vertical-left',
  wrap: false,
  stackDistribution: 'flex-start',
  flexGrow: false,
  flexShrink: false,
  flowReverse: false,
  inline: false,
  height: undefined,
};

const flowDictionary = {
  vertical: 'column',
  horizontal: 'row',
};

const alignmentDictionary = {
  'vertical-left': 'flex-start',
  'vertical-center': 'center',
  'vertical-right': 'flex-end',
  'vertical-stretch': 'stretch',
  'horizontal-top': 'flex-start',
  'horizontal-center': 'center',
  'horizontal-bottom': 'flex-end',
  'horizontal-stretch': 'stretch',
};

const horizontalFlows = [
  'horizontal-bottom',
  'horizontal-center',
  'horizontal-top',
  'horizontal-stretch',
];

const verticalFlows = [
  'vertical-left',
  'vertical-center',
  'vertical-right',
  'vertical-stretch',
];

export const hasSpacing = (theme: Theme, spaceToken: string) =>
  theme.spacePresets[spaceToken] &&
  parseInt(theme.spacePresets[spaceToken], 10) !== 0;

export const getSpaceInHalf = (
  theme: Theme,
  spaceToken: string,
  negative?: boolean,
) => `calc(${negative ? '-' : ''}${theme.spacePresets[spaceToken]}/2)`;

const calculateMargins = (negative?: boolean) => ({
  theme,
  spaceStack,
  spaceInline,
  $wrap,
  flow,
}: {
  spaceStack: string;
  spaceInline: string;
  $wrap: FlexWrap;
  flow: Flow;
} & ThemeProp) => {
  const hasWrapping = $wrap === 'wrap';

  const hasSpaceStack = hasSpacing(theme, spaceStack);
  const hasSpaceInline = hasSpacing(theme, spaceInline);

  if (!hasSpaceStack && !hasSpaceInline) {
    return {};
  }

  const margins = {} as CSSObject;

  const halfSpaceStack = hasSpaceStack
    ? getSpaceInHalf(theme, spaceStack, negative)
    : '';
  const halfSpaceInline = hasSpaceInline
    ? getSpaceInHalf(theme, spaceInline, negative)
    : '';

  /* istanbul ignore else */
  if (verticalFlows.includes(flow as Flow)) {
    margins.marginTop = halfSpaceInline;
    margins.marginBottom = halfSpaceInline;

    if (hasWrapping && hasSpaceStack) {
      margins.marginLeft = halfSpaceStack;
      margins.marginRight = halfSpaceStack;
    }
  } else if (horizontalFlows.includes(flow as Flow)) {
    margins.marginLeft = halfSpaceInline;
    margins.marginRight = halfSpaceInline;

    if (hasWrapping && hasSpaceStack) {
      margins.marginTop = halfSpaceStack;
      margins.marginBottom = halfSpaceStack;
    }
  }

  return margins;
};

const getFlexDirection = (
  flow: Flow,
  flowReverse: boolean,
): FlexDirectionProperty => {
  const flexDir = horizontalFlows.includes(flow as Flow)
    ? flowDictionary.horizontal
    : flowDictionary.vertical;
  const reverse = flowReverse ? '-reverse' : '';
  return (flexDir + reverse) as FlexDirectionProperty;
};

export const StyledMasterContainer = styled.div<StyledStackProps>`
  ${handleResponsiveProp({inline: DEFAULT_PROPS.inline}, ({inline}) => ({
    display: inline ? 'inline-flex' : 'flex',
  }))}

  ${handleResponsiveProp({$height: DEFAULT_PROPS.height}, ({$height}) => ({
    height: $height || '100%',
  }))}

  ${handleResponsiveProp({flow: DEFAULT_PROPS.flow}, ({flow}) => ({
    alignItems: alignmentDictionary[flow],
  }))}

  ${handleResponsiveProp(
    {flow: DEFAULT_PROPS.flow, $wrap: DEFAULT_PROPS.wrap},
    ({flow, $wrap}) => ({
      alignContent: $wrap ? alignmentDictionary[flow] : '',
    }),
  )}
  
  ${handleResponsiveProp({$wrap: DEFAULT_PROPS.wrap}, ({$wrap}) => ({
    flexWrap: ($wrap === true ? 'wrap' : $wrap) as FlexWrapProperty,
  }))}

  ${handleResponsiveProp({flexGrow: DEFAULT_PROPS.flexGrow}, ({flexGrow}) => ({
    flexGrow: (flexGrow === true ? 1 : flexGrow) as Properties['flexGrow'],
  }))}

  ${handleResponsiveProp(
    {flexShrink: DEFAULT_PROPS.flexShrink},
    ({flexShrink}) => ({
      flexShrink: (flexShrink === true
        ? 1
        : flexShrink) as Properties['flexShrink'],
    }),
  )}

  ${handleResponsiveProp(
    {flow: DEFAULT_PROPS.flow, flowReverse: DEFAULT_PROPS.flowReverse},
    ({flow, flowReverse}) => ({
      flexDirection: getFlexDirection(flow as Flow, flowReverse as boolean),
    }),
  )}
      
  ${handleResponsiveProp(
    {stackDistribution: DEFAULT_PROPS.stackDistribution},
    ({stackDistribution}) => ({
      justifyContent:
        stackDistribution === 'space-evenly'
          ? 'space-around'
          : stackDistribution,
    }),
  )}    

  ${handleResponsiveProp(
    {stackDistribution: DEFAULT_PROPS.stackDistribution},
    ({stackDistribution}) =>
      stackDistribution === 'space-evenly'
        ? css`
            &:before,
            &:after {
              content: '';
              display: block;
            }
          `
        : {},
  )}

  ${handleResponsiveProp(
    {
      $wrap: DEFAULT_PROPS.wrap,
      flow: DEFAULT_PROPS.flow,
      spaceStack: DEFAULT_PROPS.spaceStack,
      spaceInline: DEFAULT_PROPS.spaceInline,
    },
    ({$wrap, flow, spaceStack, spaceInline}, {theme}) =>
      calculateMargins(true)({
        theme,
        $wrap,
        flow: flow as Flow,
        spaceStack,
        spaceInline,
      }),
  )}

  ${logicalProps('stack')}
`;

export const StyledChildContainer = styled.div<StyledChildProps>`
  display: inline-flex;
  ${handleResponsiveProp(
    {
      $wrap: DEFAULT_PROPS.wrap,
      flow: DEFAULT_PROPS.flow,
      spaceStack: DEFAULT_PROPS.spaceStack,
      spaceInline: DEFAULT_PROPS.spaceInline,
    },
    ({$wrap, flow, spaceStack, spaceInline}, {theme}) =>
      calculateMargins(false)({
        theme,
        $wrap,
        flow: flow as Flow,
        spaceStack,
        spaceInline,
      }),
  )}

  ${handleResponsiveProp({$order: undefined}, ({$order}) => ({order: $order}))}
  
  ${handleResponsiveProp({$alignSelf: undefined}, ({$alignSelf}) => ({
    alignSelf: $alignSelf,
  }))}

  ${logicalProps()}
`;

// Stack as list
export const StyledMasterContainerList = styled(StyledMasterContainer)`
  list-style-type: none;
  padding: 0;

  ${handleResponsiveProp(
    {
      spaceStack: DEFAULT_PROPS.spaceStack,
      spaceInline: DEFAULT_PROPS.spaceInline,
      flow: DEFAULT_PROPS.flow,
    },
    ({spaceStack, spaceInline, flow}, {theme}) => {
      const isVertical = [
        'vertical-left',
        'vertical-center',
        'vertical-right',
      ].includes(flow as Flow);

      const isHorizontal = [
        'horizontal-top',
        'horizontal-center',
        'horizontal-bottom',
      ].includes(flow as Flow);

      const marginReset =
        (isVertical && hasSpacing(theme, spaceInline)) ||
        (isHorizontal && hasSpacing(theme, spaceStack))
          ? {}
          : {
              marginTop: 0,
              marginBottom: 0,
            };
      return marginReset;
    },
  )}
`.withComponent('ul');

export const StyledChildContainerListItem = styled(
  StyledChildContainer,
)``.withComponent('li');
