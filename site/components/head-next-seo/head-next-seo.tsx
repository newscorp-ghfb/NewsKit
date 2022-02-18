import React from 'react';
import {NextSeo, NextSeoProps} from 'next-seo';

import {OpenGraphMedia} from 'next-seo/lib/types';

interface HeadNextSeoProps extends NextSeoProps {
  image: OpenGraphMedia;
}

const baseUrl = process.env.BASE_URI || 'https://newskit.co.uk/';

export const HeadNextSeo: React.FC<HeadNextSeoProps> = ({
  title,
  description,
  image: {
    url = `${baseUrl}static/landing.png`,
    width = 1200,
    height = 600,
    alt = 'NewsKit Design System',
  },
}) => {
  const nextSeoTitle = title
    ? `${title} | NewsKit design system`
    : 'NewsKit design system';

  const openGraphConfig = {
    type: 'website',
    url: baseUrl,
    title: nextSeoTitle,
    description,
    images: [
      {
        url: `${baseUrl}static/${url}`,
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
