/* eslint react/no-array-index-key: 0 */
import * as React from 'react';
import Document, {Head, Main, NextScript, DocumentContext} from 'next/document';
import {Consent, Tealium} from 'newskit';
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
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <Meta />
          <Consent accountId="259" />
        </Head>
        <body>
          <Tealium
            account="newsinternational"
            profile="thetimes.newskit"
            env="dev"
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
