import {
  renderToFragmentWithThemeFactory,
  renderWithThemeFactory,
} from 'newskit/test/test-utils';
import {docsThemeLight} from '../theme/doc-theme';

export const renderWithTheme = renderWithThemeFactory(docsThemeLight);

export const renderToFragmentWithTheme = renderToFragmentWithThemeFactory(
  docsThemeLight,
);
