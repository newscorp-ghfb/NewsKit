import React, {useEffect, useState} from 'react';
import {NextSeo, NextSeoProps} from 'next-seo';

import {useRouter} from 'next/router';
import {OpenGraphMedia} from 'next-seo/lib/types';

interface HeadNextSeoProps extends NextSeoProps, Omit<OpenGraphMedia, 'url'> {
  imageUrl: string;
}
export function HeadNextSeo({
  title,
  description,
  imageUrl,
  width = 1200,
  height = 600,
  alt,
}: HeadNextSeoProps) {
  const nextSeoTitle = title
    ? `${title} | NewsKit design system`
    : 'NewsKit design system';

  const router = useRouter();

  const [ogUrl, setOgUrl] = useState('');

  const baseUrl = process.env.SITE_BASE_URL;

  useEffect(() => {
    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname, baseUrl]);

  const openGraphConfig = {
    type: 'website',
    url: ogUrl,
    title: nextSeoTitle,
    description,
    images: [
      {
        url: imageUrl
          ? `${baseUrl}/static/${imageUrl}`
          : `${baseUrl}/static/landing.png`,
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
}
