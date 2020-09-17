import * as React from 'react';
import {Image} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default {
  name: 'image',
  children: [
    {
      name: 'fixed height and width in px',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>300px by 200px</StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
            width="300px"
            height="200px"
            alt="Example Image"
          />
        </Container>
      ),
    },
    {
      name: 'fixed height and width in %',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>100% by 60%</StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
            width="100%"
            height="66%"
            alt="Example Image"
          />
        </Container>
      ),
    },
    {
      name: 'sharp-border-radius',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>Image with sharp border-radius</StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
            loadingAspectRatio="3:2"
            alt="Example Image"
          />
        </Container>
      ),
    },
    {
      name: 'rounded-border-radius',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>Image with rounded border-radius</StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
            loadingAspectRatio="3:2"
            alt="Example Image"
            hideLoadingIcon
            overrides={{
              stylePreset: 'imageRoundedMedium',
            }}
          />
        </Container>
      ),
    },
    {
      name: 'rounded-border-radius-with-mq',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>
            Image with rounded border-radius and mq
          </StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
            loadingAspectRatio="3:2"
            alt="Example Image"
            hideLoadingIcon
            overrides={{
              stylePreset: {
                xs: 'imageRoundedMedium',
                lg: 'imageRoundedLarge',
              },
            }}
          />
        </Container>
      ),
    },
    {
      name: 'circle-border-radius',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>Image with circle border-radius</StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-1-1.png"
            loadingAspectRatio="1:1"
            alt="Example Image"
            hideLoadingIcon
            overrides={{
              stylePreset: 'imageCircle',
            }}
          />
        </Container>
      ),
    },
    {
      name: 'valid-img',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>Valid image reference</StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
            loadingAspectRatio="3:2"
            alt="Example Image"
          />
        </Container>
      ),
    },
    {
      name: 'invalid-img',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>
            Invalid image reference hiding logo
          </StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.pngx"
            loadingAspectRatio="3:2"
            alt="Example Image"
            hideLoadingIcon
          />
        </Container>
      ),
    },
  ],
};
