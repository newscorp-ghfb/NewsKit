import {TextFieldSize} from '../text-field';
import {FormInputState} from '../form/types';
import {MQ} from '../utils/style';

export type AssistiveTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: TextFieldSize;
  state?: FormInputState;
  children: React.ReactNode;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    minHeight?: MQ<string>;
  };
};
