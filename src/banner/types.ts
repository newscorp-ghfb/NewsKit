import {ReactElement} from 'react';
import {CellProps, GridProps} from '../grid';
import {NewsKitIcon} from '../icons';
import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface BannerBaseProps extends React.AriaAttributes {
  actions?: React.ComponentType[];
  children: Exclude<React.ReactNode, 'undefined'>;
  closeButtonLabel?: string;
  icon?: ReactElement<NewsKitIcon>;
  title?: React.ReactNode;
  onClose?: () => void;
  overrides?: {
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
      spaceInline?: MQ<string>; // Note: spaceInline is used as a gap. Should rename this to gap instead of using logical props.
    };
    content?: {
      spaceInline?: MQ<string>; // Note: LogicalProps can not replace spaceInline! spaceInline = Stack's gap
      title?: {
        stylePreset?: MQ<string>;
        typographyPreset?: MQ<string>;
        spaceStack?: MQ<string>; // Note: spaceStack is used as a gap. Should rename this to gap instead of using logical props.
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
  } & LogicalProps;
}

export interface BannerInternalProps extends BannerBaseProps {
  layout: 'horizontal' | 'vertical';
}

export interface BannerProps extends BannerBaseProps {
  layout?: MQ<'horizontal' | 'vertical'>;
}
