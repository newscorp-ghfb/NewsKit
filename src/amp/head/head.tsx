/* eslint-disable react/no-danger */
import React from 'react';
import {AmpScripts, AmpScriptsObject, AmpScriptsProvider} from '../scripts';

export interface HeadProps {
  title: string;
  canonical: string;
  ampScriptsObject?: AmpScriptsObject;
}

export const Head: React.FC<HeadProps> = ({
  title,
  canonical,
  ampScriptsObject,
  children,
}) => (
  <React.Fragment>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1"
    />
    <link href={canonical} rel="canonical" />
    {children}
    <script async src="https://cdn.ampproject.org/v0.js" />
    <style
      amp-boilerplate=""
      dangerouslySetInnerHTML={{
        __html: `
      body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
    `,
      }}
    />
    <noscript>
      <style
        amp-boilerplate=""
        dangerouslySetInnerHTML={{
          __html: `
      body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}
      `,
        }}
      />
    </noscript>
    <AmpScriptsProvider value={ampScriptsObject}>
      <AmpScripts />
    </AmpScriptsProvider>
  </React.Fragment>
);
