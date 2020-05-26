import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Consent} from '../consent';
import {renderToFragment} from '../../test/test-utils';

describe('Consent', () => {
  test('the Consent version 1 renders correctly', () => {
    const fragment = renderToFragment(
      <Consent
        sourcePointConfig={{
          accountId: 259,
          siteHref: 'https://newskit.dev-news.co.uk',
        }}
        reactHelmet={Helmet}
      />,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('the Consent version 2 renders correctly', () => {
    const fragment = renderToFragment(
      <Consent
        version="TCFv2"
        sourcePointConfig={{
          accountId: 259,
          propertyHref: 'https://newskit.dev-news.co.uk',
        }}
        reactHelmet={Helmet}
      />,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('the Consent renders with waitForConsent', () => {
    const fragment = renderToFragment(
      <Consent
        waitForConsent
        sourcePointConfig={{
          accountId: 259,
          siteHref: 'https://newskit.dev-news.co.uk',
        }}
        reactHelmet={Helmet}
      />,
    );
    expect(fragment).toMatchSnapshot();
  });
});
