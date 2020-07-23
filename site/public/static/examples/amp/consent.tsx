import {Body, Consent} from 'newskit/amp';

const AmpBody = (
  <Body title="AMP Demo" canonical="https://amp.demo">
    <Consent
      consentRequired="remote"
      consentInstanceId="sourcepoint"
      checkConsentHref="https://sp-cdn.example.com/wrapper/tcfv2/v1/amp"
      promptUISrc="https://sp-cdn.example.com/amp/index.html"
      postPromptUI="privacy-settings-prompt"
      policy={{
        default:{
          timeout:{
            seconds: 5,
            fallbackAction: "reject"
          }
        }
      }}
      sourcePointConfig={{
        accountId: 222,
        mmsDomain: "https://sp-cdn.example.com/mms",
        propertyHref: "https://amp.property.tcfv2",
        propertyId: 1234,
        privacyManagerId: 987654,
        isTCFV2: true,
        pmTab: "purposes",
        stageCampaign: false,
        targetingParams: {
            color: "red"
        }
      }}
    />
  </Body>
);
