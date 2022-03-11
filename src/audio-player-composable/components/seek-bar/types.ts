import {SliderOverrideProps} from '../../../slider';
import {MQ} from '../../../utils';

export type SeekBarProps = {
  overrides?: {
    slider?: SliderOverrideProps;
    buffering?: {
      stylePreset?: MQ<string>;
    };
  };
};
