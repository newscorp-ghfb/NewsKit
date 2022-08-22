import {MQ} from '../utils/style/types';
import {LogicalProps} from '../utils/logical-properties';

export type StackChildProps = {
  order?: MQ<number>;
  alignSelf?: MQ<string>;
  children?: React.ReactNode | string;
} & LogicalProps;

export enum AlignSelfValues {
  Auto = 'auto',
  Normal = 'normal',

  /* Positional alignment */

  Center = 'center' /* Put the item at the center */,
  Start = 'start' /* Put the item at the start */,
  End = 'end' /* Put the item at the end */,
  SelfStart = 'self-start' /* Align the item flush at the start */,
  SelfEnd = 'self-end' /* Align the item flush at the end */,
  FlexStart = 'flex-start' /* Put the flex item at the start */,
  FlexEnd = 'flex-end' /* Put the flex item at the end */,

  /* Baseline alignment */

  Baseline = 'baseline',
  FirstBaseline = 'first baseline',
  LastBaseline = 'last baseline',
  Stretch = 'stretch' /* Stretch 'auto'-sized items to fit the container */,

  /* Overflow alignment */

  SafeCenter = 'safe center',
  UnsafeCenter = 'unsafe center',

  /* Global values */

  Inherit = 'inherit',
  Initial = 'initial',
  Unset = 'unset',
}
