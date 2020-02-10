import {css, styled, getSizingFromTheme} from '../utils/style';

import {StackProps, Flow, ChildProps, StackDistribution} from './types';
import {Theme} from '../themes';
import {SizingKeys} from '../themes/newskit-light/spacing';

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

const isZero = (space: SizingKeys, {sizing}: Theme) =>
  parseInt(sizing[space], 10) === 0;

const calcSize = (space: SizingKeys, theme: Theme) =>
  `calc(-${getSizingFromTheme(space)({theme})}/2)`;

export const StyledMasterContainer = styled.div<StackProps>`
  display: flex;
  height: ${({flow = Flow.VerticalLeft}) =>
    [
      Flow.VerticalLeft,
      Flow.VerticalCenter,
      Flow.VerticalRight,
      Flow.HorizontalCenter,
      Flow.HorizontalBottom,
    ].includes(flow as Flow)
      ? '100%'
      : 'auto'};
  align-items: ${({flow = Flow.VerticalLeft}) => alignmentDictionary[flow]};
  flex-wrap: ${({wrap = 'nowrap'}) => wrap};
  flex-direction: ${({flow = Flow.VerticalLeft}) =>
    flow.includes('horizontal')
      ? flowDictionary.horizontal
      : flowDictionary.vertical};
  justify-content: ${({stackDistribution = StackDistribution.Start}) =>
    stackDistribution === StackDistribution.SpaceEvenly
      ? StackDistribution.SpaceAround
      : stackDistribution};
  ${({stackDistribution = StackDistribution.Start}) =>
    stackDistribution === StackDistribution.SpaceEvenly
      ? css`
          &:before,
          &:after {
            content: '';
            display: block;
          }
        `
      : ''}
      margin-top: ${({
        flow = Flow.VerticalLeft,
        space = 'sizing000',
        theme,
      }) => {
        if (isZero(space, theme) || flow === Flow.HorizontalBottom) {
          return undefined;
        }
        return flow === Flow.HorizontalCenter && !isZero(space, theme)
          ? `calc(-${getSizingFromTheme(space)({theme})}/2)`
          : `-${getSizingFromTheme(space)({theme})}`;
      }};
      margin-left: ${({flow = Flow.VerticalLeft, space = 'sizing000', theme}) =>
        isZero(space, theme) || flow === Flow.VerticalRight
          ? undefined
          : `calc(-${getSizingFromTheme(space)({theme})}/2)`};
      margin-bottom: ${({
        flow = Flow.VerticalLeft,
        space = 'sizing000',
        theme,
      }) => {
        if (
          isZero(space, theme) ||
          [
            Flow.HorizontalTop,
            Flow.HorizontalCenter,
            Flow.VerticalLeft,
            Flow.VerticalCenter,
            Flow.VerticalRight,
          ].includes(flow as Flow)
        ) {
          return undefined;
        }
        return calcSize(space, theme);
      }};
      margin-right: ${({
        flow = Flow.VerticalLeft,
        space = 'sizing000',
        theme,
      }) => {
        if (
          isZero(space, theme) ||
          [Flow.VerticalLeft].includes(flow as Flow)
        ) {
          return undefined;
        }
        return calcSize(space, theme);
      }}
`;

export const StyledChildContainer = styled.div<ChildProps>`
  display: inline-flex;
  ${({flow, space, theme: {sizing}}) => {
    const value = sizing[space];
    const size = parseInt(value, 10) !== 0 ? `calc(${value}/2)` : 0;
    return {
      marginLeft: size,
      marginRight: flow && flow !== Flow.VerticalLeft ? size : 0,
      marginTop: value,
    };
  }}
`;
