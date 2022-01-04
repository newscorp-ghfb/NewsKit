import * as React from 'react';
import {ArticleHeadline} from '..';

export const name = 'article-headline';

export const component = () => (
  <React.Fragment>
    <ArticleHeadline>headline only</ArticleHeadline>
    <ArticleHeadline kickerText="Kicker">headline with kicker</ArticleHeadline>
  </React.Fragment>
);
