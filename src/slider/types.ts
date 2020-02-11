import {Range} from 'react-range';

type RenderTrackFunction = Range['props']['renderTrack'];
type RenderThumbFunction = Range['props']['renderThumb'];

interface CommonProps {
  disabled?: boolean;
  vertical?: boolean;
  $trackStylePreset?: string;
  values: number[];
}

export interface TrackProps extends CommonProps {
  isDragged: boolean;
}

export interface ThumbLabelProps extends TrackProps {
  index: number;
  children: number;
}

// see https://github.com/tajo/react-range#range--props
interface CommonSliderProps extends CommonProps {
  min: number;
  max: number;
  values: number[];
  onFinalChange?: (values: number[]) => void;
  step?: number;
  ariaLabel?: string;
  minLabel?: string | React.ComponentType;
  maxLabel?: string | React.ComponentType;
  thumbLabel?: boolean | React.ComponentType<ThumbLabelProps>;
  dataTestId?: string;
  $indicatorStylePreset?: string;
  $thumbStylePreset?: string;
  $labelStylePreset?: string;
  renderTrack?: RenderTrackFunction;
  renderThumb?: RenderThumbFunction;
}

export interface SliderProps extends CommonSliderProps {
  onChange: (values: number[]) => void;
}

export interface StatefulSliderProps extends CommonSliderProps {
  onChange?: (values: number[]) => void;
}
