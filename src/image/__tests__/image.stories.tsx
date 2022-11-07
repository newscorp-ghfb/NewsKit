import * as React from 'react';
import {Image} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {IconFilledError} from '../../icons';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerWithHeight = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 300px;
`;

export default {
  title: 'Components/image',
  component: () => 'None',
};

export const StoryFixedHeightAndWidthInPx = () => (
  <Container>
    <StorybookHeading>300px by 200px</StorybookHeading>
    <Image
      src="/placeholder-3x2.png"
      alt="Example Image"
      overrides={{width: '300px', height: '200px'}}
      placeholderIcon
    />
  </Container>
);
StoryFixedHeightAndWidthInPx.storyName = 'fixed height and width in px';

export const StoryFixedHeightAndWidthIn = () => (
  <ContainerWithHeight>
    <StorybookHeading>100% by 30%</StorybookHeading>
    <Image
      src="/placeholder-3x2.png"
      alt="Example Image"
      overrides={{width: '100%', height: '30%'}}
      placeholderIcon
    />
  </ContainerWithHeight>
);
StoryFixedHeightAndWidthIn.storyName = 'fixed height and width in %';

export const StoryFixedWidthAndAspectRatio = () => (
  <Container>
    <StorybookHeading>Fixed width and aspect ratio (h=266.66)</StorybookHeading>
    <Image
      src="/placeholder-3x2.png"
      alt="Example Image"
      overrides={{width: '400px'}}
      loadingAspectRatio="3:2"
      placeholderIcon
    />
  </Container>
);
StoryFixedWidthAndAspectRatio.storyName = 'fixed-width-and-aspect-ratio';

export const StoryFixedHeighthAndAspectRatio = () => (
  <Container>
    <StorybookHeading>Fixed height and aspect-ratio (w=450)</StorybookHeading>
    <Image
      src="/placeholder-3x2.png"
      alt="Example Image"
      overrides={{height: '300px'}}
      loadingAspectRatio="3:2"
      placeholderIcon
    />
  </Container>
);
StoryFixedHeighthAndAspectRatio.storyName = 'fixed-height-and-aspect-ratio';

export const StorySharpBorderRadius = () => (
  <Container>
    <StorybookHeading>Image with sharp border-radius</StorybookHeading>
    <Image
      src="/placeholder-3x2.png"
      loadingAspectRatio="3:2"
      alt="Example Image"
      placeholderIcon
    />
  </Container>
);
StorySharpBorderRadius.storyName = 'sharp-border-radius';

export const StoryRoundedBorderRadius = () => (
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
);
StoryRoundedBorderRadius.storyName = 'rounded-border-radius';

export const StoryRoundedBorderRadiusWithMq = () => (
  <Container>
    <StorybookHeading>Image with rounded border-radius and mq</StorybookHeading>
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
);
StoryRoundedBorderRadiusWithMq.storyName = 'rounded-border-radius-with-mq';

export const StoryCircleBorderRadius = () => (
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
);
StoryCircleBorderRadius.storyName = 'circle-border-radius';

export const StoryValidImg = () => (
  <Container>
    <StorybookHeading>Valid image reference</StorybookHeading>
    <Image
      src="/placeholder-3x2.png"
      loadingAspectRatio="3:2"
      alt="Example Image"
    />
  </Container>
);
StoryValidImg.storyName = 'valid-img';

export const StoryInvalidImg = () => (
  <Container>
    <StorybookHeading>Invalid image reference hiding logo</StorybookHeading>
    <Image
      src="/placeholder-3x2.invalid"
      loadingAspectRatio="3:2"
      alt="Example Image"
    />
  </Container>
);
StoryInvalidImg.storyName = 'invalid-img';

export const StoryInvalidImgWithPlaceholderIcon = () => (
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
);
StoryInvalidImgWithPlaceholderIcon.storyName =
  'invalid-img-with-placeholder-icon';

export const StoryInvalidImgWithCustomPlaceholderIconDefaultSize = () => (
  <Container>
    <StorybookHeading>
      Invalid image reference with custom placeholder Icon (using default icon
      size)
    </StorybookHeading>
    <Image
      placeholderIcon
      src="/placeholder-3x2.invalid"
      loadingAspectRatio="3:2"
      alt="Example Image"
      overrides={{
        placeholderIcon: props => <IconFilledError {...props} />,
      }}
    />
  </Container>
);
StoryInvalidImgWithCustomPlaceholderIconDefaultSize.storyName =
  'invalid-img-with-custom-placeholder-icon-default-size';

export const StoryInvalidImgWithCustomPlaceholderIconOverrideSize = () => (
  <Container>
    <StorybookHeading>
      Invalid image reference with custom placeholder Icon (using override icon
      size)
    </StorybookHeading>
    <Image
      placeholderIcon
      src="/placeholder-3x2.invalid"
      loadingAspectRatio="3:2"
      alt="Example Image"
      overrides={{
        placeholderIcon: () => (
          <IconFilledError overrides={{size: 'iconSize050'}} />
        ),
      }}
    />
  </Container>
);
StoryInvalidImgWithCustomPlaceholderIconOverrideSize.storyName =
  'invalid-img-with-custom-placeholder-icon-override-size';

export const StoryLazyLoading = () => {
  const getImages = (num: number) => {
    const images = [];
    for (let i = 1; i <= num; i++) {
      const width = 400 + i;
      images.push(
        <Image
          key={width}
          src={`https://placekitten.com/${width}/${width}`}
          // width and height are needed for lazy loading
          overrides={{width: width.toString(), height: width.toString()}}
          loadingAspectRatio="1:1"
          loading="lazy"
          alt={`Cat ${i}`}
          placeholderIcon
        />,
      );
    }
    return images;
  };

  return <div>{getImages(30)}</div>;
};
StoryLazyLoading.storyName = 'lazy-loading';
StoryLazyLoading.parameters = {eyes: {include: false}, percy: {skip: true}};

export const StoryImageWithSources = () => {
  const sources = [
    {media: 'lg', srcSet: '/1200x800-lg-placeholder-image.png'},
    {media: 'md', srcSet: '/800x600-md-placeholder-image.png'},
    {media: 'xs', srcSet: '/300x300-xs-placeholder-image.png'},
  ];
  return (
    <Image
      src="/fallback-placeholder-image.png"
      sources={sources}
      alt="placeholders"
    />
  );
};
StoryImageWithSources.storyName = 'image-with-sources-using-mq';

export const StoryImageWithSourcesNoXS = () => {
  const sources = [
    {media: 'lg', srcSet: '/1200x800-lg-placeholder-image.png'},
    {media: 'md', srcSet: '/800x600-md-placeholder-image.png'},
  ];
  return (
    <Image
      src="/fallback-placeholder-image.png"
      sources={sources}
      alt="placeholders"
    />
  );
};
StoryImageWithSourcesNoXS.storyName = 'image-with-sources-using-mq-no-xs';

export const StoryImageWithSourcesAndMedia = () => {
  // Source order matters
  //
  // Very much like it does when using the sizes algorithm,
  // the browser goes over the list of sources and picks the first one that matches.
  // A match can happen based on both media and type attributes.
  // https://dev.opera.com/articles/native-responsive-images/
  const sources = [
    {
      media: '(min-width: 800px)',
      srcSet: '/min-width-800px-placeholder-image.png',
    },
    {
      media: '(min-width: 600px)',
      srcSet: '/min-width-600px-placeholder-image.png',
    },
  ];
  return (
    <Image
      src="/fallback-300x-placeholder-image.png"
      sources={sources}
      alt="placeholders"
    />
  );
};
StoryImageWithSourcesAndMedia.storyName =
  'image-with-sources-using-media-query';

export const StoryImageWithLogicalProps = () => (
  <>
    <Container>
      <StorybookHeading>300px by 200px</StorybookHeading>
      <Image
        src="/placeholder-3x2.png"
        alt="Example Image"
        overrides={{
          width: '100px',
          height: '100px',
          marginInline: '25px',
          marginBlock: '50px',
        }}
        placeholderIcon
      />
    </Container>
  </>
);

StoryImageWithLogicalProps.storyName = 'image-with-logical-props';
