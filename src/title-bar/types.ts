import React from 'react';
import {LogicalProps} from '../utils/logical-properties';
import {MQ, MQPartial} from '../utils/style';

export type TitleBarOverrides = {
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingBlock` and `paddingInline` instead.
   */
  spaceInset?: MQ<string>;
  stylePreset?: MQ<string>;
  heading?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  };
};

export type ContainerProps = {
  overrides?: TitleBarOverrides;
};

export interface TitleBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  actionItem?: React.ComponentType;
  hideActionItemOn?: MQPartial<boolean>;
  headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: TitleBarOverrides & LogicalProps;
}
