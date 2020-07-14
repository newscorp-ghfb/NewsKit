/* eslint-disable react/no-danger */
import React from 'react';
import {connectAmpScript} from '../scripts';

export interface ConsentProps {
  settingsButtonText?: string;
  checkConsentHref?: string;
  promptUISrc?: string;
  postPromptUI?: string;
  sourcePointConfig: SourcePointConfigProps;
}

export interface SourcePointConfigProps {
  accountId: string;
  propertyHref?: string;
  propertyId?: string;
  privacyManagerId?: string;
  pmTab?: string;
  stageCampaign?: boolean;
  targetingParams?: object;
}

interface AmpConsentButton {
  on: string;
  settingsButtonText?: string;
}

const AmpConsentButton: React.FC<AmpConsentButton> = ({
  settingsButtonText = 'Privacy Settings',
  ...props
}) => (
  <button type="button" {...props}>
    {settingsButtonText}
  </button>
);
/**
 * @param {SourcePointConfigProps} sourcePointConfig - The SourcePointConfig Object
 *
 */
export const Consent = connectAmpScript<ConsentProps>('amp-consent')(
  ({
    settingsButtonText,
    postPromptUI = 'privacy-settings-prompt',
    sourcePointConfig,
    ...rest
  }) => (
    <amp-consent id="consent" layout="nodisplay">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            consentRequired: 'remote',
            consentInstanceId: 'sourcepoint',
            postPromptUI,
            clientConfig: {
              isTCFV2: true,
              ...sourcePointConfig,
            },
            ...rest,
          }),
        }}
      />
      <div id={postPromptUI}>
        <AmpConsentButton
          on="tap:consent.prompt(consent=SourcePoint)"
          settingsButtonText={settingsButtonText}
        />
      </div>
    </amp-consent>
  ),
);
