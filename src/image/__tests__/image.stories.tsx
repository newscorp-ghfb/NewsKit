import * as React from 'react';
import {Image} from '..';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {IconFilledAddCircle, IconOutlinedImage} from '../../icons';

// shared Percy config params to ensure image has loaded before snapshot taken
const parameters = {
  // the img is the first child of the picture when loaded, otherwise second
  percy: {waitForSelector: 'picture img:nth-child(1)'},
};

export const StoryImageDefault = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase>
      <Image src="/placeholder-3x2.png" alt="Example Image" placeholderIcon />
    </StorybookCase>
  </StorybookPage>
);
StoryImageDefault.storyName = 'Default';
StoryImageDefault.parameters = {...parameters};

export const StoryImageFixedWidthAndHeightPx = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title="300px x 200px">
      <Image
        src="/placeholder-3x2.png"
        alt="Example Image"
        width="300"
        height="200"
        placeholderIcon
      />
    </StorybookCase>
  </StorybookPage>
);
StoryImageFixedWidthAndHeightPx.storyName = 'Fixed width and height - px';
StoryImageFixedWidthAndHeightPx.parameters = {...parameters};

export const StoryImageFixedWidthAndHeightPercentage = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title="100% x 30%">
      <Image
        src="/placeholder-3x2.png"
        alt="Example Image"
        width="100%"
        height="30%"
        placeholderIcon
      />
    </StorybookCase>
  </StorybookPage>
);
StoryImageFixedWidthAndHeightPercentage.storyName =
  'Fixed width and height - %';
StoryImageFixedWidthAndHeightPercentage.parameters = {...parameters};

export const StoryImageFixedWidthAndAspectRatio = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase>
      <Image
        src="/placeholder-3x2.png"
        alt="Example Image"
        width="400"
        loadingAspectRatio="3:2"
        placeholderIcon
      />
    </StorybookCase>
  </StorybookPage>
);
StoryImageFixedWidthAndAspectRatio.storyName = 'Fixed width and aspect ratio';
StoryImageFixedWidthAndAspectRatio.parameters = {...parameters};

export const StoryImageFixedHeightAndAspectRatio = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title="Fixed width and aspect ratio (h=266.66)">
      <Image
        src="/placeholder-3x2.png"
        alt="Example Image"
        height="300px"
        loadingAspectRatio="3:2"
        placeholderIcon
      />
    </StorybookCase>
  </StorybookPage>
);
StoryImageFixedHeightAndAspectRatio.storyName = 'Fixed height and aspect ratio';
StoryImageFixedHeightAndAspectRatio.parameters = {...parameters};

export const StoryImageVariations = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title=" borderRadiusSharp">
      <Image
        src="/placeholder-3x2.png"
        loadingAspectRatio="3:2"
        alt="Example Image"
        placeholderIcon
      />
    </StorybookCase>
    <StorybookCase title=" borderRadiusRounded020">
      <Image
        src="/placeholder-3x2.png"
        loadingAspectRatio="3:2"
        alt="Example Image"
        overrides={{stylePreset: 'imageRoundedMedium'}}
      />
    </StorybookCase>
    <StorybookCase title=" borderRadiusRounded040 and MQ<string>">
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
    </StorybookCase>
    <StorybookCase title=" borderRadiusCircle">
      <Image
        src="/placeholder-1x1.png"
        loadingAspectRatio="1:1"
        width="65%"
        alt="Example Image"
        overrides={{
          stylePreset: 'imageCircle',
        }}
      />
    </StorybookCase>
  </StorybookPage>
);
StoryImageVariations.storyName = 'Variations';
StoryImageVariations.parameters = {...parameters};

export const StoryImageValidAndInvalidImageReference = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title="Valid image reference">
      <Image
        src="/placeholder-3x2.png"
        loadingAspectRatio="3:2"
        alt="Example Image"
      />
    </StorybookCase>
    <StorybookCase title="Invalid image reference">
      <Image
        src="/placeholder-3x2.invalid"
        loadingAspectRatio="3:2"
        alt="Example Image"
      />
    </StorybookCase>
  </StorybookPage>
);
StoryImageValidAndInvalidImageReference.storyName =
  'Valid and invalid image reference';

export const StoryImagePlaceholderIcon = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title="Invalid image with placeholder icon">
      <Image
        placeholderIcon
        src="/placeholder-3x2.invalid"
        loadingAspectRatio="3:2"
        alt="Example Image"
      />
    </StorybookCase>
    <StorybookCase title="Invalid image with custom placeholder icon">
      <Image
        placeholderIcon
        src="/placeholder-3x2.invalid"
        loadingAspectRatio="3:2"
        alt="Example Image"
        overrides={{
          placeholderIcon: props => <IconFilledAddCircle {...props} />,
        }}
      />
    </StorybookCase>
    <StorybookCase title="Invalid image with custom placeholder icon size">
      <Image
        placeholderIcon
        src="/placeholder-3x2.invalid"
        loadingAspectRatio="3:2"
        alt="Example Image"
        overrides={{
          placeholderIcon: () => (
            <IconOutlinedImage overrides={{size: 'iconSize050'}} />
          ),
        }}
      />
    </StorybookCase>
  </StorybookPage>
);
StoryImagePlaceholderIcon.storyName = 'Placeholder icon';

export const StoryImageLazyLoading = () => {
  const getImages = (num: number) => {
    const images: React.ReactNode[] = [];
    for (let i = 1; i <= num; i++) {
      images.push(
        <Image
          key={i}
          src={`/placeholders-lazy-load/placeholder-${
            i < 10 ? `0${i}` : i
          }.png`}
          // width and height are needed for lazy loading
          overrides={{
            width: '400px',
            height: '226px',
            marginBlockEnd: 'space060',
          }}
          loading="lazy"
          alt={`Placeholder ${i}`}
          placeholderIcon
        />,
      );
    }
    return images;
  };

  return (
    <StorybookPage columns="1fr 1fr">
      <StorybookCase>{getImages(10)}</StorybookCase>
    </StorybookPage>
  );
};
StoryImageLazyLoading.storyName = 'Lazy loading';
StoryImageLazyLoading.parameters = {percy: {skip: true}};

export const StoryImageSourceUsingMediaQuery = () => {
  const sources = [
    {media: 'lg', srcSet: '/1200x800-lg-placeholder-image.png'},
    {media: 'md', srcSet: '/800x600-md-placeholder-image.png'},
    {media: 'xs', srcSet: '/300x300-xs-placeholder-image.png'},
  ];
  return (
    <StorybookPage columns="1fr">
      <StorybookCase>
        <Image
          src="/fallback-placeholder-image.png"
          sources={sources}
          alt="placeholders"
        />
      </StorybookCase>
    </StorybookPage>
  );
};
StoryImageSourceUsingMediaQuery.storyName = 'Source using media query';
StoryImageSourceUsingMediaQuery.parameters = {
  percy: {waitForSelector: 'picture img:nth-child(4)'},
};

export const StoryImageSourceUsingMqNoXs = () => {
  const sources = [
    {media: 'lg', srcSet: '/1200x800-lg-placeholder-image.png'},
    {media: 'md', srcSet: '/800x600-md-placeholder-image.png'},
  ];
  return (
    <StorybookPage columns="1fr">
      <StorybookCase>
        <Image
          src="/fallback-placeholder-image.png"
          sources={sources}
          alt="placeholders"
        />
      </StorybookCase>
    </StorybookPage>
  );
};
StoryImageSourceUsingMqNoXs.storyName = 'Source using mq no xs';
StoryImageSourceUsingMqNoXs.parameters = {
  percy: {waitForSelector: 'picture img:nth-child(3)'},
};

export const StoryImageLogicalProps = () => (
  <StorybookPage>
    <StorybookCase title="300px x 200px">
      <Image
        src="/placeholder-3x2.png"
        alt="Example Image"
        placeholderIcon
        overrides={{
          width: '200px',
          height: '150px',
          marginInline: '50px',
          marginBlock: '25px',
        }}
      />
    </StorybookCase>
  </StorybookPage>
);
StoryImageLogicalProps.storyName = 'Logical props';
StoryImageLogicalProps.parameters = {...parameters};

export default {
  title: 'Components/Image',
  component: Image,
  parameters: {
    nkDocs: {
      title: 'Image',
      url: 'https://newskit.co.uk/components/image',
      description: 'The image is a simple component for adding images.',
    },
  },
};
