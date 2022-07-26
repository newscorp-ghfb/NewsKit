import React from 'react';
import {GetStaticPaths, GetStaticProps} from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import {MetaStatus} from '../../../components/meta';
import {fetchPostContent} from '../../../utils/cms';
import {ComponentPageTemplate} from '../../../templates/component-page-template';

interface ComponentPageProps {
  toggleTheme: () => void;
  themeMode: string;
  title: string;
  type: string;
  introduction: string;
  coverImage: string;
  slug: string;
  featureCard: {
    title: string;
    description: string;
    href: string;
  };
  meta: {
    status: MetaStatus;
    introduced: string;
    introducedLink: boolean;
    codeUrl: string;
    figmaUrl: string;
  };
  related: {
    introduction: string;
    related: string[];
  };
}

const Post: React.FC<ComponentPageProps> = ({
  toggleTheme,
  themeMode,
  title,
  type,
  introduction,
  coverImage,
  slug,
  featureCard,
  meta,
  related,
}) => (
  <ComponentPageTemplate
    headTags={{
      title,
      description: introduction,
    }}
    pageIntroduction={{
      type,
      name: title,
      hero: {
        src: coverImage,
        alt: `${title}-hero`,
      },
      introduction,
    }}
    layoutProps={{
      path: `/components/${slug}`,
      toggleTheme,
      themeMode,
    }}
    componentDefaultsKey={title}
    meta={{
      status: meta.status,
      introduced: meta.introduced,
      introducedLink: meta.introducedLink,
      codeUrl: meta.codeUrl,
      figmaUrl: meta.figmaUrl,
    }}
    related={{
      introduction: related.introduction,
      related: related.related,
    }}
    featureCard={{
      title: featureCard.title,
      description: featureCard.description,
      href: featureCard.href,
    }}
  />
);
export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map(it => `/posts/components/${it.slug}`);
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
      introduction: data.introduction,
      featureCard: data.featureCard,
      meta: data.meta,
      related: data.related,
    },
  };
};
