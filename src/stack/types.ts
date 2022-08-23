import {MQ} from '../utils/style/types';
import {LogicalProps} from '../utils/logical-properties';

export type FlexWrap = boolean | 'wrap' | 'nowrap' | 'wrap-reverse';

export type Flow =
  | 'vertical-left'
  | 'vertical-center'
  | 'vertical-right'
  | 'vertical-stretch'
  | 'horizontal-top'
  | 'horizontal-center'
  | 'horizontal-bottom'
  | 'horizontal-stretch';
export type StackDistribution =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export interface CommonStackPropsWithoutMQ {
  spaceStack: string; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
  spaceInline: string; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
  flexGrow: boolean | number;
  flexShrink: boolean | number;
  flowReverse: boolean;
  flow: Flow;
  stackDistribution: StackDistribution;
  inline: boolean;
  height?: string;
}

type AddMQ<T> = {[P in keyof T]: MQ<T[P]>};

type CommonStackProps = AddMQ<CommonStackPropsWithoutMQ> & {
  as?: keyof JSX.IntrinsicElements;
};

export type DefaultStackProps = CommonStackPropsWithoutMQ & {
  wrap: FlexWrap;
};

export interface StyledStackProps extends CommonStackProps {
  $wrap: MQ<FlexWrap>;
  $height?: MQ<string>;
}

export interface StackProps extends Partial<CommonStackProps>, LogicalProps {
  wrap?: MQ<FlexWrap>;
  list?: boolean;
  ariaLabel?: string;
  role?: string;
  children?: React.ReactNode;
}

export interface ChildProps
  extends Pick<
    StyledStackProps,
    'spaceInline' | 'spaceStack' | 'flow' | '$wrap'
  > {
  order?: MQ<number>;
}

export interface StyledChildProps
  extends Pick<
    StyledStackProps,
    'spaceInline' | 'spaceStack' | 'flow' | '$wrap' | 'as'
  > {
  $order?: MQ<number>;
  $alignSelf?: MQ<string>;
  flexGrow?: boolean | number;
}
