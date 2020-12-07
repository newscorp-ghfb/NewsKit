import {BaseFlagProps, BaseFlagOverrides} from '../flag';

export enum TabSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TabProps extends BaseFlagProps<BaseFlagOverrides> {
  selected?: boolean;
  ariaLabel?: string;
  tabKey?: number;
  autoFocus?: boolean;
}
