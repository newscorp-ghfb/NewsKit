import {TextFieldSizeType} from '../text-field';
import {FormInputState} from '../form/types';
import {MQ} from '../utils/style';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  size?: TextFieldSizeType;
  state?: FormInputState;
  children: React.ReactNode;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    spaceStack?: MQ<string>;
    spaceInline?: MQ<string>;
  };
};
