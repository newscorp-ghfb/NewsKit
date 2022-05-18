import React from 'react';
import {render} from '@testing-library/react';
import {NewskitProvider} from '..';
import {newskitLightTheme} from '../../theme';

describe('NewskitProvider', () => {
  it('renders as default', () => {
    const {asFragment} = render(
      <NewskitProvider theme={newskitLightTheme}>app</NewskitProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
