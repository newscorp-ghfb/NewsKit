import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

// Caption component will be rebuilt in https://nidigitalsolutions.jira.com/browse/PPDSC-2091 to introduce breaking changes on the interface.
export interface CaptionProps {
  captionText?: string;
  creditText?: string;
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
    /**
     * @deprecated This property is deprecated and will be removed in the next major release.
     */
    spaceStack?: MQ<string>;
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `PaddingInline` & `PaddingBlock` instead.
     */
    spaceInset?: MQ<string>;
    credit?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    };
  } & LogicalProps;
}
