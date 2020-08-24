import {SizingKeys} from '../theme';

export interface VolumeControlProps {
  volume: number;
  vertical?: boolean;
  onChange: (volume: number) => void;
  // all the following fields are used to override the props of the slider
  // they have to be moved to overrides object when aligning the volume control component
  trackSize?: SizingKeys;
  thumbSize?: SizingKeys;
  sliderIndicatorTrackStylePreset?: string;
  sliderThumbStylePreset?: string;
  sliderLabelsStylePreset?: string;
  sliderThumbLabelStylePreset?: string;
  sliderTrackStylePreset?: string;
}
