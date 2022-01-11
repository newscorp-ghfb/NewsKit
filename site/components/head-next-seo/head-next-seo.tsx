import React from 'react';
import {NextSeo, NextSeoProps} from 'next-seo';

export function HeadNextSeo({title, description}: NextSeoProps) {
  const nextSeoTitle = title
    ? `${title} | NewsKit design system`
    : 'NewsKit design system';

  return (
    <NextSeo
      title={nextSeoTitle}
      description={description}
      openGraph={{
        images: [{url: 'static/favicon-32x32.png'}],
      }}
    />
  );
}
