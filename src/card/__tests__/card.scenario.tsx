import * as React from 'react';
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
import {getColorFromTheme, styled} from '../../utils/style';
import {createTheme, ThemeProvider} from '../../theme';
import {Link} from '../../link';

const ContainerWithBackground = styled.div<{colorToken?: string}>`
  background: ${({colorToken = 'white', ...props}) =>
    getColorFromTheme(colorToken)(props)};
`;

const FlexBlock = styled(Block)`
  display: flex;
`;

// Spacing
const cardLabel = 'space040';
const cardTeaserHeadline = {
  lg: 'space050',
  md: 'space045',
  sm: 'space040',
  xs: 'space040',
};
const headlineKickerInline = {
  xs: 'spaceInline030',
  sm: 'spaceInline030',
  md: 'spaceInline040',
  lg: 'spaceInline040',
};
const cardTeaserKicker = headlineKickerInline;
const cardTeaserLead = {
  lg: 'space050',
  md: 'space050',
  sm: 'space040',
  xs: 'space040',
};
const cardTeaserLeadInsetVariant = 'space000';
const cardActions = 'space040';

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

const myCustomCardTheme = createTheme({
  name: 'my-custom-card-theme',
  overrides: {
    // TODO: Remove when PPDSE-52 is merged
    breakpoints: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
    },
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
          backgroundColor: '{{colors.amber020}}',
        },
        hover: {
          backgroundColor: '{{colors.amber040}}',
        },
        active: {
          backgroundColor: '{{colors.amber060}}',
        },
      },
      cardContainerActionsMock: {
        base: {
          backgroundColor: '{{colors.green020}}',
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
    <FlexBlock spaceStack={cardLabel}>
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
    </FlexBlock>

    <Block spaceStack={cardTeaserHeadline}>
      <Headline
        kickerText="SHORT"
        overrides={{
          typographyPreset:
            cardTypographyPresets[`cardTeaserHeadline${cardSize}`],
          kicker: {
            spaceInline: cardTeaserKicker,
          },
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
  <ThemeProvider theme={myCustomCardTheme}>
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
  </ThemeProvider>
);
const renderCardInset = () => (
  <ThemeProvider theme={myCustomCardTheme}>
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
  </ThemeProvider>
);

export default {
  name: 'card',
  children: [
    {
      name: 'card-small-without-inset',
      type: 'story',
      parameters: {viewport: 'iphone5', eyes: {include: false}},
      component: () => <React.Fragment>{renderCard()}</React.Fragment>,
    },
    {
      name: 'card-medium-without-inset',
      type: 'story',
      parameters: {viewport: 'ipad', eyes: {include: false}},
      component: () => <React.Fragment>{renderCard()}</React.Fragment>,
    },
    {
      name: 'card-large-without-inset',
      type: 'story',
      parameters: {viewport: 'ipad12p', eyes: {include: false}},
      component: () => <React.Fragment>{renderCard()}</React.Fragment>,
    },
    {
      name: 'card-small-with-inset',
      type: 'story',
      parameters: {viewport: 'iphone5', eyes: {include: false}},
      component: () => <React.Fragment>{renderCardInset()}</React.Fragment>,
    },
    {
      name: 'card-medium-with-inset',
      type: 'story',
      parameters: {viewport: 'ipad', eyes: {include: false}},
      component: () => <React.Fragment>{renderCardInset()}</React.Fragment>,
    },
    {
      name: 'card-large-with-inset',
      type: 'story',
      parameters: {viewport: 'ipad12p', eyes: {include: false}},
      component: () => <React.Fragment>{renderCardInset()}</React.Fragment>,
    },
    {
      name: 'card-without-inset',
      type: 'story',
      component: () => <React.Fragment>{renderCard()}</React.Fragment>,
    },
    {
      name: 'card-with-inset',
      type: 'story',
      component: () => <React.Fragment>{renderCardInset()}</React.Fragment>,
    },
    {
      name: 'card-without-inset-containers-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card - Without Inset - Container Overrides
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={4}>
                <ThemeProvider theme={myCustomCardTheme}>
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
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-with-inset-containers-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card - With Inset - Containers Overrides
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={4}>
                <ThemeProvider theme={myCustomCardTheme}>
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
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-with-media-link-and-headline',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card with media, link and only Headline in cardBody
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={4}>
                <ThemeProvider theme={myCustomCardTheme}>
                  <Card
                    href="https://newskit.co.uk/"
                    media={{
                      src: '/placeholder-3x2.png',
                      alt: 'Card Media',
                    }}
                    actions={cardSmallTags}
                  >
                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                  </Card>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-with-link-and-headline-and-mediaInteractive',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card with link Headline and mediaInteractive set to true
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={4}>
                <ThemeProvider theme={myCustomCardTheme}>
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
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                  </Card>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-with-link-and-no-headline',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card - Without Inset - Container Overrides
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={4}>
                <ThemeProvider theme={myCustomCardTheme}>
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
                            typographyPreset:
                              cardTypographyPresets.cardLabelSmall,
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
                          typographyPreset={
                            cardTypographyPresets.cardTeaserLeadSmall
                          }
                        >
                          A short paragraph description of the article,
                          outlining the main story and focus.
                        </TextBlock>
                      </Block>
                    </Block>
                  </Card>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-with-link-headline-and-nested-links-in-card-body',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card with link, headline and nested links in cardBody
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={4}>
                <ThemeProvider theme={myCustomCardTheme}>
                  <Card
                    href="https://newskit.co.uk/"
                    media={{
                      src: '/placeholder-3x2.png',
                      alt: 'Card Media',
                    }}
                    actions={cardSmallTags}
                  >
                    <FlexBlock spaceStack={cardLabel}>
                      <Flag
                        overrides={{
                          spaceInset: 'spaceInsetSquish000',
                          stylePreset: 'cardLabel',
                          typographyPreset:
                            cardTypographyPresets.cardLabelSmall,
                          minHeight: 'sizing000',
                        }}
                      >
                        <IconFilledImage />
                        IMAGE
                      </Flag>
                    </FlexBlock>

                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>

                    <Block spaceStack={cardTeaserLead}>
                      <TextBlock
                        stylePreset="cardTeaserLead"
                        typographyPreset={
                          cardTypographyPresets.cardTeaserLeadSmall
                        }
                      >
                        A short paragraph description of the article, outlining
                        the <Link href="/test">main story</Link> and focus.
                      </TextBlock>
                    </Block>

                    <Block spaceStack={cardTeaserLead}>
                      <Link href="https://google.com">External link</Link>
                    </Block>
                  </Card>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-with-inset-no-media-and-link',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card with inset, no media and link
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={4}>
                <ThemeProvider theme={myCustomCardTheme}>
                  <CardInset
                    href="https://newskit.co.uk/"
                    actions={cardSmallTags}
                  >
                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                    <TextBlock
                      stylePreset="cardTeaserLead"
                      typographyPreset={
                        cardTypographyPresets.cardTeaserLeadSmall
                      }
                    >
                      A short paragraph description of the article, outlining
                      the main story and focus.
                    </TextBlock>
                  </CardInset>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-without-inset-link-containers-overrides',
      type: 'story',
      parameters: {eyes: {include: false}},
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card - Without Inset - with Link and Container Overrides
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={4}>
                <ThemeProvider theme={myCustomCardTheme}>
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
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                    <Block spaceStack={cardTeaserLead}>
                      <TextBlock
                        stylePreset="cardTeaserLead"
                        typographyPreset={
                          cardTypographyPresets.cardTeaserLeadSmall
                        }
                      >
                        A short paragraph description of the article, outlining
                        the main story and focus.
                      </TextBlock>
                    </Block>
                  </Card>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-with-inset-link-containers-overrides',
      type: 'story',
      parameters: {eyes: {include: false}},
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card - With Inset - with Link and Containers Overrides
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={4}>
                <ThemeProvider theme={myCustomCardTheme}>
                  <CardInset
                    href="https://newskit.co.uk/"
                    media={{
                      src: '/placeholder-3:2.png',
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
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                    <TextBlock
                      stylePreset="cardTeaserLead"
                      typographyPreset={
                        cardTypographyPresets.cardTeaserLeadSmall
                      }
                    >
                      A short paragraph description of the article, outlining
                      the main story and focus.
                    </TextBlock>
                  </CardInset>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-horizontal',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card Horizontal</StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={6} md={5}>
                <ThemeProvider theme={myCustomCardTheme}>
                  <Card
                    layout="horizontal"
                    media={{
                      src: '/placeholder-2x3.png',
                      alt: 'Card Media',
                      loadingAspectRatio: '2:3',
                      overrides: {
                        height: '300px',
                      },
                    }}
                    actions={cardSmallTags}
                  >
                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                    <TextBlock
                      stylePreset="cardTeaserLead"
                      typographyPreset={
                        cardTypographyPresets.cardTeaserLeadSmall
                      }
                    >
                      A short paragraph description of the article, outlining
                      the main story and focus.
                    </TextBlock>
                  </Card>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-horizontal-reverse-with-link',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card Horizontal-Reverse With Link</StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={6} md={5}>
                <ThemeProvider theme={myCustomCardTheme}>
                  <Card
                    layout="horizontal-reverse"
                    href="https://newskit.co.uk/"
                    media={{
                      src: '/placeholder-2x3.png',
                      alt: 'Card Media',
                      loadingAspectRatio: '2:3',
                      overrides: {
                        width: '200px',
                      },
                    }}
                    actions={cardSmallTags}
                  >
                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                    <TextBlock
                      stylePreset="cardTeaserLead"
                      typographyPreset={
                        cardTypographyPresets.cardTeaserLeadSmall
                      }
                    >
                      A short paragraph description of the article, outlining
                      the main story and focus.
                    </TextBlock>
                  </Card>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-inset-horizontal-with-link-and-mediaInteractive',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            CardInset Horizontal with Link and mediaInteractive
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={6} md={5}>
                <ThemeProvider theme={myCustomCardTheme}>
                  <CardInset
                    layout="horizontal"
                    href="https://newskit.co.uk/"
                    mediaInteractive
                    media={{
                      src: '/placeholder-2x3.png',
                      alt: 'Card Media',
                      loadingAspectRatio: '2:3',
                      overrides: {
                        height: '300px',
                      },
                    }}
                    actions={cardSmallTags}
                  >
                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                    <TextBlock
                      stylePreset="cardTeaserLead"
                      typographyPreset={
                        cardTypographyPresets.cardTeaserLeadSmall
                      }
                    >
                      A short paragraph description of the article, outlining
                      the main story and focus.
                    </TextBlock>
                  </CardInset>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-inset-horizontal-reverse-with-link-and-mediaInteractive',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            CardInset Horizontal-Reverse with link and mediaInteractive
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={6} md={5}>
                <ThemeProvider theme={myCustomCardTheme}>
                  <CardInset
                    layout="horizontal-reverse"
                    href="https://newskit.co.uk/"
                    mediaInteractive
                    media={{
                      src: '/placeholder-2x3.png',
                      alt: 'Card Media',
                      loadingAspectRatio: '2:3',
                      overrides: {
                        height: '300px',
                      },
                    }}
                    actions={cardSmallTags}
                  >
                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                    <TextBlock
                      stylePreset="cardTeaserLead"
                      typographyPreset={
                        cardTypographyPresets.cardTeaserLeadSmall
                      }
                    >
                      A short paragraph description of the article, outlining
                      the main story and focus.
                    </TextBlock>
                  </CardInset>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-horizontal-without-inset-link-containers-overrides',
      type: 'story',
      parameters: {eyes: {include: false}},
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Horizontal - Without Inset - with Link and Container Overrides
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={6} md={5}>
                <ThemeProvider theme={myCustomCardTheme}>
                  <Card
                    layout="horizontal-reverse"
                    href="https://newskit.co.uk/"
                    media={{
                      src: '/placeholder-2x3.png',
                      alt: 'Card Media',
                      loadingAspectRatio: '2:3',
                      overrides: {
                        height: '300px',
                      },
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
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                    <TextBlock
                      stylePreset="cardTeaserLead"
                      typographyPreset={
                        cardTypographyPresets.cardTeaserLeadSmall
                      }
                    >
                      A short paragraph description of the article, outlining
                      the main story and focus.
                    </TextBlock>
                  </Card>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-horizontal-reverse-with-inset-link-containers-overrides',
      type: 'story',
      parameters: {eyes: {include: false}},
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Horizontal-reverse - With Inset - with Link and Containers
            Overrides
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={12} sm={6} md={5}>
                <ThemeProvider theme={myCustomCardTheme}>
                  <CardInset
                    layout="horizontal-reverse"
                    href="https://newskit.co.uk/"
                    media={{
                      src: '/placeholder-2x3.png',
                      alt: 'Card Media',
                      loadingAspectRatio: '2:3',
                      overrides: {
                        height: '300px',
                      },
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
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                    <TextBlock
                      stylePreset="cardTeaserLead"
                      typographyPreset={
                        cardTypographyPresets.cardTeaserLeadSmall
                      }
                    >
                      A short paragraph description of the article, outlining
                      the main story and focus.
                    </TextBlock>
                  </CardInset>
                </ThemeProvider>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    // The next scenario is only for showcase. It is excluded from Applitools.
    // Please don't place any other stories after this one.
    {
      name: 'card-slices',
      type: 'story',
      parameters: {eyes: {include: false}},
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card Slices</StorybookHeading>
          <ThemeProvider theme={myCustomCardTheme}>
            <ContainerWithBackground colorToken="white">
              <Grid>
                <Cell xs={12}>
                  <hr />
                </Cell>
                <Cell xs={12} sm={10}>
                  <Card
                    layout="horizontal-reverse"
                    href="https://newskit.co.uk/"
                    media={{
                      src: '/placeholder-3x2.png',
                      alt: 'Card Media',
                      loadingAspectRatio: '3:2',
                      overrides: {
                        height: '400px',
                      },
                    }}
                    actions={() => (
                      <Link href="https://google.com">Read the full story</Link>
                    )}
                  >
                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="CROWDS HEAD"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        outdoors as bank holiday temps soar above 20 degrees
                      </Headline>
                    </Block>

                    <Block spaceStack={cardTeaserHeadline}>
                      <TextBlock
                        stylePreset="cardTeaserLead"
                        typographyPreset={
                          cardTypographyPresets.cardTeaserLeadSmall
                        }
                      >
                        The bank holiday weekend has seen some mixed weather,
                        but as the sun emerged, many in the UK took the
                        opportunity to make the most of the lockdown easing.
                      </TextBlock>
                    </Block>
                    <Block spaceStack={cardTeaserHeadline}>
                      <TextBlock
                        stylePreset="cardTeaserLead"
                        typographyPreset={
                          cardTypographyPresets.cardTeaserLeadSmall
                        }
                      >
                        The bank holiday weekend has seen some mixed weather,
                        but as the sun emerged, many in the UK took the
                        opportunity to make the most of the lockdown easing.
                      </TextBlock>
                    </Block>
                  </Card>
                </Cell>
                <Cell xs={12} sm={2}>
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
                    <FlexBlock spaceStack={cardLabel}>
                      <Flag
                        overrides={{
                          spaceInset: 'spaceInsetSquish000',
                          stylePreset: 'cardLabel',
                          typographyPreset:
                            cardTypographyPresets.cardLabelSmall,
                          minHeight: 'sizing000',
                        }}
                      >
                        <IconFilledImage />
                        IMAGE
                      </Flag>
                    </FlexBlock>

                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>

                    <Block spaceStack={cardTeaserLead}>
                      <TextBlock
                        stylePreset="cardTeaserLead"
                        typographyPreset={
                          cardTypographyPresets.cardTeaserLeadSmall
                        }
                      >
                        A short paragraph description of the article, outlining
                        the main story and focus.
                      </TextBlock>
                    </Block>
                  </Card>
                </Cell>
                <Cell xs={12}>
                  <hr />
                </Cell>
                <Cell xs={12} sm={3}>
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
                    <FlexBlock spaceStack={cardLabel}>
                      <Flag
                        overrides={{
                          spaceInset: 'spaceInsetSquish000',
                          stylePreset: 'cardLabel',
                          typographyPreset:
                            cardTypographyPresets.cardLabelSmall,
                          minHeight: 'sizing000',
                        }}
                      >
                        <IconFilledImage />
                        IMAGE
                      </Flag>
                    </FlexBlock>

                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                  </Card>
                </Cell>
                <Cell xs={12} sm={3}>
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
                    <FlexBlock spaceStack={cardLabel}>
                      <Flag
                        overrides={{
                          spaceInset: 'spaceInsetSquish000',
                          stylePreset: 'cardLabel',
                          typographyPreset:
                            cardTypographyPresets.cardLabelSmall,
                          minHeight: 'sizing000',
                        }}
                      >
                        <IconFilledImage />
                        IMAGE
                      </Flag>
                    </FlexBlock>

                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card
                      </Headline>
                    </Block>
                  </Card>
                </Cell>
                <Cell xs={12} sm={3}>
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
                    <FlexBlock spaceStack={cardLabel}>
                      <Flag
                        overrides={{
                          spaceInset: 'spaceInsetSquish000',
                          stylePreset: 'cardLabel',
                          typographyPreset:
                            cardTypographyPresets.cardLabelSmall,
                          minHeight: 'sizing000',
                        }}
                      >
                        <IconFilledImage />
                        IMAGE
                      </Flag>
                    </FlexBlock>

                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                  </Card>
                </Cell>
                <Cell xs={12} sm={3}>
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
                    <FlexBlock spaceStack={cardLabel}>
                      <Flag
                        overrides={{
                          spaceInset: 'spaceInsetSquish000',
                          stylePreset: 'cardLabel',
                          typographyPreset:
                            cardTypographyPresets.cardLabelSmall,
                          minHeight: 'sizing000',
                        }}
                      >
                        <IconFilledImage />
                        IMAGE
                      </Flag>
                    </FlexBlock>

                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
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
                    <FlexBlock spaceStack={cardLabel}>
                      <Flag
                        overrides={{
                          spaceInset: 'spaceInsetSquish000',
                          stylePreset: 'cardLabel',
                          typographyPreset:
                            cardTypographyPresets.cardLabelSmall,
                          minHeight: 'sizing000',
                        }}
                      >
                        <IconFilledImage />
                        IMAGE
                      </Flag>
                    </FlexBlock>

                    <Block spaceStack={cardTeaserHeadline}>
                      <Headline
                        kickerText="SHORT"
                        overrides={{
                          typographyPreset:
                            cardTypographyPresets.cardTeaserHeadlineSmall,
                          kicker: {
                            spaceInline: cardTeaserKicker,
                            stylePreset: 'headlineKickerInteractive',
                          },
                          heading: {
                            stylePreset: 'headlineHeadingInteractive',
                          },
                        }}
                      >
                        title of the card describing the main content
                      </Headline>
                    </Block>
                    <TextBlock
                      stylePreset="cardTeaserLead"
                      typographyPreset={
                        cardTypographyPresets.cardTeaserLeadSmall
                      }
                    >
                      The bank holiday weekend has seen some mixed weather, but
                      as the sun emerged, many in the UK took the opportunity to
                      make the most of the lockdown easing.
                    </TextBlock>
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
                        overrides: {
                          height: '100px',
                        },
                      }}
                    >
                      <Block spaceStack={cardTeaserHeadline}>
                        <Headline
                          kickerText="SHORT"
                          overrides={{
                            typographyPreset:
                              cardTypographyPresets.cardTeaserHeadlineSmall,
                            kicker: {
                              spaceInline: cardTeaserKicker,
                              stylePreset: 'headlineKickerInteractive',
                            },
                            heading: {
                              stylePreset: 'headlineHeadingInteractive',
                            },
                          }}
                        >
                          title of the card describing the main content
                        </Headline>
                      </Block>
                      <TextBlock
                        stylePreset="cardTeaserLead"
                        typographyPreset={
                          cardTypographyPresets.cardTeaserLeadSmall
                        }
                      >
                        A short paragraph description of the article, outlining
                        the main story and focus.
                      </TextBlock>
                    </Card>
                    <Card
                      layout="horizontal"
                      href="http://newskit.co.uk"
                      media={{
                        src: '/placeholder-3x2.png',
                        alt: 'Card Media',
                        loadingAspectRatio: '3:2',
                        overrides: {
                          height: '100px',
                        },
                      }}
                    >
                      <Block spaceStack={cardTeaserHeadline}>
                        <Headline
                          kickerText="SHORT"
                          overrides={{
                            typographyPreset:
                              cardTypographyPresets.cardTeaserHeadlineSmall,
                            kicker: {
                              spaceInline: cardTeaserKicker,
                              stylePreset: 'headlineKickerInteractive',
                            },
                            heading: {
                              stylePreset: 'headlineHeadingInteractive',
                            },
                          }}
                        >
                          title of the card describing the main content
                        </Headline>
                      </Block>
                      <TextBlock
                        stylePreset="cardTeaserLead"
                        typographyPreset={
                          cardTypographyPresets.cardTeaserLeadSmall
                        }
                      >
                        A short paragraph description of the article, outlining
                        the main story and focus.
                      </TextBlock>
                    </Card>
                    <Card
                      layout="horizontal"
                      href="http://newskit.co.uk"
                      media={{
                        src: '/placeholder-3x2.png',
                        alt: 'Card Media',
                        loadingAspectRatio: '3:2',
                        overrides: {
                          height: '100px',
                        },
                      }}
                    >
                      <Block spaceStack={cardTeaserHeadline}>
                        <Headline
                          kickerText="SHORT"
                          overrides={{
                            typographyPreset:
                              cardTypographyPresets.cardTeaserHeadlineSmall,
                            kicker: {
                              spaceInline: cardTeaserKicker,
                              stylePreset: 'headlineKickerInteractive',
                            },
                            heading: {
                              stylePreset: 'headlineHeadingInteractive',
                            },
                          }}
                        >
                          title of the card describing the main content
                        </Headline>
                      </Block>
                      <TextBlock
                        stylePreset="cardTeaserLead"
                        typographyPreset={
                          cardTypographyPresets.cardTeaserLeadSmall
                        }
                      >
                        A short paragraph description of the article, outlining
                        the main story and focus.
                      </TextBlock>
                    </Card>
                    <Card
                      layout="horizontal"
                      href="http://newskit.co.uk"
                      media={{
                        src: '/placeholder-3x2.png',
                        alt: 'Card Media',
                        loadingAspectRatio: '3:2',
                        overrides: {
                          height: '100px',
                        },
                      }}
                    >
                      <Block spaceStack={cardTeaserHeadline}>
                        <Headline
                          kickerText="SHORT"
                          overrides={{
                            typographyPreset:
                              cardTypographyPresets.cardTeaserHeadlineSmall,
                            kicker: {
                              spaceInline: cardTeaserKicker,
                              stylePreset: 'headlineKickerInteractive',
                            },
                            heading: {
                              stylePreset: 'headlineHeadingInteractive',
                            },
                          }}
                        >
                          title of the card describing the main content
                        </Headline>
                      </Block>
                      <TextBlock
                        stylePreset="cardTeaserLead"
                        typographyPreset={
                          cardTypographyPresets.cardTeaserLeadSmall
                        }
                      >
                        A short paragraph description of the article, outlining
                        the main story and focus.
                      </TextBlock>
                    </Card>
                  </Stack>
                </Cell>
                <Cell xs={12}>
                  <hr />
                </Cell>
              </Grid>
            </ContainerWithBackground>
          </ThemeProvider>
        </React.Fragment>
      ),
    },
    // Please don't place any other stories after this one.
    // If you want to add a new story add it before the one above.
  ],
};
