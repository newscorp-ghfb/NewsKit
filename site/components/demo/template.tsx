import React from 'react';
import Head from 'next/head';
import {
  Global,
  css,
  Block,
  newskitLightTheme,
  ThemeProvider,
  createTheme,
  styled,
} from 'newskit';

const demoTheme = createTheme({
  baseTheme: newskitLightTheme,
  name: 'demo-theme',
  overrides: {
    stylePresets: {
      interfaceBackground: {
        base: {
          backgroundColor: '{{colors.interfaceBackground}}',
        },
      },
    },
  },
});

const Container = styled(Block)`
  min-height: 100vh;
`;

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global
        styles={css`
          /* ------------------------------------------------------
          NewsKit
          */
          @font-face {
            font-family: 'Bitter';
            src: url('static/fonts/bitter-regular.woff2') format('woff2');
            font-style: normal;
            font-weight: 400;
            font-display: block;
          }
          @font-face {
            font-family: 'Bitter';
            src: url('static/fonts/bitter-medium.woff2') format('woff2');
            font-style: normal;
            font-weight: 500;
            font-display: block;
          }
          @font-face {
            font-family: 'Bitter';
            src: url('static/fonts/bitter-mediumitalic.woff2') format('woff2');
            font-style: italic;
            font-weight: 500;
            font-display: block;
          }
          @font-face {
            font-family: 'Bitter';
            src: url('static/fonts/bitter-semibold.woff2') format('woff2');
            font-style: normal;
            font-weight: 600;
            font-display: block;
          }

          /*
          ------------------------------------------------------
          The Sun */
          @font-face {
            font-family: 'The Sun';
            src: url('static/fonts/private-fonts/TheSun-Regular.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 400;
            font-display: block;
          }

          @font-face {
            font-family: 'The Sun';
            src: url('static/fonts/private-fonts/TheSun-HeavyNarrow.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 700;
            font-stretch: condensed;
            font-display: block;
          }

          @font-face {
            font-family: 'The Sun';
            src: url('static/fonts/private-fonts/TheSun-Bold.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 700;
            font-display: block;
          }

          @font-face {
            font-family: 'The Sun';
            src: url('static/fonts/private-fonts/TheSun-Medium.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 500;
            font-display: block;
          }

          /*
          ------------------------------------------------------
          The Times */
          @font-face {
            font-family: 'Times Modern';
            src: url('static/fonts/private-fonts/TimesModern-Regular.woff2')
              format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Times Modern';
            src: url('static/fonts/private-fonts/TimesModern-Bold.woff2')
              format('woff2');
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
            src: url('static/fonts/private-fonts/TimesDigitalW04-Regular.woff2')
              format('woff2');
            font-weight: 400;
            font-style: normal;
          }

          @font-face {
            font-family: 'Roboto';
            src: url('static/fonts/private-fonts/Roboto-Medium.woff2')
              format('woff2');
            font-weight: 400;
            font-style: normal;
          }

          /* DJ 
          
            "fontFamily": "Roboto"
            "fontFamily": "Simplon Norm"
          */

          /* 
            -------------------------------
            MarketWatch
            {fontFamily: 'Mulish'}
            {fontFamily: 'Lato'}

            via link from Google Fonts
          */

          /*  
            -------------------------------
            WSJ
            {fontFamily: 'Escrow Condensed'}
            {fontFamily: 'Exchange'}
            {fontFamily: 'Retina'}
            {fontFamily: 'Retina Narrow'}
            {fontFamily: 'Georgia'}
            {fontFamily: 'Arial'}
          */

          @font-face {
            font-family: 'Retina';
            src: url('static/fonts/private-fonts/Retina-Book.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 400;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina';
            src: url('static/fonts/private-fonts/Retina-BookItalic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 400;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina';
            src: url('static/fonts/private-fonts/Retina-Light.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 300;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina';
            src: url('static/fonts/private-fonts/Retina-LightItalic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 300;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina';
            src: url('static/fonts/private-fonts/Retina-Medium.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 500;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina';
            src: url('static/fonts/private-fonts/Retina-MediumItalic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 500;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina Narrow';
            src: url('static/fonts/private-fonts/RetinaNarr-Light.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 300;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina Narrow';
            src: url('static/fonts/private-fonts/RetinaNarr-LightItalic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 300;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina Narrow';
            src: url('static/fonts/private-fonts/RetinaNarr-Book.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 400;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina Narrow';
            src: url('static/fonts/private-fonts/RetinaNarr-BookItalic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 400;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina Narrow';
            src: url('static/fonts/private-fonts/RetinaNarr-Medium.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 500;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina Narrow';
            src: url('static/fonts/private-fonts/RetinaNarr-MediumItalic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 500;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina Narrow';
            src: url('static/fonts/private-fonts/RetinaNarr-Bold.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 700;
            font-display: optional;
          }

          @font-face {
            font-family: 'Retina Narrow';
            src: url('static/fonts/private-fonts/RetinaNarr-BoldItalic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 700;
            font-display: optional;
          }

          @font-face {
            font-family: 'Escrow Condensed';
            src: url('static/fonts/private-fonts/Escrow+Display+Condensed+Bold.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 700;
            font-display: optional;
          }

          @font-face {
            font-family: 'Escrow Condensed';
            src: url('static/fonts/private-fonts/Escrow+Display+Condensed+Bold+Italic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 700;
            font-display: optional;
          }

          @font-face {
            font-family: 'Escrow Condensed';
            src: url('static/fonts/private-fonts/Escrow+Display+Condensed+Roman.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 400;
            font-display: optional;
          }

          @font-face {
            font-family: 'Escrow Condensed';
            src: url('static/fonts/private-fonts/Escrow+Display+Condensed+Italic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 400;
            font-display: optional;
          }

          @font-face {
            font-family: 'Exchange';
            src: url('static/fonts/private-fonts/Exchange-Book.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 400;
            font-display: optional;
          }

          @font-face {
            font-family: 'Exchange';
            src: url('static/fonts/private-fonts/Exchange-BookItalic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 400;
            font-display: optional;
          }

          @font-face {
            font-family: 'Exchange';
            src: url('static/fonts/private-fonts/Exchange-Medium.woff2')
              format('woff2');
            font-style: normal;
            font-weight: 500;
            font-display: optional;
          }

          @font-face {
            font-family: 'Exchange';
            src: url('static/fonts/private-fonts/Exchange-MediumItalic.woff2')
              format('woff2');
            font-style: italic;
            font-weight: 500;
            font-display: optional;
          }
        `}
      />
      <ThemeProvider theme={demoTheme}>
        <Container
          paddingBlock="space030"
          paddingInline="space030"
          stylePreset="interfaceBackground"
        >
          {children}
        </Container>
      </ThemeProvider>
    </>
  );
}
