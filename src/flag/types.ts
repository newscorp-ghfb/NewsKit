import {LogicalProps} from '../utils/logical-properties';
import {TransitionToken} from '../theme/types';
import {MQ} from '../utils/style';

export enum FlagSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface BaseFlagOverrides extends LogicalProps {
  typographyPreset?: MQ<string>;
  stylePreset?: MQ<string>;
  transitionPreset?: TransitionToken | TransitionToken[];
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingBlock` and `paddingInline` instead.
   */
  spaceInset?: MQ<string>;
  spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
  width?: MQ<string>;
  height?: MQ<string>;
  minWidth?: MQ<string>;
  minHeight?: MQ<string>;
  maxWidth?: MQ<string>;
  maxHeight?: MQ<string>;
  iconSize?: MQ<string>;
}

export interface BaseFlagProps<TOverrides> {
  disabled?: boolean;
  loading?: boolean;
  overrides?: TOverrides;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}
export interface FlagProps
  extends BaseFlagProps<Omit<BaseFlagOverrides, 'transitionPreset'>> {}
