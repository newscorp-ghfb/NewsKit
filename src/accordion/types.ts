import {MQ} from '../utils';

export interface AccordionHeaderOverrides {
  minWidth: MQ<string>;
  minHeight: MQ<string>;
  stylePreset: MQ<string>;
  typographyPreset: MQ<string>;
  spaceInset: MQ<string>;
  spaceInline: MQ<string>;
  borderBottom?: MQ<string>;
  borderWidth?: MQ<string>;
  indicatorIcon?: {
    stylePreset: MQ<string>;
  };
  indicatorLabel?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  };
  startEnhancer?: {
    stylePreset?: MQ<string>;
    //   spaceInline?: MQ<string>;
    //   iconSize?: MQ<string>;
  };
}

export interface AccordionPanelOverrides {
  stylePreset?: MQ<string>;
  borderBottom?: MQ<string>;
}

export type AccordionPropsOverrides = {
  header?: AccordionHeaderOverrides;
  panel?: AccordionPanelOverrides;
};

export interface AccordionProps {
  children?: Exclude<React.ReactNode, 'undefined'>;
  disabled?: boolean;
  applyDivider?: boolean;
  header?: Exclude<React.ReactNode, 'undefined'>;
  overrides?: AccordionPropsOverrides;
}
