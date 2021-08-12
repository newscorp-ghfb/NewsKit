import React from 'react';
import {MQ} from '../utils/style';
import {BaseFlagProps, BaseFlagOverrides} from '../flag';
import {DividerOverrides} from '../divider';
import {ScrollProps} from '../scroll';

export enum TabAlign {
  Start = 'start',
  End = 'end',
  Center = 'center',
}

export enum TabSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum TabsDistribution {
  Start = 'start',
  Grow = 'grow',
  Equal = 'equal',
}

export enum TabsIndicatorPosition {
  Start = 'start',
  End = 'end',
  None = 'none',
}

export interface TabsProps {
  size?: TabSize;
  children: React.ReactElement<TabProps>[];
  divider?: boolean;
  vertical?: boolean;
  distribution?: TabsDistribution;
  initialSelectedIndex?: number;
  indicatorPosition?: TabsIndicatorPosition;
  align?: TabAlign;
  onChange?: (selectedIndex: number) => void;
  overrides?: {
    spaceInline?: MQ<string>;
    divider?: DividerOverrides;
    tab?: {
      spaceInline?: MQ<string>;
    };
    selectionIndicator?: {
      track?: {
        weight?: MQ<string>;
        stylePreset?: MQ<string>;
      };
      indicator?: {
        size?: string;
        weight?: string;
        motionDuration?: string;
        motionTiming?: string;
        stylePreset?: MQ<string>;
      };
    };
    scroll?: ScrollProps['overrides'];
  };
}

export interface TabPanelProps {
  children: React.ReactNode;
  id?: string;
  selected?: boolean;
  overrides?: {
    typographyPreset?: MQ<string>;
  };
}

export interface DistributionWrapperProps {
  distribution: TabsDistribution;
  vertical: boolean;
  last: boolean;
  overrides?: TabsProps['overrides'];
}

export interface TabProps {
  label: React.ReactNode;
  children: React.ReactNode;
  ariaLabel?: string;
  autoFocus?: boolean;
  dataTestId?: string;
  overrides?: BaseFlagOverrides;
  disabled?: boolean;
}

export interface TabsBarProps
  extends Pick<TabsProps, 'overrides' | 'vertical'> {}

export interface TabInternalProps extends BaseFlagProps<BaseFlagOverrides> {
  selected?: boolean;
  ariaLabel?: string;
  tabKey?: number;
  autoFocus?: boolean;
  dataTestId?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  align?: TabAlign;
}
