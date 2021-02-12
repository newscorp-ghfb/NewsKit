import React from 'react';
import {MQ} from '../utils/style';
import {BaseFlagProps, BaseFlagOverrides} from '../flag';

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
  LeftStacked = 'left-stacked',
  FittedFlex = 'fitted-flex',
  FittedEqual = 'fitted-equal',
}

export interface TabsProps {
  size?: TabSize;
  children: React.ReactElement<TabProps>[];
  divider?: boolean;
  vertical?: boolean;
  distribution?: TabsDistribution;
  initialSelectedIndex?: number;
  align?: TabAlign;
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    spaceInline?: MQ<string>;
    tabBar?: {
      height?: string;
    };
    tabBarTrack?: {
      weight?: MQ<string>;
    };
    tabBarIndicator?: {
      length?: string;
      weight?: string;
      motionDuration?: string;
      motionTiming?: string;
    };
    tabPane?: {
      typographyPreset?: MQ<string>;
    };
  };
}

export interface TabPaneProps {
  children: React.ReactNode;
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
  title: React.ReactNode;
  children: React.ReactNode;
  ariaLabel?: string;
  autoFocus?: boolean;
  overrides?: BaseFlagOverrides;
  disabled?: boolean;
}

export interface TabBarProps
  extends Pick<TabsProps, 'overrides' | 'vertical'> {}

export interface TabInternalProps extends BaseFlagProps<BaseFlagOverrides> {
  selected?: boolean;
  ariaLabel?: string;
  tabKey?: number;
  autoFocus?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  align?: TabAlign;
}
