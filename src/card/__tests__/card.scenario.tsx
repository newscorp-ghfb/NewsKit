import * as React from 'react';
import {Card} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {Grid, Cell} from '../../grid';
import {Image} from '../../image';
import {Stack, Flow} from '../../stack';

import {Tag, TagSize} from '../../tag';

const customComponent = () => (
  <Image
    src="/placeholder-16x9.png"
    alt="Card Media"
    loadingAspectRatio="16:9"
  />
);

const customComponentWithOverrides = () => (
  <Image
    src="/placeholder-16x9.png"
    overrides={{stylePreset: 'imageDefault'}}
    alt="Card Media"
    loadingAspectRatio="16:9"
  />
);

const smallTag = () => (
  <Stack flow={Flow.HorizontalCenter} space="sizing040">
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{stylePreset: 'tagPrimary', typePreset: 'label010'}}
    >
      News
    </Tag>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{stylePreset: 'tagPrimary', typePreset: 'label010'}}
    >
      Sport
    </Tag>
  </Stack>
);

const mediumTag = () => (
  <Stack flow={Flow.HorizontalCenter} space="sizing040">
    <Tag
      size={TagSize.Medium}
      href="/"
      overrides={{stylePreset: 'tagPrimary', typePreset: 'label010'}}
    >
      News
    </Tag>
    <Tag
      size={TagSize.Medium}
      href="/"
      overrides={{stylePreset: 'tagPrimary', typePreset: 'label010'}}
    >
      Sport
    </Tag>
  </Stack>
);

export default {
  name: 'card',
  children: [
    {
      name: 'card-small-without-inset',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card - Small - Without Inset</StorybookHeading>
          <Grid>
            <Cell xs={3}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
                actions={smallTag}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-medium-without-inset',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card - Medium - Without Inset</StorybookHeading>
          <Grid>
            <Cell xs={6}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
                actions={smallTag}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-large-without-inset',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card - Large - Without Inset</StorybookHeading>
          <Grid>
            <Cell xs={10}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
                actions={mediumTag}
                overrides={{
                  actionsContainer: {
                    minHeight: 'sizing090',
                  },
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-small-with-inset',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card - Small - With Inset</StorybookHeading>
          <Grid>
            <Cell xs={3}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
                actions={smallTag}
                overrides={{
                  actionsContainer: {
                    paddingPreset: 'spaceInset030Squish',
                  },
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-medium-with-inset',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card - Medium - With Inset</StorybookHeading>
          <Grid>
            <Cell xs={6}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
                actions={smallTag}
                overrides={{
                  actionsContainer: {
                    paddingPreset: 'spaceInset040Squish',
                  },
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-large-with-inset',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card - Large - With Inset</StorybookHeading>
          <Grid>
            <Cell xs={10}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
                actions={mediumTag}
                overrides={{
                  actionsContainer: {
                    minHeight: 'sizing090',
                    paddingPreset: 'spaceInset040Squish',
                  },
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-custom-loading-aspect-ratio',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Media - Custom Loading Aspect Ratio - 5x4
          </StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  loadingAspectRatio: '5:4',
                  src: '/placeholder-5x4.png',
                  alt: 'Card Media',
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Media - With Overriden Borders
          </StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
                overrides={{
                  media: {
                    stylePreset: 'imageDefault',
                  },
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-custom-component',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card Media - Custom Component</StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card href="https://newskit.co.uk/" media={customComponent} />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-custom-component-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Media - Custom Component With Overriden Borders
          </StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card
                href="https://newskit.co.uk/"
                media={customComponentWithOverrides}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
  ],
};
