import React from 'react';
import {styled} from '../../utils/style';

export interface AmpConsentButton {
  settingsButtonText?: string;
  postPromptUI?: string;
  on?: string;
}

const ConsentButton = styled.button<AmpConsentButton>``;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AmpConsentButton: React.FC<AmpConsentButton> = ({
  settingsButtonText = 'Privacy Settings',
  postPromptUI = 'privacy-settings-prompt',
  ...props
}) => (
  <div id={postPromptUI}>
    <ConsentButton
      type="button"
      on="tap:consent.prompt(consent=SourcePoint)"
      {...props}
    >
      {settingsButtonText}
    </ConsentButton>
  </div>
);
