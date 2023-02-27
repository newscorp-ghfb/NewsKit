import React from 'react';
import {Grid} from 'newskit';
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

const HeaderImage = () => (
  <Illustration path="components/header-image" viewBox="0 0 1572 997" />
);

const componentsRouteList: Item[] =
  routes.filter(route => route.title === 'Components')[0].subNav || [];

const componentCategories = componentsRouteList?.slice(1);

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

const pageDescription = `Components are key building blocks of the NewsKit design system.`;

const Overview = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    <HeadNextSeo
      title="Components overview"
      description={pageDescription}
      image={{
        url: 'social/components.png',
        alt: 'Components overview',
      }}
    />

    <HeaderIndex title="Components" media={HeaderImage}>
      {pageDescription}
    </HeaderIndex>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      <ComponentPageCell>
        {componentCategories.map(({title, description, subNav = []}) => (
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
  </Layout>
);

export default Overview;
