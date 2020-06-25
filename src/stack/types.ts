import {SizingKeys} from '../themes/newskit-light/spacing';
import {AlignSelfValues} from '../stack-child';

export interface CommonStackProps {
  space: SizingKeys;
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
  inline: boolean;
}

export interface StyledStackProps extends CommonStackProps {
  $wrap: boolean | 'wrap' | 'nowrap';
}

export interface StackProps extends Partial<CommonStackProps> {
  wrap?: boolean | 'wrap' | 'nowrap';
  list?: boolean;
  ariaLabel?: string;
}

export interface ChildProps
  extends Pick<StyledStackProps, 'space' | 'flow' | '$wrap'> {
  order?: number;
}

export interface StyledChildProps
  extends Pick<StyledStackProps, 'space' | 'flow' | '$wrap'> {
  $order?: number;
  $alignSelf?: AlignSelfValues;
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
