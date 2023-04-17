import React from 'react';
import {StylePreset, Theme, ThemeProvider, useTheme} from '../theme';
import {deepMerge} from './deep-merge';
import {recurseUnknown} from './recurse-unknown';
import {useNewsKitContext} from '../newskit-provider/context';

const themeCache = new Map();

const resolveKey = (
  theme: Theme,
  defaults: Record<string, Object>,
  stylePresets?: Record<string, StylePreset>,
): string => {
  const themeName = theme.name || 'no-theme-name';
  /* istanbul ignore next */
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
  useThemeCache?: boolean,
): Theme => {
  const cacheKey = resolveKey(theme, defaults, stylePresets);

  if (useThemeCache && themeCache.has(cacheKey)) {
    return themeCache.get(cacheKey);
  }

  const compiledStylePresets = recurseUnknown(
    // @ts-ignore
    theme,
    stylePresets || {},
    // warn, not error, so that theme compilation messages do not fail the test run
    console.warn.bind(console),
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
  const WrappedComponent = React.forwardRef<unknown, P>((props, ref) => {
    const theme = useTheme();

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && objectIsEmpty(theme)) {
      const errorMessage = `${
        BaseComponent.displayName || 'This component'
      } can be used only inside NewsKitProvider.`;
      throw new Error(errorMessage);
    }

    const {themeOptions} = useNewsKitContext();
    const componentTheme = (globalTheme: Theme): Theme =>
      mergeTheme(
        globalTheme,
        defaults,
        stylePresets,
        /* istanbul ignore next */
        themeOptions?.useThemeCache,
      );

    return (
      <ThemeProvider theme={componentTheme} {...themeOptions}>
        <BaseComponent ref={ref} {...props} />
      </ThemeProvider>
    );
  });

  const Component = (WrappedComponent as unknown) as NewsKitReactComponents<P>;

  Component.stylePresets = stylePresets;

  return Component;
};
