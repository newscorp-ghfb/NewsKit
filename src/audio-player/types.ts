import {TrackControlProps, ControlPresets} from './controls';

// TODO: delete this interface when aligning the audio-player with defaults and overrides
interface SliderPresetOverrides {
  sliderIndicatorTrackStylePreset?: string;
  sliderThumbStylePreset?: string;
  sliderLabelsStylePreset?: string;
  sliderThumbLabelStylePreset?: string;
  sliderTrackStylePreset?: string;
}

export interface AudioPlayerProps
  extends React.AudioHTMLAttributes<HTMLAudioElement>,
    TrackControlProps {
  captionSrc?: string;
  popoutHref?: string;
  volumePresets?: SliderPresetOverrides;
  trackPresets?: SliderPresetOverrides & {
    bufferingStylePreset?: string;
  };
  controlPresets?: Partial<ControlPresets>;
  live?: boolean;
  time?: string;
}
