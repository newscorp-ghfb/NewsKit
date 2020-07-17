import React from 'react';
import {renderToFragment} from '../../../test/test-utils';
import {AmpConsentButton} from '../consent-button';

describe('consent-button', () => {
  test('render consent-button default', () => {
    const fragment = renderToFragment(<AmpConsentButton />);
    expect(fragment).toMatchSnapshot();
  });

  test('render consent-button with button label and postPromptUI', () => {
    const fragment = renderToFragment(
      <AmpConsentButton
        settingsButtonText="Settings"
        postPromptUI="settings-ui"
      />,
    );
    expect(fragment).toMatchSnapshot();
  });
});
