import * as React from 'react';
import {ArticleByline} from '..';

export const name = 'article-byline';

export const component = () => (
  <React.Fragment>
    <ArticleByline
      bylineData={[
        {
          author: 'Alison Beach',
          href: '/',
          title: 'Beach Editor',
        },
        {
          author: 'Charles Donkey',
          href: '/',
          title: 'Senior Donkey Reporter',
        },
      ]}
    />
    <ArticleByline
      bylineData={[
        {
          author: 'Alison Beach',
          title: 'Beach Editor',
        },
        {
          author: 'Charles Donkey',
          title: 'Senior Donkey Reporter',
        },
      ]}
    />
    <ArticleByline
      bylineData={[
        {
          author: 'Alison Beach',
          href: '/',
        },
        {
          author: 'Charles Donkey',
          href: '/',
        },
      ]}
    />
    <ArticleByline
      bylineData={[
        {
          author: 'Alison Beach',
        },
        {
          author: 'Charles Donkey',
        },
      ]}
    />
  </React.Fragment>
);
