import React from 'react';
import {
  Block,
  Grid,
  StructuredList,
  StructuredListCell,
  StructuredListItem,
  TextBlock,
} from 'newskit';
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
const UtilityCategories =
  componentsRouteList.filter(route => route.id === '/utils')[0].subNav || [];

const UtilitiesList = () => (
  <Block stylePreset="componentsUtilitiesStructuredList">
    <StructuredList divider>
      {UtilityCategories.map(({title, id, description}) => (
        <StructuredListItem key={id} href={id} ariaLabel={title}>
          <StructuredListCell>
            <TextBlock
              stylePreset="inkContrast"
              typographyPreset="utilityHeading010"
            >
              {title}
            </TextBlock>
            <TextBlock
              marginBlockStart="space030"
              stylePreset="inkContrast"
              typographyPreset="utilityBody020"
            >
              {description}
            </TextBlock>
          </StructuredListCell>
        </StructuredListItem>
      ))}
    </StructuredList>
  </Block>
);
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
              {(title === 'Utilities' && <UtilitiesList />) || (
                <MediaList
                  cards={getCardList(subNav)}
                  gridProps={{xsRowGutter: 'space050'}}
                />
              )}
            </ContentPrimary>
          </ContentSection>
        ))}
      </ComponentPageCell>
    </Grid>
  </Layout>
);

export default Overview;
