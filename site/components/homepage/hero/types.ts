import {GridLayoutProps} from '../../../../src/grid-layout/types';

export interface HeroProps {
  contentContainerOverrides: GridLayoutProps['overrides'];
  themeMode: string;
  toggleTheme: () => void;
}
export interface HeroInteractiveElementsProps {
  themeMode: string;
  toggleTheme: () => void;
}
