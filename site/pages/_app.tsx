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
import {ThemeMode} from '../context';
import {newsKitLight, newsKitDark} from '../doc-theme';

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
      theme: newsKitLight,
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
      theme: themeMode === 'dark' ? newsKitDark : newsKitLight,
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
      <InstrumentationProvider
        {...createEventInstrumentation(handlers, {
          ...pageProps,
        })}
      >
        <ThemeProvider theme={theme}>
          <ThemeMode.Provider value={themeMode}>
            <Global
              styles={css`
                @font-face {
                  font-family: 'Noto Sans';
                  src: url('/static/fonts/notosans-regular-webfont.woff2')
                      format('woff2'),
                    url('/static/fonts/notosans-regular-webfont.woff')
                      format('woff');
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                }
                @font-face {
                  font-family: 'Noto Sans';
                  src: url('/static/fonts/notosans-italic-webfont.woff2')
                      format('woff2'),
                    url('/static/fonts/notosans-italic-webfont.woff')
                      format('woff');
                  font-style: italic;
                  font-weight: 400;
                  font-display: swap;
                }
                @font-face {
                  font-family: 'Noto Sans';
                  src: url('/static/fonts/notosans-medium-webfont.woff2')
                      format('woff2'),
                    url('/static/fonts/notosans-medium-webfont.woff')
                      format('woff');
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                }
                @font-face {
                  font-family: 'Noto Sans';
                  src: url('/static/fonts/notosans-bold-webfont.woff2')
                      format('woff2'),
                    url('/static/fonts/notosans-bold-webfont.woff')
                      format('woff');
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                }
              `}
            />

            <Component
              {...pageProps}
              path={path}
              toggleTheme={this.toggleTheme}
              themeMode={themeMode}
            />
          </ThemeMode.Provider>
        </ThemeProvider>
      </InstrumentationProvider>
    );
  }
}
