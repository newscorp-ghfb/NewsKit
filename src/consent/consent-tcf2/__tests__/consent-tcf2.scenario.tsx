import * as React from 'react';

import {ConsentTCF2} from '../consent-tcf2';

export const name = 'consent';

export const component = () => (
  <ConsentTCF2
    sourcePointConfig={{
      accountId: 259,
      propertyHref: 'https://newskit.dev-news.co.uk',
    }}
  />
);
