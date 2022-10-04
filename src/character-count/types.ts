import {MQ} from '../utils';
import {FormInputState} from '../form/types';
import {LogicalProps} from '../utils/logical-properties';

export type ValidInputElement = HTMLInputElement | HTMLTextAreaElement;

export type Format = (val: {
  currentLength: number;
  minLength?: number;
  maxLength?: number;
}) => string;

export interface CharacterCountProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'children'> {
  inputRef?: React.RefObject<ValidInputElement>;
  size?: 'small' | 'medium' | 'large';
  state?: FormInputState;
  format?: Format;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    minHeight?: MQ<string>;
  } & LogicalProps;
  minLength?: number;
  maxLength?: number;
}
