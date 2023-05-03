import React, {ReactNode} from 'react';
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
  // TODO: fonts
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global
        styles={css`
          @font-face {
            font-family: 'TimesDigitalRegular';
            src: url('/fonts/TimesDigitalW04-Regular.woff2') format('woff2');
            font-style: normal;
          }
          @font-face {
            font-family: 'TimesModernBold';
            src: url('/fonts/TimesModern-Bold.woff2') format('woff2');
            font-style: bold;
          }
          @font-face {
            font-family: 'Roboto';
            src: url('/fonts/Roboto-Medium.woff2') format('woff2');
            font-style: normal;
          }

          @font-face {
            font-family: 'TheSunBold';
            src: url('/fonts/TheSun-Bold.ttf') format('truetype');
            font-style: normal;
          }
          @font-face {
            font-family: 'TheSunHeavyNarrow';
            src: url('/fonts/TheSun-HeavyNarrow.ttf') format('truetype');
            font-style: bold;
          }
          @font-face {
            font-family: 'TheSunMedium';
            src: url('/fonts/TheSun-Medium.ttf') format('truetype');
            font-style: normal;
          }
          @font-face {
            font-family: 'TheSunRegular';
            src: url('/fonts/TheSun-Regular.ttf') format('truetype');
            font-style: normal;
          }

          @font-face {
            font-family: 'MontserratBold';
            src: url('/fonts/Montserrat-Bold.woff2') format('woff2');
            font-style: normal;
          }
          @font-face {
            font-family: 'MontserratMedium';
            src: url('/fonts/Montserrat-Medium.woff2') format('woff2');
            font-style: bold;
          }
          @font-face {
            font-family: 'MontserratRegular';
            src: url('/fonts/Montserrat-Regular.woff2') format('woff2');
            font-style: normal;
          }
          @font-face {
            font-family: 'MontserratSemiBold';
            src: url('/fonts/Montserrat-SemiBold.woff2') format('woff2');
            font-style: normal;
          }

          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-bold-webfont.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-bolditalic-webfont.woff2') format('woff2');
            font-weight: normal;
            font-style: italic;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-extrabold-webfont.woff2') format('woff2');
            font-weight: 800;
            font-style: normal;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-extrabolditalic-webfont.woff2')
              format('woff2');
            font-weight: 800;
            font-style: italic;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-italic-webfont.woff2') format('woff2');
            font-weight: 400;
            font-style: italic;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-light-webfont.woff2') format('woff2');
            font-weight: 300;
            font-style: normal;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-lightitalic-webfont.woff2') format('woff2');
            font-weight: 300;
            font-style: italic;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-medium-webfont.woff2') format('woff2');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-mediumitalic-webfont.woff2')
              format('woff2');
            font-weight: 500;
            font-style: italic;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-regular-webfont.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-semibold-webfont.woff2') format('woff2');
            font-weight: 600;
            font-style: normal;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/poppins-semibolditalic-webfont.woff2')
              format('woff2');
            font-weight: 600;
            font-style: italic;
          }
          @font-face {
            font-family: 'Bitter';
            src: url('/fonts/bitter-medium.woff2') format('woff2');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Bitter';
            src: url('/fonts/bitter-mediumitalic.woff2') format('woff2');
            font-weight: 500;
            font-style: italic;
          }
          @font-face {
            font-family: 'Bitter';
            src: url('/fonts/bitter-regular.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Bitter';
            src: url('/fonts/bitter-semibold.woff2') format('woff2');
            font-weight: 600;
            font-style: normal;
          }
          @font-face {
            font-family: 'DM Sans';
            src: url('/fonts/dmsans-regular-webfont.woff2') format('woff2');
            font-style: normal;
            font-weight: 400;
          }
          @font-face {
            font-family: 'DM Sans';
            src: url('/fonts/dmsans-italic-webfont.woff2') format('woff2');
            font-style: italic;
            font-weight: 400;
          }
          @font-face {
            font-family: 'DM Sans';
            src: url('/fonts/dmsans-medium-webfont.woff2') format('woff2');
            font-style: normal;
            font-weight: 500;
          }
          @font-face {
            font-family: 'DM Sans';
            src: url('/fonts/dmsans-mediumitalic-webfont.woff2') format('woff2');
            font-style: italic;
            font-weight: 500;
          }
          @font-face {
            font-family: 'DM Sans';
            src: url('/fonts/dmsans-bold-webfont.woff2') format('woff2');
            font-style: normal;
            font-weight: 700;
          }
          @font-face {
            font-family: 'DM Sans';
            src: url('/fonts/dmsans-bolditalic-webfont.woff2') format('woff2');
            font-style: italic;
            font-weight: 700;
          }

          body {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <Block
          paddingBlock="space030"
          paddingInline="space030"
          stylePreset="interfaceBackground"
        >
          {children}
        </Block>
      </ThemeProvider>
    </>
  );
}
