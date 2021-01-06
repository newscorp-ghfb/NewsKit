const cardMediumTags = () => (
  <Stack flow={Flow.HorizontalCenter} spaceInline={cardActionsSpace}>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{
        stylePreset: 'cardTag',
        typographyPreset: cardTagMediumTypographyPreset,
      }}
    >
      News
    </Tag>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{
        stylePreset: 'cardTag',
        typographyPreset: cardTagMediumTypographyPreset,
      }}
    >
      Sport
    </Tag>
  </Stack>
);

export const CardMediumWithoutInset = () => (
  <Grid>
    <Cell xs={6}>
      <ThemeProvider theme={myCustomCardTheme}>
        <Card
          href="https://newskit.co.uk/"
          media={{
            src: '/static/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardMediumTags}
          overrides={{
            stylePreset: 'cardContainer',
          }}
        >
          <Block spaceStack={cardLabelSpaceStack}>
            <Flag
              overrides={{
                spaceInset: 'spaceInsetSquish000',
                stylePreset: 'cardLabel',
                typographyPreset: cardLabelMediumTypographyPreset,
              }}
            >
              <IconFilledImage />
              IMAGE
            </Flag>
          </Block>

          <Block spaceStack={cardTeaserHeadlineSpaceStack}>
            <Headline
              kickerText="CROWDS HEAD"
              overrides={{
                typographyPreset: cardTeaserHeadlineMediumTypographyPreset,
                heading: {
                  stylePreset: 'headlineHeadingInteractive',
                },
                kicker: {
                  spaceInline: cardTeaserKickerSpaceInline,
                  stylePreset: 'headlineKickerInteractive',
                },
              }}
            >
              outdoors as bank holiday temps soar above 20 degrees
            </Headline>
          </Block>

          <Block spaceStack={cardTeaserLeadSpaceStack}>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTeaserLeadMediumTypographyPreset}
            >
              The bank holiday weekend has seen some mixed weather, but as the
              sun emerged, many in the UK took the opportunity to make the most
              of the lockdown easing.
            </TextBlock>
          </Block>
        </Card>
      </ThemeProvider>
    </Cell>
  </Grid>
);
