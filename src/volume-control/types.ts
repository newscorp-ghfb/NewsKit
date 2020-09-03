import {IconSizeKeys} from '../theme';
import {SliderOverrideProps} from '../slider';
import {ButtonSize} from '../button';

export interface VolumeControlProps {
  volume: number;
  vertical?: boolean;
  onChange: (volume: number) => void;
  overrides?: {
    slider?: SliderOverrideProps;
    button?: {
      stylePreset?: string;
      iconSize?: IconSizeKeys;
      size?: ButtonSize;
    };
  };
}
