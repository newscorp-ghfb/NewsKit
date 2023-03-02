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
    maxWidth?: MQ<string>;
    grid?: {
      props: GridProps;
    };
    cell?: {
      props: CellProps;
    };
    icon?: {
      spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
    };
    content?: {
      spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
      title?: {
        stylePreset?: MQ<string>;
        typographyPreset?: MQ<string>;
        spaceStack?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
      };
      message?: {
        stylePreset?: MQ<string>;
        typographyPreset?: MQ<string>;
      };
    };

    actions?: {
      spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
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
