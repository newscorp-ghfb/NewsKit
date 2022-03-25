import React from 'react';
import {compileTheme, StylePreset, Theme, ThemeProvider} from '../theme';
import {deepMerge} from './deep-merge';

const mergeTheme = (
  theme: Theme,
  defaults: Record<string, Object>,
  stylePresets?: Record<string, StylePreset>,
): Theme => {
  const newTheme = compileTheme({
    ...theme,
    compiled: false,
    componentDefaults: deepMerge(defaults, theme.componentDefaults),
    stylePresets: deepMerge(stylePresets, theme.stylePresets),
  });
  return newTheme;
};

export const withOwnTheme = <P extends {}>(
  BaseComponent: React.ComponentType<P> | React.ForwardRefExoticComponent<P>,
) => ({
  defaults,
  stylePresets,
}: {
  defaults: Record<string, Object>;
  stylePresets?: Record<string, StylePreset>;
}) => {
  const componentTheme = (globalTheme: Theme): Theme =>
    mergeTheme(globalTheme, defaults, stylePresets);

  const WrappedComponent = React.forwardRef<unknown, P>((props, ref) => (
    <ThemeProvider theme={componentTheme}>
      <BaseComponent ref={ref} {...props} />
    </ThemeProvider>
  ));

  return (WrappedComponent as unknown) as React.FC<P> & {
    stylePresets: Record<string, StylePreset>;
  };
};
