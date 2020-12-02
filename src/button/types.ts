import {EventData} from '../instrumentation/types';
import {BaseFlagOverrides, BaseFlagProps} from '../flag/types';
import {MQ} from '../utils/style';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ButtonOverrides extends BaseFlagOverrides {
  loadingIndicator?: {
    stylePreset?: MQ<string>;
  };
}

export interface ButtonProps
  extends BaseFlagProps<ButtonOverrides>,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    EventData {
  size?: ButtonSize;
  loading?: boolean;
}

export interface IconButtonProps extends ButtonProps {
  'aria-label': string;
}
