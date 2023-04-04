import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  CardComposable,
  CardActions,
  CardContent,
  CardLink,
  CardMedia,
} from '../../card-composable';
import {Headline, HeadlineProps} from '../../../headline';
import {CreateThemeArgs, ThemeProvider} from '../../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../../test/theme-select-object';
import {Flag} from '../../../flag';
import {StorybookCase, StorybookPage} from '../../../test/storybook-comps';
import {Button} from '../../../button';
import {UnorderedList} from '../../../unordered-list';
import {TextBlock, TextBlockProps} from '../../../text-block';
import {GridLayout} from '../../../grid-layout';
import {Divider} from '../../../divider';
import {Block} from '../../../block';
import {
  IconFilledStarOutline,
  IconFilledStar,
  IconFilledFigma,
  IconFilledAccountBalance,
  IconFilledAccountTree,
  IconFilledBookmarkBorder,
} from '../../../icons';
import {LinkInline} from '../../../link';
import {defaultFocusVisible} from '../../../utils/default-focus-visible';
import {Tag} from '../../../tag';

// const cardHref = '/card-link';

// export const CardComposableExample = () => (
//   <CardComposable
//     overrides={{
//       maxWidth: {xl: '600px', md: '420px'},
//       stylePreset: 'cardComposable',
//     }}
//     rowGap="space040"
//     columns={{xs: '200px 1fr', md: '1fr'}}
//     areas={{
//       xs: `
//         media content
//         media actions
//       `,
//       md: `
//         media
//         content
//         actions
//       `,
//     }}
//   >
//     <CardContent
//       rowGap="space040"
//       overrides={{paddingInline: 'space040', paddingBlockStart: 'space040'}}
//     >
//       <CardLink href={cardHref} expand>
//         <Headline kickerText="KICKER">Title of the card</Headline>
//       </CardLink>
//       <Paragraph>Some kind of intro</Paragraph>
//     </CardContent>

//     <CardMedia media={{src: '/placeholder-3x2.png'}} />

//     <CardActions>
//       <Tag href="/news">News</Tag>
//     </CardActions>
//   </CardComposable>
// );

const H = ({overrides, ...props}: Omit<HeadlineProps, 'children'>) => (
  <Headline
    overrides={{typographyPreset: 'editorialHeadline030', ...overrides}}
    {...props}
  >
    Short title of the card describing the main content
  </Headline>
);

const P = ({...props}: Omit<TextBlockProps, 'children'>) => (
  <TextBlock as="p" typographyPreset="editorialParagraph020" {...props}>
    Short paragraph description of the article, outlining main story and focus.
  </TextBlock>
);

// TODO: check this themes overrides
const cardCustomThemeObject: CreateThemeArgs = {
  name: 'card-custom-theme',
  overrides: {
    stylePresets: {
      centered: {
        base: {
          textAlign: 'center',
        },
      },
      flagCustom: {
        base: {
          backgroundColor: '{{colors.amber080}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      flagCustom2: {
        base: {
          backgroundColor: '{{colors.amber040}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
        },
      },
      firstSplitBarCustom: {
        base: {
          backgroundColor: '{{colors.interactivePrimary010}}',
          textAlign: 'center',
        },
      },
      secondSplitBarCustom: {
        base: {
          backgroundColor: '{{colors.interactivePrimary020}}',
          textAlign: 'center',
        },
      },
      tagCustom: {
        base: {
          backgroundColor: '{{colors.amber030}}',
        },
      },
      headlineLink: {
        base: {
          color: '{{colors.inkContrast}}',
          textDecoration: 'none',
        },
        hover: {
          color: '{{colors.interactivePrimary040}}',
          textDecoration: 'none',
        },
        active: {
          color: '{{colors.interactivePrimary050}}',
          textDecoration: 'none',
        },
        visited: {
          color: '{{colors.interactiveVisited010}}',
        },
        'focus-visible': defaultFocusVisible,
      },
      headlineWithHoverFromParent: {
        base: {
          color: 'currentColor',
        },
      },
      headlineCustom: {
        base: {
          color: '{{colors.amber070}}',
          textDecoration: 'underline',
        },
      },
      // mocked card Containers
      cardContainerMock: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.purple020}}',
          borderWidth: '{{borders.borderWidth010}}',
          backgroundColor: '{{colors.blue020}}',
        },
        hover: {
          backgroundColor: '{{colors.blue040}}',
          boxShadow: '{{shadows.shadow030}}',
        },
        active: {
          backgroundColor: '{{colors.blue060}}',
          boxShadow: '{{shadows.shadow050}}',
        },
      },
      cardBook: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.blue020}}',
          borderWidth: '{{borders.borderWidth010}}',
          boxShadow: '{{shadows.shadow030}}',
          borderRadius: '{{borders.borderRadiusRounded030}}',
          backgroundColor: '{{colors.white}}',
        },
        hover: {
          boxShadow: '{{shadows.shadow060}}',
          backgroundColor: '#f6f8fc',
        },
      },
      cardBookActions: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.purple020}}',
          borderWidth:
            '{{borders.borderWidth010}} {{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth000}}',
        },
      },
      cardContentSeparateColor: {
        base: {
          boxShadow: '{{shadows.shadow020}}',
          backgroundColor: '{{colors.interface010}}',
        },
        hover: {
          backgroundColor: '{{colors.interface020}}',
        },
      },
      cardInset: {
        base: {
          backgroundColor: '{{colors.interface020}}',
        },
      },
      cardContainerWithHover: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.purple020}}',
          borderWidth: '{{borders.borderWidth010}}',
          backgroundColor: '{{colors.amber020}}',
          color: '{{colors.amber070}}',
        },
        hover: {
          boxShadow: '{{shadows.shadow030}}',
          backgroundColor: '{{colors.blue020}}',
          color: '{{colors.inkContrast}}',
        },
      },
      cardContainerMockNoHover: {
        base: {},
      },
      cardContainerMediaMock: {
        base: {
          backgroundColor: '{{colors.red020}}',
        },
      },
      cardContainerTeaserMock: {
        base: {
          backgroundColor: '{{colors.neutral010}}',
        },
        hover: {
          backgroundColor: '{{colors.amber010}}',
        },
        active: {
          backgroundColor: '{{colors.amber020}}',
        },
      },
      cardContainerActionsMock: {
        base: {
          backgroundColor: '{{colors.amber010}}',
        },
      },
    },
  },
};

const cardCustomDarkThemeObject: CreateThemeArgs = {
  name: 'card-custom-theme',
  overrides: {
    stylePresets: {
      ...cardCustomThemeObject.overrides?.stylePresets,
      flagCustom: {
        base: {
          backgroundColor: '{{colors.amber010}}',
          color: '{{colors.inkInverse}}',
        },
      },
      flagCustom2: {
        base: {
          backgroundColor: '{{colors.amber090}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
        },
      },
      tagCustom: {
        base: {
          backgroundColor: '{{colors.amber080}}',
          color: '{{colors.inkBase}}',
        },
      },
      headlineCustom: {
        base: {
          color: '{{colors.amber020}}',
          textDecoration: 'underline',
        },
      },
      cardContainerWithHover: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.purple020}}',
          borderWidth: '{{borders.borderWidth010}}',
          backgroundColor: '{{colors.amber060}}',
          color: '{{colors.amber010}}',
        },
        hover: {
          boxShadow: '{{shadows.shadow030}}',
          backgroundColor: '{{colors.blue080}}',
          color: '{{colors.inkContrast}}',
        },
      },
      cardContainerMockNoHover: {
        base: {
          backgroundColor: '{{colors.amber060}}',
          color: '{{colors.amber010}}',
        },
      },
      cardContainerActionsMock: {
        base: {
          backgroundColor: '{{colors.amber070}}',
        },
      },
    },
  },
};

const areasGap = 'space050';
const contentGap = 'space040';

export const StoryDefault = () => (
  <StorybookPage>
    <CardComposable overrides={{maxWidth: '372px'}} rowGap={areasGap}>
      <CardContent rowGap={contentGap}>
        <Flag>Flag</Flag>
        <H />
        <P />
      </CardContent>

      <CardMedia media={{src: '/placeholder-3x2.png'}} />

      <CardActions>
        <Tag href="/news">Tag</Tag>
      </CardActions>
    </CardComposable>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StoryCardAreas = () => (
  <StorybookPage>
    <StorybookCase title="Card Content">
      <CardComposable
        overrides={{maxWidth: '372px'}}
        areas={`
          content
        `}
      >
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
      </CardComposable>
    </StorybookCase>

    <StorybookCase title="CardMedia">
      <CardComposable overrides={{maxWidth: '372px'}}>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
      </CardComposable>
    </StorybookCase>

    <StorybookCase title="CardActions">
      <CardComposable overrides={{maxWidth: '372px'}}>
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>

    <StorybookCase title="CardLink applied to headline in CardContent area">
      <CardComposable overrides={{maxWidth: '372px'}} rowGap={areasGap}>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <CardLink href={window.location.href}>
            <H
              overrides={{
                heading: {
                  stylePreset: 'headlineLink',
                },
              }}
            />
          </CardLink>
          <P />
        </CardContent>
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);
StoryCardAreas.storyName = 'Card areas';

export const StoryVariations = () => (
  <StorybookPage>
    <StorybookCase title="CardLink and CardMedia">
      <CardComposable
        overrides={{maxWidth: '372px'}}
        rowGap={areasGap}
        areas={`
          media
          content
        `}
      >
        <CardContent rowGap={contentGap}>
          <CardLink href={window.location.href}>
            <H overrides={{heading: {stylePreset: 'headlineLink'}}} />
          </CardLink>
        </CardContent>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
      </CardComposable>
    </StorybookCase>
    <StorybookCase title="Whole card as a link by applying the 'expand' prop">
      <CardComposable
        overrides={{
          maxWidth: '372px',
          stylePreset: 'cardContentSeparateColor',
        }}
        rowGap={areasGap}
      >
        <CardContent
          rowGap={contentGap}
          overrides={{
            paddingInline: 'space040',
          }}
        >
          <Flag>Flag</Flag>
          <CardLink expand href={window.location.href}>
            <H overrides={{heading: {stylePreset: 'headlineLink'}}} />
          </CardLink>
          <P />
        </CardContent>
        <CardMedia
          media={{src: '/placeholder-4x5.png', loadingAspectRatio: '4:5'}}
        />
        <CardActions
          overrides={{marginBlockEnd: 'space040', paddingInline: 'space040'}}
        >
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
    <StorybookCase title="Button in CardActions area">
      <CardComposable rowGap={areasGap} overrides={{maxWidth: '372px'}}>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions>
          <Button href="/news">Button</Button>
        </CardActions>
      </CardComposable>
    </StorybookCase>
    <StorybookCase title="Multiple in CardActions">
      <CardComposable overrides={{maxWidth: '372px'}} rowGap={areasGap}>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions>
          <UnorderedList
            overrides={{content: {typographyPreset: 'editorialParagraph020'}}}
            markerAlign="start"
          >
            Unordered list item
          </UnorderedList>
          <UnorderedList
            markerAlign="start"
            overrides={{content: {typographyPreset: 'editorialParagraph020'}}}
          >
            Unordered list item
          </UnorderedList>
          <UnorderedList
            markerAlign="start"
            overrides={{content: {typographyPreset: 'editorialParagraph020'}}}
          >
            Unordered list item
          </UnorderedList>
        </CardActions>
      </CardComposable>
    </StorybookCase>
    <StorybookCase title="Alternative images aspect ratio">
      <CardComposable overrides={{maxWidth: '372px'}} rowGap={areasGap}>
        <CardMedia
          media={{src: '/placeholder-4x5.png', loadingAspectRatio: '4:5'}}
        />
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);
StoryVariations.storyName = 'Variations';

export const StoryInsetCard = () => (
  <StorybookPage>
    <StorybookCase title="Card Inset">
      <CardComposable
        rowGap={areasGap}
        overrides={{
          maxWidth: '372px',
          stylePreset: 'cardInset',
        }}
      >
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardContent
          rowGap={contentGap}
          overrides={{
            paddingInline: 'space040',
          }}
        >
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions
          overrides={{marginBlockEnd: 'space040', paddingInline: 'space040'}}
        >
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);
StoryInsetCard.storyName = 'Inset card';

export const StoryLayout = () => (
  <StorybookPage>
    <StorybookCase title="Horizontal">
      <CardComposable
        overrides={{
          maxWidth: '600px',
        }}
        columns="1fr 1fr"
        columnGap={areasGap}
        rowGap={areasGap}
        areas={`
          media content
          media actions
        `}
      >
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
    <StorybookCase title="Horizontal-inverse">
      <CardComposable
        overrides={{
          maxWidth: '600px',
        }}
        columns="1fr 1fr"
        columnGap={areasGap}
        rowGap={areasGap}
        areas={`
        content media
        actions media
        `}
      >
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);
StoryLayout.storyName = 'Layout';

const SplitBars = ({
  columns,
  maxWidth,
}: {
  columns: string;
  maxWidth: string;
}) => {
  const [first, second] = columns.split(' ');

  return (
    <GridLayout columns={columns} columnGap={areasGap} overrides={{maxWidth}}>
      <TextBlock
        typographyPreset="editorialParagraph020"
        paddingBlock="space020"
        stylePreset="firstSplitBarCustom"
      >
        {first}
      </TextBlock>
      <TextBlock
        typographyPreset="editorialParagraph020"
        paddingBlock="space020"
        stylePreset="secondSplitBarCustom"
      >
        {second}
      </TextBlock>
    </GridLayout>
  );
};

const SplitCard = ({columns}: {columns: string}) => {
  const maxWidth = '600px';
  return (
    <div>
      <SplitBars columns={columns} maxWidth={maxWidth} />
      <CardComposable
        overrides={{
          maxWidth,
          marginBlockStart: 'space020',
        }}
        columns={columns}
        columnGap={areasGap}
        rowGap={areasGap}
        areas={`
          media content
          media actions
        `}
      >
        <CardContent rowGap={contentGap}>
          <H />
          <P />
        </CardContent>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </CardComposable>
    </div>
  );
};

export const StorySpan = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="1:1 horizontal ratio">
      <SplitCard columns="1fr 1fr" />
    </StorybookCase>
    <StorybookCase title="1:2 horizontal ratio">
      <SplitCard columns="1fr 2fr" />
    </StorybookCase>
    <StorybookCase title="2:1 horizontal ratio">
      <SplitCard columns="2fr 1fr" />
    </StorybookCase>
  </StorybookPage>
);
StorySpan.storyName = 'Span';

export const StoryOrder = () => (
  <StorybookPage>
    <StorybookCase title="CardContent and heading first">
      <CardComposable
        overrides={{maxWidth: '250px'}}
        rowGap={areasGap}
        areas={`
          content
          media
          actions
        `}
      >
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardActions>
          <Tag onClick={() => alert('Tag clicked')} size="medium">
            Tag
          </Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);
StoryOrder.storyName = 'Order';

export const StoryResponsiveCard = () => (
  <StorybookPage>
    <StorybookCase title="Different layouts/font sizes for different breakpoints">
      <CardComposable
        overrides={{
          maxWidth: {xl: '600px', md: '372px'},
        }}
        rowGap={areasGap}
        columnGap={areasGap}
        columns={{xs: '200px 1fr', md: '1fr'}}
        areas={{
          xs: `
            media content
            media actions
          `,
          md: `
            media
            content
            actions
          `,
        }}
      >
        <CardContent rowGap={contentGap}>
          <H />
          <P />
          <UnorderedList
            overrides={{
              content: {
                typographyPreset: {
                  xl: 'editorialParagraph030',
                  md: 'editorialParagraph020',
                  xs: 'editorialParagraph010',
                },
                stylePreset: 'inkBase',
              },
            }}
          >
            {[
              'Unordered list item',
              'Unordered list item',
              'Unordered list item',
            ]}
          </UnorderedList>
        </CardContent>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);
StoryResponsiveCard.storyName = 'Responsive card';

export const StoryOnClick = () => (
  <StorybookPage>
    <StorybookCase title="onClick handler on Tag">
      <CardComposable overrides={{maxWidth: '250px'}} rowGap={areasGap}>
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardActions>
          <Tag onClick={() => alert('Tag clicked')} size="medium">
            Tag
          </Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);
StoryOnClick.storyName = 'On click';

export const StoryLogicalProps = () => (
  <StorybookPage>
    <StorybookCase title="Margin overrides">
      <CardComposable
        overrides={{
          marginInline: 'space060',
        }}
        rowGap={areasGap}
      >
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardActions>
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
    <StorybookCase title="Padding overrides">
      <CardComposable
        overrides={{
          maxWidth: '250px',
          stylePreset: 'cardInset',
          paddingBlock: 'space060',
          paddingInline: 'space060',
        }}
        rowGap={areasGap}
      >
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardActions>
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
    <StorybookCase title="Padding overrides CardContent area">
      <CardComposable overrides={{maxWidth: '250px'}} rowGap={areasGap}>
        <CardContent
          rowGap={contentGap}
          overrides={{paddingBlock: 'space040', paddingInline: 'space030'}}
        >
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardActions>
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';

export const StoryOverrides = () => (
  <StorybookPage>
    <StorybookCase title="Style preset - card and flag colours">
      <CardComposable
        overrides={{
          maxWidth: '372px',
          stylePreset: 'cardContainerWithHover',
        }}
        rowGap={areasGap}
      >
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardContent
          overrides={{paddingInline: 'space040'}}
          rowGap={contentGap}
        >
          <Flag>Flag</Flag>

          {/* Unfortunately in NewsKit there is not a way for parent hover to trigger the children one
            the easiest way to do that is using CSS currentColor */}
          <H
            overrides={{
              heading: {
                stylePreset: 'headlineWithHoverFromParent',
              },
            }}
          />
          <P />
        </CardContent>
        {/* CardActions might be better to be a Grid instead of Block so all sub-components are consistent? */}
        <CardActions
          overrides={{paddingBlockEnd: 'space040', paddingInline: 'space040'}}
        >
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>

    <StorybookCase title="Style preset - headline, paragraph, card actions and tag colours">
      <CardComposable
        overrides={{
          maxWidth: '372px',
          stylePreset: 'cardContainerMockNoHover',
        }}
        rowGap={areasGap}
      >
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardContent
          overrides={{paddingInline: 'space040'}}
          rowGap={contentGap}
        >
          <Flag>Flag</Flag>
          <H
            overrides={{
              heading: {
                // stylePreset: 'headlineCustom'
                stylePreset: 'inkBrand010',
              },
            }}
          />
          <P stylePreset="cardContainerActionsMock" />
        </CardContent>
        <CardActions
          overrides={{
            paddingInline: 'space040',
            stylePreset: 'cardContainerActionsMock',
          }}
        >
          <Tag
            href="http://example.com"
            size="medium"
            overrides={
              {
                // stylePreset: 'tagCustom'
              }
            }
          >
            Tag
          </Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
    <StorybookCase title="Typography preset - Headline">
      <CardComposable overrides={{maxWidth: '372px'}} rowGap={areasGap}>
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H
            overrides={{
              typographyPreset: 'editorialHeadline070',
            }}
          />
          <P />
        </CardContent>
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardActions>
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);
StoryOverrides.storyName = 'Styling overrides';

// https://www.linkedin.com/search/results/content/?keywords=design&origin=FACETED_SEARCH&postedBy=%5B%22first%22%2C%22following%22%5D&sid=xxV&sortBy=%22relevance%22
export const ComplexStory = () => (
  <StorybookPage>
    <StorybookCase title="Random card">
      <CardComposable
        overrides={{maxWidth: '250px', stylePreset: 'cardBook'}}
        style={{overflow: 'hidden'}}
      >
        <CardMedia media={{src: '/placeholder-3x2.png'}} />
        <CardContent
          rowGap="space020"
          overrides={{paddingBlock: 'space030', paddingInline: 'space030'}}
        >
          <TextBlock
            typographyPreset="editorialHeadline010"
            marginBlockEnd="space010"
          >
            Mountain retreat
          </TextBlock>
          <TextBlock typographyPreset="utilityBody020">
            Snowy Peaks, Austria
          </TextBlock>

          <GridLayout
            columns="auto auto auto auto auto 1fr"
            alignItems="center"
          >
            <IconFilledStar
              overrides={{size: 'iconSize010', stylePreset: 'inkBrand010'}}
            />
            <IconFilledStar
              overrides={{size: 'iconSize010', stylePreset: 'inkBrand010'}}
            />
            <IconFilledStar
              overrides={{size: 'iconSize010', stylePreset: 'inkBrand010'}}
            />
            <IconFilledStar
              overrides={{size: 'iconSize010', stylePreset: 'inkBrand010'}}
            />
            <IconFilledStarOutline overrides={{size: 'iconSize010'}} />
            <TextBlock
              typographyPreset="utilityBody020"
              marginInlineStart="space020"
            >
              4.1 (<LinkInline href="/">38 reviews</LinkInline>)
            </TextBlock>
          </GridLayout>

          <Divider overrides={{marginBlockStart: 'space010'}} />

          <GridLayout
            columns="auto auto auto auto"
            justifyContent="space-between"
            overrides={{width: '100%'}}
          >
            <Block stylePreset="centered">
              <IconFilledFigma
                overrides={{
                  size: 'iconSize030',
                  stylePreset: 'inkSubtle',
                }}
              />
              <TextBlock typographyPreset="utilityBody010">Wi-Fi</TextBlock>
            </Block>
            <Block stylePreset="centered">
              <IconFilledAccountBalance
                overrides={{
                  size: 'iconSize030',
                  stylePreset: 'inkSubtle',
                }}
              />
              <TextBlock typographyPreset="utilityBody010">SPA</TextBlock>
            </Block>
            <Block stylePreset="centered">
              <IconFilledAccountTree
                overrides={{
                  size: 'iconSize030',
                  stylePreset: 'inkSubtle',
                }}
              />
              <TextBlock typographyPreset="utilityBody010">Air-co</TextBlock>
            </Block>
            <Block stylePreset="centered">
              <IconFilledBookmarkBorder
                overrides={{
                  size: 'iconSize030',
                  stylePreset: 'inkSubtle',
                }}
              />
              <TextBlock typographyPreset="utilityBody010">24/7</TextBlock>
            </Block>
          </GridLayout>
          <Divider
            overrides={{
              marginBlockEnd: 'space010',
              stylePreset: 'inkNonEssential',
            }}
          />
          <TextBlock typographyPreset="utilityBody020">
            Featuring free WiFi, Palacio de Rojas is located 350 m from the
            Lonja Silk Exchange and Valencia’s Central Market. It offers
            air-conditioned apartments with city views. Private parking is
            offered upon request.
          </TextBlock>
        </CardContent>
        <CardActions
          columns="auto auto"
          alignItems="center"
          justifyContent="space-between"
          overrides={{
            stylePreset: 'cardBookActions',
            paddingBlock: 'space030',
            paddingInline: 'space030',
          }}
        >
          <Button size="small">Book now</Button>
          <Block>
            <TextBlock as="span" typographyPreset="utilitySubheading040">
              $299
            </TextBlock>
            <TextBlock as="span" typographyPreset="utilityBody020">
              /night
            </TextBlock>
          </Block>
        </CardActions>
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);

ComplexStory.storyName = 'Other story';

export default {
  title: 'Components/CardComposable',
  component: () => 'None',
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => {
      const backgroundValue = context?.globals?.backgrounds?.value;
      return (
        <ThemeProvider
          theme={createCustomThemeWithBaseThemeSwitch(
            backgroundValue,
            !backgroundValue || backgroundValue === '#ffffff'
              ? cardCustomThemeObject
              : cardCustomDarkThemeObject,
            context?.name,
          )}
        >
          <Story />
        </ThemeProvider>
      );
    },
  ],
};
