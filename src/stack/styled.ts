import {css, styled, ThemeProp, CSSObject} from '../utils/style';

import {
  Flow,
  StyledChildProps,
  StackDistribution,
  StyledStackProps,
} from './types';

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

const calculateMargins = (negative?: boolean) => ({
  theme,
  space,
  wrap,
  flow,
}: StyledChildProps & ThemeProp) => {
  const hasSpacing = parseInt(theme.sizing[space], 10) !== 0;
  const hasWrapping = wrap === 'wrap';

  if (!hasSpacing) {
    return undefined;
  }

  const margins = {} as CSSObject;
  const halfSpace = `calc(${negative ? '-' : ''}${theme.sizing[space]}/2)`;

  if (verticalFlows.includes(flow as Flow)) {
    margins.marginTop = halfSpace;
    margins.marginBottom = halfSpace;

    if (hasWrapping) {
      margins.marginLeft = halfSpace;
      margins.marginRight = halfSpace;
    }
  } else if (horizontalFlows.includes(flow as Flow)) {
    margins.marginLeft = halfSpace;
    margins.marginRight = halfSpace;

    if (hasWrapping) {
      margins.marginTop = halfSpace;
      margins.marginBottom = halfSpace;
    }
  }

  return margins;
};

export const StyledMasterContainer = styled.div<StyledStackProps>`
  display: flex;
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
  flex-wrap: ${({wrap}) => wrap};
  flex-direction: ${({flow}) =>
    horizontalFlows.includes(flow as Flow)
      ? flowDictionary.horizontal
      : flowDictionary.vertical};

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

  ${calculateMargins(true)};
`;

export const StyledChildContainer = styled.div<StyledChildProps>`
  display: inline-flex;
  ${calculateMargins()}
`;
