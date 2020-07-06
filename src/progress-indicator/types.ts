import {IconSizeKeys} from '../themes/newskit-light/spacing';

export interface CircularProgressIndicatorProps {
  size?: IconSizeKeys;
  hideTrack?: boolean;
  ariaLabel?: string;
  overrides?: {
    track?: {
      stylePreset: string;
    };
    indicator?: {
      stylePreset: string;
    };
  };
}

export type CircularProgressIndicatorSizeProps = Pick<
  CircularProgressIndicatorProps,
  'size'
>;
