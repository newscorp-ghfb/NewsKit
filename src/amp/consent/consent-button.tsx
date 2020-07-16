import React from 'react';

export interface AmpConsentButton {
  on: string;
  settingsButtonText?: string;
}

export const AmpConsentButton: React.FC<AmpConsentButton> = ({
  settingsButtonText = 'Privacy Settings',
  ...props
}) => (
  <div id="privacy-settings-prompt">
    <button type="button" {...props}>
      {settingsButtonText}
    </button>
  </div>
);
