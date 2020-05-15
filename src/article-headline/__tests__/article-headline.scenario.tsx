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
    <ArticleHeadline
      kickerText="Kicker as h5"
      renderHeadingAs="h4"
      renderKickerAs="h5"
    >
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
          stylePreset: 'linkPrimary',
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
          marginPreset: {
            xs: 'spaceInline070',
            md: 'spaceInline040',
          },
        },
      }}
    >
      Heading Headline
    </ArticleHeadline>
  </React.Fragment>
);
