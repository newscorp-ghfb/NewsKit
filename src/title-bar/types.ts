import React from 'react';
import {MQ, MQPartial} from '../utils/style';

export type TitleBarOverrides = {
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

export type TitleBarProps = {
  children: React.ReactNode;
  actionItem?: React.ComponentType;
  hideActionItemOn?: MQPartial<boolean>;
  headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: TitleBarOverrides;
};
