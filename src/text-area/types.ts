import {FormInputState} from '../form/types';
import {EventData} from '../instrumentation';
import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    EventData {
  size?: 'small' | 'medium' | 'large';
  state?: FormInputState;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  overrides: {
    width?: MQ<string>;
    height?: MQ<string>;
    maxWidth?: MQ<string>;
    maxHeight?: MQ<string>;
    minWidth?: MQ<string>;
    minHeight?: MQ<string>;
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  } & LogicalProps;
}
