import React from 'react';
import {HeadNextSeo} from './head-next-seo';

interface PageTitleProps {
  title?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({title}) => (
  <HeadNextSeo title={title} />
);

export default PageTitle;
