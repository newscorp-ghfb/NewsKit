import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Consent} from '../consent';
import {renderToFragment} from '../../test/test-utils';

jest.mock('../../utils/render-scripts');

describe('Consent', () => {
  [undefined, Helmet].forEach(helmet => {
    describe(helmet ? 'with helmet' : 'without helmet', () => {
      describe('with id', () => {
        test('renders scripts with default values', () => {
          const fragment = renderToFragment(
            <Consent reactHelmet={helmet} accountId="test-accountId" />,
          );
          expect(fragment).toMatchSnapshot();
        });
      });

      describe('with mmsDomain', () => {
        test('renders scripts with mmsDomain', () => {
          const fragment = renderToFragment(
            <Consent
              reactHelmet={helmet}
              accountId="test-accountId"
              mmsDomain="test-mmsDomain"
            />,
          );
          expect(fragment).toMatchSnapshot();
        });
      });

      describe('with waitForConsent false', () => {
        test('renders scripts with false waitForConsent', () => {
          const fragment = renderToFragment(
            <Consent
              reactHelmet={helmet}
              accountId="test-accountId"
              waitForConsent={false}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });
      });
    });
  });
});
