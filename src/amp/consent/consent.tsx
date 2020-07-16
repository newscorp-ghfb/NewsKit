/* eslint-disable react/no-danger */
import React from 'react';
import {connectAmpScript} from '../scripts';
import {AmpConsentButton} from './consent-button';

export interface ConsentProps {
  renderConsentButton?: boolean;
  settingsButtonText?: string;
  checkConsentHref?: string;
  promptUISrc?: string;
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

/**
 * @param {SourcePointConfigProps} sourcePointConfig - The SourcePointConfig Object
 *
 */
export const Consent = connectAmpScript<ConsentProps>('amp-consent')(
  ({
    settingsButtonText,
    renderConsentButton = true,
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
            postPromptUI: 'privacy-settings-prompt',
            clientConfig: {
              isTCFV2: true,
              ...sourcePointConfig,
            },
            ...rest,
          }),
        }}
      />
      {renderConsentButton && (
        <AmpConsentButton
          on="tap:consent.prompt(consent=SourcePoint)"
          settingsButtonText={settingsButtonText}
        />
      )}
    </amp-consent>
  ),
);
