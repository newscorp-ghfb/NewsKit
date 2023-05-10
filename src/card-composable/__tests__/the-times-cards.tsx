import React from 'react';
import {
  CardComposable,
  CardContent,
  CardLink,
  CardMedia,
} from '../card-composable';
import {Headline} from '../../headline';
import {TextBlock} from '../../text-block';
import {Divider} from '../../divider';
import {Visible, Hidden} from '../../grid';
import {Image} from '../../image';

const title = `Short title of the card describing the main content`;
const paragraph = `Short paragraph description of the article, outlining main story and focus.`;

export const LeadCard = () => (
  <CardComposable
    rowGap="space040"
    columnGap="space040"
    columns={{md: '3fr 5fr'}}
    areas={{
      xs: `
        media
        content
            `,
      md: `content media`,
    }}
  >
    <CardContent
      rowGap="space040"
      alignContent="start"
      justifyItems="stretch"
      overrides={{paddingBlockEnd: 'space020'}}
    >
      <Visible md lg xl>
        <Divider />
      </Visible>
      <CardLink expand href="/">
        <Headline
          overrides={{
            typographyPreset: 'editorialHeadline040',
          }}
        >
          {title}
        </Headline>
      </CardLink>
      <TextBlock
        as="p"
        typographyPreset="editorialParagraph020"
        stylePreset="inkBase"
      >
        {paragraph}
      </TextBlock>
      <Visible md lg xl>
        <TextBlock
          as="p"
          typographyPreset="utilityLabel010"
          stylePreset="inkSubtle"
          paddingBlockStart="space020"
        >
          5 min read
        </TextBlock>
      </Visible>
    </CardContent>
    <CardMedia
      media={{
        src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
        alt: '',
        loadingAspectRatio: '3:2',
      }}
    />
  </CardComposable>
);

export const SecondLevelCard = () => (
  <CardComposable
    rowGap="space040"
    overrides={{
      paddingBlockEnd: {xs: 'space020', lg: 'space000', xl: 'space020'},
    }}
  >
    <CardContent rowGap="space040" alignContent="start">
      <CardLink expand href="/">
        <Headline
          overrides={{
            typographyPreset: {
              xs: 'editorialHeadline010',
              md: 'editorialHeadline020',
            },
          }}
        >
          {title}
        </Headline>
      </CardLink>
    </CardContent>
    <CardMedia>
      <Hidden lg>
        <Image
          src="https://storybook.newskit.co.uk/placeholder-3x2.png"
          alt="card-media-image"
          loadingAspectRatio="3:2"
        />
      </Hidden>
    </CardMedia>
  </CardComposable>
);

export const ThirdLevelCard = () => (
  <CardComposable
    columnGap="space040"
    columns="80px 1fr"
    areas={`media content`}
  >
    <CardContent rowGap="space040" alignContent="start" justifyItems="stretch">
      <CardLink expand href="/">
        <Headline
          overrides={{
            typographyPreset: {
              xs: 'editorialHeadline010',
              sm: 'editorialHeadline020',
            },
          }}
        >
          Headline
        </Headline>
      </CardLink>
      <TextBlock
        as="p"
        typographyPreset={{
          xs: 'editorialSubheadline010',
          sm: 'editorialSubheadline020',
        }}
        stylePreset="inkBase"
      >
        {paragraph}
      </TextBlock>
    </CardContent>
    <CardMedia
      media={{
        src: 'https://storybook.newskit.co.uk/placeholder-1x1.png',
        alt: 'card-media-image',
        loadingAspectRatio: '1:1',
        overrides: {
          stylePreset: 'imageCircle',
        },
      }}
    />
  </CardComposable>
);
