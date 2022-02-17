import React from 'react';
import {NextSeo, NextSeoProps} from 'next-seo';

import {OpenGraphMedia} from 'next-seo/lib/types';

interface HeadNextSeoProps extends NextSeoProps {
  image: OpenGraphMedia;
}
export const HeadNextSeo: React.FC<HeadNextSeoProps> = ({
  title,
  description,
  image: {url, width = 1200, height = 600, alt},
}) => {
  const nextSeoTitle = title
    ? `${title} | NewsKit design system`
    : 'NewsKit design system';

  const baseUrl = process.env.BASE_URI || 'https://newskit.co.uk/';

  const openGraphConfig = {
    type: 'website',
    url: baseUrl,
    title: nextSeoTitle,
    description,
    images: [
      {
        url: url ? `${baseUrl}static/${url}` : `${baseUrl}static/landing.png`,
        width,
        height,
        alt,
      },
    ],
  };
  return (
    <NextSeo
      title={nextSeoTitle}
      description={description}
      openGraph={openGraphConfig}
    />
  );
};
