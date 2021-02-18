export const CardHorizontalMediumWithoutInset = () => (
  <Grid>
    <Cell xs={8}>
      <ThemeProvider theme={myCustomCardTheme}>
        <Card
          href="https://newskit.co.uk/"
          layout="horizontal"
          media={{
            src: '/static/placeholder-1x1.png',
            alt: 'Card Media',
            loadingAspectRatio: '1:1',
            overrides: {
              height: '300px',
            },
          }}
          actions={cardMediumTags}
          overrides={{
            stylePreset: 'cardContainer',
          }}
        >
          /* Content goes here, use the example of a card body above ... */
        </Card>
      </ThemeProvider>
    </Cell>
  </Grid>
);
