interface CommonProps {
  disabled?: boolean;
  vertical?: boolean;
  values: number[];
  $trackStylePreset?: string;
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
  onFinalChange?: (values: number[]) => void;
  step?: number;
  ariaLabel?: string;
  minLabel?: string | React.ComponentType;
  maxLabel?: string | React.ComponentType;
  thumbLabel?: boolean | React.ComponentType<ThumbLabelProps>;
  $indicatorStylePreset?: string;
  $thumbStylePreset?: string;
  $labelStylePreset?: string;
  dataTestId?: string;
}

export interface SliderProps extends CommonSliderProps {
  onChange: (values: number[]) => void;
}

export interface StatefulSliderProps extends CommonSliderProps {
  onChange?: (values: number[]) => void;
}
