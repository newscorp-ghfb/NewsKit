import React from 'react';
import {
  withTheme as _withTheme,
  useTheme as _useTheme,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import {Theme, UncompiledTheme} from './types';
import {compileTheme} from './compiler';

export const withTheme = (_withTheme as unknown) as <P>(
  comp: React.ComponentType<P & {theme: Theme}>,
) => React.ComponentType<P & {theme?: Theme}>;

export const useTheme = (_useTheme as unknown) as () => Theme;

export interface ThemeProviderProps {
  theme: UncompiledTheme | Theme;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  ...props
}) => <EmotionThemeProvider {...props} theme={compileTheme(theme)} />;
