import {Range} from 'react-range';
import {IconComponent} from '../icons';
import {MQ} from '../utils/style';

type RenderTrackFunction = Range['props']['renderTrack'];
type RenderThumbFunction = Range['props']['renderThumb'];

export interface SliderOverrideProps {
  track?: {
    stylePreset?: MQ<string>;
    size?: string;
  };
  indicator?: {
    stylePreset?: MQ<string>;
  };
  thumb?: {
    stylePreset?: MQ<string>;
    size?: string;
  };
  thumbLabel?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    space?: MQ<string>;
  };
  labels?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    space?: MQ<string>;
  };
}

interface CommonProps {
  disabled?: boolean;
  vertical?: boolean;
  values: number[];
  overrides?: SliderOverrideProps;
}

export interface StyledTrackProps extends CommonProps {
  isDragged: boolean;
}

export interface ThumbLabelProps extends StyledTrackProps {
  index: number;
  children: number;
}

// see https://github.com/tajo/react-range#range--props
interface CommonSliderProps extends CommonProps {
  min: number;
  max: number;
  onFinalChange?: (values: number[]) => void;
  step?: number;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  ariaValueText?: string;
  minLabel?: string | React.ComponentType;
  maxLabel?: string | React.ComponentType;
  labelPosition?: LabelPosition;
  thumbLabel?: boolean | React.ComponentType<ThumbLabelProps>;
  thumbIcon?: IconComponent;
  dataTestId?: string;
  renderTrack?: RenderTrackFunction;
  renderThumb?: RenderThumbFunction;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
}

export interface SliderProps extends CommonSliderProps {
  onChange: (values: number[]) => void;
}

export interface StatefulSliderProps extends CommonSliderProps {
  onChange?: (values: number[]) => void;
}

export enum LabelPosition {
  Before = 'before',
  After = 'after',
  Inline = 'inline',
}
