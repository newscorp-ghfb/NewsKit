import {compileTheme, UncompiledTheme} from 'newskit';
import {docsThemeDark, docsThemeLight} from '../../theme/doc-theme';

const docsThemeLightColors = {
  colors: docsThemeLight.colors,
};
const docsThemeDarkColors = {
  colors: docsThemeDark.colors,
};

export const compiledDocsThemeLightColors = compileTheme(
  docsThemeLightColors as UncompiledTheme,
);
export const compiledDocsThemeDarkColors = compileTheme(
  docsThemeDarkColors as UncompiledTheme,
);
