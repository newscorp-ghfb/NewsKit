import React from 'react';
import {
  withTheme as _withTheme,
  useTheme as _useTheme,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import {Theme, UncompiledTheme} from './types';
import {compileTheme} from './compiler';
import {themeDiff, CssVariablesContainer, ThemeDiff} from './css-variables';

export const withTheme = (_withTheme as unknown) as <P>(
  comp: React.ComponentType<P & {theme: Theme}>,
) => React.ComponentType<P & {theme?: Theme}>;

export const useTheme = (_useTheme as unknown) as () => Theme;

export interface ThemeProviderProps {
  theme: UncompiledTheme | Theme | ((outerTheme: Theme) => Theme);
  children: React.ReactNode;
  exposeCssVariables?: boolean;
  useThemeCache?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  exposeCssVariables = false,
  children,
  ...props
}) => {
  const parentTheme = useTheme();
  const localTheme =
    typeof theme === 'function' ? theme(parentTheme) : compileTheme(theme);

  const diff: ThemeDiff = exposeCssVariables
    ? themeDiff(parentTheme, localTheme)
    : {};

  const doNotAddCssVariables =
    !exposeCssVariables || Object.keys(diff).length === 0;

  return (
    <EmotionThemeProvider {...props} theme={localTheme}>
      {doNotAddCssVariables ? (
        children
      ) : (
        <CssVariablesContainer diff={diff}>{children}</CssVariablesContainer>
      )}
    </EmotionThemeProvider>
  );
};
