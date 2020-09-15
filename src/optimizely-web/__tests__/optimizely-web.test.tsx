import * as React from 'react';
import {Helmet} from 'react-helmet';
import {OptimizelyWeb} from '..';
import {renderToFragment} from '../../test/test-utils';

jest.mock('../../utils/render-scripts');

describe('OptimizelyWeb', () => {
  [undefined, Helmet].forEach(helmet => {
    test('renders optimizely scripts', () => {
      const fragment = renderToFragment(
        <OptimizelyWeb
          optimizelyCdn="https://cdn.optimizely.com/js/123456789.js"
          reactHelmet={helmet}
        />,
      );
      expect(fragment).toMatchSnapshot();
    });
  });
});
