import {TabSize} from '../tab';
import {MQ} from '../utils/style';

export interface TabGroupProps {
  size?: TabSize;
  children: Array<React.ReactElement>;
  divider?: boolean;
  tabPanes?: Array<React.ReactElement>;
  orientation?: 'vertical' | 'horizontal';
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
  };
}

export interface TabPaneProps {
  children: React.ReactNode;
  isSelected?: boolean;
  tabKey?: number;
}
