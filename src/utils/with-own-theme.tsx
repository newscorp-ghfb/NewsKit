import React from 'react';
import {
  // compileTheme,
  StylePreset,
  Theme,
  ThemeProvider,
  useTheme,
} from '../theme';
import {deepMerge} from './deep-merge';
import {recurseUnknown} from './recurse-unknown';

const themeCache = new Map();

const resolveKey = (
  theme: Theme,
  defaults: Record<string, Object>,
  stylePresets?: Record<string, StylePreset>,
): string => {
  const themeName = theme.name || 'no-theme-name';
  const defaultsKey = Object.keys(defaults)[0] || 'no-defaults';
  const stylePresetKey =
    Object.keys(stylePresets || {})[0] || 'no-stylePresets';

  return `${themeName}-${defaultsKey}-${stylePresetKey}`;
};

export type NewsKitReactComponents<T> = React.FC<T> & {
  stylePresets?: Record<string, StylePreset>;
};

const mergeTheme = (
  theme: Theme,
  defaults: Record<string, Object>,
  stylePresets?: Record<string, StylePreset>,
): Theme => {
  const cacheKey = resolveKey(theme, defaults, stylePresets);

  if (themeCache.has(cacheKey)) {
    return themeCache.get(cacheKey);
  }

  const compiledStylePresets = recurseUnknown(
    // @ts-ignore
    theme,
    stylePresets || {},
    console.error.bind(console),
  );
  const componentTheme = {
    ...theme,
    name: cacheKey,
    componentDefaults: deepMerge(defaults, theme.componentDefaults),
    stylePresets: deepMerge(compiledStylePresets, theme.stylePresets),
  };

  themeCache.set(cacheKey, componentTheme);

  return componentTheme;
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

    // return <BaseComponent ref={ref} {...props} />;
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
