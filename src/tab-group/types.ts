import {TabSize} from '../tab';
import {MQ} from '../utils/style';

export enum TabsDistribution {
  LeftStacked = 'left-stacked',
  FittedFlex = 'fitted-flex',
  FittedEqual = 'fitted-equal',
}

export interface TabGroupProps {
  size?: TabSize;
  children: Array<React.ReactElement>;
  divider?: boolean;
  tabPanes?: Array<React.ReactElement>;
  vertical?: boolean;
  distribution?: TabsDistribution;
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
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
  };
}

export interface TabPaneProps {
  children: React.ReactNode;
  selected?: boolean;
  tabKey?: number;
  overrides?: {
    typographyPreset?: MQ<string>;
  };
}

export interface DistributionWrapperProps {
  distribution: TabsDistribution;
  numberOfSiblings: number;
  vertical: boolean;
}

export interface tabBarProps extends Pick<TabGroupProps, 'overrides'> {}
