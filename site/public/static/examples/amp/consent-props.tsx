ConsentProps {
  renderConsentButton?: boolean;
  settingsButtonText?: string;
  checkConsentHref?: string;
  promptUISrc?: string;
  postPromptUI?: string;
  policy?: object;
  sourcePointConfig: SourcePointConfigProps;
}

SourcePointConfigProps {
  accountId: string;
  propertyHref?: string;
  propertyId?: string;
  privacyManagerId?: string;
  pmTab?: string;
  stageCampaign?: boolean;
  targetingParams?: object;
  mmsDomain?: string;
}
