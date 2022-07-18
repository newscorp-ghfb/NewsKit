import React from 'react';
import {GetStaticPaths, GetStaticProps} from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import {fetchPostContent} from '../../../utils/cms';
import {ComponentPageTemplate} from '../../../templates/component-page-template';
import {LayoutProps} from '../../../components/layout';

interface ComponentProps {
  layoutProps: LayoutProps;
  title: string;
  type: string;
  introduction: string;
  coverImage: string;
}

const Post = ({
  layoutProps,
  title,
  introduction,
  type,
  coverImage,
}: ComponentProps) => (
  <ComponentPageTemplate
    headTags={{
      title,
      description: introduction,
    }}
    pageIntroduction={{
      type,
      name: title,
      hero: {
        illustration: coverImage,
      },
      introduction,
    }}
    layoutProps={layoutProps}
    componentDefaultsKey={title}
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
    },
  };
};
