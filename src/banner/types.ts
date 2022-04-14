import {ReactElement} from 'react';
import {CellProps, GridProps} from '../grid';
import {NewsKitIcon} from '../icons';
import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface BannerOverrides extends LogicalProps {
  stylePreset?: MQ<string>;
  minHeight?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `PaddingInline` & `PaddingBlock` instead.
   */
  spaceInset?: MQ<string>;
  maxWidth?: MQ<string>;
  grid?: {
    props: GridProps;
  };
  cell?: {
    props: CellProps;
  };
  icon?: {
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `MarginInlineEnd` instead.
     */
    spaceInline?: MQ<string>;
    marginInlineEnd?: MQ<string>;
  };
  content?: {
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `MarginInlineEnd and MarginBlockEnd` instead.
     */
    spaceInline?: MQ<string>;
    marginInlineEnd?: MQ<string>;
    marginBlockEnd?: MQ<string>;
    title?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      /**
       * @deprecated This property is deprecated and will be removed in the next major release. Use `MarginBlockEnd` instead.
       */
      spaceStack?: MQ<string>;
      marginBlockEnd?: MQ<string>;
    };
    message?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
  };

  actions?: {
    spaceInline?: MQ<string>; // Note: LogicalProps can not replace spaceInline! spaceInline = Stack's gap
    closeButton?: {
      stylePreset?: MQ<string>;
    };
  };
}

export interface BannerBaseProps extends React.AriaAttributes {
  actions?: React.ComponentType[];
  children: Exclude<React.ReactNode, 'undefined'>;
  closeButtonLabel?: string;
  icon?: ReactElement<NewsKitIcon>;
  title?: React.ReactNode;
  onClose?: () => void;
  overrides?: BannerOverrides;
}

export interface BannerInternalProps extends BannerBaseProps {
  layout: 'horizontal' | 'vertical';
}

export interface BannerProps extends BannerBaseProps {
  layout?: MQ<'horizontal' | 'vertical'>;
}
