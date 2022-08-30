import {MQ} from '../utils/style/types';
import {LogicalProps} from '../utils/logical-properties';

export type StackChildProps = {
  order?: MQ<number>;
  alignSelf?: MQ<string>;
  children?: React.ReactNode | string;
} & LogicalProps;
