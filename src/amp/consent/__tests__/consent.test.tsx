import React from 'react';
import {renderToFragment} from '../../../test/test-utils';
import {Consent} from '../consent';

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
