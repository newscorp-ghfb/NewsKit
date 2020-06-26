import * as React from 'react';
import {SvgProps} from './types';
import {Theme} from '../themes';

export * from './bookmark';
export * from './circle';
export * from './comment';
export * from './copy-link';
export * from './email';
export * from './facebook';
export * from './github';
export * from './menu';
export * from './placeholder';
export * from './save-active';
export * from './save-inactive';
export * from './svg';
export * from './pause';
export * from './play';
export * from './twitter';
export * from './volume-down';
export * from './volume-mute';
export * from './volume-up';
export * from './whatsapp';
export * from './forward10';
export * from './replay10';
export * from './square';
export * from './skip-next';
export * from './skip-previous';
export * from './popout';
export * from './types';
export type IconComponent = React.ComponentType<
  SvgProps & {
    theme?: Theme | undefined;
  }
>;
