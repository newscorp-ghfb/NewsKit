import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Card, CardInset} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Grid, Cell, Visible} from '../../grid';
import {Stack, Flow} from '../../stack';
import {Tag, TagSize} from '../../tag';
import {Flag} from '../../flag';
import {Headline} from '../../headline';
import {TextBlock} from '../../text-block';
import {Block} from '../../block';
import {IconFilledImage} from '../../icons';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {createTheme, ThemeProvider, UncompiledTheme} from '../../theme';
import {Link} from '../../link';
import {themeObject} from '../../test/theme-select-object';

const ContainerWithBackground = styled.div<{colorToken?: string}>`
  ${({colorToken = 'white', ...props}) =>
    getColorCssFromTheme('background', colorToken)(props)};
`;
const StyledDiv = styled.div`
  border: 1px red dotted;
`;
// Spacing
const cardLabel = 'space040';
const cardTeaserHeadline = {
  xs: 'space040',
  sm: 'space040',
  md: 'space045',
  lg: 'space050',
};
const cardTeaserLead = {
  xs: 'space040',
  sm: 'space040',
  md: 'space050',
  lg: 'space050',
};
const cardTeaserLeadInset = 'space010';
const cardTeaserLeadInsetVariant = 'space000';
const cardActions = 'space030';

// Typography Presets
const cardTypographyPresets: {[index: string]: string} = {
  cardTeaserHeadlineLarge: 'editorialHeadline050',
  cardTeaserHeadlineMedium: 'editorialHeadline030',
  cardTeaserHeadlineSmall: 'editorialHeadline010',

  cardTeaserLeadLarge: 'editorialParagraph030',
  cardTeaserLeadMedium: 'editorialParagraph020',
  cardTeaserLeadSmall: 'editorialParagraph010',

  cardLabelLarge: 'utilityLabel020',
  cardLabelMedium: 'utilityLabel010',
  cardLabelSmall: 'utilityLabel010',

  cardTagLarge: 'utilityLabel020',
  cardTagMedium: 'utilityLabel010',
  cardTagSmall: 'utilityLabel010',
};

// Style presets (Taken from style-presets.ts;)
const labelDefault = {
  base: {
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
};

const getCustomTheme = (theme: UncompiledTheme): UncompiledTheme =>
  createTheme({
    name: 'my-custom-card-theme',
    baseTheme: theme,
    overrides: {
      stylePresets: {
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
            backgroundColor: '{{colors.green020}}',
          },
        },
        headlineKickerInteractiveMock: {
          base: {
            color: '{{colors.interactiveNegative050}}',
            textDecoration: 'underline',
          },
          hover: {
            color: '{{colors.interactiveNegative050}}',
            textDecoration: 'underline',
          },
          active: {
            color: '{{colors.interactiveNegative050}}',
            textDecoration: 'none',
          },
          visited: {
            color: '{{colors.interactiveVisited010}}',
          },
        },
        headlineHeadingInteractiveMock: {
          base: {
            color: '{{colors.green090}}',
            textDecoration: 'underline',
          },
          hover: {
            color: '{{colors.interactivePositive040}}',
            textDecoration: 'none',
          },
          active: {
            color: '{{colors.interactivePositive050}}',
            textDecoration: 'underline',
          },
        },
      },
    },
  });

const VideoElement = ({width = 'auto', height = 'auto'}) => (
  <iframe
    width={width}
    height={height}
    title="Video Element"
    src="https://www.youtube.com/embed/LaFtAcIrGWA"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

const cardTags = (size: TagSize) => ({cardSize}: {cardSize: string}) => () => (
  <Stack flow={Flow.HorizontalCenter} spaceInline={cardActions}>
    <Tag
      size={size}
      href="/"
      overrides={{
        stylePreset: 'tagPrimary',
        typographyPreset: cardTypographyPresets[`cardTag${cardSize}`],
      }}
    >
      News
    </Tag>
    <Tag
      size={size}
      href="/"
      overrides={{
        stylePreset: 'tagPrimary',
        typographyPreset: cardTypographyPresets[`cardTag${cardSize}`],
      }}
    >
      Sport
    </Tag>
  </Stack>
);

const cardSmallTags = cardTags(TagSize.Small)({cardSize: 'Small'});
const cardMediumTags = cardTags(TagSize.Small)({cardSize: 'Medium'});
const cardLargeTags = cardTags(TagSize.Medium)({cardSize: 'Large'});

const cardBodyBase = ({inset}: {inset: boolean}) => ({
  cardSize,
}: {
  cardSize: string;
}) => (
  <>
    <Block spaceStack={cardLabel}>
      <Flag
        overrides={{
          spaceInset: 'spaceInsetSquish000',
          stylePreset: 'cardLabel',
          typographyPreset: cardTypographyPresets[`cardLabel${cardSize}`],
          minHeight: 'sizing000',
        }}
      >
        <IconFilledImage />
        IMAGE
      </Flag>
    </Block>

    <Block spaceStack={cardTeaserHeadline}>
      <Headline
        kickerText="SHORT"
        overrides={{
          typographyPreset:
            cardTypographyPresets[`cardTeaserHeadline${cardSize}`],
        }}
      >
        title of the card describing the main content
      </Headline>
    </Block>

    <Block spaceStack={inset ? cardTeaserLeadInsetVariant : cardTeaserLead}>
      <TextBlock
        stylePreset="cardTeaserLead"
        typographyPreset={cardTypographyPresets[`cardTeaserLead${cardSize}`]}
      >
        A short paragraph description of the article, outlining the main story
        and focus.
      </TextBlock>
    </Block>
  </>
);

const cardSmallBody = cardBodyBase({inset: false})({cardSize: 'Small'});
const cardMediumBody = cardBodyBase({inset: false})({cardSize: 'Medium'});
const cardLargeBody = cardBodyBase({inset: false})({cardSize: 'Large'});

const cardInsetSmallBody = cardBodyBase({inset: true})({cardSize: 'Small'});
const cardInsetMediumBody = cardBodyBase({inset: true})({cardSize: 'Medium'});
const cardInsetLargeBody = cardBodyBase({inset: true})({cardSize: 'Large'});

const renderCard = () => (
  <>
    <Visible xs sm>
      <StorybookSubHeading>Card - small - Without Inset</StorybookSubHeading>
      <ContainerWithBackground>
        <Card
          media={{
            src: '/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardSmallTags}
        >
          {cardSmallBody}
        </Card>
      </ContainerWithBackground>
    </Visible>
    <Visible md>
      <StorybookSubHeading>Card - Medium - Without Inset</StorybookSubHeading>
      <ContainerWithBackground>
        <Card
          media={{
            src: '/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardMediumTags}
        >
          {cardMediumBody}
        </Card>
      </ContainerWithBackground>
    </Visible>
    <Visible lg xl>
      <StorybookSubHeading>Card - Large - Without Inset</StorybookSubHeading>
      <ContainerWithBackground>
        <Card
          media={{
            src: '/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardLargeTags}
        >
          {cardLargeBody}
        </Card>
      </ContainerWithBackground>
    </Visible>
  </>
);
const renderCardInset = () => (
  <>
    <Visible xs sm>
      <StorybookSubHeading>Card - small - With Inset</StorybookSubHeading>
      <ContainerWithBackground>
        <CardInset
          media={{
            src: '/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardSmallTags}
        >
          {cardInsetSmallBody}
        </CardInset>
      </ContainerWithBackground>
    </Visible>
    <Visible md>
      <StorybookSubHeading>Card - Medium - With Inset</StorybookSubHeading>
      <ContainerWithBackground>
        <CardInset
          media={{
            src: '/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardMediumTags}
        >
          {cardInsetMediumBody}
        </CardInset>
      </ContainerWithBackground>
    </Visible>
    <Visible lg xl>
      <StorybookSubHeading>Card - Large - With Inset</StorybookSubHeading>
      <ContainerWithBackground>
        <CardInset
          media={{
            src: '/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardLargeTags}
        >
          {cardInsetLargeBody}
        </CardInset>
      </ContainerWithBackground>
    </Visible>
  </>
);

export default {
  title: 'NewsKit Light/card',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={getCustomTheme(
          themeObject[context?.globals?.backgrounds?.value || '#ffffff'],
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const StoryCardSmallWithoutInset = () => renderCard();
StoryCardSmallWithoutInset.storyName = 'card-small-without-inset';
StoryCardSmallWithoutInset.parameters = {
  viewport: {defaultViewport: 'iphone5'},
  eyes: {include: false},
};

export const StoryCardMediumWithoutInset = () => renderCard();
StoryCardMediumWithoutInset.storyName = 'card-medium-without-inset';
StoryCardMediumWithoutInset.parameters = {
  viewport: {defaultViewport: 'ipad'},
  eyes: {include: false},
};

export const StoryCardLargeWithoutInset = () => renderCard();
StoryCardLargeWithoutInset.storyName = 'card-large-without-inset';
StoryCardLargeWithoutInset.parameters = {
  viewport: {defaultViewport: 'ipad12p'},
  eyes: {include: false},
};

export const StoryCardSmallWithInset = () => renderCardInset();
StoryCardSmallWithInset.storyName = 'card-small-with-inset';
StoryCardSmallWithInset.parameters = {
  viewport: {defaultViewport: 'iphone5'},
  eyes: {include: false},
};

export const StoryCardMediumWithInset = () => renderCardInset();
StoryCardMediumWithInset.storyName = 'card-medium-with-inset';
StoryCardMediumWithInset.parameters = {
  viewport: {defaultViewport: 'ipad'},
  eyes: {include: false},
};

export const StoryCardLargeWithInset = () => renderCardInset();
StoryCardLargeWithInset.storyName = 'card-large-with-inset';
StoryCardLargeWithInset.parameters = {
  viewport: {defaultViewport: 'ipad12p'},
  eyes: {include: false},
};

export const StoryCardWithoutInset = () => renderCard();
StoryCardWithoutInset.storyName = 'card-without-inset';

export const StoryCardWithInset = () => renderCardInset();
StoryCardWithInset.storyName = 'card-with-inset';

export const StoryCardWithoutInsetContainersOverrides = () => (
  <>
    <StorybookHeading>
      Card - Without Inset - Containers Overrides
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={4}>
          <Card
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
            overrides={{
              stylePreset: 'cardContainerMock',
              mediaContainer: {
                stylePreset: 'cardContainerMediaMock',
              },
              teaserContainer: {
                stylePreset: 'cardContainerTeaserMock',
              },
              actionsContainer: {
                stylePreset: 'cardContainerActionsMock',
                minHeight: 'sizing090',
              },
            }}
          >
            {cardSmallBody}
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardWithoutInsetContainersOverrides.storyName =
  'card-without-inset-containers-overrides';

export const StoryCardWithInsetContainersOverrides = () => (
  <>
    <StorybookHeading>
      Card - With Inset - Containers Overrides
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={4}>
          <CardInset
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
            overrides={{
              stylePreset: 'cardContainerMock',
              mediaContainer: {
                stylePreset: 'cardContainerMediaMock',
              },
              teaserContainer: {
                stylePreset: 'cardContainerTeaserMock',
              },
              actionsContainer: {
                stylePreset: 'cardContainerActionsMock',
              },
            }}
          >
            {cardInsetSmallBody}
          </CardInset>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardWithInsetContainersOverrides.storyName =
  'card-with-inset-containers-overrides';

export const StoryCardWithMediaLinkAndHeadline = () => (
  <>
    <StorybookHeading>
      Card with media, link and only Headline in cardBody
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={4}>
          <Card
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardWithMediaLinkAndHeadline.storyName =
  'card-with-media-link-and-headline';

export const StoryCardWithLinkAndHeadlineAndMediainteractive = () => (
  <>
    <StorybookHeading>
      Card with link Headline and mediaInteractive set to true
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={4}>
          <Card
            mediaInteractive
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardWithLinkAndHeadlineAndMediainteractive.storyName =
  'card-with-link-and-headline-and-mediaInteractive';

export const StoryCardWithLinkAndNoHeadline = () => (
  <>
    <StorybookHeading>
      Card - Without Inset - Container Overrides
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={4}>
          <Card
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
          >
            <Block>
              <Block spaceStack={cardLabel}>
                <Flag
                  overrides={{
                    spaceInset: 'spaceInsetSquish000',
                    stylePreset: 'cardLabel',
                    typographyPreset: cardTypographyPresets.cardLabelSmall,
                    minHeight: 'sizing000',
                  }}
                >
                  <IconFilledImage />
                  IMAGE
                </Flag>
              </Block>
              <Block spaceStack={cardTeaserLead}>
                <TextBlock
                  stylePreset="headlineHeadingInteractive"
                  typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
                >
                  A short paragraph description of the article, outlining the
                  main story and focus.
                </TextBlock>
              </Block>
            </Block>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardWithLinkAndNoHeadline.storyName = 'card-with-link-and-no-headline';

export const StoryCardWithLinkHeadlineAndNestedLinksInCardBody = () => (
  <>
    <StorybookHeading>
      Card with link, headline and nested links in cardBody
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={4}>
          <Card
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
          >
            <Block spaceStack={cardLabel}>
              <Flag
                overrides={{
                  spaceInset: 'spaceInsetSquish000',
                  stylePreset: 'cardLabel',
                  typographyPreset: cardTypographyPresets.cardLabelSmall,
                  minHeight: 'sizing000',
                }}
              >
                <IconFilledImage />
                IMAGE
              </Flag>
            </Block>

            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>

            <Block spaceStack={cardTeaserLead}>
              <TextBlock
                stylePreset="cardTeaserLead"
                typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
              >
                A short paragraph description of the article, outlining the{' '}
                <Link href="/test">main story</Link> and focus.
              </TextBlock>
            </Block>

            <Block spaceStack={cardTeaserLead}>
              <Link href="https://google.com">External link</Link>
            </Block>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardWithLinkHeadlineAndNestedLinksInCardBody.storyName =
  'card-with-link-headline-and-nested-links-in-card-body';

export const StoryCardWithInsetNoMediaAndLink = () => (
  <>
    <StorybookHeading>Card with inset, no media and link</StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={4}>
          <CardInset href="https://newskit.co.uk/" actions={cardSmallTags}>
            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
            >
              A short paragraph description of the article, outlining the main
              story and focus.
            </TextBlock>
          </CardInset>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardWithInsetNoMediaAndLink.storyName =
  'card-with-inset-no-media-and-link';

export const StoryCardWithoutInsetLinkContainersAndHeadlineOverrides = () => (
  <>
    <StorybookHeading>
      Card - Without Inset - with Link and Containers & Headline Overrides
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={4}>
          <Card
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
            overrides={{
              stylePreset: 'cardContainerMock',
              mediaContainer: {
                stylePreset: 'cardContainerMediaMock',
              },
              teaserContainer: {
                stylePreset: 'cardContainerTeaserMock',
              },
              actionsContainer: {
                stylePreset: 'cardContainerActionsMock',
                minHeight: 'sizing090',
              },
            }}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline
                kickerText="SHORT"
                overrides={{
                  kicker: {
                    stylePreset: 'headlineKickerInteractiveMock',
                    // spaceInline: 'space000',
                  },
                  heading: {
                    stylePreset: 'headlineHeadingInteractiveMock',
                  },
                }}
              >
                title of the card describing the main content
              </Headline>
            </Block>
            <Block spaceStack={cardTeaserLead}>
              <TextBlock
                stylePreset="cardTeaserLead"
                typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
              >
                A short paragraph description of the article, outlining the main
                story and focus.
              </TextBlock>
            </Block>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardWithoutInsetLinkContainersAndHeadlineOverrides.storyName =
  'card-without-inset-link-containers-and-headline-overrides';
StoryCardWithoutInsetLinkContainersAndHeadlineOverrides.parameters = {
  eyes: {include: false},
};

export const StoryCardWithInsetLinkContainersAndHeadlineOverrides = () => (
  <>
    <StorybookHeading>
      Card - With Inset - with Link and Containers & Headline Overrides
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={4}>
          <CardInset
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
            overrides={{
              stylePreset: 'cardContainerMock',
              mediaContainer: {
                stylePreset: 'cardContainerMediaMock',
              },
              teaserContainer: {
                stylePreset: 'cardContainerTeaserMock',
              },
              actionsContainer: {
                stylePreset: 'cardContainerActionsMock',
              },
            }}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline
                kickerText="SHORT"
                overrides={{
                  kicker: {
                    stylePreset: 'headlineKickerInteractiveMock',
                    spaceInline: 'space000',
                  },
                  heading: {
                    stylePreset: 'headlineHeadingInteractiveMock',
                  },
                }}
              >
                title of the card describing the main content
              </Headline>
            </Block>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
            >
              A short paragraph description of the article, outlining the main
              story and focus.
            </TextBlock>
          </CardInset>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardWithInsetLinkContainersAndHeadlineOverrides.storyName =
  'card-with-inset-link-containers-and-headline-overrides';
StoryCardWithInsetLinkContainersAndHeadlineOverrides.parameters = {
  eyes: {include: false},
};

export const StoryCardHorizontal = () => (
  <>
    <StorybookHeading>Card Horizontal</StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={6} md={5}>
          <Card
            layout="horizontal"
            media={{
              src: '/placeholder-2x3.png',
              alt: 'Card Media',
              loadingAspectRatio: '2:3',
            }}
            actions={cardSmallTags}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
            >
              A short paragraph description of the article, outlining the main
              story and focus.
            </TextBlock>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardHorizontal.storyName = 'card-horizontal';

export const StoryCardHorizontalReverseWithLink = () => (
  <>
    <StorybookHeading>Card Horizontal-Reverse With Link</StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={6} md={5}>
          <Card
            layout="horizontal-reverse"
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-2x3.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
            >
              A short paragraph description of the article, outlining the main
              story and focus.
            </TextBlock>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardHorizontalReverseWithLink.storyName =
  'card-horizontal-reverse-with-link';

export const StoryCardInsetHorizontalWithLinkAndMediainteractive = () => (
  <>
    <StorybookHeading>
      CardInset Horizontal with Link and mediaInteractive
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={6} md={5}>
          <CardInset
            layout="horizontal"
            href="https://newskit.co.uk/"
            mediaInteractive
            media={{
              src: '/placeholder-2x3.png',
              alt: 'Card Media',
              loadingAspectRatio: '2:3',
            }}
            actions={cardSmallTags}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
            >
              A short paragraph description of the article, outlining the main
              story and focus.
            </TextBlock>
          </CardInset>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardInsetHorizontalWithLinkAndMediainteractive.storyName =
  'card-inset-horizontal-with-link-and-mediaInteractive';

export const StoryCardInsetHorizontalReverseWithLinkAndMediainteractive = () => (
  <>
    <StorybookHeading>
      CardInset Horizontal-Reverse with link and mediaInteractive
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={6} md={5}>
          <CardInset
            layout="horizontal-reverse"
            href="https://newskit.co.uk/"
            mediaInteractive
            media={{
              src: '/placeholder-2x3.png',
              alt: 'Card Media',
              loadingAspectRatio: '2:3',
            }}
            actions={cardSmallTags}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
            >
              A short paragraph description of the article, outlining the main
              story and focus.
            </TextBlock>
          </CardInset>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardInsetHorizontalReverseWithLinkAndMediainteractive.storyName =
  'card-inset-horizontal-reverse-with-link-and-mediaInteractive';

export const StoryCardHorizontalWithoutInsetLinkContainersAndHeadlineOverrides = () => (
  <>
    <StorybookHeading>
      Card Horizontal - Without Inset - with Link and Containers & Headline
      Overrides
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={6} md={5}>
          <Card
            layout="horizontal-reverse"
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-2x3.png',
              alt: 'Card Media',
              loadingAspectRatio: '2:3',
            }}
            actions={cardSmallTags}
            overrides={{
              stylePreset: 'cardContainerMock',
              mediaContainer: {
                stylePreset: 'cardContainerMediaMock',
              },
              teaserContainer: {
                stylePreset: 'cardContainerTeaserMock',
              },
              actionsContainer: {
                stylePreset: 'cardContainerActionsMock',
                minHeight: 'sizing090',
              },
            }}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline
                kickerText="SHORT"
                overrides={{
                  kicker: {
                    stylePreset: 'headlineKickerInteractiveMock',
                    spaceInline: 'space000',
                  },
                  heading: {
                    stylePreset: 'headlineHeadingInteractiveMock',
                  },
                }}
              >
                title of the card describing the main content
              </Headline>
            </Block>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
            >
              A short paragraph description of the article, outlining the main
              story and focus.
            </TextBlock>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardHorizontalWithoutInsetLinkContainersAndHeadlineOverrides.storyName =
  'card-horizontal-without-inset-link-containers-and-headline-overrides';
StoryCardHorizontalWithoutInsetLinkContainersAndHeadlineOverrides.parameters = {
  eyes: {include: false},
};

export const StoryCardHorizontalReverseWithInsetLinkContainersAndHeadlineOverrides = () => (
  <>
    <StorybookHeading>
      Card Horizontal-reverse - With Inset - with Link and Containers & Headline
      Overrides
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={6} md={5}>
          <CardInset
            layout="horizontal-reverse"
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-2x3.png',
              alt: 'Card Media',
              loadingAspectRatio: '2:3',
            }}
            actions={cardSmallTags}
            overrides={{
              stylePreset: 'cardContainerMock',
              mediaContainer: {
                stylePreset: 'cardContainerMediaMock',
              },
              teaserContainer: {
                stylePreset: 'cardContainerTeaserMock',
              },
              actionsContainer: {
                stylePreset: 'cardContainerActionsMock',
              },
            }}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline
                kickerText="SHORT"
                overrides={{
                  kicker: {
                    stylePreset: 'headlineKickerInteractiveMock',
                    spaceInline: 'space000',
                  },
                  heading: {
                    stylePreset: 'headlineHeadingInteractiveMock',
                  },
                }}
              >
                title of the card describing the main content
              </Headline>
            </Block>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
            >
              A short paragraph description of the article, outlining the main
              story and focus.
            </TextBlock>
          </CardInset>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardHorizontalReverseWithInsetLinkContainersAndHeadlineOverrides.storyName =
  'card-horizontal-reverse-with-inset-link-containers-and-headline-overrides';
StoryCardHorizontalReverseWithInsetLinkContainersAndHeadlineOverrides.parameters = {
  eyes: {include: false},
};

export const StoryCardHorizontalWithRatio = () => (
  <>
    <StorybookHeading>Card horizontal with ratio (3:1)</StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={6} md={5}>
          <Card
            layout="horizontal"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
              loadingAspectRatio: '3:2',
            }}
            overrides={{
              horizontalRatio: '3:1',
            }}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
            >
              A short paragraph description of the article, outlining the main
              story and focus.
            </TextBlock>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardHorizontalWithRatio.storyName = 'card-horizontal-with-ratio';

export const StoryCardHorizontalWithRatioFalsyValue = () => (
  <>
    <StorybookHeading>Card horizontal with falsy value</StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={6} md={5}>
          <Card
            layout="horizontal"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
              loadingAspectRatio: '3:2',
            }}
            overrides={{
              horizontalRatio: '',
            }}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
            >
              A short paragraph description of the article, outlining the main
              story and focus.
            </TextBlock>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardHorizontalWithRatioFalsyValue.storyName =
  'card-horizontal-with-ratio-falsy-value';

export const StoryCardWithCroppingText = () => (
  <>
    <StorybookHeading>
      Card - Without Inset - Fix cropping text
    </StorybookHeading>
    <ContainerWithBackground>
      <Grid>
        <Cell xs={12} sm={4}>
          <Card
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
          >
            <Block spaceStack={cardLabel}>
              <Flag
                overrides={{
                  spaceInset: 'spaceInsetSquish000',
                  stylePreset: 'cardLabel',
                  typographyPreset: cardTypographyPresets.cardLabelSmall,
                  minHeight: 'sizing000',
                }}
              >
                <IconFilledImage />
                IMAGE
              </Flag>
            </Block>
            <Block spaceStack={cardTeaserLeadInset}>
              <TextBlock
                stylePreset="headlineHeadingInteractive"
                typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
              >
                A short paragraph description of the article, outlining the main
                story and focus. qg
              </TextBlock>
            </Block>
          </Card>
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardWithCroppingText.storyName = 'card-with-cropping-text';

export const StoryCardWithCustomHtmlAttrOnclick = () => (
  <Card
    onClick={e => {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log('onclick event');
    }}
    href="https://newskit.co.uk/"
    media={{
      src: '/placeholder-3x2.png',
      alt: 'Card Media',
    }}
    actions={cardLargeTags}
  >
    {cardLargeBody}
  </Card>
);
StoryCardWithCustomHtmlAttrOnclick.storyName =
  'card-with-custom-html-attr-onclick';

export const StoryCardWithResponsiveLayout = () => (
  <Card
    href="https://newskit.co.uk/"
    media={{
      src: '/placeholder-3x2.png',
      alt: 'Card Media',
    }}
    layout={{xs: 'vertical', md: 'horizontal'}}
    actions={cardLargeTags}
  >
    {cardLargeBody}
  </Card>
);
StoryCardWithResponsiveLayout.storyName = 'card-with-responsive-layout';

export const StoryCardLogicalOverrides = () => (
  <>
    <StorybookHeading>
      Card - logical margin & padding overrides - root level
    </StorybookHeading>
    <Grid>
      <Cell xs={12} sm={6}>
        <StorybookSubHeading>
          Card - logical margin overrides
        </StorybookSubHeading>
        <StyledDiv>
          <Card
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
            overrides={{
              marginBlock: 'space050',
              marginInline: 'space050',
            }}
            data-testid="card-logical-margin"
          >
            {cardSmallBody}
          </Card>
        </StyledDiv>
      </Cell>
      <Cell xs={12} sm={6}>
        <StorybookSubHeading>
          Card - logical padding overrides
        </StorybookSubHeading>
        <StyledDiv>
          <Card
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
            overrides={{
              paddingBlock: 'space050',
              paddingInline: 'space050',
            }}
            data-testid="card-logical-padding"
          >
            {cardSmallBody}
          </Card>
        </StyledDiv>
      </Cell>
    </Grid>
    <Grid>
      <Cell xs={12} sm={4}>
        <StorybookHeading>
          Card - logical padding overrides - mediaContainer
        </StorybookHeading>
        <StyledDiv>
          <Card
            layout="vertical"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
            overrides={{
              mediaContainer: {
                paddingBlock: {xs: 'space050'},
                paddingInline: {xs: 'space050'},
              },
            }}
            data-testid="card-logical-padding-media"
          >
            {cardSmallBody}
          </Card>
        </StyledDiv>
      </Cell>
      <Cell xs={12} sm={4}>
        <StorybookHeading>
          Card - logical padding overrides - teaserContainer
        </StorybookHeading>
        <StyledDiv>
          <Card
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
            overrides={{
              teaserContainer: {
                paddingBlock: {xs: 'space030'},
                paddingInline: {xs: 'space030'},
              },
            }}
            data-testid="card-logical-padding-teaser"
          >
            {cardSmallBody}
          </Card>
        </StyledDiv>
      </Cell>
      <Cell xs={12} sm={4}>
        <StorybookHeading>
          Card - logical padding overrides - actionContainer
        </StorybookHeading>
        <StyledDiv>
          <Card
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={cardSmallTags}
            overrides={{
              actionsContainer: {
                paddingBlock: {xs: 'space030'},
                paddingInline: {xs: 'space030'},
              },
            }}
            data-testid="card-logical-padding-actions"
          >
            {cardInsetSmallBody}
          </Card>
        </StyledDiv>
      </Cell>
    </Grid>
  </>
);
StoryCardLogicalOverrides.storyName = 'card-logical-overrides';

export const StoryCardSlices = () => (
  <>
    <StorybookHeading>Card Slices</StorybookHeading>
    <ContainerWithBackground colorToken="white">
      <Grid>
        <Cell xs={12}>
          <hr />
        </Cell>
        <Cell xs={12} md={9}>
          <Card
            layout={{xs: 'vertical', md: 'horizontal-reverse'}}
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
              loadingAspectRatio: '3:2',
            }}
            overrides={{horizontalRatio: '2:3'}}
            actions={() => (
              <Link href="https://google.com">Read the full story</Link>
            )}
          >
            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="CROWDS HEAD">
                outdoors as bank holiday temps soar above 20 degrees
              </Headline>
            </Block>

            <Block spaceStack={cardTeaserHeadline}>
              <TextBlock
                stylePreset="cardTeaserLead"
                typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
              >
                The bank holiday weekend has seen some mixed weather, but as the
                sun emerged, many in the UK took the opportunity to make the
                most of the lockdown easing.
              </TextBlock>
            </Block>
            <Block spaceStack={cardTeaserHeadline}>
              <TextBlock
                stylePreset="cardTeaserLead"
                typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
              >
                The bank holiday weekend has seen some mixed weather, but as the
                sun emerged, many in the UK took the opportunity to make the
                most of the lockdown easing.
              </TextBlock>
            </Block>
          </Card>
        </Cell>
        <Cell xs={12} md={3}>
          <Card
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            actions={() => (
              <Link href="https://google.com">Read the full story</Link>
            )}
          >
            <Block spaceStack={cardLabel}>
              <Flag
                overrides={{
                  spaceInset: 'spaceInsetSquish000',
                  stylePreset: 'cardLabel',
                  typographyPreset: cardTypographyPresets.cardLabelSmall,
                  minHeight: 'sizing000',
                }}
              >
                <IconFilledImage />
                IMAGE
              </Flag>
            </Block>

            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>

            <Block spaceStack={cardTeaserLead}>
              <TextBlock
                stylePreset="cardTeaserLead"
                typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
              >
                A short paragraph description of the article, outlining the main
                story and focus.
              </TextBlock>
            </Block>
          </Card>
        </Cell>
        <Cell xs={12}>
          <hr />
        </Cell>
        <Cell xs={12} md={3}>
          <Card
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            layout={{xs: 'horizontal', md: 'vertical'}}
            overrides={{horizontalRatio: '1:2'}}
            actions={() => (
              <Link href="https://google.com">Read the full story</Link>
            )}
          >
            <Block spaceStack={cardLabel}>
              <Flag
                overrides={{
                  spaceInset: 'spaceInsetSquish000',
                  stylePreset: 'cardLabel',
                  typographyPreset: cardTypographyPresets.cardLabelSmall,
                  minHeight: 'sizing000',
                }}
              >
                <IconFilledImage />
                IMAGE
              </Flag>
            </Block>

            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
          </Card>
        </Cell>
        <Cell xs={12} md={3}>
          <Card
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            layout={{xs: 'horizontal', md: 'vertical'}}
            overrides={{horizontalRatio: '1:2'}}
            actions={() => (
              <Link href="https://google.com">Read the full story</Link>
            )}
          >
            <Block spaceStack={cardLabel}>
              <Flag
                overrides={{
                  spaceInset: 'spaceInsetSquish000',
                  stylePreset: 'cardLabel',
                  typographyPreset: cardTypographyPresets.cardLabelSmall,
                  minHeight: 'sizing000',
                }}
              >
                <IconFilledImage />
                IMAGE
              </Flag>
            </Block>

            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">title of the card</Headline>
            </Block>
          </Card>
        </Cell>
        <Cell xs={12} md={3}>
          <Card
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            layout={{xs: 'horizontal', md: 'vertical'}}
            overrides={{horizontalRatio: '1:2'}}
            actions={() => (
              <Link href="https://google.com">Read the full story</Link>
            )}
          >
            <Block spaceStack={cardLabel}>
              <Flag
                overrides={{
                  spaceInset: 'spaceInsetSquish000',
                  stylePreset: 'cardLabel',
                  typographyPreset: cardTypographyPresets.cardLabelSmall,
                  minHeight: 'sizing000',
                }}
              >
                <IconFilledImage />
                IMAGE
              </Flag>
            </Block>

            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
          </Card>
        </Cell>
        <Cell xs={12} md={3}>
          <Card
            href="https://newskit.co.uk/"
            media={{
              src: '/placeholder-3x2.png',
              alt: 'Card Media',
            }}
            layout={{xs: 'horizontal', md: 'vertical'}}
            overrides={{horizontalRatio: '1:2'}}
            actions={() => (
              <Link href="https://google.com">Read the full story</Link>
            )}
          >
            <Block spaceStack={cardLabel}>
              <Flag
                overrides={{
                  spaceInset: 'spaceInsetSquish000',
                  stylePreset: 'cardLabel',
                  typographyPreset: cardTypographyPresets.cardLabelSmall,
                  minHeight: 'sizing000',
                }}
              >
                <IconFilledImage />
                IMAGE
              </Flag>
            </Block>

            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
          </Card>
        </Cell>
        <Cell xs={12}>
          <hr />
        </Cell>
        <Cell xs={12} sm={6}>
          <Card
            href="https://newskit.co.uk/"
            mediaInteractive
            media={() => <VideoElement width="100%" height="300px" />}
            actions={() => (
              <Link href="https://google.com">Read the full story</Link>
            )}
          >
            <Block spaceStack={cardLabel}>
              <Flag
                overrides={{
                  spaceInset: 'spaceInsetSquish000',
                  stylePreset: 'cardLabel',
                  typographyPreset: cardTypographyPresets.cardLabelSmall,
                  minHeight: 'sizing000',
                }}
              >
                <IconFilledImage />
                IMAGE
              </Flag>
            </Block>

            <Block spaceStack={cardTeaserHeadline}>
              <Headline kickerText="SHORT">
                title of the card describing the main content
              </Headline>
            </Block>
            <Block spaceStack={cardTeaserLeadInset}>
              <TextBlock
                stylePreset="cardTeaserLead"
                typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
              >
                A short paragraph description of the article, outlining the main
                story and focus.
              </TextBlock>
            </Block>
          </Card>
        </Cell>
        <Cell xs={12} sm={6}>
          <Stack spaceInline="space050">
            <Card
              layout="horizontal"
              href="http://newskit.co.uk"
              media={{
                src: '/placeholder-3x2.png',
                alt: 'Card Media',
                loadingAspectRatio: '3:2',
              }}
              overrides={{
                horizontalRatio: '1:2',
              }}
            >
              <Block spaceStack={cardTeaserHeadline}>
                <Headline kickerText="SHORT">
                  title of the card describing the main content
                </Headline>
              </Block>
              <Block spaceStack={cardTeaserLeadInset}>
                <TextBlock
                  stylePreset="cardTeaserLead"
                  typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
                >
                  A short paragraph description of the article, outlining the
                  main story and focus.
                </TextBlock>
              </Block>
            </Card>
            <Card
              layout="horizontal"
              href="http://newskit.co.uk"
              media={{
                src: '/placeholder-3x2.png',
                alt: 'Card Media',
                loadingAspectRatio: '3:2',
              }}
              overrides={{
                horizontalRatio: '1:2',
              }}
            >
              <Block spaceStack={cardTeaserHeadline}>
                <Headline kickerText="SHORT">
                  title of the card describing the main content
                </Headline>
              </Block>
              <Block spaceStack={cardTeaserLeadInset}>
                <TextBlock
                  stylePreset="cardTeaserLead"
                  typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
                >
                  A short paragraph description of the article, outlining the
                  main story and focus.
                </TextBlock>
              </Block>
            </Card>
            <Card
              layout="horizontal"
              href="http://newskit.co.uk"
              media={{
                src: '/placeholder-3x2.png',
                alt: 'Card Media',
                loadingAspectRatio: '3:2',
              }}
              overrides={{
                horizontalRatio: '1:2',
              }}
            >
              <Block spaceStack={cardTeaserHeadline}>
                <Headline kickerText="SHORT">
                  title of the card describing the main content
                </Headline>
              </Block>
              <Block spaceStack={cardTeaserLeadInset}>
                <TextBlock
                  stylePreset="cardTeaserLead"
                  typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
                >
                  A short paragraph description of the article, outlining the
                  main story and focus.
                </TextBlock>
              </Block>
            </Card>
            <Card
              layout="horizontal"
              href="http://newskit.co.uk"
              media={{
                src: '/placeholder-3x2.png',
                alt: 'Card Media',
                loadingAspectRatio: '3:2',
              }}
              overrides={{
                horizontalRatio: '1:2',
              }}
            >
              <Block spaceStack={cardTeaserHeadline}>
                <Headline kickerText="SHORT">
                  title of the card describing the main content
                </Headline>
              </Block>
              <Block spaceStack={cardTeaserLeadInset}>
                <TextBlock
                  stylePreset="cardTeaserLead"
                  typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
                >
                  A short paragraph description of the article, outlining the
                  main story and focus.
                </TextBlock>
              </Block>
            </Card>
          </Stack>
        </Cell>
        <Cell xs={12}>
          <hr />
        </Cell>
      </Grid>
    </ContainerWithBackground>
  </>
);
StoryCardSlices.storyName = 'card-slices';
StoryCardSlices.parameters = {eyes: {include: false}};
