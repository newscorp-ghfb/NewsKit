import {IconSizeKeys, StylePresetKeys} from '../theme';
import {SliderOverrideProps} from '../slider';
import {ButtonSize} from '../button';
import {MQ} from '../utils/style';

export interface VolumeControlOverrideProps {
  slider?: SliderOverrideProps;
  button?: {
    stylePreset?: MQ<StylePresetKeys>;
    iconSize?: IconSizeKeys;
    size?: ButtonSize;
  };
}

export interface VolumeControlProps {
  volume: number;
  vertical?: boolean;
  onChange: (volume: number) => void;
  overrides?: VolumeControlOverrideProps;
}
