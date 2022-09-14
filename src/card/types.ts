import React from 'react';
import {ImageProps} from '../image/types';
import {BaseLinkProps} from '../link/types';
import {LogicalProps, LogicalPaddingProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface CardOverridesProps extends LogicalProps {
  stylePreset?: MQ<string>;
  horizontalRatio?: string;
  mediaContainer?: {
    stylePreset?: MQ<string>;
    spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
  } & LogicalPaddingProps;
  teaserContainer?: {
    stylePreset?: MQ<string>;
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingInline` & `paddingBlock` instead.
     */
    spaceInset?: MQ<string>;
  } & LogicalPaddingProps;
  actionsContainer?: {
    stylePreset?: MQ<string>;
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingInline` & `paddingBlock` instead.
     */
    spaceInset?: MQ<string>;
    minHeight?: string;
  } & LogicalPaddingProps;
}

export type HasHref = {
  hasHref?: boolean;
};

export type CardLayout = 'vertical' | 'horizontal' | 'horizontal-reverse';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string | BaseLinkProps;
  layout?: MQ<CardLayout>;
  media?: ImageProps | React.ComponentType;
  mediaInteractive?: boolean;
  mediaContainerFlex?: boolean;
  children: Exclude<React.ReactNode, 'undefined'>;
  actions?: React.ComponentType;
  overrides?: CardOverridesProps;
}
