import React from 'react';
import {MQ} from '../utils/style';
import {BaseFlagProps, BaseFlagOverrides} from '../flag';
import {DividerOverrides} from '../divider';
import {ScrollProps} from '../scroll';
import {Override} from '../utils/overrides';
import {LogicalProps} from '../utils/logical-properties';
import {EventData} from '../instrumentation';

export type TabAlign = 'start' | 'end' | 'center';
export type TabSize = 'small' | 'medium' | 'large';
export type TabsDistribution = 'start' | 'grow' | 'equal';
export type TabsIndicatorPosition = 'start' | 'end' | 'none';
export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  size?: TabSize;
  children: React.ReactElement<TabProps>[];
  divider?: boolean;
  vertical?: boolean;
  distribution?: TabsDistribution;
  initialSelectedIndex?: number;
  selectedIndex?: number;
  indicatorPosition?: TabsIndicatorPosition;
  align?: TabAlign;
  onChange?: (selectedIndex: number) => void;
  overrides?: {
    spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between tabs. Should be renamed.
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
    scroll?: Override<ScrollProps>;
  } & LogicalProps;
}

export interface TabPanelProps {
  children: React.ReactNode;
  id?: string;
  selected?: boolean;
  // todo: overrides does not seem to be used?
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

export interface TabsBarProps
  extends Pick<TabsProps, 'overrides' | 'vertical'> {}

export interface CommonTabProps
  extends Omit<BaseFlagProps<BaseFlagOverrides>, 'loading' | 'children'>,
    React.HTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string;
  autoFocus?: boolean;
  dataTestId?: string;
  overrides?: BaseFlagOverrides;
  disabled?: boolean;
  children: React.ReactNode; // overridden to be mandatory
}

export interface TabButtonProps extends CommonTabProps {
  selected?: boolean;
  tabKey?: number; // todo: is this used?
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void; // todo: is this used?
  id?: string;
  align?: TabAlign;
}

export interface TabProps extends CommonTabProps, EventData {
  label: React.ReactNode;
}
