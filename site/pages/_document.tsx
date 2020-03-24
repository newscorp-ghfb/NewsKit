/* eslint react/no-array-index-key: 0 */
import * as React from 'react';
import Document, {Head, Main, NextScript, DocumentContext} from 'next/document';
import {Consent, Tealium} from 'newskit';
import Helmet from 'react-helmet';
import Meta from '../components/meta';

interface Props {
  production: boolean;
}

export default class MyDocument extends Document<Props> {
  static getInitialProps(ctx: DocumentContext) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {html} = ctx.renderPage() as any;
    return {
      html,
      production: process.env.NODE_ENV === 'production',
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
          <Meta />
          <Consent
            sourcePointConfig={{
              accountId: '259',
              siteHref: 'http://newskit.dev-news.co.uk/',
            }}
            reactHelmet={Helmet}
          />
        </Head>
        <body>
          <Tealium
            accountId="newsinternational"
            profileId="thetimes.newskit"
            env="dev"
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
