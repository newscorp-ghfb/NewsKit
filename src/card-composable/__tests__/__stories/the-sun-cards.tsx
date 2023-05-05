import React from 'react';
import {toNewsKitIcon} from '../../../icons';
import {GridLayout, GridLayoutItem} from '../../../grid-layout';
import {Videocam as FilledVideocam} from '@emotion-icons/material/Videocam';
import {Share as FilledShare} from '@emotion-icons/material/Share';
import {
  CardActions,
  CardComposable,
  CardContent,
  CardLink,
  CardMedia,
} from '../../card-composable';
import {Flag} from '../../../flag';
import {Headline} from '../../../headline';
import {TextBlock} from '../../../text-block';
import {Tag} from '../../../tag';
// The Sun --- starts here
const IconFilledVideoCam = toNewsKitIcon(FilledVideocam);
const IconFilledShare = toNewsKitIcon(FilledShare);

export interface MediaContextActionProps {
  size?: 'small' | 'medium' | 'large';
  area?: string;
}

const href = '/';

const map = {
  small: '375px',
  medium: '640px',
  large: '920px',
};
// The Sun --- ends here

const typographyPresetMap = {
  small: 'editorialDisplay003',
  medium: 'editorialDisplay004',
  large: 'editorialDisplay005',
};

export const CardVerticalTheSun: React.FC<MediaContextActionProps> = ({
  size = 'medium',
}) => (
  <CardComposable
    overrides={{width: map[size], stylePreset: 'cardComposableVertical'}}
    style={{
      overflow: 'hidden',
    }}
  >
    <CardMedia
      media={{
        src:
          size === 'small'
            ? 'https://storybook.newskit.co.uk/placeholder-1x1.png'
            : 'https://storybook.newskit.co.uk/placeholder-3x2.png',
        alt: 'card-media-image',
        loadingAspectRatio: size === 'small' ? '1:1' : '3:2',
      }}
    />
    <GridLayoutItem
      area="media"
      alignSelf="end"
      justifySelf="start"
      style={{zIndex: 2}}
      marginInlineStart="space040"
    >
      <Flag overrides={{typographyPreset: 'editorialLabel020'}}>EXCLUSIVE</Flag>
    </GridLayoutItem>
    <CardContent
      data-testid="card-content"
      rowGap="space045"
      overrides={{
        paddingInline: 'space040',
        paddingBlock: 'space040',
      }}
    >
      <CardLink expand href={href} overrides={{stylePreset: 'linkTheSun'}}>
        <Headline
          overrides={{
            typographyPreset: typographyPresetMap[size],
          }}
        >
          LOREM IPSUM Dolor sit amet, consectetur adipiscing elit, proin
          molestie sem at consectetur euismod maecenas ut
        </Headline>
      </CardLink>
      <TextBlock
        as="p"
        typographyPreset="editorialParagraph020"
        stylePreset="inkBase"
      >
        When asked about his trips as a royal around the Commonwealth, Harry
        told the Armchair Expert podcast: &quot;It’s the job right? Grin and
        bear it, get on with it.&quot;
      </TextBlock>
    </CardContent>
    <CardActions
      data-testid="card-actions"
      columns="auto auto"
      alignItems="center"
      justifyContent="space-between"
      overrides={{
        paddingBlock: 'space050',
        paddingInline: 'space040',
      }}
    >
      <Tag
        href={href}
        overrides={{
          stylePreset: 'cameraTag',
          typographyPreset: 'utilityButton020',
          paddingInline: 'space000',
          spaceInline: 'space020',
        }}
      >
        Category
        <IconFilledVideoCam />
      </Tag>
      <Tag
        href={href}
        overrides={{
          stylePreset: 'shareTag',
          typographyPreset: 'utilityButton010',
          paddingInline: 'space000',
          spaceInline: 'space020',
        }}
      >
        <IconFilledShare />
        Share
      </Tag>
    </CardActions>
  </CardComposable>
);

export const CardVerticalResponsive = () => (
  <CardComposable
    overrides={{stylePreset: 'cardComposableVertical', minHeight: '100%'}}
    rows="auto 1fr auto"
    style={{
      overflow: 'hidden',
    }}
  >
    <CardMedia
      media={{
        src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
        alt: 'card-media-image',
        loadingAspectRatio: '3:2',
      }}
    />
    <GridLayoutItem
      area="media"
      alignSelf="end"
      justifySelf="start"
      style={{zIndex: 2}}
      marginInlineStart="space040"
    >
      <Flag overrides={{typographyPreset: 'editorialLabel020'}}>EXCLUSIVE</Flag>
    </GridLayoutItem>
    <CardContent
      data-testid="card-content"
      rowGap={{xs: 'space045', md: 'space040'}}
      overrides={{
        paddingInline: 'space040',
        paddingBlock: 'space040',
      }}
    >
      <CardLink expand href={href} overrides={{stylePreset: 'linkTheSun'}}>
        <Headline
          overrides={{
            kicker: {
              stylePreset: 'inkBrand020',
            },
            typographyPreset: {
              xs: 'editorialHeadline030',
              md: 'editorialHeadline040',
            },
          }}
          kickerText="LOREM IPSUM"
        >
          Dolor sit amet, consectetur adipiscing elit, proin molestie sem at
          consectetur euismod maecenas ut
        </Headline>
      </CardLink>
      <TextBlock
        as="p"
        typographyPreset={{
          xs: 'editorialParagraph010',
          md: 'editorialParagraph020',
        }}
        stylePreset="inkBase"
      >
        When asked about his trips as a royal around the Commonwealth, Harry
        told the Armchair Expert podcast: &quot;It’s the job right? Grin and
        bear it, get on with it.&quot;
      </TextBlock>
    </CardContent>
    <CardActions
      data-testid="card-actions"
      columns="auto auto"
      alignItems="center"
      justifyContent="space-between"
      overrides={{
        paddingBlock: 'space010',
        paddingInline: 'space040',
      }}
    >
      <Tag
        href={href}
        overrides={{
          stylePreset: 'cameraTag',
          typographyPreset: 'utilityButton020',
          paddingInline: 'space000',
          spaceInline: 'space020',
        }}
      >
        Category
        <IconFilledVideoCam />
      </Tag>
      <Tag
        href={href}
        overrides={{
          stylePreset: 'shareTag',
          typographyPreset: 'utilityButton010',
          paddingInline: 'space000',
          spaceInline: 'space020',
        }}
      >
        <IconFilledShare />
        Share
      </Tag>
    </CardActions>
  </CardComposable>
);

export const CardHorizontalTheSun: React.FC<MediaContextActionProps> = ({
  size = 'medium',
  area = `
  media content
  actions actions
`,
}) => (
  <CardComposable
    overrides={{width: map[size], stylePreset: 'cardComposableHorizontal'}}
    style={{
      overflow: 'hidden',
    }}
    columns={size === 'medium' ? '1.5fr 1fr' : '1fr 1fr'}
    columnGap="space040"
    rowGap="space045"
    areas={area}
  >
    <CardMedia
      media={{
        src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
        alt: 'card-media-image',
        loadingAspectRatio: '3:2',
      }}
    />

    <GridLayoutItem
      area="media"
      alignSelf="end"
      justifySelf="start"
      style={{zIndex: 2}}
    >
      <Flag
        size="small"
        overrides={{
          typographyPreset: 'editorialLabel010',
        }}
      >
        EXCLUSIVE
      </Flag>
    </GridLayoutItem>
    <CardContent
      rowGap="space030"
      data-testid="card-content"
      rows="min-content"
    >
      <CardLink expand href={href} overrides={{stylePreset: 'linkTheSun'}}>
        <Headline
          overrides={{
            typographyPreset: typographyPresetMap[size],
          }}
        >
          Short title of the card describing the main content
        </Headline>
      </CardLink>
      {!(size === 'small') && (
        <TextBlock
          as="p"
          typographyPreset="editorialParagraph010"
          stylePreset="inkBase"
        >
          When asked about his trips as a royal around the Commonwealth, Harry
          told the Armchair Expert podcast: &quot;It’s the job right? Grin and
          bear it, get on with it.&quot;
        </TextBlock>
      )}
    </CardContent>
    <CardActions
      data-testid="card-actions"
      columns="auto auto"
      alignItems="center"
      justifyContent="space-between"
    >
      <Tag
        href={href}
        overrides={{
          stylePreset: 'cameraTag',
          typographyPreset: 'utilityButton020',
          paddingInline: 'space000',
          spaceInline: 'space020',
        }}
      >
        Category
        <IconFilledVideoCam />
      </Tag>
      <Tag
        href={href}
        overrides={{
          stylePreset: 'shareTag',
          typographyPreset: 'utilityButton010',
          paddingInline: 'space000',
          spaceInline: 'space020',
        }}
      >
        <IconFilledShare />
        Share
      </Tag>
    </CardActions>
  </CardComposable>
);
export const CardHorizontalResponsive = () => (
  <CardComposable
    overrides={{stylePreset: 'cardComposableHorizontal'}}
    style={{
      overflow: 'hidden',
    }}
    columnGap="space040"
    rowGap={{xs: 'space045', md: 'space000'}}
    alignItems="space-around"
    areas={`
      media content
      actions actions
    `}
  >
    <CardMedia
      media={{
        src: 'https://storybook.newskit.co.uk/placeholder-3x2.png',
        alt: 'card-media-image',
        loadingAspectRatio: '3:2',
        overrides: {
          width: {
            xs: '133px',
            md: '147px',
          },
        },
      }}
    />

    <GridLayoutItem
      area="media"
      alignSelf="end"
      justifySelf="start"
      style={{zIndex: 2}}
    >
      <Flag
        size="small"
        overrides={{
          typographyPreset: 'editorialLabel010',
        }}
      >
        EXCLUSIVE
      </Flag>
    </GridLayoutItem>
    <CardContent
      rowGap="space030"
      data-testid="card-content"
      rows="min-content"
    >
      <CardLink expand href={href} overrides={{stylePreset: 'linkTheSun'}}>
        <Headline
          overrides={{
            typographyPreset: {
              xs: 'editorialHeadline020',
              lg: 'editorialHeadline010',
            },
          }}
        >
          Short title of the card describing the main content
        </Headline>
      </CardLink>
    </CardContent>
    <CardActions
      data-testid="card-actions"
      columns="auto auto"
      alignItems="center"
      justifyContent="space-between"
    >
      <Tag
        href={href}
        overrides={{
          stylePreset: 'cameraTag',
          typographyPreset: 'utilityButton020',
          paddingInline: 'space000',
          spaceInline: 'space020',
        }}
      >
        Category
        <IconFilledVideoCam />
      </Tag>
      <Tag
        href={href}
        overrides={{
          stylePreset: 'shareTag',
          typographyPreset: 'utilityButton010',
          paddingInline: 'space000',
          spaceInline: 'space020',
        }}
      >
        <IconFilledShare />
        Share
      </Tag>
    </CardActions>
  </CardComposable>
);

export const stylePresets = {
  linkTheSun: {
    hover: {
      textDecoration: 'none',
    },
  },
  cameraTag: {
    base: {
      borderStyle: 'none',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
  },
  shareTag: {
    base: {
      borderStyle: 'none',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
  },
  cardComposableVertical: {
    base: {
      borderStyle: 'solid',
      borderColor: '#eaeeef',
      borderWidth: `{{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth010}} {{borders.borderWidth010}}`,
    },
  },
  cardComposableHorizontal: {
    base: {
      borderStyle: 'solid',
      borderColor: '#eaeeef',
      borderWidth: `{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}}`,
    },
  },
};
