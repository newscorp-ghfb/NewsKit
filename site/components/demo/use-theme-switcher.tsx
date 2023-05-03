import {useState, useCallback} from 'react';
import {
  createTheme,
  newskitDarkTheme,
  styled,
  ThemeOverrides,
  UncompiledTheme,
  Select,
  SelectOption,
  deepMerge,
  Button,
} from 'newskit';

import theSunTheme from '@newskit-themes/the-sun/TheSun-light.json';
import theTimesTheme from '@newskit-themes/the-times/TheTimes-light.json';
import dowJonesTheme from '@newskit-themes/dow-jones/DowJones-light.json';

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
        // @ts-ignore
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
  [undefined, 'The Times', theTimesTheme],
  [undefined, 'The Sun', theSunTheme],
  [undefined, 'Dow Jones', dowJonesTheme],
];

const themes: UncompiledTheme[] = themeSettings.map(
  ([baseTheme, name, overrides]) => {
    const theme = createTheme({
      name,
      baseTheme,
      overrides: createOverrides(overrides),
    });
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
