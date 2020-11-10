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
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '300px', height: '200px'}}
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
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '100%', height: '66%'}}
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
            src="/placeholder-3x2.png"
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
            src="/placeholder-3x2.png"
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
            src="/placeholder-3x2.png"
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
            src="/placeholder-1x1.png"
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
            src="/placeholder-3x2.png"
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
            src="/placeholder-3x2.invalid"
            loadingAspectRatio="3:2"
            alt="Example Image"
            hideLoadingIcon
          />
        </Container>
      ),
    },
    {
      name: 'image-with-caption',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>Image With Caption</StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.pngx"
            loadingAspectRatio="3:2"
            alt="Example Image"
            captionText="Caption component with both caption and credit text"
            creditText="Credit text"
          />
        </Container>
      ),
    },
    {
      name: 'image-with-caption-inset',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>Image With Caption Inset</StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.pngx"
            loadingAspectRatio="3:2"
            alt="Example Image"
            captionText="Caption component with both caption and credit text"
            creditText="Credit text"
            overrides={{
              caption: {
                spaceInset: {
                  xs: 'spaceInset060',
                  md: 'spaceInset070',
                },
              },
            }}
          />
        </Container>
      ),
    },
    {
      name: 'image-with-caption-and-overrides',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>Image With Caption and Overrides</StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.pngx"
            loadingAspectRatio="3:2"
            alt="Example Image"
            captionText="Caption component with both caption and credit text"
            creditText="Credit text"
            overrides={{
              caption: {
                stylePreset: 'inkBrand010',
                typographyPreset: 'editorialCaption010',
                credit: {
                  stylePreset: 'uppercaseInkBrand010',
                  typographyPreset: 'utilityMeta030',
                },
              },
            }}
          />
        </Container>
      ),
    },
    {
      name: 'image-with-caption-inset-and-overrides',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>
            Image With Caption Inset and Overrides
          </StorybookHeading>
          <Image
            src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.pngx"
            loadingAspectRatio="3:2"
            alt="Example Image"
            captionText="Caption component with both caption and credit text"
            creditText="Credit text"
            overrides={{
              caption: {
                stylePreset: 'inkBrand010',
                typographyPreset: 'editorialCaption010',
                spaceInset: {
                  xs: 'spaceInset060',
                  md: 'spaceInset070',
                },
                credit: {
                  stylePreset: 'uppercaseInkBrand010',
                  typographyPreset: 'utilityMeta030',
                },
              },
            }}
          />
        </Container>
      ),
    },
  ],
};
