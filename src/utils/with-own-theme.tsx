import React from 'react';
import {
  compileTheme,
  StylePreset,
  Theme,
  ThemeProvider,
  useTheme,
} from '../theme';
import {deepMerge} from './deep-merge';

export type NewsKitReactComponents<T> = React.FC<T> & {
  stylePresets?: Record<string, StylePreset>;
};

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

const objectIsEmpty = (obj: Object) => Object.keys(obj).length === 0;

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

  const WrappedComponent = React.forwardRef<unknown, P>((props, ref) => {
    const theme = useTheme();

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && objectIsEmpty(theme)) {
      const errorMessage = `${
        BaseComponent.displayName || 'This component'
      } can be used only inside NewsKitProvider.`;
      throw new Error(errorMessage);
    }

    return (
      <ThemeProvider theme={componentTheme}>
        <BaseComponent ref={ref} {...props} />
      </ThemeProvider>
    );
  });

  const Component = (WrappedComponent as unknown) as NewsKitReactComponents<P>;

  Component.stylePresets = stylePresets;

  return Component;
};
