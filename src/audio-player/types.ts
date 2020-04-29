import {TrackControlProps, ControlPresets} from './controls';
import {SliderStylePresets} from '../slider';

export interface AudioPlayerProps
  extends React.AudioHTMLAttributes<HTMLAudioElement>,
    TrackControlProps {
  captionSrc?: string;
  popoutHref?: string;
  volumePresets?: SliderStylePresets;
  trackPresets?: SliderStylePresets & {bufferingStylePreset?: string};
  controlPresets?: Partial<ControlPresets>;
  live?: boolean;
  time?: string;
}
