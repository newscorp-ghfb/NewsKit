import React from 'react';
import {MQ} from '../utils/style';
import {BaseFlagProps, BaseFlagOverrides} from '../flag';
import {DividerProps} from '../divider';

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
  overrides?: {
    spaceInline?: MQ<string>;
    divider?: DividerProps['overrides'];
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
  numberOfSiblings: number;
  vertical: boolean;
}

export interface TabProps {
  label: React.ReactNode;
  children: React.ReactNode;
  ariaLabel?: string;
  autoFocus?: boolean;
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  align?: TabAlign;
}
