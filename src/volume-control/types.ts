import {SliderStylePresets, SliderProps} from '../slider';

export interface VolumeControlProps extends SliderStylePresets {
  volume: number;
  vertical?: boolean;
  onChange: (volume: number) => void;
  trackSize?: SliderProps['trackSize'];
  thumbSize?: SliderProps['thumbSize'];
}
