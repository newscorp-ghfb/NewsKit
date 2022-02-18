import {TextFieldSizeType} from '../text-field';
import {FormInputState} from '../form/types';
import {MQ} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';

export interface LabelOverrides extends LogicalProps {
  stylePreset?: MQ<string>;
  typographyPreset?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginBlock` instead.
   */
  spaceStack?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginInline` instead.
   */
  spaceInline?: MQ<string>;
}

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  size?: TextFieldSizeType;
  state?: FormInputState;
  children: React.ReactNode;
  overrides?: LabelOverrides;
};
