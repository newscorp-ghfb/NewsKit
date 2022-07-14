import React from 'react';
import {staticRequest} from 'tinacms';
import {useTina} from 'tinacms/dist/edit-state';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {LayoutProps} from '../../components/layout';

const query = `query component($relativePath: String!) {
  component(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    pageIntro {
      __typename
      type
      name
      coverImage
      introduction
    }
  }
}
`;

interface ComponentProps {
  layoutProps: LayoutProps;
  variables: object;
  data: any;
}

const BannerComponent = ({layoutProps, ...props}: ComponentProps) => {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const data = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });

  const {type, name, coverImage, introduction} = data.data.component.pageIntro;

  return (
    <ComponentPageTemplate
      headTags={{
        title: name,
        description: introduction,
      }}
      pageIntroduction={{
        type,
        name,
        hero: {
          illustration: coverImage,
        },
        introduction,
      }}
      layoutProps={layoutProps}
      componentDefaultsKey={name}
    />
  );
};
export default BannerComponent;

export const getStaticProps = async (ctx: any) => {
  const variables = {
    relativePath: 'banner.mdx',
  };
  let data = {} as any;
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch (error) {
    console.log(error);
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      variables,
    },
  };
};
