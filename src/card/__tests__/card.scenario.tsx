import * as React from 'react';
import {Card, CardInset} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {Grid, Cell, Visible} from '../../grid';
import {Image} from '../../image';
import {Stack, Flow} from '../../stack';
import {Tag, TagSize} from '../../tag';
import {Flag} from '../../flag';
import {Headline} from '../../headline';
import {TextBlock} from '../../text-block';
import {Block} from '../../block';
import {Picture} from '../../icons';
import {styled} from '../../utils/style';
import {
  createTheme,
  StylePresetKeys,
  ThemeProvider,
  TypographyPresetKeys,
} from '../../theme';

const ContainerWithBackground = styled.div`
  background: ${({theme}) => theme.colors.interface040};
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
const cardActions = 'sizing040';

// Typography Presets
const cardTypographyPresets: {[index: string]: TypographyPresetKeys} = {
  cardTeaserKickerLarge: 'heading050',
  cardTeaserKickerMedium: 'heading030',
  cardTeaserKickerSmall: 'heading010',

  cardTeaserHeadlineLarge: 'heading050',
  cardTeaserHeadlineMedium: 'heading030',
  cardTeaserHeadlineSmall: 'heading010',

  cardTeaserLeadLarge: 'body030',
  cardTeaserLeadMedium: 'body010',
  cardTeaserLeadSmall: 'body010',

  cardLabelLarge: 'label020',
  cardLabelMedium: 'label010',
  cardLabelSmall: 'label010',

  cardTagLarge: 'label020',
  cardTagMedium: 'label010',
  cardTagSmall: 'label010',
};

// Style presets (Taken from style-presets.ts;)
const labelDefault = {
  base: {
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
};
const headlineKicker = {
  base: {
    color: '{{colors.inkBrand010}}',
  },
};
const headlineContent = {
  base: {
    color: '{{colors.inkContrast}}',
  },
};
const tagPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactive130}}',
    borderWidth: '{{borders.borderWidth010}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive120}}',
  },
  active: {
    borderWidth: '{{borders.borderWidth010}}',
  },
  current: {
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
    backgroundColor: '{{colors.interactive130}}',
    borderStyle: 'none',
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
      cardTeaserHeadline: headlineContent,
      cardTeaserKicker: headlineKicker,
      cardTeaserLead: {
        base: {
          color: '{{colors.inkBase}}',
        },
      },
      cardTag: tagPrimary,

      // mocked card Containers
      cardContainerMock: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.purple020}}',
          borderWidth: '{{borders.borderWidth010}}',
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
      },
      cardContainerActionsMock: {
        base: {
          backgroundColor: '{{colors.green020}}',
        },
      },
    },
  },
});

const customCardMedia = () => (
  <Image
    src="/placeholder-16x9.png"
    alt="Card Media"
    loadingAspectRatio="16:9"
  />
);

const customCardMediaWithOverrides = () => (
  <Image
    src="/placeholder-16x9.png"
    overrides={{stylePreset: 'imageDefault'}}
    alt="Card Media"
    loadingAspectRatio="16:9"
  />
);

const cardTags = (size: TagSize) => ({cardSize}: {cardSize: string}) => () => (
  <Stack flow={Flow.HorizontalCenter} space={cardActions}>
    <Tag
      size={size}
      href="/"
      overrides={{
        stylePreset: 'cardTag',
        typographyPreset: cardTypographyPresets[`cardTag${cardSize}`],
      }}
    >
      News
    </Tag>
    <Tag
      size={size}
      href="/"
      overrides={{
        stylePreset: 'cardTag',
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
    <FlexBlock overrides={{spaceStack: cardLabel}}>
      <Flag
        overrides={{
          paddingPreset: 'spaceInset000Squish',
          stylePreset: 'cardLabel',
          typographyPreset: cardTypographyPresets[`cardLabel${cardSize}`],
          minHeight: 'sizing000',
        }}
      >
        <Picture />
        IMAGE
      </Flag>
    </FlexBlock>

    <Block
      overrides={{
        spaceStack: cardTeaserHeadline,
      }}
    >
      <Headline
        kickerText="CROWDS HEAD"
        overrides={{
          heading: {
            stylePreset: 'cardTeaserHeadline',
            typographyPreset:
              cardTypographyPresets[`cardTeaserHeadline${cardSize}`],
          },
          kicker: {
            spaceInline: cardTeaserKicker,
            stylePreset: 'cardTeaserKicker',
            typographyPreset:
              cardTypographyPresets[`cardTeaserKicker${cardSize}`],
          },
        }}
      >
        outdoors as bank holiday temps soar above 20 degrees
      </Headline>
    </Block>

    <Block
      overrides={{
        spaceStack: inset ? cardTeaserLeadInsetVariant : cardTeaserLead,
      }}
    >
      <TextBlock
        overrides={{
          stylePreset: 'cardTeaserLead',
          typographyPreset: cardTypographyPresets[`cardTeaserLead${cardSize}`],
        }}
      >
        The bank holiday weekend has seen some mixed weather, but as the sun
        emerged, many in the UK took the opportunity to make the most of the
        lockdown easing.
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
      <h3>Card - small - Without Inset</h3>
      <ContainerWithBackground>
        <Card
          href="https://newskit.co.uk/"
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
      <h3>Card - Medium - Without Inset</h3>
      <ContainerWithBackground>
        <Card
          href="https://newskit.co.uk/"
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
    <Visible lg>
      <h3>Card - Large - Without Inset</h3>
      <ContainerWithBackground>
        <Card
          href="https://newskit.co.uk/"
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
      <h3>Card - small - With Inset</h3>
      <ContainerWithBackground>
        <CardInset
          href="https://newskit.co.uk/"
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
      <h3>Card - Medium - With Inset</h3>
      <ContainerWithBackground>
        <CardInset
          href="https://newskit.co.uk/"
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
    <Visible lg>
      <h3>Card - Large - With Inset</h3>
      <ContainerWithBackground>
        <CardInset
          href="https://newskit.co.uk/"
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
      parameters: {viewport: 'iphone6', eyes: {include: false}},
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
      parameters: {viewport: 'iphone6', eyes: {include: false}},
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
                    href="https://newskit.co.uk/"
                    media={{
                      src: '/placeholder-3x2.png',
                      alt: 'Card Media',
                    }}
                    actions={cardSmallTags}
                    overrides={{
                      stylePreset: 'cardContainerMock' as StylePresetKeys,
                      mediaContainer: {
                        stylePreset: 'cardContainerMediaMock' as StylePresetKeys,
                      },
                      teaserContainer: {
                        stylePreset: 'cardContainerTeaserMock' as StylePresetKeys,
                      },
                      actionsContainer: {
                        stylePreset: 'cardContainerActionsMock' as StylePresetKeys,
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
                    href="https://newskit.co.uk/"
                    media={{
                      src: '/placeholder-3x2.png',
                      alt: 'Card Media',
                    }}
                    actions={cardSmallTags}
                    overrides={{
                      stylePreset: 'cardContainerMock' as StylePresetKeys,
                      mediaContainer: {
                        stylePreset: 'cardContainerMediaMock' as StylePresetKeys,
                      },
                      teaserContainer: {
                        stylePreset: 'cardContainerTeaserMock' as StylePresetKeys,
                      },
                      actionsContainer: {
                        stylePreset: 'cardContainerActionsMock' as StylePresetKeys,
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
      name: 'card-media-custom-loading-aspect-ratio',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Media - Custom Loading Aspect Ratio - 5x4
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={6}>
                <Card
                  href="https://newskit.co.uk/"
                  media={{
                    loadingAspectRatio: '5:4',
                    src: '/placeholder-5x4.png',
                    alt: 'Card Media',
                  }}
                >
                  Card content text
                </Card>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Media - With Overriden Borders
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={6}>
                <Card
                  href="https://newskit.co.uk/"
                  media={{
                    src: '/placeholder-3x2.png',
                    alt: 'Card Media',
                  }}
                  overrides={{
                    mediaContainer: {
                      stylePreset: 'imageDefault',
                    },
                  }}
                >
                  Card content text
                </Card>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-custom-component',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Card Media - Custom Component</StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={6}>
                <Card href="https://newskit.co.uk/" media={customCardMedia}>
                  Card content text
                </Card>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
    {
      name: 'card-media-custom-component-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Card Media - Custom Component With Overridden Borders
          </StorybookHeading>
          <ContainerWithBackground>
            <Grid>
              <Cell xs={6}>
                <Card
                  href="https://newskit.co.uk/"
                  media={customCardMediaWithOverrides}
                >
                  Card content text
                </Card>
              </Cell>
            </Grid>
          </ContainerWithBackground>
        </React.Fragment>
      ),
    },
  ],
};
