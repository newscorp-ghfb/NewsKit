/* eslint react/no-array-index-key: 0 */

import * as React from 'react';
import Document, {Head, Main, NextScript, Html} from 'next/document';
import {
  Global,
  css,
  Tealium,
  compileTheme,
  newskitLightTheme,
  getSizingCssFromTheme,
  createFontFacesForTheme,
} from 'newskit';
import Helmet from 'react-helmet';
import {HTMLMeta} from '../components/html-meta';
import {docsThemeLight, fontPaths} from 'theme/doc-theme';

// Is added so relative paths work when we are on a sub dir e.g. s-3.com/ppdsc-123-foo/
const baseHref =
  process.env.SITE_ENV && process.env.SITE_ENV === 'pr'
    ? process.env.BASE_URI
    : '/';

const Base = () => <base href={baseHref} />;

const compiledNewskitLightTheme = compileTheme(newskitLightTheme);
export default class MyDocument extends Document {
  render() {
    const isSiteEnvProduction = process.env.SITE_ENV === 'production';

    const helmet = Helmet.rewind();

    return (
      <Html lang="en">
        <Head>
          <Base />
          {helmet.script.toComponent()}
          <HTMLMeta />
        </Head>
        <body>
          <Global
            styles={css`
              ${!isSiteEnvProduction &&
              `
              p div,
              p p,
              p ul,
              a a {
                    outline: 7px solid red;
                    outline-offset: 7px;
              }`}

              *, ::after, ::before {
                box-sizing: border-box;
              }

              body {
                margin: 0;
              }

              html {
                scroll-padding-top: calc(
                  var(--heading-size) + var(--page-offset)
                );
              }

              html {
                ${getSizingCssFromTheme('--heading-size', {
                  xs: 'sizing080',
                  md: 'sizing080',
                  lg: 'sizing100',
                })({theme: compiledNewskitLightTheme})};
                ${getSizingCssFromTheme('--page-offset', {
                  xs: 'sizing080',
                  md: 'sizing090',
                  lg: 'sizing100',
                })({theme: compiledNewskitLightTheme})};
              }

              ${createFontFacesForTheme(docsThemeLight, fontPaths)}
            `}
          />
          {isSiteEnvProduction && (
            <Tealium
              accountId="newsinternational"
              profileId="thetimes.newskit"
              env={isSiteEnvProduction ? 'prod' : 'dev'}
              reactHelmet={Helmet}
            />
          )}

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
