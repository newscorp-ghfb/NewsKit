import * as React from 'react';
import {Image} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {IconFilledError} from '../../icons';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default {
  title: 'NewsKit Light/image',
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
  <Container>
    <StorybookHeading>100% by 60%</StorybookHeading>
    <Image
      src="/placeholder-3x2.png"
      alt="Example Image"
      overrides={{width: '100%', height: '66%'}}
      placeholderIcon
    />
  </Container>
);
StoryFixedHeightAndWidthIn.storyName = 'fixed height and width in %';

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

export const StoryImageWithCaption = () => (
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
);
StoryImageWithCaption.storyName = 'image-with-caption';

export const StoryImageWithCaptionInset = () => (
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
);
StoryImageWithCaptionInset.storyName = 'image-with-caption-inset';

export const StoryImageWithCaptionAndOverrides = () => (
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
);
StoryImageWithCaptionAndOverrides.storyName =
  'image-with-caption-and-overrides';

export const StoryImageWithCaptionInsetAndOverrides = () => (
  <Container>
    <StorybookHeading>Image With Caption Inset and Overrides</StorybookHeading>
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
);
StoryImageWithCaptionInsetAndOverrides.storyName =
  'image-with-caption-inset-and-overrides';

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
StoryLazyLoading.parameters = {eyes: {include: false}};

export const StoryImageWithSources = () => {
  const sources = [
    {media: 'lg', srcSet: 'https://placekitten.com/800/800'},
    {media: 'md', srcSet: 'https://placekitten.com/600/600'},
    {media: 'xs', srcSet: 'https://placekitten.com/300/300'},
  ];
  return (
    <Image src="https://placekitten.com/200/200" sources={sources} alt="cats" />
  );
};
StoryImageWithSources.storyName = 'image-with-sources-using-mq';

export const StoryImageWithSourcesAndMedia = () => {
  // Source order matters
  //
  // Very much like it does when using the sizes algorithm,
  // the browser goes over the list of sources and picks the first one that matches.
  // A match can happen based on both media and type attributes.
  // https://dev.opera.com/articles/native-responsive-images/
  const sources = [
    {media: '(min-width: 800px)', srcSet: 'https://placekitten.com/500/500'},
    {media: '(min-width: 600px)', srcSet: 'https://placekitten.com/200/200'},
  ];
  return (
    <Image src="https://placekitten.com/200/200" sources={sources} alt="cats" />
  );
};
StoryImageWithSourcesAndMedia.storyName =
  'image-with-sources-using-media-query';
