import React from 'react';
import {render} from '@testing-library/react';
import {NewsKitProvider} from '..';
import {newskitLightTheme} from '../../theme';

describe('NewsKitProvider', () => {
  it('renders as default', () => {
    const {asFragment} = render(
      <NewsKitProvider theme={newskitLightTheme}>app</NewsKitProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders with css variables', () => {
    const {asFragment} = render(
      <NewsKitProvider
        theme={newskitLightTheme}
        themeOptions={{exposeCssVariables: true}}
      >
        app
      </NewsKitProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
