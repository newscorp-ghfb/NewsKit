import React from 'react';
import {Grid, ThemeProvider} from 'newskit';
import {
  ContentPrimary,
  ContentSection,
} from '../../components/content-structure';
import Layout, {LayoutProps} from '../../components/layout';
import {MediaItem, MediaList} from '../../components/media-list';
import {HeaderIndex} from '../../components/header-index';
import {ComponentPageCell} from '../../components/layout-cells';
import {routes} from '../../routes';
import {
  getIllustrationComponent,
  Illustration,
} from '../../components/illustrations/illustration-loader';
import {Item} from '../../components/sidebar/types';
import {HeadNextSeo} from '../../components/head-next-seo';
import {
  foundationsThemeLight,
  foundationsThemeDark,
} from '../../theme/doc-theme';

const HeaderImage = () => (
  <Illustration path="theme/header-image" viewBox="0 0 1572 997" />
);

const themeRouteList: Item[] =
  routes.filter(route => route.title === 'Theme')[0].subNav || [];
const themeCategories = themeRouteList?.slice(1);

const getCardList = (routeList: Item[]) =>
  routeList
    .filter(route => route.page && route?.illustration)
    .map(({title, description, id, illustration}) => ({
      media: illustration?.endsWith('.svg')
        ? {src: illustration, alt: ''}
        : getIllustrationComponent(illustration as string),

      title,
      href: id,
      description,
    })) as MediaItem[];

const pageDescription = `NewsKit offers a robust and flexible theming system,
enabling brands to retain a unique identity while building consistent, accessible products.`;

const Overview = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    {({themeMode}) => (
      <ThemeProvider
        exposeCssVariables
        theme={
          themeMode === 'light' ? foundationsThemeLight : foundationsThemeDark
        }
      >
        <HeadNextSeo
          title="Theme overview"
          description={pageDescription}
          image={{
            url: 'social/theme.png',
            alt: 'Theme overview',
          }}
        />

        <HeaderIndex title="Theme" media={HeaderImage}>
          {pageDescription}
        </HeaderIndex>
        <Grid lgMargin="sizing000" xsRowGutter="sizing000">
          <ComponentPageCell>
            {themeCategories.map(({title, description, subNav = []}) => (
              <ContentSection sectionName={title as string}>
                <ContentPrimary
                  headline={title as string}
                  description={description}
                >
                  <MediaList
                    cards={getCardList(subNav)}
                    gridProps={{xsRowGutter: 'space050'}}
                  />
                </ContentPrimary>
              </ContentSection>
            ))}
          </ComponentPageCell>
        </Grid>
      </ThemeProvider>
    )}
  </Layout>
);

export default Overview;
