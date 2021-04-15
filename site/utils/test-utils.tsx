/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  renderToFragmentWithThemeFactory,
  renderWithThemeFactory,
} from 'newskit/test/test-utils';
import {docsThemeLight} from '../theme/doc-theme';

export const renderWithTheme = renderWithThemeFactory(docsThemeLight);

export const renderToFragmentWithTheme = renderToFragmentWithThemeFactory(
  docsThemeLight,
);

export const mockNewsKitComponents = (...components: string[]) => () => ({
  ...(jest.requireActual('newskit') as any),
  ...components.reduce((acc, comp) => {
    acc[comp] = ({children, ...props}: any) => (
      <div
        data-comp={`NewsKit ${comp}`}
        data-testid={comp}
        data-props={JSON.stringify(props, null, 2)}
      >
        {children}
      </div>
    );
    return acc;
  }, {} as Record<string, Function>),
});
