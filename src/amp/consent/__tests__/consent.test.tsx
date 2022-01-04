import React from 'react';
import {renderToFragment} from '../../../test/test-utils';
import {Consent} from '../consent';

describe('Consent renders', () => {
  it('without postPromptUI', () => {
    const fragment = renderToFragment(
      <Consent
        accountId="test"
        siteName="product"
        privacyManagerId="privacy"
      />,
    );
    expect(fragment).toMatchSnapshot();
  });

  it('with postPromptUI', () => {
    const fragment = renderToFragment(
      <Consent
        accountId="test"
        siteName="product"
        privacyManagerId="privacy"
        postPromptUI="postPrompt"
      />,
    );
    expect(fragment).toMatchSnapshot();
  });
});
