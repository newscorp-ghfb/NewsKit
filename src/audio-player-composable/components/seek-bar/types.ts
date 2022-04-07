import {SliderOverrideProps} from '../../../slider';
import {MQ} from '../../../utils';

export type AudioPlayerSeekBarProps = {
  overrides?: {
    slider?: SliderOverrideProps;
    buffering?: {
      stylePreset?: MQ<string>;
    };
  };
};
