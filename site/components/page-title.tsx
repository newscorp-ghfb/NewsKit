import React from 'react';
import {HeadNextSeo} from './head-next-seo';

interface PageTitleProps {
  title?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({title}) => (
  <HeadNextSeo
    title={title}
    image={{
      url: 'social/landing.png',
      alt: 'NewsKit design system',
    }}
  />
);

export default PageTitle;
