import React from 'react';
import {NewsKitIconProps} from '../icons';
import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';
import {Override} from '../utils/overrides';
import {TransitionToken} from '../theme';
import {EventData} from '../instrumentation';

export type AccordionIconProps = NewsKitIconProps &
  Pick<AccordionProps, 'expanded'>;

export interface AccordionHeaderOverrides extends LogicalProps {
  minWidth?: MQ<string>;
  minHeight?: MQ<string>;
  stylePreset?: MQ<string>;
  typographyPreset?: MQ<string>;
  spaceInline?: MQ<string>;
  label?: {
    typographyPreset?: MQ<string>;
  };
  indicatorIcon?: Override<AccordionIconProps>;
  transitionPreset?: TransitionToken | TransitionToken[];
}

export interface AccordionPanelOverrides {
  stylePreset?: MQ<string>;
  transitionPreset?: TransitionToken | TransitionToken[];
}

export type AccordionPropsOverrides = {
  header?: AccordionHeaderOverrides;
  panel?: AccordionPanelOverrides;
};

export interface AccordionProps extends EventData {
  children?: Exclude<React.ReactNode, 'undefined'>;
  disabled?: boolean;
  header?: Exclude<React.ReactNode, 'undefined'>;
  headerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  label?: string;
  ariaControls?: string;
  id?: string;
  expanded?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  overrides?: AccordionPropsOverrides;
  onChange?: (expanded: boolean) => void;
}

export type AccordionGroupProps = {
  defaultExpanded?: number | number[] | 'all';
  expanded?: number | number[] | 'all';
  onChange?: (expanded: number[]) => void;
  expandSingle?: boolean;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;
