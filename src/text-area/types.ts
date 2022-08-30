import {TextFieldProps} from '../text-field';

export type TextAreaProps = Omit<
  TextFieldProps,
  'as' | 'startEnhancer' | 'endEnhancer'
> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
