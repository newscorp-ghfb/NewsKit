import React, {useEffect, useState} from 'react';
import {NextSeo, NextSeoProps} from 'next-seo';

import {useRouter} from 'next/router';
import {OpenGraphMedia} from 'next-seo/lib/types';

export function HeadNextSeo({
  title,
  description,
  url: imageUrl,
  width = 400,
  height = 300,
  alt,
}: NextSeoProps & OpenGraphMedia) {
  const nextSeoTitle = title
    ? `${title} | NewsKit design system`
    : 'NewsKit design system';

  const router = useRouter();
  const [ogUrl, setOgUrl] = useState('');
  const host = typeof window !== 'undefined' && window.location.host;
  const baseUrl =
    host === 'localhost:8081' ? `http://${host}` : `https://${host}`;

  useEffect(() => {
    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname, baseUrl]);

  const openGraphConfig = {
    type: 'website',
    url: ogUrl,
    title: title ? `${title} | NewsKit design system` : 'NewsKit design system',
    description,
    images: [
      {
        url: imageUrl ? `${baseUrl}/static/${imageUrl}` : ``,
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
