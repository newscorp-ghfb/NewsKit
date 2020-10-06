import {SizingKeys, SpacePresetKeys, PaddingPresetKeys} from '../theme';
import {MQ} from '../utils/style';

export enum TextInputSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: TextInputSize;
  disabled?: boolean;
  label: string;
  hideLabel?: boolean;
  assistiveText?: string;
  ariaLabel?: string;
  rules?: Record<string, string | object>;
  dataTestId?: string;
  overrides?: {
    width?: SizingKeys | string;
    input?: {
      stylePreset?: MQ<string>;
      spaceInset?: MQ<PaddingPresetKeys>;
      minHeight?: SizingKeys | string;
      typographyPreset?: MQ<string>;
      spaceStack?: MQ<SpacePresetKeys>;
      spaceInline?: MQ<SpacePresetKeys>;
    };
    label?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      spaceStack?: MQ<SpacePresetKeys>;
      spaceInline?: MQ<SpacePresetKeys>;
    };
    assistiveText?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
  };
}
