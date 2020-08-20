import {EventData} from '../instrumentation/types';
import {FlagProps} from '../flag';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ButtonProps
  extends Omit<FlagProps, 'size'>,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    EventData {
  size?: ButtonSize;
  isLoading?: boolean;
}
