import {NewsKitIconProps} from '../icons';
import {MQ} from '../utils/style';

export interface BannerBaseProps extends React.AriaAttributes {
  actions?: React.ComponentType[];
  children: Exclude<React.ReactNode, 'undefined'>;
  icon?: React.ReactElement<NewsKitIconProps>;
  closeButtonLabel?: string;
  onClose?: () => void;
  overrides?: {
    stylePreset?: MQ<string>;
    minHeight?: MQ<string>;
    spaceInset?: MQ<string>;
    maxWidth?: MQ<string>;
    icon?: {
      spaceInline?: MQ<string>;
    };
    content?: {
      spaceInline?: MQ<string>;
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
