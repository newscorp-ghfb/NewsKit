import React from 'react';
import Head from 'next/head';
import {createTheme, ThemeProvider, Global, css, Block} from 'newskit';

const theme = createTheme({
  overrides: {},
});

export default function Template({
  title = 'NewsKit Demo',
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global
        styles={css`
          /* The Sun */
          @font-face {
            font-family: 'The Sun';
            src: url('static/fonts/TheSun-Regular.woff2') format('woff2');
            font-style: normal;
            font-weight: 400;
            font-display: block;
          }

          @font-face {
            font-family: 'The Sun';
            src: url('static/fonts/TheSun-HeavyNarrow.woff2') format('woff2');
            font-style: normal;
            font-weight: 700;
            font-stretch: condensed;
            font-display: block;
          }

          @font-face {
            font-family: 'The Sun';
            src: url('static/fonts/TheSun-Bold.woff2') format('woff2');
            font-style: normal;
            font-weight: 700;
            font-display: block;
          }

          @font-face {
            font-family: 'The Sun';
            src: url('static/fonts/TheSun-Medium.woff2') format('woff2');
            font-style: normal;
            font-weight: 500;
            font-display: block;
          }

          /* The Times */
          @font-face {
            font-family: 'Times Modern';
            src: url('static/fonts/TimesModern-Regular.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Times Modern';
            src: url('static/fonts/TimesModern-Bold.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
          }
          @font-face {
            font-family: 'Times Modern';
            src: url('static/fonts/TimesModern-ExtraBold.woff2') format('woff2');
            font-weight: 800;
            font-style: normal;
          }

          @font-face {
            font-family: 'Times Digital W04 Regular';
            src: url('static/fonts/TimesDigitalW04-Regular.woff2')
              format('woff2');
            font-weight: 400;
            font-style: normal;
          }

          @font-face {
            font-family: 'Roboto';
            src: url('static/fonts/Roboto-Medium.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }

          /* DJ 
            "fontFamily010": {
              "fontFamily": "Roboto"
            },
            "fontFamily020": {
              "fontFamily": "Simplon Norm"
            }
          */
        `}
      />
      <ThemeProvider theme={theme}>
        <Block paddingBlock="space030" paddingInline="space030">
          {children}
        </Block>
      </ThemeProvider>
    </>
  );
}
