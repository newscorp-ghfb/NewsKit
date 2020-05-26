import * as React from 'react';
import {Helmet} from 'react-helmet';
import {ConsentTCF2} from '../consent-tcf2';
import {renderToFragment} from '../../../test/test-utils';

jest.mock('../../../utils/render-scripts');

const accountId = 12345;

describe('Consent', () => {
  [undefined, Helmet].forEach(helmet => {
    describe(helmet ? 'with helmet' : 'without helmet', () => {
      test('renders scripts with default values', () => {
        const fragment = renderToFragment(
          <ConsentTCF2 reactHelmet={helmet} sourcePointConfig={{accountId}} />,
        );
        expect(fragment).toMatchSnapshot();
      });

      describe('with optional props', () => {
        test('renders scripts with privacyManagerId', () => {
          const fragment = renderToFragment(
            <ConsentTCF2
              reactHelmet={helmet}
              sourcePointConfig={{
                accountId,
                privacyManagerId: 'test-privacyManagerId',
              }}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('renders scripts with siteHref', () => {
          const fragment = renderToFragment(
            <ConsentTCF2
              reactHelmet={helmet}
              sourcePointConfig={{accountId, siteHref: 'test-siteHref'}}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('renders scripts with siteId', () => {
          const fragment = renderToFragment(
            <ConsentTCF2
              reactHelmet={helmet}
              sourcePointConfig={{accountId, siteId: 'test-siteId'}}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('renders scripts with targetingParams', () => {
          const targetingParams = {
            foo: 'bar',
          };
          const fragment = renderToFragment(
            <ConsentTCF2
              reactHelmet={helmet}
              sourcePointConfig={{accountId, targetingParams}}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('renders scripts with mmsDomain', () => {
          const fragment = renderToFragment(
            <ConsentTCF2
              reactHelmet={helmet}
              sourcePointConfig={{accountId, mmsDomain: 'test-mmsdomain'}}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('renders scripts with false waitForConsent', () => {
          const fragment = renderToFragment(
            <ConsentTCF2
              reactHelmet={helmet}
              waitForConsent={false}
              sourcePointConfig={{accountId}}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });
      });

      describe('with deprecated props', () => {
        test('renders scripts with mmsDomain', () => {
          const fragment = renderToFragment(
            <ConsentTCF2
              reactHelmet={helmet}
              sourcePointConfig={{accountId}}
              mmsDomain="test-mmsDomain"
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('renders scripts with accountId', () => {
          const fragment = renderToFragment(
            <ConsentTCF2
              reactHelmet={helmet}
              sourcePointConfig={{accountId}}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });
      });
    });
  });
});
