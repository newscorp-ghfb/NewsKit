import * as React from 'react';
import {CardMedia} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled, getSizingFromTheme} from '../../utils/style';
import {Image} from '../../image';

const Container = styled.div`
  margin: ${getSizingFromTheme('sizing050')};
`;
const customComponent = () => (
  <Image src="https://via.placeholder.com/736x414" alt="Card Media" />
);

const customComponentWithOverrides = () => (
  <Image
    src="https://via.placeholder.com/736x414"
    overrides={{stylePreset: 'imageRoundedLarge'}}
    alt="Card Media"
  />
);

export default {
  name: 'card-media',
  children: [
    {
      name: 'card-media-default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Media - Default Loading Aspect Ratio
          </StorybookHeading>
          <Container>
            <CardMedia
              href="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
              media={{
                src:
                  'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png',
                alt: 'Card Media',
              }}
            />
          </Container>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-custom-aspect-ratio',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Media - Custom Loading Aspect Ratio
          </StorybookHeading>
          <Container>
            <CardMedia
              href="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
              media={{
                loadingAspectRatio: '7:2',
                src:
                  'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png',
                alt: 'Card Media',
              }}
            />
          </Container>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card Media - With Overrides</StorybookHeading>
          <Container>
            <CardMedia
              href="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
              media={{
                src:
                  'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png',
                alt: 'Card Media',
              }}
              overrides={{
                stylePreset: 'imageRoundedLarge',
              }}
            />
          </Container>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-custom-component',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card Media - Custom Component</StorybookHeading>
          <Container>
            <CardMedia
              href="https://via.placeholder.com/736x414"
              media={customComponent}
            />
          </Container>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-custom-component-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Media - Custom Component With Overrides
          </StorybookHeading>
          <Container>
            <CardMedia
              href="https://via.placeholder.com/736x414"
              media={customComponentWithOverrides}
            />
          </Container>
        </React.Fragment>
      ),
    },
  ],
};
