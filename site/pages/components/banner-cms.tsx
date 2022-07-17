import React from 'react';
import {GetStaticProps} from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {LayoutProps} from '../../components/layout';

interface ComponentProps {
  layoutProps: LayoutProps;
  title: string;
  intro: {
    type: string;
    name: string;
    introduction: string;
    coverImage: string;
  };
}

const BannerComponent = ({layoutProps, title, intro}: ComponentProps) => (
  <ComponentPageTemplate
    headTags={{
      title,
      description: 'introduction',
    }}
    pageIntroduction={{
      type: intro.type,
      name: intro.name,
      hero: {
        illustration: intro.coverImage,
      },
      introduction: intro.introduction,
    }}
    layoutProps={layoutProps}
    componentDefaultsKey={title}
  />
);
export default BannerComponent;

export const getStaticProps: GetStaticProps = async () => {
  const source = fs.readFileSync(
    path.resolve(__dirname, '../../../../content/component.mdx'),
    'utf8',
  );
  const {data} = matter(source, {
    engines: {yaml: s => yaml.load(s, {schema: yaml.JSON_SCHEMA}) as object},
  });

  return {
    props: {
      title: data.title,
      intro: data.intro,
    },
  };
};
