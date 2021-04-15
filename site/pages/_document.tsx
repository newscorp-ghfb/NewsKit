/* eslint react/no-array-index-key: 0 */
import * as React from 'react';
import Document, {Head, Main, NextScript, DocumentContext} from 'next/document';
import {Consent, Tealium} from 'newskit';
import Helmet from 'react-helmet';
import {HTMLMeta} from '../components/html-meta';

interface Props {
  production: boolean;
  productionSiteEnv: boolean;
}

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
      <html lang="en">
        <Head>
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
              // propertyHref: 'https://newskit.dev-news.co.uk', // to test stage https://documentation.sourcepoint.com/consent_mp/campaigns/viewing-a-stage-campaign
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
      </html>
    );
  }
}
