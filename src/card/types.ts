import {ImageProps} from '../image/types';
import {BaseLinkProps} from '../link/types';
import {MQ} from '../utils/style';

export interface CardOverridesProps {
  stylePreset?: MQ<string>;
  mediaContainer?: {
    stylePreset?: MQ<string>;
    spaceInline?: MQ<string>;
  };
  teaserContainer?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
  };
  actionsContainer?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    minHeight?: string;
  };
}
export interface CardProps {
  className?: string;
  href?: string | BaseLinkProps;
  layout?: 'vertical' | 'horizontal' | 'horizontal-reverse';
  media?: ImageProps | React.ComponentType;
  mediaInteractive?: boolean;
  children: Exclude<React.ReactNode, 'undefined'>;
  actions?: React.ComponentType;
  overrides?: CardOverridesProps;
}
