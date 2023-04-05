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
import {Tag} from '../../../tag';
import {VideoPlayer} from '../../../video-player';
import {DEFATULT_VIDEO_PLAYER_CONFIG} from '../../../video-player/__tests__/config';

const H = ({overrides, ...props}: Omit<HeadlineProps, 'children'>) => (
  <Headline
    overrides={{typographyPreset: 'editorialHeadline030', ...overrides}}
    {...props}
  >
    Short title of the card describing the main content
  </Headline>
);

const P = ({...props}: Omit<TextBlockProps, 'children'>) => (
  <TextBlock
    as="p"
    typographyPreset="editorialParagraph020"
    stylePreset="inkBase"
    {...props}
  >
    Short paragraph description of the article, outlining main story and focus.
  </TextBlock>
);

// TODO: check this themes overrides
const cardCustomThemeObject: CreateThemeArgs = {
  name: 'card-custom-theme',
  overrides: {
    stylePresets: {
      // split stories
      firstSplitBarCustom: {
        base: {
          color: '{{colors.inkBase}}',
          backgroundColor: '{{colors.interactivePrimary010}}',
          textAlign: 'center',
        },
      },
      secondSplitBarCustom: {
        base: {
          color: '{{colors.inkBase}}',
          backgroundColor: '{{colors.interactivePrimary020}}',
          textAlign: 'center',
        },
      },
      // Other stories
      cardBook: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interface020}}',
          borderWidth: '{{borders.borderWidth010}}',
          boxShadow: '{{shadows.shadow030}}',
          borderRadius: '{{borders.borderRadiusRounded030}}',
          backgroundColor: '{{colors.interfaceBackground}}',
        },
        hover: {
          boxShadow: '{{shadows.shadow060}}',
          backgroundColor: '{{colors.interface020}}',
          borderColor: '{{colors.interface030}}',
        },
      },
      // Other stories
      cardBookActions: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interface020}}',
          borderWidth:
            '{{borders.borderWidth010}} {{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth000}}',
        },
      },
      // Other stories
      centered: {
        base: {
          textAlign: 'center',
        },
      },
      // Whole card as a link by applying the 'expand' prop
      cardContentSeparateColor: {
        base: {
          boxShadow: '{{shadows.shadow020}}',
          backgroundColor: '{{colors.interface010}}',
        },
        hover: {
          backgroundColor: '{{colors.interface020}}',
        },
      },
      // CardInset & Padding overrides
      cardInset: {
        base: {
          backgroundColor: '{{colors.interface020}}',
        },
      },
      // Style preset - card and flag colours
      cardContainerWithHover: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
          color: '{{colors.inkBrand010}}',
        },
        hover: {
          boxShadow: '{{shadows.shadow030}}',
          backgroundColor: '{{colors.interfaceInformative010}}',
          color: '{{colors.inkInverse}}',
        },
      },
      currentColor: {
        base: {
          color: 'currentColor',
        },
      },
      currentColorTag: {
        base: {
          color: 'currentColor',
          borderStyle: 'solid',
          borderColor: 'currentColor',
          borderWidth: '{{borders.borderWidth010}}',
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

      <CardMedia
        media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
      />

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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <CardLink href={window.location.href}>
            <H
              overrides={{
                heading: {
                  // stylePreset: 'headlineLink',
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
            <H />
          </CardLink>
        </CardContent>
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
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
            <H />
          </CardLink>
          <P />
        </CardContent>
        <CardMedia
          media={{
            src: 'https://storybook.newskit.co.uk/placeholder-4x5.png',
            loadingAspectRatio: '4:5',
          }}
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
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
          media={{
            src: 'https://storybook.newskit.co.uk/placeholder-4x5.png',
            loadingAspectRatio: '4:5',
          }}
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
    <StorybookCase title="Video passed to CardMedia">
      <CardComposable overrides={{maxWidth: '372px'}} rowGap={areasGap}>
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardMedia>
          <VideoPlayer config={DEFATULT_VIDEO_PLAYER_CONFIG} />
        </CardMedia>
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
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
  <StorybookPage columns="1fr">
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
        <CardActions alignItems="start">
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
          <H />
          <P />
        </CardContent>
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
        <CardActions>
          <Tag size="medium">Tag</Tag>
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
      </CardComposable>
    </StorybookCase>
  </StorybookPage>
);
StoryResponsiveCard.storyName = 'Responsive card';

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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
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
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
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
                stylePreset: 'currentColor',
              },
            }}
          />
          <P stylePreset="currentColor" />
        </CardContent>
        <CardActions
          overrides={{paddingBlockEnd: 'space040', paddingInline: 'space040'}}
        >
          <Tag
            href="http://example.com"
            size="medium"
            overrides={{stylePreset: 'currentColorTag'}}
          >
            Tag
          </Tag>
        </CardActions>
      </CardComposable>
    </StorybookCase>

    <StorybookCase title="Typography preset - Headline">
      <CardComposable
        overrides={{maxWidth: '372px', stylePreset: 'no'}}
        rowGap={areasGap}
      >
        <CardContent rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H
            overrides={{
              typographyPreset: 'editorialHeadline070',
            }}
          />
          <P />
        </CardContent>
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
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
    <StorybookCase title="Other card">
      <CardComposable
        overrides={{maxWidth: '250px', stylePreset: 'cardBook'}}
        style={{overflow: 'hidden'}}
      >
        <CardMedia
          media={{src: 'https://storybook.newskit.co.uk/placeholder-3x2.png'}}
        />
        <CardContent
          rowGap="space020"
          overrides={{paddingBlock: 'space030', paddingInline: 'space030'}}
        >
          <TextBlock
            typographyPreset="editorialHeadline010"
            marginBlockEnd="space010"
            stylePreset="inkBase"
          >
            Mountain retreat
          </TextBlock>
          <TextBlock typographyPreset="utilityBody020" stylePreset="inkBase">
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
              stylePreset="inkBase"
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
              <TextBlock
                typographyPreset="utilityBody010"
                stylePreset="inkBase"
              >
                Wi-Fi
              </TextBlock>
            </Block>
            <Block stylePreset="centered">
              <IconFilledAccountBalance
                overrides={{
                  size: 'iconSize030',
                  stylePreset: 'inkSubtle',
                }}
              />
              <TextBlock
                typographyPreset="utilityBody010"
                stylePreset="inkBase"
              >
                SPA
              </TextBlock>
            </Block>
            <Block stylePreset="centered">
              <IconFilledAccountTree
                overrides={{
                  size: 'iconSize030',
                  stylePreset: 'inkSubtle',
                }}
              />
              <TextBlock
                typographyPreset="utilityBody010"
                stylePreset="inkBase"
              >
                Air-co
              </TextBlock>
            </Block>
            <Block stylePreset="centered">
              <IconFilledBookmarkBorder
                overrides={{
                  size: 'iconSize030',
                  stylePreset: 'inkSubtle',
                }}
              />
              <TextBlock
                typographyPreset="utilityBody010"
                stylePreset="inkBase"
              >
                24/7
              </TextBlock>
            </Block>
          </GridLayout>
          <Divider
            overrides={{
              marginBlockEnd: 'space010',
              stylePreset: 'inkNonEssential',
            }}
          />
          <TextBlock typographyPreset="utilityBody020" stylePreset="inkBase">
            Short paragraph description of the article, outlining main story and
            focus.
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
          <Block stylePreset="inkBase">
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
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          cardCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
