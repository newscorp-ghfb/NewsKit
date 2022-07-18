import React from 'react';
import {ThemeProvider} from 'newskit';
import {GetStaticPaths, GetStaticProps} from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

import Layout, {LayoutProps} from '../../../components/layout';
import {Hero} from '../../../components/illustrations/patterns/hero';
import {HeadNextSeo} from '../../../components/head-next-seo';
import {HeaderIndex} from '../../../components/header-index/index';

import {patternsThemeDark, patternsThemeLight} from '../../../theme/doc-theme';

import {fetchPostContent} from '../../../utils/cms';

// const patternsRouteList: Item[] =
//   routes.filter(route => route.title === 'Patterns')[0].subNav || [];

// const patternsFormRouteList: Item[] =
//   patternsRouteList.filter(route => route.title === 'Forms')[0].subNav || [];

// const getPatternsCardList = (routeList: Item[]) =>
//   routeList
//     .filter(route => route.page && route?.illustration)
//     .map(({title, description, id, illustration}) => ({
//       media: illustration?.endsWith('.svg')
//         ? {src: illustration, alt: ''}
//         : getIllustrationComponent(illustration as string),

//       title,
//       href: id,
//       description,
//     })) as MediaItem[];

// const patternsIndexRouteListCards = getPatternsCardList(patternsFormRouteList);
interface PatternsProps {
  layoutProps: LayoutProps;
  title: string;
  type: string;
  introduction: string;
  coverImage: string;
  imageAlt: string;
}

const Overview = ({
  layoutProps,
  title,
  type,
  introduction,
  imageAlt,
  coverImage,
}: PatternsProps) => (
  <Layout {...layoutProps} newPage>
    {({themeMode}) => (
      <ThemeProvider
        theme={themeMode === 'light' ? patternsThemeLight : patternsThemeDark}
      >
        <HeadNextSeo
          title={title}
          description={introduction}
          image={{
            url: coverImage,
            alt: imageAlt,
          }}
        />
        <HeaderIndex title={type} media={Hero}>
          {introduction}
        </HeaderIndex>
      </ThemeProvider>
    )}
  </Layout>
);

export default Overview;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map(it => `/posts/patterns/${it.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params && (params.post as string);
  const source = fs.readFileSync(
    path.resolve(__dirname, `../../../../../../content/posts/${slug}.mdx`),
    'utf8',
  );
  const {data} = matter(source, {
    engines: {yaml: s => yaml.load(s, {schema: yaml.JSON_SCHEMA}) as object},
  });

  return {
    props: {
      title: data.title,
      date: data.date,
      slug: data.slug,
      type: data.type,
      coverImage: data.coverImage,
      imageAlt: data.title,
      headerIndex: data.headerIndex,
      introduction: data.introduction,
    },
  };
};
