import {SizingKeys} from '../themes/newskit-light/spacing';

export interface StackProps {
  flow?:
    | Flow
    | 'vertical-left'
    | 'vertical-center'
    | 'vertical-right'
    | 'horizontal-top'
    | 'horizontal-center'
    | 'horizontal-bottom';
  stackDistribution?:
    | StackDistribution
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  space?: SizingKeys;
  wrap?: 'wrap' | 'nowrap';
}

export interface ChildProps {
  space: SizingKeys;
  flow?:
    | Flow
    | 'vertical-left'
    | 'vertical-center'
    | 'vertical-right'
    | 'horizontal-top'
    | 'horizontal-center'
    | 'horizontal-bottom';
}

export enum Flow {
  VerticalLeft = 'vertical-left',
  VerticalCenter = 'vertical-center',
  VerticalRight = 'vertical-right',
  HorizontalTop = 'horizontal-top',
  HorizontalCenter = 'horizontal-center',
  HorizontalBottom = 'horizontal-bottom',
}

export enum StackDistribution {
  Start = 'flex-start',
  End = 'flex-end',
  Center = 'center',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly',
}
