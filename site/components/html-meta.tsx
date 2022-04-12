import * as React from 'react';

export const HTMLMeta = (): JSX.Element => (
  <>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
      key="viewport"
    />
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon-16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/static/android-chrome-192x192.png"
    />
    <link rel="manifest" href="/static/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
    <meta name="theme-color" content="#ffffff" />
  </>
);
