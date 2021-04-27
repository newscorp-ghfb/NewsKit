import * as React from 'react';
import {Image} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default {
  title: 'image',
  children: [
    {
      storyName: 'fixed height and width in px',
      storyFn: () => (
        <Container>
          <StorybookHeading>300px by 200px</StorybookHeading>
          <Image
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '300px', height: '200px'}}
            placeholderIcon
          />
        </Container>
      ),
    },
    {
      storyName: 'fixed height and width in %',
      storyFn: () => (
        <Container>
          <StorybookHeading>100% by 60%</StorybookHeading>
          <Image
            src="/placeholder-3x2.png"
            alt="Example Image"
            overrides={{width: '100%', height: '66%'}}
            placeholderIcon
          />
        </Container>
      ),
    },
    {
      storyName: 'sharp-border-radius',
      storyFn: () => (
        <Container>
          <StorybookHeading>Image with sharp border-radius</StorybookHeading>
          <Image
            src="/placeholder-3x2.png"
            loadingAspectRatio="3:2"
            alt="Example Image"
            placeholderIcon
          />
        </Container>
      ),
    },
    {
      storyName: 'rounded-border-radius',
      storyFn: () => (
        <Container>
          <StorybookHeading>Image with rounded border-radius</StorybookHeading>
          <Image
            src="/placeholder-3x2.png"
            loadingAspectRatio="3:2"
            alt="Example Image"
            overrides={{
              stylePreset: 'imageRoundedMedium',
            }}
          />
        </Container>
      ),
    },
    {
      storyName: 'rounded-border-radius-with-mq',
      storyFn: () => (
        <Container>
          <StorybookHeading>
            Image with rounded border-radius and mq
          </StorybookHeading>
          <Image
            src="/placeholder-3x2.png"
            loadingAspectRatio="3:2"
            alt="Example Image"
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
      storyName: 'circle-border-radius',
      storyFn: () => (
        <Container>
          <StorybookHeading>Image with circle border-radius</StorybookHeading>
          <Image
            src="/placeholder-1x1.png"
            loadingAspectRatio="1:1"
            alt="Example Image"
            overrides={{
              stylePreset: 'imageCircle',
            }}
          />
        </Container>
      ),
    },
    {
      storyName: 'valid-img',
      storyFn: () => (
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
      storyName: 'invalid-img',
      storyFn: () => (
        <Container>
          <StorybookHeading>
            Invalid image reference hiding logo
          </StorybookHeading>
          <Image
            src="/placeholder-3x2.invalid"
            loadingAspectRatio="3:2"
            alt="Example Image"
          />
        </Container>
      ),
    },
    {
      storyName: 'invalid-img-with-placeholder-icon',
      storyFn: () => (
        <Container>
          <StorybookHeading>
            Invalid image reference with placeholder Icon
          </StorybookHeading>
          <Image
            placeholderIcon
            src="/placeholder-3x2.invalid"
            loadingAspectRatio="3:2"
            alt="Example Image"
          />
        </Container>
      ),
    },
    {
      storyName: 'image-with-caption',
      storyFn: () => (
        <Container>
          <StorybookHeading>Image With Caption</StorybookHeading>
          <Image
            src="/placeholder-3x2.png"
            loadingAspectRatio="3:2"
            alt="Example Image"
            captionText="Caption component with both caption and credit text"
            creditText="Credit text"
          />
        </Container>
      ),
    },
    {
      storyName: 'image-with-caption-inset',
      storyFn: () => (
        <Container>
          <StorybookHeading>Image With Caption Inset</StorybookHeading>
          <Image
            src="/placeholder-3x2.png"
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
      storyName: 'image-with-caption-and-overrides',
      storyFn: () => (
        <Container>
          <StorybookHeading>Image With Caption and Overrides</StorybookHeading>
          <Image
            src="/placeholder-3x2.png"
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
      storyName: 'image-with-caption-inset-and-overrides',
      storyFn: () => (
        <Container>
          <StorybookHeading>
            Image With Caption Inset and Overrides
          </StorybookHeading>
          <Image
            src="/placeholder-3x2.png"
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
