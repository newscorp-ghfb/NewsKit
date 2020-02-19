import {SizingKeys} from '../themes/newskit-light/spacing';

export type StackProps = Partial<StyledStackProps>;

export interface StyledStackProps {
  space: SizingKeys;
  wrap: boolean | 'wrap' | 'nowrap';
  flexGrow: boolean | number;
  flexShrink: boolean | number;
  flowReverse: boolean;
  flow:
    | Flow
    | 'vertical-left'
    | 'vertical-center'
    | 'vertical-right'
    | 'horizontal-top'
    | 'horizontal-center'
    | 'horizontal-bottom';
  stackDistribution:
    | StackDistribution
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
}

export type StyledChildProps = Pick<
  StyledStackProps,
  'space' | 'flow' | 'wrap'
>;

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
