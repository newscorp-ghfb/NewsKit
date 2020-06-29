import * as React from 'react';
import {ArticleHeadline} from '..';

export const name = 'article-headline';

export const component = () => (
  <React.Fragment>
    <ArticleHeadline>Only headline text with not kicker</ArticleHeadline>
    <br />
    <br />
    <ArticleHeadline kickerText="Kicker">Headline text</ArticleHeadline>
    <br />
    <ArticleHeadline kickerText="Kicker as h5" headingAs="h4" kickerAs="h5">
      Headline as h4
    </ArticleHeadline>
    <br />
    <ArticleHeadline
      kickerText="Kicker overwritten preset"
      overrides={{
        kicker: {
          stylePreset: 'tagPrimary',
        },
        heading: {
          stylePreset: 'linkInline',
        },
      }}
    >
      Headline overwritten preset
    </ArticleHeadline>
    <br />
    <ArticleHeadline
      kickerText="Kicker custom mq margin preset"
      overrides={{
        kicker: {
          spaceInline: {
            xs: 'space080',
            md: 'space040',
          },
        },
      }}
    >
      Heading Headline
    </ArticleHeadline>
  </React.Fragment>
);
