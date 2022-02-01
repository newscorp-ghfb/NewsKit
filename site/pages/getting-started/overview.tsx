import React from 'react';
import {Grid} from 'newskit';
import {HeaderImage} from '../../components/illustrations/guides/overview/header-image';
import Layout, {LayoutProps} from '../../components/layout';
import {MediaList} from '../../components/media-list';
import {HeaderIndex} from '../../components/header-index/index';
import {ComponentPageCell} from '../../components/layout-cells';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {HeadNextSeo} from '../../components/head-next-seo';
import {
  ContentSection,
  ContentPrimary,
} from '../../components/content-structure';

const designCards = [
  {
    media: getIllustrationComponent('guides/overview/design-overview'),
    title: 'Design Overview',
    description:
      'Everything you need to know about using NewsKit to design digital products.',
    href: '/getting-started/code/design-overview',
  },
  {
    media: getIllustrationComponent('guides/overview/design-quickstart'),
    title: 'Design Quickstart Guide',
    description:
      'A step by step guide to get you up and running using NewsKit.',
    href: '/getting-started/code/design-quickstart',
  },
];

const codeCards = [
  {
    media: getIllustrationComponent('guides/overview/engineering-overview'),
    title: 'Engineering Overview',
    description:
      'Everything you need to know about using NewsKit’s library of React web components.',
    href: '/getting-started/code/engineering-overview',
  },
  {
    media: getIllustrationComponent('guides/overview/engineering-quickstart'),
    title: 'Engineering Quickstart Guide',
    description:
      'Guides on how to get started building a web application with NewsKit.',
    href: '/getting-started/code/engineering-quickstart',
  },
  {
    media: getIllustrationComponent('guides/overview/instrumentation-setup'),
    title: 'Instrumentation Setup',
    description:
      'NewsKit components are built to emit events "out of the box".',
    href: '/getting-started/code/instrumentation/',
  },
];

export default (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    <HeadNextSeo
      title="Guides overview"
      description="Use the guides below to help you get the most out of using NewsKit."
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
              cards={designCards}
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
              cards={codeCards}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </ContentPrimary>
        </ContentSection>
      </ComponentPageCell>
    </Grid>
  </Layout>
);
