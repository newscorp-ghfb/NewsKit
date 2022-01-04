import React from 'react';
import Head from 'next/head';

const DEFAULT_TITLE = 'Documentation';

interface PageTitleProps {
  title?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({title}) => (
  <Head>
    <title key="title">{`${title || DEFAULT_TITLE} | NewsKit`}</title>
  </Head>
);

export default PageTitle;
