import React from 'react';
import {Grid} from 'newskit';
import {routes} from '../../routes';
import Layout, {LayoutProps} from '../../components/layout';
import {Item} from '../../components/sidebar/types';
import {HeadNextSeo} from '../../components/head-next-seo';
import {HeaderIndex} from '../../components/header-index/index';
import {ComponentPageCell} from '../../components/layout-cells';
import {MediaItem, MediaList} from '../../components/media-list';
import {
  getIllustrationComponent,
  Illustration,
} from '../../components/illustrations/illustration-loader';
import {
  ContentPrimary,
  ContentSection,
} from '../../components/content-structure';

const aboutRouteList: Item[] =
  routes.filter(route => route.title === 'About')[0].subNav || [];
const aboutRouteSubList: Item[] =
  aboutRouteList.filter(route => route.title === 'About')[0].subNav || [];

const getAboutCardList = (routeList: Item[]) =>
  routeList
    .filter(route => route.page && route?.illustration)
    .map(({title, description, id, illustration}) => ({
      media: illustration?.endsWith('.svg')
        ? {src: illustration, alt: ''}
        : getIllustrationComponent(illustration as string, {
            viewBox: '0 0 1344 759',
          }),

      title,
      href: id,
      description,
    })) as MediaItem[];

const aboutIndexRouteListCards = getAboutCardList(aboutRouteSubList);

const HeaderImage = () => (
  <Illustration path="about/hero" viewBox="0 0 1572 997" />
);

const pageDescription = `NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly.`;

const Overview = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    <HeadNextSeo
      title="About overview"
      description={pageDescription}
      image={{
        url: 'social/about.png',
        alt: 'About overview',
      }}
    />
    <HeaderIndex title="About" media={HeaderImage}>
      {pageDescription}
    </HeaderIndex>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      <ComponentPageCell>
        <ContentSection>
          <ContentPrimary headline="About" description=" ">
            <MediaList
              cards={aboutIndexRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
      </ComponentPageCell>
    </Grid>
  </Layout>
);

export default Overview;
