import {IconSizeKeys} from '../themes/newskit-light/spacing';

export interface CircularProgressIndicatorProps {
  $size?: IconSizeKeys;
  hideTrack?: boolean;
  ariaLabel?: string;
  $trackStylePreset?: string;
  $indicatorStylePreset?: string;
}

export type CircularProgressIndicatorSizeProps = Pick<
  CircularProgressIndicatorProps,
  '$size'
>;

export interface CircularTrackProps extends CircularProgressIndicatorSizeProps {
  $trackStylePreset?: string;
}
export interface CircularIndicatorProps
  extends CircularProgressIndicatorSizeProps {
  $indicatorStylePreset?: string;
}
