/* eslint react/no-array-index-key: 0 */

import * as React from 'react';
import Document, {Head, Main, NextScript, Html} from 'next/document';
import {Global, css, Consent, Tealium} from 'newskit';
import Helmet from 'react-helmet';
import {HTMLMeta} from '../components/html-meta';

// Is added so relative paths work when we are on a sub dir e.g. s-3.com/ppdsc-123-foo/
const baseHref =
  process.env.SITE_ENV && process.env.SITE_ENV === 'pr'
    ? process.env.BASE_URI
    : '/';

const Base = () => <base href={baseHref} />;

export default class MyDocument extends Document {
  render() {
    const isSiteEnvProduction = process.env.SITE_ENV === 'production';

    const helmet = Helmet.rewind();
    return (
      <Html lang="en">
        <Head>
          <Base />
          <style>
            {`
            *, ::after, ::before {
              box-sizing: border-box;
            }

            body {
              margin: 0;
            }
            `}
          </style>
          {helmet.script.toComponent()}
          <HTMLMeta />
          {isSiteEnvProduction && (
            <Consent
              sourcePointConfigUnified={{
                accountId: 259,
                propertyHref: 'https://newskit.co.uk',
                gdpr: {},
              }}
              reactHelmet={Helmet}
            />
          )}
        </Head>
        <body>
          <Global
            styles={css`
              html {
                scroll-behavior: smooth;
                scroll-padding-top: 90px;
              }
              @font-face {
                font-family: 'DM Sans';
                src: url('static/fonts/dmsans-regular-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/dmsans-regular-webfont.woff') format('woff');
                font-style: normal;
                font-weight: 400;
                font-display: swap;
              }
              @font-face {
                font-family: 'DM Sans';
                src: url('static/fonts/dmsans-italic-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/dmsans-italic-webfont.woff') format('woff');
                font-style: italic;
                font-weight: 400;
                font-display: swap;
              }
              @font-face {
                font-family: 'DM Sans';
                src: url('static/fonts/dmsans-medium-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/dmsans-medium-webfont.woff') format('woff');
                font-style: normal;
                font-weight: 500;
                font-display: swap;
              }
              @font-face {
                font-family: 'DM Sans';
                src: url('static/fonts/dmsans-mediumitalic-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/dmsans-mediumitalic-webfont.woff')
                    format('woff');
                font-style: italic;
                font-weight: 500;
                font-display: swap;
              }
              @font-face {
                font-family: 'DM Sans';
                src: url('static/fonts/dmsans-bold-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/dmsans-bold-webfont.woff') format('woff');
                font-style: normal;
                font-weight: 700;
                font-display: swap;
              }
              @font-face {
                font-family: 'DM Sans';
                src: url('static/fonts/dmsans-bolditalic-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/dmsans-bolditalic-webfont.woff')
                    format('woff');
                font-style: italic;
                font-weight: 700;
                font-display: swap;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-bold-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-bold-webfont.woff') format('woff');
                font-weight: 700;
                font-style: normal;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-bolditalic-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-bolditalic-webfont.woff')
                    format('woff');
                font-weight: normal;
                font-style: italic;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-extrabold-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-extrabold-webfont.woff')
                    format('woff');
                font-weight: 800;
                font-style: normal;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-extrabolditalic-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-extrabolditalic-webfont.woff')
                    format('woff');
                font-weight: 800;
                font-style: italic;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-italic-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-italic-webfont.woff') format('woff');
                font-weight: 400;
                font-style: italic;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-light-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-light-webfont.woff') format('woff');
                font-weight: 300;
                font-style: normal;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-lightitalic-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-lightitalic-webfont.woff')
                    format('woff');
                font-weight: 300;
                font-style: italic;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-medium-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-medium-webfont.woff') format('woff');
                font-weight: 500;
                font-style: normal;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-mediumitalic-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-mediumitalic-webfont.woff')
                    format('woff');
                font-weight: 500;
                font-style: italic;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-regular-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-regular-webfont.woff')
                    format('woff');
                font-weight: 400;
                font-style: normal;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-semibold-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-semibold-webfont.woff')
                    format('woff');
                font-weight: 600;
                font-style: normal;
              }

              @font-face {
                font-family: 'Poppins';
                src: url('static/fonts/poppins-semibolditalic-webfont.woff2')
                    format('woff2'),
                  url('static/fonts/poppins-semibolditalic-webfont.woff')
                    format('woff');
                font-weight: 600;
                font-style: italic;
              }

              @font-face {
                font-family: 'DM Mono';
                src: url('static/fonts/dmmono-medium.woff2') format('woff2'),
                  url('static/fonts/dmmono-medium.woff') format('woff');
                font-style: normal;
                font-weight: 500;
                font-display: swap;
              }
            `}
          />
          {isSiteEnvProduction && (
            <Tealium
              accountId="newsinternational"
              profileId="thetimes.newskit"
              env={isSiteEnvProduction ? 'prod' : 'dev'}
            />
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
