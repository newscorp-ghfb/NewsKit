import {Range} from 'react-range';
import {SizingKeys, StylePresetKeys, TypePresetKeys} from '../theme';

type RenderTrackFunction = Range['props']['renderTrack'];
type RenderThumbFunction = Range['props']['renderThumb'];

interface CommonProps {
  disabled?: boolean;
  vertical?: boolean;
  values: number[];
  overrides?: {
    track?: {
      stylePreset?: StylePresetKeys;
      size?: SizingKeys;
    };
    indicator?: {
      stylePreset?: StylePresetKeys;
    };
    thumb?: {
      stylePreset?: StylePresetKeys;
      size?: SizingKeys;
    };
    thumbLabel?: {
      stylePreset?: StylePresetKeys;
      typePreset?: TypePresetKeys;
      space?: SizingKeys;
    };
    labels?: {
      stylePreset?: StylePresetKeys;
      typePreset?: TypePresetKeys;
      space?: SizingKeys;
    };
  };
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
