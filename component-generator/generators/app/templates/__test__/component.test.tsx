import React from 'react';
import {<%= componentName %>} from '../';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('<%= componentName %>', () => {
  test('renders correctly', () => {
    const fragment = renderToFragmentWithTheme(<%= componentName %>);
    expect(fragment).toMatchSnapshot();
  })
});
