import {Body, Consent} from 'newskit/amp';

const AmpBody = (
  <Body title="AMP Demo" canonical="https://amp.demo">
    <Consent
      sourcePointConfig={{accountId: 'test-accountid', siteName:'test-sitename'}}
    />
  </Body>
);
