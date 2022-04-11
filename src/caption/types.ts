import {LogicalMargins} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface CaptionOverrides extends LogicalMargins {
  typographyPreset?: MQ<string>;
  stylePreset?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `gap` instead.
   */
  spaceStack?: MQ<string>;

  gap?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `PaddingInline` & `PaddingBlock` instead.
   */
  spaceInset?: MQ<string>;
  credit?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
}
export interface CaptionProps {
  captionText?: string;
  creditText?: string;
  overrides?: CaptionOverrides;
}
