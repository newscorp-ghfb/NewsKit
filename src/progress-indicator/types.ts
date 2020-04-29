import {IconSizeKeys} from '../themes/newskit-light/spacing';

export interface CircularProgressIndicatorProps {
  size?: IconSizeKeys;
  hideTrack?: boolean;
  ariaLabel?: string;
  sliderTrackStylePreset?: string;
  sliderIndicatorTrackStylePreset?: string;
}

export type CircularProgressIndicatorSizeProps = Pick<
  CircularProgressIndicatorProps,
  'size'
>;

export interface CircularTrackProps extends CircularProgressIndicatorSizeProps {
  sliderTrackStylePreset?: string;
}
export interface CircularIndicatorProps
  extends CircularProgressIndicatorSizeProps {
  sliderIndicatorTrackStylePreset?: string;
}
