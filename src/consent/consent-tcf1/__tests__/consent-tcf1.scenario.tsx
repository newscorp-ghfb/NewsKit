import * as React from 'react';

import {ConsentTCF1} from '../consent-tcf1';

export const name = 'consent';

export const component = () => (
  <ConsentTCF1
    sourcePointConfig={{
      accountId: '259',
      siteHref: 'https://newskit.dev-news.co.uk',
    }}
  />
);
