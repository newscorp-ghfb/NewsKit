/* eslint-disable react/no-danger */
import React from 'react';
import {connectAmpScript} from '../scripts';
import {AmpConsentButton} from './consent-button';

export interface ConsentProps {
  renderConsentButton?: boolean;
  settingsButtonText?: string;
  checkConsentHref?: string;
  promptUISrc?: string;
  postPromptUI?: string;
  sourcePointConfig: SourcePointConfigProps;
}

export interface SourcePointConfigProps {
  accountId: string | number;
  propertyHref?: string;
  propertyId?: string | number;
  privacyManagerId?: string | number;
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
    postPromptUI = 'privacy-settings-prompt',
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
      {renderConsentButton && (
        <AmpConsentButton
          settingsButtonText={settingsButtonText}
          postPromptUI={postPromptUI}
        />
      )}
    </amp-consent>
  ),
);
