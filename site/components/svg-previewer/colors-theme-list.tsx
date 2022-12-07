import {compileTheme, UncompiledTheme} from 'newskit';
import {
  accessibilityThemeDark,
  accessibilityThemeLight,
  docsThemeDark,
  docsThemeLight,
  foundationsThemeDark,
  foundationsThemeLight,
  guidesThemeDark,
  guidesThemeLight,
  patternsThemeDark,
  patternsThemeLight,
} from '../../theme/doc-theme';

const docsThemeLightColors = {
  colors: docsThemeLight.colors,
};

const docsThemeDarkColors = {
  colors: docsThemeDark.colors,
};

const foundationsThemeLightColors = {
  colors: foundationsThemeLight.colors,
};

const foundationsThemeDarkColors = {
  colors: foundationsThemeDark.colors,
};

const patternsThemeLightColors = {
  colors: patternsThemeLight.colors,
};

const patternsThemeDarkColors = {
  colors: patternsThemeDark.colors,
};

const accessibilityThemeLightColors = {
  colors: accessibilityThemeLight.colors,
};

const accessibilityThemeDarkColors = {
  colors: accessibilityThemeDark.colors,
};

const guidesThemeLightColors = {
  colors: guidesThemeLight.colors,
};

const guidesThemeDarkColors = {
  colors: guidesThemeDark.colors,
};

const compiledDocsThemeLightColors = compileTheme(
  docsThemeLightColors as UncompiledTheme,
);

const compiledDocsThemeDarkColors = compileTheme(
  docsThemeDarkColors as UncompiledTheme,
);

const compiledFoundationsThemeLight = compileTheme(
  foundationsThemeLightColors as UncompiledTheme,
);

const compiledFoundationsThemeDark = compileTheme(
  foundationsThemeDarkColors as UncompiledTheme,
);

const compiledPatternsThemeLightColors = compileTheme(
  patternsThemeLightColors as UncompiledTheme,
);

const compiledPatternsThemeDarkColors = compileTheme(
  patternsThemeDarkColors as UncompiledTheme,
);

const compiledAccessibilityThemeLightColors = compileTheme(
  accessibilityThemeLightColors as UncompiledTheme,
);

const compiledAccessibilityThemeDarkColors = compileTheme(
  accessibilityThemeDarkColors as UncompiledTheme,
);

const compiledGuideThemeLightColors = compileTheme(
  guidesThemeLightColors as UncompiledTheme,
);

const compiledGuideThemeDarkColors = compileTheme(
  guidesThemeDarkColors as UncompiledTheme,
);

export const themeList = [
  {
    name: 'Docs Theme',
    defaultLight: compiledDocsThemeLightColors,
    dark: compiledDocsThemeDarkColors,
  },
  {
    name: 'Foundations Theme',
    defaultLight: compiledFoundationsThemeLight,
    dark: compiledFoundationsThemeDark,
  },
  {
    name: 'Patterns Theme',
    defaultLight: compiledPatternsThemeLightColors,
    dark: compiledPatternsThemeDarkColors,
  },
  {
    name: 'Accessibility Theme',
    defaultLight: compiledAccessibilityThemeLightColors,
    dark: compiledAccessibilityThemeDarkColors,
  },
  {
    name: 'Guide Theme',
    defaultLight: compiledGuideThemeLightColors,
    dark: compiledGuideThemeDarkColors,
  },
];

export type ThemeNames =
  | 'Docs Theme'
  | 'Foundations Theme'
  | 'Patterns Theme'
  | 'Accessibility Theme'
  | 'Guide Theme';
