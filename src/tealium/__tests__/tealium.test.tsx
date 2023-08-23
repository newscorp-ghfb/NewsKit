import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Tealium} from '..';
import {renderToFragment} from '../../test/test-utils';

jest.mock('../../utils/render-scripts');

describe('Tealium', () => {
  [undefined, Helmet].forEach(helmet => {
    test('renders scripts for dev environment', () => {
      const fragment = renderToFragment(
        <Tealium
          accountId="the-account-id"
          profileId="the-profile-id"
          env="the-env-id"
          reactHelmet={helmet}
        />,
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  test('renders scripts with nonce', () => {
    const fragment = renderToFragment(
      <Tealium
        accountId="the-account-id"
        profileId="the-profile-id"
        env="the-env-id"
        nonce="12345abc"
      />,
    );
    expect(fragment).toMatchSnapshot();
  });
});
