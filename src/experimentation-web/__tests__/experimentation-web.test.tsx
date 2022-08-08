import * as React from 'react';
import {Helmet} from 'react-helmet';
import {ExperimentationWeb} from '..';
import {renderToFragment} from '../../test/test-utils';

jest.mock('../../utils/render-scripts');

describe('ExperimentationWeb', () => {
  [undefined, Helmet].forEach(helmet => {
    test('renders optimizely scripts', () => {
      const fragment = renderToFragment(
        <ExperimentationWeb
          optimizelyWebConfig={{
            scriptCdn: 'https://cdn.optimizely.com/js/123456789.js',
          }}
          reactHelmet={helmet}
        />,
      );
      expect(fragment).toMatchSnapshot();
    });

    test('renders optimizely scripts async', () => {
      const fragment = renderToFragment(
        <ExperimentationWeb
          optimizelyWebConfig={{
            scriptCdn: 'https://cdn.optimizely.com/js/123456789.js',
          }}
          reactHelmet={helmet}
          async
        />,
      );
      expect(fragment).toMatchSnapshot();
    });
  });
});
