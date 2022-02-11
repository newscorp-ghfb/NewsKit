import * as React from 'react';
import {ThemeChecker} from '../theme-checker';
import {StorybookHeading} from '../../test/storybook-comps';
import {
  getColorCssFromTheme,
  getSpacingCssFromTheme,
  styled,
} from '../../utils';
import {
  newskitLightTheme,
  newskitDarkTheme,
  Stack,
  SelectOption,
  Select,
  ThemeProvider,
} from '../..';
import {tnlTheme} from '../themes/tnl-theme/tnl-theme';
import {virginTheme} from '../themes/virgin-theme/virgin-theme';
import {sunTheme} from '../themes/sun-theme/sun-theme';
import {sdNkTheme} from '../themes/sd-theme/sd-nk-theme';

export default {
  title: 'NewsKit Light/theme-checker',
  component: () => 'None',
  disabledRules: ['color-contrast', 'heading-order'],
};

const MainContainer = styled.div`
  margin: 0 auto;
`;

const Container = styled.div`
  ${getColorCssFromTheme('backgroundColor', 'interface010')};
  ${getSpacingCssFromTheme('padding', 'space030')};
`;

const SelectWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 10px;
`;
interface ThemeSelectorProps {
  children: React.ReactNode;
}

const themes = [
  newskitLightTheme,
  newskitDarkTheme,
  tnlTheme,
  virginTheme,
  sunTheme,
  sdNkTheme,
];

const ThemeSelector = ({children}: ThemeSelectorProps) => {
  const [themeIndex, setThemeIndex] = React.useState(() => {
    const index =
      typeof window !== 'undefined'
        ? Number(window.localStorage.getItem('theme-index'))
        : 0;

    return Math.min(Math.max(index, 0), themes.length - 1);
  });

  const setAndSaveThemeIndex = React.useCallback(
    index => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme-index', index);
      }
      setThemeIndex(index);
    },
    [setThemeIndex],
  );

  const themeLabels = themes.map(theme => theme.name);

  return (
    <>
      <Stack flow="horizontal-stretch" stackDistribution="space-between">
        <StorybookHeading>Theme Checker</StorybookHeading>
        <SelectWrapper>
          <Select
            overrides={{button: {width: '200px'}}}
            onChange={event => {
              setAndSaveThemeIndex(event.target.value);
            }}
            defaultValue={themeIndex.toString()}
          >
            {themeLabels.map((label, id) => (
              <SelectOption key={label} value={id.toString()}>
                {label}
              </SelectOption>
            ))}
          </Select>
        </SelectWrapper>
      </Stack>
      <ThemeProvider theme={themes[themeIndex]}>
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
};

export const ThemeCheckerStory = () => (
  <MainContainer>
    <ThemeSelector>
      <ThemeChecker />
    </ThemeSelector>
  </MainContainer>
);

ThemeCheckerStory.storyName = 'theme-checker';
ThemeCheckerStory.parameters = {
  eyes: {include: false},
};
