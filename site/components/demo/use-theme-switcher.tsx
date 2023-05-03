import {useState, useCallback} from 'react';
import {
  createTheme,
  NewsKitProvider,
  newskitDarkTheme,
  styled,
  getColorCssFromTheme,
  ThemeOverrides,
  UncompiledTheme,
  Select,
  SelectOption,
  deepMerge,
  Button,
} from 'newskit';

// import timesThemeOverrides from '../themes/times-theme-overrides';
// import sunThemeOverrides from '../themes/sun-theme-overrides';
// import virginThemeOverrides from '../themes/virgin-theme-overrides';

const createOverrides = (customOverrides: ThemeOverrides = {}) => {
  return {
    ...customOverrides,
    stylePresets: {
      ...('stylePresets' in customOverrides
        ? customOverrides.stylePresets!
        : {}),
      interfaceBackground: {
        base: {
          backgroundColor: '{{colors.interfaceBackground}}',
        },
      },
      pricingCardSurface: {
        base: {
          backgroundColor: '{{colors.interfaceBackground}}',
          boxShadow: '{{shadows.shadow030}}',
        },
      },
      buttonMinimalPrimaryNoWrap: deepMerge(
        {},
        Button.stylePresets.buttonMinimalPrimary,
        {
          base: {
            whiteSpace: 'nowrap',
          },
        },
      ),
    },
  };
};

type ThemeSettings = [
  UncompiledTheme | undefined,
  string,
  ThemeOverrides | undefined,
];

const themeSettings: ThemeSettings[] = [
  [undefined, 'NewsKit Light', {}],
  [newskitDarkTheme, 'NewsKit Dark', {}],
  // [undefined, 'The Times Theme', timesThemeOverrides],
  // [undefined, 'The Sun Theme', sunThemeOverrides],
  // [undefined, 'Virgin Radio Theme', virginThemeOverrides],
];

const themes: UncompiledTheme[] = themeSettings.map(
  ([baseTheme, name, overrides]) => {
    const theme = createTheme({
      name,
      baseTheme,
      overrides: createOverrides(overrides),
    });
    // TODO: chekc if that is still a bug?
    // Bug in this NewsKit version keeps the name from base theme, so overwrite it here
    // theme.name = name;
    return theme;
  },
);

const SelectContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 300px;
`;

export default function useThemeSwitcher() {
  const [themeIndex, setThemeIndex] = useState(() => {
    const index =
      typeof window !== 'undefined'
        ? Number(window.localStorage.getItem('theme-index'))
        : 0;
    return Math.min(Math.max(index, 0), themes.length - 1);
  });

  const setAndSaveThemeIndex = useCallback(
    (index: number) => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme-index', index.toString());
      }
      setThemeIndex(index);
    },
    [setThemeIndex],
  );

  const themeLabels = themes.map(theme => theme.name);

  const select = (
    <SelectContainer>
      <Select
        onChange={event => setAndSaveThemeIndex(Number(event.target.value))}
      >
        {themeLabels.map((label, id) => {
          return (
            <SelectOption
              key={id + label}
              value={String(id)}
              selected={themeIndex === id}
            >
              {label}
            </SelectOption>
          );
        })}
      </Select>
    </SelectContainer>
  );

  return {theme: themes[themeIndex], select};
}
