import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Consent} from '../consent';
import {renderToFragment} from '../../test/test-utils';

jest.mock('../../utils/render-scripts');

describe('Consent', () => {
  [undefined, Helmet].forEach(helmet => {
    describe(helmet ? 'with helmet' : 'without helmet', () => {
      test('the Consent version 1 renders correctly', () => {
        const fragment = renderToFragment(
          <Consent
            sourcePointConfig={{
              accountId: '259',
              siteHref: 'https://newskit.dev-news.co.uk',
            }}
            reactHelmet={helmet}
          />,
        );
        expect(fragment).toMatchSnapshot();
      });

      test('the Consent version 2 renders correctly with default baseEndpoint', () => {
        const fragment = renderToFragment(
          <Consent
            sourcePointConfigTCFV2={{
              accountId: 259,
              propertyHref: 'https://newskit.dev-news.co.uk',
            }}
            reactHelmet={helmet}
          />,
        );
        expect(fragment).toMatchSnapshot();
      });

      test('the Consent version 2 renders correctly', () => {
        const fragment = renderToFragment(
          <Consent
            sourcePointConfigTCFV2={{
              accountId: 259,
              propertyHref: 'https://newskit.dev-news.co.uk',
              baseEndpoint: 'https://cmp.newskit.co.uk',
            }}
            reactHelmet={helmet}
          />,
        );
        expect(fragment).toMatchSnapshot();
      });

      test('the Consent version 2 renders correctly with trailing slash on baseEndpoint', () => {
        const fragment = renderToFragment(
          <Consent
            sourcePointConfigTCFV2={{
              accountId: 259,
              propertyHref: 'https://newskit.dev-news.co.uk',
              baseEndpoint: 'https://cmp.newskit.co.uk/',
            }}
            reactHelmet={helmet}
          />,
        );
        expect(fragment).toMatchSnapshot();
      });

      test('the Consent renders with legacy props and waitForConsent', () => {
        const fragment = renderToFragment(
          <Consent
            accountId="259"
            mmsDomain="testDomain"
            waitForConsent
            reactHelmet={Helmet}
          />,
        );
        expect(fragment).toMatchSnapshot();
      });
      test('the Consent renders with legacy props', () => {
        const fragment = renderToFragment(
          <Consent
            accountId="259"
            mmsDomain="testDomain"
            reactHelmet={Helmet}
          />,
        );
        expect(fragment).toMatchSnapshot();
      });

      test('the Consent renders with legacy props', () => {
        const props: any = {};
        const fragment = renderToFragment(<Consent {...props} />);
        expect(fragment).toMatchSnapshot();
      });
    });
  });
});
