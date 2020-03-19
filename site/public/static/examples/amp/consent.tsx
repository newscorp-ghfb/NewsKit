import {Head, Consent} from 'newskit/amp';

const AmpHead = (
  <Head title="AMP Demo" canonical="https://amp.demo">
    <Consent
      sourcePointConfig={{accountId: 'test-accountid', siteName:'test-sitename'}}
    />
  </Head>
);
