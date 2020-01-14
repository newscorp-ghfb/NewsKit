interface CommonProps {
  disabled?: boolean;
  vertical?: boolean;
  values: number[];
}

export interface TrackProps extends CommonProps {
  isDragged: boolean;
}

export interface ThumbLabelProps extends TrackProps {
  index: number;
  children: number;
}

interface CommonSliderProps extends CommonProps {
  min: number;
  max: number;
  onFinalChange?: (values: number[]) => void;
  step?: number;
  ariaLabel?: string;
  minLabel?: string | React.ComponentType;
  maxLabel?: string | React.ComponentType;
  thumbLabel?: boolean | React.ComponentType<ThumbLabelProps>;
}

export interface SliderProps extends CommonSliderProps {
  onChange: (values: number[]) => void;
}

export interface StatefulSliderProps extends CommonSliderProps {
  onChange?: (values: number[]) => void;
}
