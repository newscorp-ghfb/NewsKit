import * as React from 'react';
import {Card} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {Grid, Cell} from '../../grid';
import {Image} from '../../image';

const customComponent = () => (
  <Image src="https://via.placeholder.com/736x414" alt="Card Media" />
);

const customComponentWithOverrides = () => (
  <Image
    src="https://via.placeholder.com/736x414"
    overrides={{stylePreset: 'imageCircle'}}
    alt="Card Media"
  />
);

export default {
  name: 'card',
  children: [
    {
      name: 'card-12-columns',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card - 12 Columns</StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card
                href="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
                media={{
                  src:
                    'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png',
                  alt: 'Card Media',
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-6-columns',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card - 6 Columns</StorybookHeading>
          <Grid>
            <Cell xs={6}>
              <Card
                href="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
                media={{
                  src:
                    'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png',
                  alt: 'Card Media',
                }}
              />
            </Cell>
            <Cell xs={6}>
              <Card
                href="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
                media={{
                  src:
                    'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png',
                  alt: 'Card Media',
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-custom-aspect-ratio',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card - Custom Loading Aspect Ratio
          </StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card
                href="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
                media={{
                  loadingAspectRatio: '7:2',
                  src:
                    'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png',
                  alt: 'Card Media',
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card - With Overrides</StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card
                href="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
                media={{
                  src:
                    'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png',
                  alt: 'Card Media',
                }}
                overrides={{
                  media: {
                    stylePreset: 'imageCircle',
                  },
                }}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-custom-component',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card - Custom Component</StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card
                href="https://via.placeholder.com/736x414"
                media={customComponent}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
    {
      name: 'card-custom-component-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card - Custom Component With Overrides
          </StorybookHeading>
          <Grid>
            <Cell xs={12}>
              <Card
                href="https://via.placeholder.com/736x414"
                media={customComponentWithOverrides}
              />
            </Cell>
          </Grid>
        </React.Fragment>
      ),
    },
  ],
};
