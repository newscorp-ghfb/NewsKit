import React from 'react';
import {Grid, ThemeProvider} from 'newskit';
import routes from '../../routes';
import Layout, {LayoutProps} from '../../components/layout';
import {Item} from '../../components/sidebar/types';
import {HeadNextSeo} from '../../components/head-next-seo';
import {HeaderIndex} from '../../components/header-index/index';
import {ComponentPageCell} from '../../components/layout-cells';
import {patternsThemeDark, patternsThemeLight} from '../../theme/doc-theme';
import {MediaItem, MediaList} from '../../components/media-list';
import {
  getIllustrationComponent,
  Illustration,
} from '../../components/illustrations/illustration-loader';
import {
  ContentPrimary,
  ContentSection,
} from '../../components/content-structure';

const patternsRouteList: Item[] =
  routes.filter(route => route.title === 'Patterns')[0].subNav || [];

const patternsFormRouteList: Item[] =
  patternsRouteList.filter(route => route.title === 'Forms')[0].subNav || [];

const getPatternsCardList = (routeList: Item[]) =>
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

const patternsIndexRouteListCards = getPatternsCardList(patternsFormRouteList);

const HeaderImage = () => (
  <Illustration path="patterns/hero" viewBox="0 0 1572 997" />
);

const Overview = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    {({themeMode}) => (
      <ThemeProvider
        theme={themeMode === 'light' ? patternsThemeLight : patternsThemeDark}
      >
        <HeadNextSeo
          title="Overview"
          description="Design patterns provide a framework for solving a particular user problem in a consistent, considered way."
          image={{
            url: 'social/patterns.png',
            alt: 'Overview',
          }}
        />
        <HeaderIndex title="Patterns" media={HeaderImage}>
          Design patterns provide a framework for solving a particular user
          problem in a consistent, considered way.
        </HeaderIndex>

        <Grid lgMargin="sizing000" xsRowGutter="sizing000">
          <ComponentPageCell>
            <ContentSection sectionName="forms">
              <ContentPrimary headline="Forms">
                <MediaList
                  cards={patternsIndexRouteListCards}
                  gridProps={{xsRowGutter: 'space050'}}
                />
              </ContentPrimary>
            </ContentSection>
          </ComponentPageCell>
        </Grid>
      </ThemeProvider>
    )}
  </Layout>
);

export default Overview;
