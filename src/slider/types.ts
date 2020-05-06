import {Range} from 'react-range';
import {SizingKeys} from '../themes';

type RenderTrackFunction = Range['props']['renderTrack'];
type RenderThumbFunction = Range['props']['renderThumb'];

interface CommonProps {
  disabled?: boolean;
  vertical?: boolean;
  values: number[];
}

export interface StyledTrackProps extends CommonProps {
  isDragged: boolean;
  trackSize?: SizingKeys;
  thumbSize?: SizingKeys;
  stylePreset?: string;
}

export interface ThumbLabelProps extends Omit<StyledTrackProps, 'trackSize'> {
  index: number;
  children: number;
}

export interface SliderStylePresets {
  sliderIndicatorTrackStylePreset?: string;
  sliderThumbStylePreset?: string;
  sliderLabelsStylePreset?: string;
  sliderThumbLabelStylePreset?: string;
  sliderTrackStylePreset?: string;
}

// see https://github.com/tajo/react-range#range--props
interface CommonSliderProps extends CommonProps, SliderStylePresets {
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
  dataTestId?: string;
  trackSize?: SizingKeys;
  thumbSize?: SizingKeys;
  labelStackSpace?: SizingKeys;
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
