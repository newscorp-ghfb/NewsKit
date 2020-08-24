const cardSmallTags = () => (
  <Stack flow={Flow.HorizontalCenter} space={cardActionsSpace}>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{stylePreset: 'cardTag', typePreset: cardTagSmallTypePreset}}
    >
      News
    </Tag>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{stylePreset: 'cardTag', typePreset: cardTagSmallTypePreset}}
    >
      Sport
    </Tag>
  </Stack>
);
export const CardSmallWithInset = () => (
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
          <Block overrides={{spaceStack: cardLabelSpaceStack}}>
            <Flag
              overrides={{
                minHeight: '0',
                paddingPreset: 'spaceInset000Squish',
                stylePreset: 'cardLabel',
                typePreset: cardLabelSmallTypePreset,
              }}
            >
              <Picture />
              IMAGE
            </Flag>
          </Block>

          <Block
            overrides={{
              spaceStack: cardTeaserHeadlineSpaceStack,
            }}
          >
            <Headline
              kickerText="CROWDS HEAD"
              overrides={{
                heading: {
                  stylePreset: 'cardTeaserHeadline',
                  typePreset: cardTeaserHeadlineSmallTypePreset,
                },
                kicker: {
                  spaceInline: cardTeaserKickerSpaceInline,
                  stylePreset: 'cardTeaserKicker',
                  typePreset: cardTeaserKickerSmallTypePreset,
                },
              }}
            >
              outdoors as bank holiday temps soar above 20 degrees
            </Headline>
          </Block>

          <Block
            overrides={{
              spaceStack: cardTeaserLeadInsetVariantSpaceStack,
            }}
          >
            <TextBlock
              overrides={{
                stylePreset: 'cardTeaserLead',
                typePreset: cardTeaserLeadSmallTypePreset,
              }}
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
