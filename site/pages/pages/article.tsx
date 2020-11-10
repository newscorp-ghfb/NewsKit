import * as React from 'react';
import {
  Byline,
  ThemeProvider,
  DateTime,
  Headline,
  TextBlock,
  P,
  TagSize,
  Grid,
  Cell,
  Image,
  newskitLightTheme,
  IconButton,
  ButtonSize,
  IconFilledFacebook,
  IconFilledTwitter,
  IconFilledWhatsApp,
  Stack,
  Flow,
  Tag,
  ShareBar,
} from 'newskit';
import Layout from '../../components/layout';
import PageTitle from '../../components/page-title';

const Article: React.FC = () => (
  <React.Fragment>
    <PageTitle title="The NewsKit Daily" />
    <ThemeProvider theme={newskitLightTheme}>
      <Layout path="/pages/article" toggleTheme={() => {}} themeMode="">
        <Grid>
          <Cell xs={12}>
            <Headline>
              Stocking A Commercial Kitchen Finding High Quality Cookware Online
            </Headline>
          </Cell>
          <Cell xs={12}>
            <div>Refrigerated Treats Make For A Cool Event</div>
          </Cell>

          <Cell xs={12} md={6}>
            <Image
              src="https://via.placeholder.com/736x414"
              alt="Author image"
              overrides={{
                height: '414',
                width: '736',
              }}
            />
            <Byline bylineData={[{author: 'Nick Dorman'}]} />
            <DateTime date="2019-10-30T13:18:17Z" dateFormat="d MMMM yyyy" />
          </Cell>

          <Cell xs={12} md={6}>
            <ShareBar>
              <IconButton
                size={ButtonSize.Large}
                overrides={{
                  stylePreset: 'buttonSocialTwitter',
                }}
                aria-label="Share on Twitter"
              >
                <IconFilledTwitter />
              </IconButton>
              <IconButton
                size={ButtonSize.Large}
                overrides={{
                  stylePreset: 'buttonSocialFacebook',
                }}
                aria-label="Share on Facebook"
              >
                <IconFilledFacebook />
              </IconButton>
              <IconButton
                size={ButtonSize.Large}
                overrides={{
                  stylePreset: 'buttonSocialWhatsapp',
                }}
                aria-label="Share on Whatsapp"
              >
                <IconFilledWhatsApp />
              </IconButton>
            </ShareBar>
          </Cell>

          <Cell xs={12}>
            <Image
              src="https://via.placeholder.com/736x414"
              alt="Placeholder image"
              overrides={{
                height: '414',
                width: '736',
              }}
            />
          </Cell>

          <Cell xs={12}>
            <TextBlock>
              <P>
                Chopped, sliced or wedged, hard-cooked eggs are the basis of egg
                salad and add protein and a happy glow to tossed and composed
                salads and casseroles.
              </P>
              <P>
                Chopped yolks and whites comprise Eggs Goldenrod and Polonaise
                Sauce. Whole hard-cooked eggs become comforting, familiar
                deviled eggs or zingy, newly rediscovered ickled eggs. Simply
                sprinkled with a herb or more fancily coated in sausage for
                Scotch eggs, hard-cooked eggs are nature&apos;s own handheld
                snack food. With a supply of hard-cooked eggs on hand,
                you&apos;re ready for almost any meal occasion.
              </P>
              <P>
                Chopped yolks and whites comprise Eggs Goldenrod and Polonaise
                Sauce. Whole hard-cooked eggs become comforting, familiar
                deviled eggs or zingy, newly rediscovered ickled eggs. Simply
                sprinkled with a herb or more fancily coated in sausage for
                Scotch eggs, hard-cooked eggs are nature&apos;s own handheld
                snack food. With a supply of hard-cooked eggs on hand,
                you&apos;re ready for almost any meal occasion.
              </P>
              <P>
                Very fresh eggs may be difficult to peel. The fresher the eggs,
                the more the shell membranes cling tenaciously to the shells.
                The simplest method for easy peeling is to buy and refrigerate
                eggs a week to 10 days in advance of hard cooking. This brief
                &apos;breather&apos; allows the eggs to take in air which helps
                seperate the membranes from the shell. 1.
              </P>
              <P>
                1. Place eggs in single layer in saucepan. Add enough tap water
                to come at least 1 inch above eggs. 2. Cover. Quickly bring just
                to boiling. Turn off heat. 3. If necessary, remove pan from
                burner to prevent further boiling. Let eggs stand, covered, in
                the hot water about 15 minutes for large eggs (12 minutes for
                medium, 18 for extra large).
              </P>
            </TextBlock>
          </Cell>

          <Cell xs={12}>
            <Stack flow={Flow.HorizontalCenter} spaceInline="space040">
              <Tag size={TagSize.Small} href="/">
                Cooking
              </Tag>
              <Tag size={TagSize.Small} href="/">
                Recipe
              </Tag>
              <Tag size={TagSize.Small} href="/">
                Eggs
              </Tag>
              <Tag size={TagSize.Small} href="/">
                Kitchen
              </Tag>
            </Stack>
          </Cell>
        </Grid>
      </Layout>
    </ThemeProvider>
  </React.Fragment>
);

export default Article;
