import React from 'react';
import {Grid} from 'newskit';
import Head from 'next/head';
import {HeaderImage} from '../../components/illustrations/foundations/header-image';
import Layout, {LayoutProps} from '../../components/layout';
import {SectionIntroduction} from '../../components/section-introduction';
import {Separator} from '../../components/separator';
import {MediaItem, MediaList} from '../../components/media-list';
import {HeaderIndex} from '../../components/header-index';
import {ComponentPageCell} from '../../components/layout-cells';
import routes from '../../routes';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {Item} from '../../components/sidebar/types';

const foundationRoute: Item[] =
  routes.filter(router => router.title === 'Foundations')[0].subNav || [];

const cardsContent = foundationRoute
  .filter(item => item.page && item?.illustration)
  .map(({title, description, id, illustration}) => ({
    media: illustration?.endsWith('.svg')
      ? {src: illustration, alt: ''}
      : getIllustrationComponent(illustration as string),

    title,
    href: id,
    description,
  })) as MediaItem[];

export default (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    <Head>
      <title key="title">Foundations overview | NewsKit design system</title>
      <meta
        name="Description"
        content="NewsKit foundations define the visual elements that inform the look and feel of UI components."
      />
    </Head>
    <HeaderIndex title="Foundations" media={HeaderImage}>
      NewsKit foundations define the visual elements that inform the look and
      feel of UI components.
    </HeaderIndex>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      <SectionIntroduction
        title="Categories"
        cellProps={{lg: 8}}
        subHeadingSpaceStack="space000"
      >
        The NewsKit Foundations are structured into the following categories:
      </SectionIntroduction>
      <ComponentPageCell>
        <MediaList cards={cardsContent} gridProps={{xsRowGutter: 'space050'}} />
      </ComponentPageCell>
      <ComponentPageCell>
        <Separator />
      </ComponentPageCell>
    </Grid>
  </Layout>
);
