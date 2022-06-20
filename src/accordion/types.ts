import React from 'react';
import {NewsKitIconProps} from '../icons';
import {MQ} from '../utils';
import {LogicalPaddingProps} from '../utils/logical-properties';
import {Override} from '../utils/overrides';

export type AccordionIconProps = NewsKitIconProps &
  Pick<AccordionProps, 'expanded'>;
export interface AccordionHeaderOverrides extends LogicalPaddingProps {
  minWidth?: MQ<string>;
  minHeight?: MQ<string>;
  stylePreset?: MQ<string>;
  typographyPreset?: MQ<string>;
  spaceInline?: MQ<string>;
  label?: {
    typographyPreset?: MQ<string>;
  };
  indicatorIcon?: Override<AccordionIconProps>;
}

export type AccordionPropsOverrides = {
  header?: AccordionHeaderOverrides;
  panel?: {
    stylePreset?: MQ<string>;
  };
};

export interface AccordionProps {
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
  defaultExpanded?: number | number[];
  expanded?: number | number[];
  onChange?: (expanded: number[]) => void;
  single?: boolean;
  children?:
    | React.ReactElement<AccordionProps>
    | React.ReactElement<AccordionProps>[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;
