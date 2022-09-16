import React from 'react';
import {GetStaticPaths, GetStaticProps} from 'next';
import fs from 'fs';
import path from 'path';
import glob from 'glob';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import getMDXCode from '../../cms/utils/get-mdx-code';

interface ComponentPageProps {
  toggleTheme: () => void;
  themeMode: string;
  frontmatter: unknown;
  code: string;
}

const Post: React.FC<ComponentPageProps> = ({
  code,
  frontmatter,
  toggleTheme,
  themeMode,
}) => {
  const {
    title,
    type,
    introduction,
    coverImage,
    slug,
    featureCard,
    meta,
    related,
  } = frontmatter;

  return (
    <>
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
          path: `/${slug}`,
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
        mdxContent={{
          code,
        }}
      />
    </>
  );
};
export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const docsFiles = glob.sync('./site/content/posts/*.mdx');

  const paths = docsFiles.map(filename => ({
    params: {
      slug: path.basename(filename, '.mdx'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const filename = `${params.slug}.mdx`;
  const pathToSource = path.join(
    process.cwd(),
    './site',
    'content',
    'posts',
    filename,
  );

  const source = fs.readFileSync(pathToSource).toString();
  const {code, frontmatter} = await getMDXCode(
    source,
    pathToSource,
    // @ts-ignore
    params.slug,
  );

  return {
    props: {
      code,
      frontmatter,
    },
  };
};
