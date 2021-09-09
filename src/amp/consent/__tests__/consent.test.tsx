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
  propertyHref: 'test-propertyhref',
};

describe('Consent renders', () => {
  it('without postPromptUI', () => {
    const fragment = renderToFragment(
      <Consent sourcePointConfig={sourcePointConfigBase} />,
    );
    expect(fragment).toMatchSnapshot();
  });

  it('without default consent button', () => {
    const fragment = renderToFragment(
      <Consent
        sourcePointConfig={sourcePointConfigBase}
        renderConsentButton={false}
      />,
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

  it('with policy', () => {
    const fragment = renderToFragment(
      <Consent
        sourcePointConfig={sourcePointConfigBase}
        policy={{
          default: {
            timeout: {
              seconds: 5,
              fallbackAction: 'reject',
            },
          },
        }}
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

    it('settingsButtonText', () => {
      const extendedConfig = {
        privacyManagerId: 'test-privacymanagerid',
        ...sourcePointConfigBase,
      };
      const fragment = renderToFragment(
        <Consent
          sourcePointConfig={extendedConfig}
          settingsButtonText="Privacy Manager"
        />,
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

    it('consentRequired', () => {
      const fragment = renderToFragment(
        <Consent sourcePointConfig={sourcePointConfigBase} consentRequired />,
      );
      expect(fragment).toMatchSnapshot();
    });

    it('consentInstanceId', () => {
      const fragment = renderToFragment(
        <Consent
          sourcePointConfig={sourcePointConfigBase}
          consentInstanceId="my-consent"
        />,
      );
      expect(fragment).toMatchSnapshot();
    });

    it('should be a valid AMP component', async () => {
      const ampScriptsObject = createAmpScriptsObject();

      const body = (
        // @ts-ignore
        <Body theme={{}} ampScriptsObject={ampScriptsObject}>
          <Consent
            sourcePointConfig={{
              accountId: '259',
              propertyHref: 'newskit.dev-news.co.uk',
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
      const validator = await amphtmlValidator.getInstance();
      const result = validator.validateString(html);
      
      expect(result.status).toEqual('PASS');
    });
  });
});
