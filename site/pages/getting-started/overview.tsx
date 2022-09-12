import React from 'react';
import {Grid} from 'newskit';
import routes from '../../routes';
import Layout, {LayoutProps} from '../../components/layout';
import {Item} from '../../components/sidebar/types';
import {HeaderIndex} from '../../components/header-index/index';
import {HeadNextSeo} from '../../components/head-next-seo';
import {MediaItem, MediaList} from '../../components/media-list';
import {ComponentPageCell} from '../../components/layout-cells';
import {
  getIllustrationComponent,
  Illustration,
} from '../../components/illustrations/illustration-loader';
import {
  ContentSection,
  ContentPrimary,
} from '../../components/content-structure';

const guidesRouteList: Item[] =
  routes.filter(route => route.title === 'Guides')[0].subNav || [];

const designRouteList: Item[] =
  guidesRouteList.filter(route => route.title === 'Design')[0].subNav || [];

const codeRouteList: Item[] =
  guidesRouteList.filter(route => route.title === 'Code')[0].subNav || [];

const getCardList = (routeList: Item[]) =>
  routeList
    .filter(route => route.page && route?.illustration)
    .map(({cardTitle, description, id, illustration}) => ({
      media: getIllustrationComponent(illustration as string),
      title: cardTitle,
      href: id,
      description,
    })) as MediaItem[];

const designRouteListCards = getCardList(designRouteList);
const codeRouteListCards = getCardList(codeRouteList);

const HeaderImage = () => (
  <Illustration path="guides/overview/header-image" viewBox="0 0 1572 997" />
);

const Overview = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    <HeadNextSeo
      title="Guides overview"
      description="Use the guides below to help you get the most out of using NewsKit."
      image={{
        url: 'social/guides.png',
        alt: 'Guides overview',
      }}
    />
    <HeaderIndex title="Guides" media={HeaderImage}>
      Use the guides below to help you get the most out of using NewsKit.
    </HeaderIndex>
    <Grid>
      <ComponentPageCell>
        <ContentSection sectionName="getting started design">
          <ContentPrimary
            headline="Getting started - design"
            description="Essential reading to kickstart your first NewsKit project in Figma."
          >
            <MediaList
              cards={designRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="getting started code">
          <ContentPrimary
            headline="Getting started - code"
            description="Essential reading to kickstart using NewsKit in your codebase."
          >
            <MediaList
              cards={codeRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
      </ComponentPageCell>
    </Grid>
  </Layout>
);

export default Overview;
