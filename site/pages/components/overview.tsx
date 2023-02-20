/* eslint-disable @typescript-eslint/no-explicit-any */
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

const componentsActionsAndInputsRouteList: Item[] =
  componentsRouteList.filter(route => route.title === 'Actions & Inputs')[0]
    .subNav || [];

const componentsFeedbackAndStatusRouteList: Item[] =
  componentsRouteList.filter(route => route.title === 'Feedback & Status')[0]
    .subNav || [];

const componentsLayoutRouteList: Item[] =
  componentsRouteList.filter(route => route.title === 'Layout')[0].subNav || [];

const componentsMediaRouteList: Item[] =
  componentsRouteList.filter(route => route.title === 'Media')[0].subNav || [];

const componentsNavigationRouteList: Item[] =
  componentsRouteList.filter(route => route.title === 'Navigation')[0].subNav ||
  [];

const componentsTextRouteList: Item[] =
  componentsRouteList.filter(route => route.title === 'Text')[0].subNav || [];

const componentsThirdPartyIntegrationsRouteList: Item[] =
  componentsRouteList.filter(
    route => route.title === 'Third Party Integrations',
  )[0].subNav || [];

const componentUtilitiesRouteList: Item[] =
  componentsRouteList.filter(route => route.title === 'Utilities')[0].subNav ||
  [];

const componentsSubNav: any[] | undefined = routes.find(
  r => r.title === 'Components',
)?.subNav;
const utilities = componentsSubNav?.find(e => e.id === '/utils');

const componentDeprecatedRouteList: Item[] =
  componentsRouteList.filter(route => route.title === 'Deprecated')[0].subNav ||
  [];

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

const componentsActionsAndInputsRouteListCards = getCardList(
  componentsActionsAndInputsRouteList,
);
const componentsFeedbackAndStatusRouteListCards = getCardList(
  componentsFeedbackAndStatusRouteList,
);
const componentsLayoutRouteListCards = getCardList(componentsLayoutRouteList);
const componentsMediaRouteListCards = getCardList(componentsMediaRouteList);
const ccomponentsNavigationRouteListCards = getCardList(
  componentsNavigationRouteList,
);
const componentsTextRouteListCards = getCardList(componentsTextRouteList);
const componentsThirdPartyIntegrationsRouteListCards = getCardList(
  componentsThirdPartyIntegrationsRouteList,
);
const componentUtilitiesRouteListCards = getCardList(
  componentUtilitiesRouteList,
);
const componentDeprecatedRouteListCards = getCardList(
  componentDeprecatedRouteList,
);

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
        <ContentSection sectionName="Foundations">
          <ContentPrimary
            headline="Actions & Inputs"
            description="Components that allow users to take action on a feature or enable users to input data."
          >
            <MediaList
              cards={componentsActionsAndInputsRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="Feedback & Status">
          <ContentPrimary
            headline="Feedback & Status"
            description="Components that provide users with system or user feedback & status."
          >
            <MediaList
              cards={componentsFeedbackAndStatusRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="Layout">
          <ContentPrimary
            headline="Layout"
            description="Components that help to define the fundamental spacial structure of a feature or page."
          >
            <MediaList
              cards={componentsLayoutRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="Media">
          <ContentPrimary
            headline="Media"
            description="Components that provide or control rich media."
          >
            <MediaList
              cards={componentsMediaRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="Navigation">
          <ContentPrimary
            headline="Navigation"
            description="Components that enable users to move between pages or content."
          >
            <MediaList
              cards={ccomponentsNavigationRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="Text">
          <ContentPrimary
            headline="Text"
            description="Components that display specific written content."
          >
            <MediaList
              cards={componentsTextRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="Third Party Integrations">
          <ContentPrimary
            headline="Third Party Integrations"
            description="Components that interact with a third-party service."
          >
            <MediaList
              cards={componentsThirdPartyIntegrationsRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="Utilities">
          <ContentPrimary
            headline="Utilities"
            description="Utilities that allow for modification of a single trait, typically a single CSS property."
          >
            <MediaList
              cards={componentUtilitiesRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
            <Block stylePreset="componentsUtilitiesStructuredList">
              <StructuredList divider>
                {utilities?.subNav?.map(
                  (util: {
                    title: string;
                    page: boolean;
                    id: string;
                    description: string;
                  }) => (
                    <StructuredListItem
                      key={util.id}
                      href={util.id}
                      ariaLabel={util.title}
                    >
                      <StructuredListCell>
                        <TextBlock
                          stylePreset="inkContrast"
                          typographyPreset="utilityHeading010"
                        >
                          {util.title}
                        </TextBlock>
                        <TextBlock
                          marginBlockStart="space030"
                          stylePreset="inkContrast"
                          typographyPreset="utilityBody020"
                        >
                          {util.description}
                        </TextBlock>
                      </StructuredListCell>
                    </StructuredListItem>
                  ),
                )}
              </StructuredList>
            </Block>
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="Deprecated">
          <ContentPrimary
            headline="Deprecated"
            description="These components are no longer supported."
          >
            <MediaList
              cards={componentDeprecatedRouteListCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
      </ComponentPageCell>
    </Grid>
  </Layout>
);

export default Overview;
