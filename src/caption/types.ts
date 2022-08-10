import React from 'react';
import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

// Caption component will be rebuilt in https://nidigitalsolutions.jira.com/browse/PPDSC-2091 to introduce breaking changes on the interface.
export interface CaptionProps {
  children: React.ReactNode;
  captionText?: string;
  creditText?: string;
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
    spaceStack?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingInline` & `paddingBlock` instead.
     */
    spaceInset?: MQ<string>;
    credit?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    };
  } & LogicalProps;
}
