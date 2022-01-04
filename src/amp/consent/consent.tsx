/* eslint-disable react/no-danger */
import React from 'react';
import {connectAmpScript} from '../scripts';

export interface ConsentProps {
  accountId: string;
  siteName: string;
  privacyManagerId: string;
  postPromptUI?: string;
}

const AmpConsentButton: React.FC<{on: string}> = ({children, ...props}) => (
  <button {...props} type="submit">
    {children}
  </button>
);

export const Consent = connectAmpScript<ConsentProps>('amp-consent')(
  ({
    accountId,
    siteName,
    privacyManagerId,
    postPromptUI = 'privacy-settings-prompt',
  }) => (
    <amp-consent id="consent" layout="nodisplay" type="SourcePoint">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            clientConfig: {
              accountId,
              siteName,
              privacyManagerId,
              postPromptUI,
            },
          }),
        }}
      />
      <div id={postPromptUI}>
        <AmpConsentButton on="tap:consent.prompt(consent=SourcePoint)">
          Privacy Settings
        </AmpConsentButton>
      </div>
    </amp-consent>
  ),
);
