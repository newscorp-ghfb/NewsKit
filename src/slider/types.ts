import {Range} from 'react-range';
import {MQ} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';
import {TransitionToken} from '../theme';
import {EventData} from '../instrumentation';

export type RenderTrackFunction = Range['props']['renderTrack'];
type RenderThumbFunction = Range['props']['renderThumb'];

export interface SliderOverrideProps extends LogicalProps {
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
  feedback?: {
    size?: string;
    stylePreset?: MQ<string>;
    transitionPreset?: MQ<TransitionToken> | MQ<TransitionToken[]>;
  };
}

interface CommonProps {
  disabled?: boolean;
  vertical?: boolean;
  values: number[];
  overrides?: SliderOverrideProps;
}
type LabelPositionTypes = 'before' | 'after' | 'inline';
export interface StyledTrackProps extends CommonProps {
  dragged: boolean;
  labelPosition?: LabelPositionTypes;
}

export interface ThumbLabelProps extends StyledTrackProps {
  index: number;
  children: number;
}

// see https://github.com/tajo/react-range#range--props
interface CommonSliderProps
  extends CommonProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  min: number;
  max: number;
  onFinalChange?: (values: number[]) => void;
  step?: number;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  ariaValueText?: string;
  minLabel?: string | React.ComponentType;
  maxLabel?: string | React.ComponentType;
  labelPosition?: LabelPositionTypes;
  thumbLabel?: boolean | React.ComponentType<ThumbLabelProps>;
  thumbIcon?: React.ComponentType;
  dataTestId?: string;
  renderTrack?: RenderTrackFunction;
  renderThumb?: RenderThumbFunction;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
}

export interface SliderProps extends CommonSliderProps, EventData {
  onChange: (values: number[]) => void;
}

export interface StatefulSliderProps extends CommonSliderProps {
  onChange?: (values: number[]) => void;
}
