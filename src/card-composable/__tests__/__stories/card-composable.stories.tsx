import React from 'react';
import {Story as StoryType} from '@storybook/react/dist/ts3.9/client/preview/types-6-0';
import styled from '@emotion/styled';
import {
  Card,
  CardActions,
  CardContent,
  CardLink,
  CardMedia,
} from '../../card-composable';
import {Headline, HeadlineProps} from '../../../headline';
import {Paragraph} from '../../../typography';
import {Tag} from '../../../tag';
import {CreateThemeArgs, ThemeProvider} from '../../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../../test/theme-select-object';
import {Flag} from '../../../flag';
import {
  StorybookCase,
  StorybookPage,
  StorybookSubHeading,
} from '../../../test/storybook-comps';
import {Button} from '../../../button';
import {Cell} from '../../../grid/cell';
import {Grid} from '../../../grid';
import {UnorderedList} from '../../../unordered-list';
import {getStylePresetFromTheme} from '../../../utils';
import {defaultFocusVisible} from '../../../utils/default-focus-visible';
import {TextBlock, TextBlockProps} from '../../../text-block';
import {GridLayout} from '../../../grid-layout';

const StorybookGridCase = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <Cell xs={12} sm={6}>
    <StorybookSubHeading>{title}</StorybookSubHeading>
    {children}
  </Cell>
);

const H = ({overrides, ...props}: Omit<HeadlineProps, 'children'>) => (
  <Headline
    overrides={{typographyPreset: 'editorialHeadline030', ...overrides}}
    {...props}
  >
    Short title of the card describing the main content
  </Headline>
);

const P = ({...props}: Omit<TextBlockProps, 'children'>) => (
  // Probably we shoud use TextBlok here, since P does not have text-crop
  <TextBlock as="p" typographyPreset="editorialParagraph020" {...props}>
    Short paragraph description of the article, outlining main story and focus.
  </TextBlock>
);

// Style presets (Taken from style-presets.ts;)
const labelDefault = {
  base: {
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
};

const cardCustomThemeObject: CreateThemeArgs = {
  name: 'card-custom-theme',
  overrides: {
    stylePresets: {
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
        },
      },
      secondSplitBarCustom: {
        base: {
          backgroundColor: '{{colors.interactivePrimary020}}',
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
      cardLabel: labelDefault,
      cardTeaserLead: {
        base: {
          color: '{{colors.inkBase}}',
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

const storyAreasDesktop = `story1 story2
                           story3  story4`;

const areasGap = 'space050';
const contentGap = 'space040';

export const StoryDefault = () => (
  <StorybookPage columns={{md: 'auto'}} areas={{md: storyAreasDesktop}}>
    <Card
      overrides={{maxWidth: '372px'}}
      rowGap={areasGap}
      areas={`
        media
        content
        actions
      `}
    >
      <CardContent justifyItems="start" rowGap={contentGap}>
        <Flag>Flag</Flag>
        <H />
        <P />
      </CardContent>

      <CardMedia src="/placeholder-3x2.png" />

      <CardActions>
        <Tag href="/news">Tag</Tag>
      </CardActions>
    </Card>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StoryCardAreas = () => (
  <StorybookPage columns={{md: 'auto'}} areas={{md: storyAreasDesktop}}>
    <StorybookCase title="Card Content">
      <Card
        overrides={{maxWidth: '372px'}}
        areas={`
          content
        `}
      >
        <CardContent justifyItems="start" rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
      </Card>
    </StorybookCase>
    <StorybookCase title="CardMedia">
      <Card overrides={{maxWidth: '372px'}}>
        <CardMedia src="/placeholder-3x2.png" />
      </Card>
    </StorybookCase>
    <StorybookCase title="CardActions">
      <Card overrides={{maxWidth: '372px'}}>
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </Card>
    </StorybookCase>
    <StorybookCase title="CardLink applied to headline in CardContent area">
      <Card
        overrides={{maxWidth: '372px'}}
        rowGap={areasGap}
        areas={`
          media
          content
          actions
        `}
      >
        <CardMedia src="/placeholder-3x2.png" />

        <CardContent justifyItems="start" rowGap={contentGap}>
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
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryCardAreas.storyName = 'Card areas';

export const StoryVariations = () => (
  <StorybookPage columns={{md: 'auto'}} areas={{md: storyAreasDesktop}}>
    <StorybookCase title="CardLink and CardMedia">
      <Card
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
        <CardMedia src="/placeholder-3x2.png" />
      </Card>
    </StorybookCase>
    <StorybookCase title="Whole card as a link by applying the 'expand' prop">
      <Card
        overrides={{
          maxWidth: '372px',
          stylePreset: 'cardContentSeparateColor',
        }}
        areas={`
          media
          content
          actions
        `}
        rowGap={areasGap}
      >
        <CardContent
          rowGap={contentGap}
          justifyItems="start"
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
        <CardMedia src="/placeholder-4x5.png" loadingAspectRatio="4:5" />
        <CardActions marginBlockEnd="space040" paddingInline="space040">
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </Card>
    </StorybookCase>
    <StorybookCase title="Button in CardActions area">
      <Card
        rowGap={areasGap}
        overrides={{maxWidth: '372px'}}
        areas={`
          media
          content
          actions
        `}
      >
        <CardMedia src="/placeholder-3x2.png" />
        <CardContent justifyItems="start" rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions>
          <Button href="/news">Button</Button>
        </CardActions>
      </Card>
    </StorybookCase>
    <StorybookCase title="Multiple in CardActions">
      <Card
        overrides={{maxWidth: '372px'}}
        rowGap={areasGap}
        areas={`
          media
          content
          actions
        `}
      >
        <CardMedia src="/placeholder-3x2.png" />
        <CardContent justifyItems="start" rowGap={contentGap}>
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
      </Card>
    </StorybookCase>
    <StorybookCase title="Alternative images aspect ratio">
      <Card
        overrides={{maxWidth: '372px'}}
        rowGap={areasGap}
        areas={`
          media
          content
          actions
        `}
      >
        <CardMedia src="/placeholder-4x5.png" loadingAspectRatio="4:5" />
        <CardContent justifyItems="start" rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryVariations.storyName = 'Variations';

export const StoryInsetCard = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Card Inset">
      <Card
        rowGap={areasGap}
        overrides={{
          maxWidth: '372px',
          stylePreset: 'cardInset',
        }}
        areas={`
          media
          content
          actions
        `}
      >
        <CardMedia src="/placeholder-3x2.png" />
        <CardContent
          justifyItems="start"
          rowGap={contentGap}
          overrides={{
            paddingInline: 'space040',
          }}
        >
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions marginBlockEnd="space040" paddingInline="space040">
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryInsetCard.storyName = 'Inset card';

export const StoryLayout = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Horizontal">
      <Card
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
        <CardMedia src="/placeholder-3x2.png" />
        <CardContent rowGap={contentGap} justifyItems="start">
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </Card>
    </StorybookCase>
    <StorybookCase title="Horizontal-inverse">
      <Card
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
        <CardMedia src="/placeholder-3x2.png" />
        <CardContent rowGap={contentGap} justifyItems="start">
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryLayout.storyName = 'Layout';

const Container = styled.div`
  display: grid;
  gap: 2rem;
`;

const SplitCardBar = styled.div<{
  stylePreset: string;
}>`
  ${({stylePreset}) => stylePreset && getStylePresetFromTheme(stylePreset)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
      <SplitCardBar stylePreset="firstSplitBarCustom">
        <Paragraph
          overrides={{
            typographyPreset: 'editorialParagraph020',
            paddingBlock: 'space020',
          }}
        >
          {first}
        </Paragraph>
      </SplitCardBar>

      <SplitCardBar stylePreset="secondSplitBarCustom">
        <Paragraph
          overrides={{
            typographyPreset: 'editorialParagraph020',
            paddingBlock: 'space020',
          }}
        >
          {second}
        </Paragraph>
      </SplitCardBar>
    </GridLayout>
  );
};

const SplitCard = ({columns}: {columns: string}) => {
  const maxWidth = '600px';
  return (
    <div>
      <SplitBars columns={columns} maxWidth={maxWidth} />
      <Card
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
        <CardContent justifyItems="start" rowGap={contentGap}>
          <H />
          <P />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions>
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </Card>
    </div>
  );
};

export const StorySpan = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookPage columns={{md: 'auto'}}>
      <Container>
        <StorybookCase title="1:1 horizontal ratio">
          <SplitCard columns="1fr 1fr" />
        </StorybookCase>
        <StorybookCase title="1:2 horizontal ratio">
          <SplitCard columns="1fr 2fr" />
        </StorybookCase>
        <StorybookCase title="2:1 horizontal ratio">
          <SplitCard columns="2fr 1fr" />
        </StorybookCase>
      </Container>
    </StorybookPage>
  </StorybookPage>
);
StorySpan.storyName = 'Span';

export const StoryOrder = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="CardContent and heading first">
      <Card
        overrides={{maxWidth: '250px'}}
        rowGap={areasGap}
        areas={`
          content
          media
          actions
        `}
      >
        <CardContent justifyItems="start" rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions>
          <Tag onClick={() => alert('Tag clicked')} size="medium">
            Tag
          </Tag>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryOrder.storyName = 'Order';

export const StoryResponsiveCard = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Different layouts/font sizes for different breakpoints">
      <Card
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
        <CardContent justifyItems="start" rowGap={contentGap}>
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
        <CardMedia src="/placeholder-3x2.png" />
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryResponsiveCard.storyName = 'Responsive card';

export const StoryOnClick = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="onClick handler on Tag">
      <Card
        overrides={{maxWidth: '250px'}}
        rowGap={areasGap}
        areas={`
          media
          content
          actions
        `}
      >
        <CardContent justifyItems="start" rowGap={contentGap}>
          <Flag>Flag</Flag>
          <H />
          <P />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions>
          <Tag onClick={() => alert('Tag clicked')} size="medium">
            Tag
          </Tag>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryOnClick.storyName = 'On click';

export const StoryLogicalProps = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <Grid>
      <StorybookGridCase title="Margin overrides">
        <Card
          overrides={{
            marginInline: 'space060',
          }}
          rowGap={areasGap}
          areas={`
            media
            content
            actions
          `}
        >
          <CardContent justifyItems="start" rowGap={contentGap}>
            <Flag>Flag</Flag>
            <H />
            <P />
          </CardContent>
          <CardMedia src="/placeholder-3x2.png" />
          <CardActions>
            <Tag href="http://example.com" size="medium">
              Tag
            </Tag>
          </CardActions>
        </Card>
      </StorybookGridCase>
      <StorybookGridCase title="Padding overrides">
        <Card
          overrides={{
            maxWidth: '250px',
            stylePreset: 'cardInset',
            paddingBlock: 'space060',

            paddingInline: 'space060',
          }}
          rowGap={areasGap}
          areas={`
            media
            content
            actions
          `}
        >
          <CardContent justifyItems="start" rowGap={contentGap}>
            <Flag>Flag</Flag>
            <H />
            <P />
          </CardContent>
          <CardMedia src="/placeholder-3x2.png" />
          <CardActions>
            <Tag href="http://example.com" size="medium">
              Tag
            </Tag>
          </CardActions>
        </Card>
      </StorybookGridCase>
      <StorybookGridCase title="Padding overrides CardContent area">
        <Card
          overrides={{maxWidth: '250px'}}
          rowGap={areasGap}
          areas={`
            media
            content
            actions
          `}
        >
          <CardContent
            justifyItems="start"
            rowGap={contentGap}
            overrides={{paddingBlock: 'space040', paddingInline: 'space030'}}
          >
            <Flag>Flag</Flag>
            <H />
            <P />
          </CardContent>
          <CardMedia src="/placeholder-3x2.png" />
          <CardActions>
            <Tag href="http://example.com" size="medium">
              Tag
            </Tag>
          </CardActions>
        </Card>
      </StorybookGridCase>
    </Grid>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';

export const StoryOverrides = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <Grid>
      <StorybookGridCase title="Style preset - card and flag colours">
        <Card
          overrides={{
            maxWidth: '372px',
            stylePreset: 'cardContainerWithHover',
          }}
          rowGap={areasGap}
        >
          <CardMedia src="/placeholder-3x2.png" />
          <CardContent
            overrides={{paddingInline: 'space040'}}
            justifyItems="start"
            rowGap={contentGap}
          >
            <Flag overrides={{stylePreset: 'flagCustom'}}>Flag</Flag>

            {/* Unfortunately in NewsKit there is not a way for parent hover to trigger the children one
            the easiest way to do that is using CSS currentColor */}
            <H
              overrides={{
                heading: {stylePreset: 'headlineWithHoverFromParent'},
              }}
            />
            <P />
          </CardContent>
          {/* CardActions might be better to be a Grid instead of Block so all sub-components are consistent? */}
          <CardActions paddingBlockEnd="space040" paddingInline="space040">
            <Tag href="http://example.com" size="medium">
              Tag
            </Tag>
          </CardActions>
        </Card>
      </StorybookGridCase>
      <StorybookGridCase title="Style preset - headline, paragraph, card actions and tag colours">
        <Card
          overrides={{
            maxWidth: '372px',
            stylePreset: 'cardContainerMockNoHover',
          }}
          rowGap={areasGap}
          areas={`
            media
            content
            actions
          `}
        >
          <CardMedia src="/placeholder-3x2.png" />
          <CardContent
            overrides={{paddingInline: 'space040'}}
            justifyItems="start"
            rowGap={contentGap}
          >
            <Flag
              overrides={{
                stylePreset: 'flagCustom2',
              }}
            >
              Flag
            </Flag>
            <H
              overrides={{
                heading: {stylePreset: 'headlineCustom'},
              }}
            />
            <P stylePreset="cardContainerActionsMock" />
          </CardContent>
          <CardActions
            paddingInline="space040"
            stylePreset="cardContainerActionsMock"
          >
            <Tag
              href="http://example.com"
              size="medium"
              overrides={{stylePreset: 'tagCustom'}}
            >
              Tag
            </Tag>
          </CardActions>
        </Card>
      </StorybookGridCase>
      <StorybookGridCase title="Typography preset - Headline">
        <Card
          overrides={{maxWidth: '372px'}}
          areas={`
            media
            content
            actions
          `}
          rowGap={areasGap}
        >
          <CardContent rowGap={contentGap} justifyItems="start">
            <Flag>Flag</Flag>
            <H
              overrides={{
                typographyPreset: 'editorialHeadline070',
              }}
            />
            <P />
          </CardContent>
          <CardMedia src="/placeholder-3x2.png" />
          <CardActions>
            <Tag href="http://example.com" size="medium">
              Tag
            </Tag>
          </CardActions>
        </Card>
      </StorybookGridCase>
    </Grid>
  </StorybookPage>
);
StoryOverrides.storyName = 'Overrides';

export default {
  title: 'Components/composable-card',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => {
      const backgroundValue = context?.globals?.backgrounds?.value;
      return (
        <ThemeProvider
          theme={createCustomThemeWithBaseThemeSwitch(
            backgroundValue,
            !backgroundValue || backgroundValue === '#ffffff'
              ? cardCustomThemeObject
              : cardCustomDarkThemeObject,
          )}
        >
          <Story />
        </ThemeProvider>
      );
    },
  ],
};
