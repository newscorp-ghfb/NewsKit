/* eslint react/no-array-index-key: 0 */

import * as React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
  Html,
} from 'next/document';
import {Consent, Tealium} from 'newskit';
import Helmet from 'react-helmet';
import {HTMLMeta} from '../components/html-meta';

interface Props {
  production: boolean;
  productionSiteEnv: boolean;
}

// Is added so relative paths work when we are on a sub dir e.g. s-3.com/ppdsc-123-foo/
const Base = () => <base href={process.env.BASE_URI ?? '/'} />;

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const {html} = await ctx.renderPage();
    return {
      html,
      // Are we in local dev mode or "built and served"?
      production: process.env.NODE_ENV === 'production',
      // Are we production "newskit.co.uk" or not?
      productionSiteEnv: process.env.SITE_ENV === 'production',
    };
  }

  render() {
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
          <Consent
            sourcePointConfigNonTCFV1={{
              accountId: 259,
              propertyHref: 'https://newskit.co.uk',
            }}
            reactHelmet={Helmet}
          />
        </Head>
        <body>
          <Tealium
            accountId="newsinternational"
            profileId="thetimes.newskit"
            env={this.props.productionSiteEnv ? 'prod' : 'dev'}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
