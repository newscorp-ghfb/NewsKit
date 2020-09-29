import {TabSize} from '../tab';

export interface TabGroupProps {
  size?: TabSize;
  children: Array<React.ReactElement>;
  divider?: boolean;
  tabPanes?: Array<React.ReactElement>;
  overrides?: {
    stylePreset?: string;
    spaceInset?: string;
  };
}

export interface TabPaneProps {
  children: React.ReactNode;
  isSelected?: boolean;
  tabKey?: number;
}
