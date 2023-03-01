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

const themeFoundationRouteList: Item[] =
  themeRouteList.filter(route => route.title === 'Foundations')[0].subNav || [];

const themePresetsRouteList: Item[] =
  themeRouteList.filter(route => route.title === 'Presets')[0].subNav || [];

const themeThemingRouteList: Item[] =
  themeRouteList.filter(route => route.title === 'Creating and using themes')[0]
    .subNav || [];

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

const themeFoundationRouteListCards = getCardList(themeFoundationRouteList);
const themePresetsRouteListCards = getCardList(themePresetsRouteList);
const themeThemingRouteListCards = getCardList(themeThemingRouteList);

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
            <ContentSection sectionName="Foundations">
              <ContentPrimary
                headline="Foundations"
                description="NewsKit foundations define the look and feel of digital products. Foundations include borders,
                  breakpoints, colours, fonts, motion, shadows, sizing and space."
              >
                <MediaList
                  cards={themeFoundationRouteListCards}
                  gridProps={{xsRowGutter: 'space050'}}
                />
              </ContentPrimary>
            </ContentSection>
            <ContentSection sectionName="Presets">
              <ContentPrimary
                headline="Presets"
                description="A collection of related foundational design tokens combined into a preset to define
                  reusable styles, typography or transitions. There are three categories of presets:"
              >
                <MediaList
                  cards={themePresetsRouteListCards}
                  gridProps={{xsRowGutter: 'space050'}}
                />
              </ContentPrimary>
            </ContentSection>
            <ContentSection sectionName="Creating and using themes">
              <ContentPrimary
                headline="Creating and using themes"
                description="Learn how to create NewsKit themes in Figma and code, and unlock the power
                  of presets and component defaults to further customise NewsKit components."
              >
                <MediaList
                  cards={themeThemingRouteListCards}
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
