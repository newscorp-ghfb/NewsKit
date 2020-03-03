/* eslint-disable react/no-danger */
import React from 'react';
import {connectAmpScript} from '../scripts';

export interface ConsentProps {
  accountId?: string;
  siteName?: string;
  privacyManagerId?: string;
  postPromptUI?: string;
  sourcePointConfig: SourcePointConfigProps;
}

export interface SourcePointConfigProps {
  accountId: string;
  siteName: string;
  privacyManagerId?: string;
  siteId?: string;
  targetingParams?: object;
}

const AmpConsentButton: React.FC<{on: string}> = ({children, ...props}) => (
  <button {...props} type="submit">
    {children}
  </button>
);
/**
 * @param {string} accountId - Will be deprecated on the component in the next version. Please add it to SourcePointConfig.
 * @param {string} siteName - Will be deprecated on the component in the next version. Please add it to SourcePointConfig.
 * @param {string} privacyManagerId - Will be deprecated on the component in the next version. Please add it to SourcePointConfig.
 * @param {SourcePointConfigProps} sourcePointConfig - The SourcePointConfig Object
 *
 */
export const Consent = connectAmpScript<ConsentProps>('amp-consent')(
  ({
    accountId,
    siteName,
    privacyManagerId,
    postPromptUI = 'privacy-settings-prompt',
    sourcePointConfig,
  }) => (
    <amp-consent id="consent" layout="nodisplay" type="SourcePoint">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            clientConfig: {
              accountId: accountId || sourcePointConfig.accountId,
              siteName: siteName || sourcePointConfig.siteName,
              privacyManagerId:
                privacyManagerId || sourcePointConfig.privacyManagerId,
              postPromptUI,
              ...sourcePointConfig,
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
