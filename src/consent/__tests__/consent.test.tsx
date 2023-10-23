/* eslint-disable no-console */
import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Consent} from '../consent';
import {renderToFragment} from '../../test/test-utils';

jest.mock('../../utils/render-scripts');

describe('Consent', () => {
  [undefined, Helmet].forEach(helmet => {
    describe(helmet ? 'with helmet' : 'without helmet', () => {
      test('no props supplied renders empty component', () => {
        const props: any = {};
        const fragment = renderToFragment(<Consent {...props} />);
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

      test('the Consent version 2 renders correctly with events', () => {
        const fragment = renderToFragment(
          <Consent
            sourcePointConfigTCFV2={{
              accountId: 259,
              propertyHref: 'https://newskit.dev-news.co.uk',
              baseEndpoint: 'https://cmp.newskit.co.uk',
              events: {
                onMessageReady: () => {
                  console.log('onMessageReady');
                },
                onConsentReady() {
                  console.log('onConsentReady');
                },
              },
            }}
            reactHelmet={helmet}
          />,
        );
        expect(fragment).toMatchSnapshot();
      });

      describe('Unified Consent V2', () => {
        test('the Unified Consent V2 renders GDPR correctly with default baseEndpoint', () => {
          const fragment = renderToFragment(
            <Consent
              sourcePointConfigUnified={{
                accountId: 259,
                propertyHref: 'https://newskit.dev-news.co.uk',
                gdpr: {},
              }}
              reactHelmet={helmet}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('the Unified Consent V2 renders GPP correctly with default baseEndpoint', () => {
          const fragment = renderToFragment(
            <Consent
              sourcePointConfigUnified={{
                accountId: 259,
                propertyHref: 'https://newskit.dev-news.co.uk',
                gdpr: {},
                ccpa: {
                  includeGppApi: true,
                },
                gpp: true,
              }}
              reactHelmet={helmet}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('the Unified Consent V2 renders CCPA correctly', () => {
          const fragment = renderToFragment(
            <Consent
              sourcePointConfigUnified={{
                accountId: 259,
                propertyHref: 'https://newskit.dev-news.co.uk',
                ccpa: {},
              }}
              reactHelmet={helmet}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('the Unified Consent V2 renders correctly with trailing slash on baseEndpoint', () => {
          const fragment = renderToFragment(
            <Consent
              sourcePointConfigUnified={{
                accountId: 259,
                gdpr: {},
                propertyHref: 'https://newskit.dev-news.co.uk',
                baseEndpoint: 'https://cmp.newskit.co.uk/',
              }}
              reactHelmet={helmet}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });
      });

      describe('nonTCF', () => {
        test('the Consent version 2 renders correctly with default baseEndpoint', () => {
          const fragment = renderToFragment(
            <Consent
              sourcePointConfigNonTCFV1={{
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
              sourcePointConfigNonTCFV1={{
                accountId: 259,
                propertyHref: 'https://newskit.dev-news.co.uk',
                baseEndpoint: 'https://cmp.newskit.co.uk',
              }}
              reactHelmet={helmet}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('renders correctly with trailing slash on baseEndpoint', () => {
          const fragment = renderToFragment(
            <Consent
              sourcePointConfigNonTCFV1={{
                accountId: 259,
                propertyHref: 'https://newskit.dev-news.co.uk',
                baseEndpoint: 'https://cmp.newskit.co.uk/',
              }}
              reactHelmet={helmet}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });

        test('the Consent version 2 renders correctly with events', () => {
          const fragment = renderToFragment(
            <Consent
              sourcePointConfigNonTCFV1={{
                accountId: 259,
                propertyHref: 'https://newskit.dev-news.co.uk',
                baseEndpoint: 'https://cmp.newskit.co.uk',
                events: {
                  onMessageReady: () => {
                    console.log('onMessageReady');
                  },
                  onConsentReady() {
                    console.log('onConsentReady');
                  },
                },
              }}
              reactHelmet={helmet}
            />,
          );
          expect(fragment).toMatchSnapshot();
        });
      });
    });
  });
});
