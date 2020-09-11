import {SizingKeys, SpacePresetKeys} from '../theme';

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
  overrides?: {
    width?: SizingKeys | string;
    input?: {
      stylePreset?: string;
      paddingPreset?: string;
      minHeight?: SizingKeys | string;
      typographyPreset?: string;
      spaceStack?: SpacePresetKeys;
      spaceInline?: SpacePresetKeys;
    };
    label?: {
      stylePreset?: string;
      typographyPreset?: string;
      spaceStack?: SpacePresetKeys;
      spaceInline?: SpacePresetKeys;
    };
    assistiveText?: {
      stylePreset?: string;
      typographyPreset?: string;
    };
  };
}
