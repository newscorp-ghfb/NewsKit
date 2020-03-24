import * as React from 'react';
import {
  styled,
  ThemeProvider,
  ArticleHeadline,
  DateLine,
  ArticleContent,
  P,
  TagList,
  Grid,
  Cell,
  createTheme,
  Image,
  getMediaQueryFromTheme,
  getSizingFromTheme,
  getTypePresetFromTheme,
  SizingKeys,
  getColorFromTheme,
} from 'newskit';
import {ShareBar} from 'newskit/share-bar';
import Layout from '../../components/layout';
import PageTitle from '../../components/page-title';

const LayoutContainer = styled.div<{
  $marginBottom?: SizingKeys;
  $mdMarginBottom?: SizingKeys;
}>`
  margin-bottom: ${getSizingFromTheme(undefined, '$marginBottom')};

  ${getMediaQueryFromTheme('md')} {
    margin-bottom: ${getSizingFromTheme(undefined, '$mdMarginBottom')};
  }
`;

const TagListContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${getColorFromTheme('interface040')};
  border-bottom: ${({theme}) => `1px solid ${theme.colors.interface040}`};
  margin-bottom: ${getSizingFromTheme('sizing080')};
  padding: 20px 0 16px 0;
`;

const AuthorContainer = styled.div`
  display: flex;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  height: ${getSizingFromTheme('sizing080')};
  width: ${getSizingFromTheme('sizing080')};
`;

const AuthorImageContainer = styled.div`
  width: 58px;
`;

const AuthorName = styled.span`
  ${getTypePresetFromTheme('body010')};
  display: block;
`;

const Description = styled.span`
  ${getTypePresetFromTheme('subhead040')};
  display: block;
`;

const newsKitDaily = createTheme('newskit-daily', {
  themeOverrider: () => ({
    grid: {
      maxWidth: 1280,
      rowGutters: {
        md: 16,
        lg: 16,
      },
    },
  }),
});

const Article: React.FC = () => (
  <React.Fragment>
    <PageTitle title="The NewsKit Daily" />
    <ThemeProvider theme={newsKitDaily}>
      <Layout path="/pages/article" toggleTheme={() => {}}>
        <Grid>
          <Cell xs={12}>
            <ArticleHeadline>
              Stocking A Commercial Kitchen Finding High Quality Cookware Online
            </ArticleHeadline>
          </Cell>
          <Cell xs={12}>
            <LayoutContainer $marginBottom="sizing020">
              <Description>
                Refrigerated Treats Make For A Cool Event
              </Description>
            </LayoutContainer>
          </Cell>

          <Cell xs={12} md={6}>
            <AuthorContainer>
              <AuthorImageContainer>
                <StyledImage
                  src="https://via.placeholder.com/736x414"
                  alt="Author image"
                />
              </AuthorImageContainer>
              <div>
                <AuthorName>Nick Dorman</AuthorName>
                <DateLine
                  date="2019-10-30T13:18:17Z"
                  dateFormat="d MMMM yyyy"
                  $color="inkSubtle"
                />
              </div>
            </AuthorContainer>
          </Cell>

          <Cell xs={12} md={6}>
            <LayoutContainer $marginBottom="sizing020">
              <ShareBar
                rightIcons={[
                  {type: 'facebook'},
                  {type: 'twitter'},
                  {type: 'whatsApp'},
                ]}
              />
            </LayoutContainer>
          </Cell>

          <Cell xs={12}>
            <LayoutContainer $marginBottom="sizing020">
              <Image
                src="https://via.placeholder.com/736x414"
                alt="Placeholder image"
                aspectHeight="414"
                aspectWidth="736"
              />
            </LayoutContainer>
          </Cell>

          <Cell xs={12}>
            <LayoutContainer $marginBottom="sizing060">
              <ArticleContent $boldIntro $boldHeadings>
                <P>
                  Chopped, sliced or wedged, hard-cooked eggs are the basis of
                  egg salad and add protein and a happy glow to tossed and
                  composed salads and casseroles.
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
                  Very fresh eggs may be difficult to peel. The fresher the
                  eggs, the more the shell membranes cling tenaciously to the
                  shells. The simplest method for easy peeling is to buy and
                  refrigerate eggs a week to 10 days in advance of hard cooking.
                  This brief &apos;breather&apos; allows the eggs to take in air
                  which helps seperate the membranes from the shell. 1.
                </P>
                <P>
                  1. Place eggs in single layer in saucepan. Add enough tap
                  water to come at least 1 inch above eggs. 2. Cover. Quickly
                  bring just to boiling. Turn off heat. 3. If necessary, remove
                  pan from burner to prevent further boiling. Let eggs stand,
                  covered, in the hot water about 15 minutes for large eggs (12
                  minutes for medium, 18 for extra large).
                </P>
              </ArticleContent>
            </LayoutContainer>
          </Cell>

          <Cell xs={12}>
            <TagListContainer>
              <TagList
                $size="small"
                $shape="semiRounded"
                $spacing="sizing040"
                tagData={[
                  {
                    label: 'Cooking',
                  },
                  {
                    label: 'Recipe',
                  },
                  {
                    label: 'Eggs',
                  },
                  {
                    label: 'Kitchen',
                  },
                ]}
              />
            </TagListContainer>
          </Cell>
        </Grid>
      </Layout>
    </ThemeProvider>
  </React.Fragment>
);

export default Article;
