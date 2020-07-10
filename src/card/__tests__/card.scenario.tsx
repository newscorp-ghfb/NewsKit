import * as React from 'react';
import {Card} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {Grid, Cell} from '../../grid';
import {Image} from '../../image';

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

export default {
  name: 'card',
  children: [
    {
      name: 'card-media-12-columns',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card Media - 12 Columns</StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-6-columns',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card Media - 6 Columns</StorybookHeading>
          <Grid>
            <Cell xs={6}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
              />
            </Cell>
            <Cell xs={6}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-3-columns',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card Media - 3 Columns</StorybookHeading>
          <Grid>
            <Cell xs={3}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
              />
            </Cell>
            <Cell xs={3}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
                }}
              />
            </Cell>
            <Cell xs={3}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  src: '/placeholder-3x2.png',
                  alt: 'Card Media',
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
            Card Media - Custom Loading Aspect Ratio - 4x5
          </StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card
                href="https://newskit.co.uk/"
                media={{
                  loadingAspectRatio: '4:5',
                  src: '/placeholder-4x5.png',
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
