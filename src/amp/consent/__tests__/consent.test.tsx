import React from 'react';
import amphtmlValidator from 'amphtml-validator';
import {renderToFragment} from '../../../test/test-utils';
import {Consent} from '../consent';
import {Body} from '../../body';
import {Head} from '../../head';
import {renderToStaticMarkup} from '../../utils/render';
import {createAmpScriptsObject} from '../../scripts/connect-amp-script';

const sourcePointConfigBase = {
  accountId: 'test-accountid',
  siteName: 'test-sitename',
};

describe('Consent renders', () => {
  it('without postPromptUI', () => {
    const fragment = renderToFragment(
      <Consent sourcePointConfig={sourcePointConfigBase} />,
    );
    expect(fragment).toMatchSnapshot();
  });

  it('with postPromptUI', () => {
    const fragment = renderToFragment(
      <Consent
        sourcePointConfig={sourcePointConfigBase}
        postPromptUI="postPrompt"
      />,
    );
    expect(fragment).toMatchSnapshot();
  });

  describe('with optional prop', () => {
    it('privacyManagerId', () => {
      const extendedConfig = {
        privacyManagerId: 'test-privacymanagerid',
        ...sourcePointConfigBase,
      };
      const fragment = renderToFragment(
        <Consent sourcePointConfig={extendedConfig} />,
      );
      expect(fragment).toMatchSnapshot();
    });

    it('siteId', () => {
      const extendedConfig = {siteId: 'test-siteId', ...sourcePointConfigBase};
      const fragment = renderToFragment(
        <Consent sourcePointConfig={extendedConfig} />,
      );
      expect(fragment).toMatchSnapshot();
    });

    it('targetingParams', () => {
      const targetingParams = {
        foo: 'bar',
      };
      const extendedConfig = {targetingParams, ...sourcePointConfigBase};

      const fragment = renderToFragment(
        <Consent sourcePointConfig={extendedConfig} />,
      );
      expect(fragment).toMatchSnapshot();
    });

    it('should be a valid AMP component', () => {
      const ampScriptsObject = createAmpScriptsObject();

      const body = (
        // @ts-ignore
        <Body theme={{}} ampScriptsObject={ampScriptsObject}>
          <Consent
            sourcePointConfig={{
              accountId: '259',
              siteName: 'newskit.dev-news.co.uk',
              privacyManagerId: '5e7b730dc905f8332c044b5e',
            }}
          />
        </Body>
      );

      const head = (
        <Head
          title="AMP Consent"
          canonical="http://example.com/my-amp-page/"
          ampScriptsObject={ampScriptsObject}
        >
          <meta name="amp-consent-blocking" content="amp-ad" />
        </Head>
      );
      const html = renderToStaticMarkup(body, head);

      amphtmlValidator.getInstance().then(validator => {
        const result = validator.validateString(html);
        expect(result.status).toEqual('PASS');
      });
    });
  });

  describe('with deprecated prop', () => {
    it('accountId', () => {
      const fragment = renderToFragment(
        <Consent
          sourcePointConfig={sourcePointConfigBase}
          accountId="test-accountId"
        />,
      );
      expect(fragment).toMatchSnapshot();
    });
  });
});
