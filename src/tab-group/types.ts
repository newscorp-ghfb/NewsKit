import {TabSize} from '../tab';
import {MQ} from '../utils/style';
import {PaddingPresetKeys} from '../theme';

export interface TabGroupProps {
  size?: TabSize;
  children: Array<React.ReactElement>;
  divider?: boolean;
  tabPanes?: Array<React.ReactElement>;
  orientation?: 'vertical' | 'horizontal';
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<PaddingPresetKeys>;
  };
}

export interface TabPaneProps {
  children: React.ReactNode;
  isSelected?: boolean;
  tabKey?: number;
}
