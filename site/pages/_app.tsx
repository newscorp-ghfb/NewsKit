import * as React from 'react';
import {
  ThemeProvider,
  Global,
  css,
  createEventInstrumentation,
  InstrumentationProvider,
  instrumentationHandlers,
  UncompiledTheme,
} from 'newskit';
import App, {AppContext} from 'next/app';
import Head from 'next/head';
import {PageLoadInstrumentation} from '../components/page-load-instrumentation';
import {ThemeMode} from '../context';
import {docsThemeLight, docsThemeDark} from '../theme/doc-theme';

const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';
const STORAGE_KEY_NAME = 'newskit-docs-theme';

interface Props {
  Component: React.ReactNode;
  pageProps: unknown;
  path: string;
}

interface State {
  themeMode: string;
  theme: UncompiledTheme;
}

export default class MyApp extends App<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);

    this.state = {
      themeMode: 'light',
      theme: docsThemeLight,
    } as State;

    this.mediaQueryListener = this.mediaQueryListener.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }

  static async getInitialProps({Component, ctx}: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {path: ctx.asPath, pageProps};
  }

  componentDidMount() {
    const preferredTheme = this.getThemeStyle();
    if (preferredTheme) {
      this.setTheme(preferredTheme);
    } else {
      this.setTheme('light');
    }

    if (!preferredTheme && window.matchMedia) {
      const mmDark: MediaQueryList = window.matchMedia(DARK_MEDIA_QUERY);
      if (mmDark.matches) {
        this.setTheme('dark');
      }
      mmDark.addListener(this.mediaQueryListener);
    }
  }

  componentWillUnmount() {
    if (window.matchMedia) {
      const mmDark = window.matchMedia(DARK_MEDIA_QUERY);
      mmDark.removeListener(this.mediaQueryListener);
    }
  }

  mediaQueryListener(e: MediaQueryListEvent) {
    if (e && e.media === DARK_MEDIA_QUERY && e.matches) {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  getThemeStyle = () => window.localStorage.getItem(STORAGE_KEY_NAME);

  setThemeStyle = (theme: string) =>
    window.localStorage.setItem(STORAGE_KEY_NAME, theme);

  setTheme(themeMode: string) {
    const presetTheme = this.getThemeStyle();

    if (presetTheme !== themeMode) {
      this.setThemeStyle(themeMode);
    }

    if (themeMode === 'dark') {
      document.body.classList.add('darktheme');
    } else if (themeMode === 'light') {
      document.body.classList.remove('darktheme');
    }

    this.setState({
      themeMode,
      theme: themeMode === 'dark' ? docsThemeDark : docsThemeLight,
    });
  }

  toggleTheme() {
    const currentMode = (this.state as State).themeMode;
    if (currentMode === 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  render() {
    const {Component, pageProps, path} = this.props;
    const {theme, themeMode} = this.state as State;

    const handlers = [
      instrumentationHandlers.createConsoleHandler(),
      instrumentationHandlers.createTealiumHandler(),
    ];

    return (
      <>
        <Head>
          <title>NewsKit design system</title>
          <meta
            name="Description"
            content="NewsKit design system - components and guidelines to help increase the speed of creation and innovation in digital teams."
          />
        </Head>
        <InstrumentationProvider
          {...createEventInstrumentation(handlers, {
            ...pageProps,
          })}
        >
          <ThemeProvider theme={theme}>
            <ThemeMode.Provider value={themeMode}>
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
                      url('static/fonts/dmsans-regular-webfont.woff')
                        format('woff');
                    font-style: normal;
                    font-weight: 400;
                    font-display: swap;
                  }
                  @font-face {
                    font-family: 'DM Sans';
                    src: url('static/fonts/dmsans-italic-webfont.woff2')
                        format('woff2'),
                      url('static/fonts/dmsans-italic-webfont.woff')
                        format('woff');
                    font-style: italic;
                    font-weight: 400;
                    font-display: swap;
                  }
                  @font-face {
                    font-family: 'DM Sans';
                    src: url('static/fonts/dmsans-medium-webfont.woff2')
                        format('woff2'),
                      url('static/fonts/dmsans-medium-webfont.woff')
                        format('woff');
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
                      url('static/fonts/dmsans-bold-webfont.woff')
                        format('woff');
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
                      url('static/fonts/poppins-bold-webfont.woff')
                        format('woff');
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
                      url('static/fonts/poppins-italic-webfont.woff')
                        format('woff');
                    font-weight: 400;
                    font-style: italic;
                  }

                  @font-face {
                    font-family: 'Poppins';
                    src: url('static/fonts/poppins-light-webfont.woff2')
                        format('woff2'),
                      url('static/fonts/poppins-light-webfont.woff')
                        format('woff');
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
                      url('static/fonts/poppins-medium-webfont.woff')
                        format('woff');
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

              <PageLoadInstrumentation />
              <Component
                {...pageProps}
                path={path}
                toggleTheme={this.toggleTheme}
                themeMode={themeMode}
              />
            </ThemeMode.Provider>
          </ThemeProvider>
        </InstrumentationProvider>
      </>
    );
  }
}
