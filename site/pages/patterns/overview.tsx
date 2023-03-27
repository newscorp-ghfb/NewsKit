import React from 'react';
import {Grid, ThemeProvider} from 'newskit';
import {routes} from '../../routes';
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

const pageDescription = `Design patterns provide a framework for solving a particular user problem in a consistent, considered way.`;

const HeaderImage = () => (
  <Illustration path="patterns/hero" viewBox="0 0 1572 997" />
);

const Overview = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    {({themeMode}) => (
      <ThemeProvider
        exposeCssVariables
        theme={themeMode === 'light' ? patternsThemeLight : patternsThemeDark}
      >
        <HeadNextSeo
          title="Patterns overview"
          description={pageDescription}
          image={{
            url: 'social/patterns.png',
            alt: 'Patterns overview',
          }}
        />
        <HeaderIndex title="Patterns" media={HeaderImage}>
          {pageDescription}
        </HeaderIndex>

        <Grid lgMargin="sizing000" xsRowGutter="sizing000">
          <ComponentPageCell>
            {(routes as Item[])
              .find(({title}) => title === 'Patterns')!
              .subNav!.slice(1)
              .map(({title, description, subNav}) => (
                <ContentSection sectionName={title as string}>
                  <ContentPrimary
                    headline={title as string}
                    description={description}
                  >
                    <MediaList
                      cards={getPatternsCardList(subNav || [])}
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
