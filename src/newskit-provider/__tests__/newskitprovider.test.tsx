import React from 'react';
import {render} from '@testing-library/react';
import {NewsKitProvider} from '..';
import {newskitLightTheme} from '../../theme';
import {Button} from '../../button';

describe('NewsKitProvider', () => {
  it('renders as default', () => {
    const {asFragment} = render(
      <NewsKitProvider theme={newskitLightTheme}>app</NewsKitProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Slow as withOwnTheme's cache map will be
  // missing cache key of "no-theme-name-button-buttonSolidPrimary"
  it('renders (slowly) with css variables and theme cache miss for unnamed theme', () => {
    const namelessTheme = {...newskitLightTheme, name: ''};
    const {asFragment} = render(
      <NewsKitProvider
        theme={namelessTheme}
        themeOptions={{exposeCssVariables: true, useThemeCache: true}}
      >
        <Button>Themed Button</Button>
      </NewsKitProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Slow as withOwnTheme's cache map will be
  // missing cache key of "newskit-light-button-buttonSolidPrimary"
  it('renders (slowly) with css variables and theme cache miss', () => {
    const {asFragment} = render(
      <NewsKitProvider
        theme={newskitLightTheme}
        themeOptions={{exposeCssVariables: true, useThemeCache: true}}
      >
        <Button>Themed Button</Button>
      </NewsKitProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Fast as withOwnTheme's cache map will be populated from the previous test.
  // Uses cache key of "newskit-light-button-buttonSolidPrimary"
  it('renders (fast) with theme cache hit', () => {
    const {asFragment} = render(
      <NewsKitProvider
        theme={newskitLightTheme}
        themeOptions={{exposeCssVariables: false, useThemeCache: true}}
      >
        <Button>Themed Button</Button>
      </NewsKitProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
