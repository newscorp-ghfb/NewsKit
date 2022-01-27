import {ReactElement} from 'react';
import {CellProps, GridProps} from '../grid';
import {NewsKitIcon} from '../icons';
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
    spaceInset?: MQ<string>;
    maxWidth?: MQ<string>;
    grid?: {
      props: GridProps;
    };
    cell?: {
      props: CellProps;
    };
    icon?: {
      spaceInline?: MQ<string>;
    };
    content?: {
      spaceInline?: MQ<string>;
      title?: {
        stylePreset?: MQ<string>;
        typographyPreset?: MQ<string>;
        spaceStack?: MQ<string>;
      };
      message?: {
        stylePreset?: MQ<string>;
        typographyPreset?: MQ<string>;
      };
    };

    actions?: {
      spaceInline?: MQ<string>;
      closeButton?: {
        stylePreset?: MQ<string>;
      };
    };
  };
}

export interface BannerInternalProps extends BannerBaseProps {
  layout: 'horizontal' | 'vertical';
}

export interface BannerProps extends BannerBaseProps {
  layout?: MQ<'horizontal' | 'vertical'>;
}
