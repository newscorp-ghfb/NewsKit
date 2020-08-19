import {MQ} from '../utils/style';
import {HeadlineProps} from '../headline';
import {PaddingPresetKeys, StylePresetKeys} from '../theme';

export type TitleBarOverrides = {
  paddingPreset?: MQ<PaddingPresetKeys>;
  stylePreset?: MQ<StylePresetKeys>;
  heading?: NonNullable<HeadlineProps['overrides']>['heading'];
};

export type ContainerProps = {
  overrides?: TitleBarOverrides;
};

export type TitleBarProps = {
  children: string;
  actionItem?: React.ComponentType;
  headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: TitleBarOverrides;
};
