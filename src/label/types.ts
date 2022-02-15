import {TextFieldSizeType} from '../text-field';
import {FormInputState} from '../form/types';
import {MQ} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';

export interface LabelOverrides extends LogicalProps {
  stylePreset?: MQ<string>;
  typographyPreset?: MQ<string>;
  spaceStack?: MQ<string>;
  spaceInline?: MQ<string>;
}

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  size?: TextFieldSizeType;
  state?: FormInputState;
  children: React.ReactNode;
  overrides?: LabelOverrides;
};
