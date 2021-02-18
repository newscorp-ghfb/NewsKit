const cardSmallTags = () => (
  <Stack flow={Flow.HorizontalCenter} spaceInline={cardActionsSpace}>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{
        stylePreset: 'tagPrimary',
        typographyPreset: cardTagSmallTypographyPreset,
      }}
    >
      News
    </Tag>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{
        stylePreset: 'tagPrimary',
        typographyPreset: cardTagSmallTypographyPreset,
      }}
    >
      Sport
    </Tag>
  </Stack>
);
export const CardVerticalSmallWithInset = () => (
  <Grid>
    <Cell xs={4}>
      <ThemeProvider theme={myCustomCardTheme}>
        <CardInset
          href="https://newskit.co.uk/"
          media={{
            src: '/static/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardSmallTags}
          overrides={{
            stylePreset: 'cardContainer',
          }}
        >
          <Block spaceStack={cardLabelSpaceStack}>
            <Flag
              overrides={{
                minHeight: '0',
                spaceInset: 'spaceInsetSquish000',
                stylePreset: 'cardLabel',
                typographyPreset: cardLabelSmallTypographyPreset,
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
                typographyPreset: cardTeaserHeadlineSmallTypographyPreset,
              }}
            >
              outdoors as bank holiday temps soar above 20 degrees
            </Headline>
          </Block>

          <Block spaceStack={cardTeaserLeadInsetVariantSpaceStack}>
            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={cardTeaserLeadSmallTypographyPreset}
            >
              The bank holiday weekend has seen some mixed weather, but as the
              sun emerged, many in the UK took the opportunity to make the most
              of the lockdown easing.
            </TextBlock>
          </Block>
        </CardInset>
      </ThemeProvider>
    </Cell>
  </Grid>
);
