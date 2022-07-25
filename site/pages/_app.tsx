import * as React from 'react';
import {
  createEventInstrumentation,
  instrumentationHandlers,
  UncompiledTheme,
  NewsKitProvider,
} from 'newskit';
import App, {AppContext} from 'next/app';
import {HeadNextSeo} from '../components/head-next-seo/head-next-seo';
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

  // eslint-disable-next-line class-methods-use-this
  getThemeStyle = () => window.localStorage.getItem(STORAGE_KEY_NAME);

  // eslint-disable-next-line class-methods-use-this
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
        <HeadNextSeo
          description="NewsKit design system - components and guidelines to 
          help increase the speed of creation and innovation in digital teams."
          image={{
            url: 'social/landing.png',
            alt: 'NewsKit design system',
          }}
        />

        <NewsKitProvider
          theme={theme}
          layer={{zIndex: 1000}}
          instrumentation={createEventInstrumentation(handlers, {
            ...pageProps,
          })}
        >
          <ThemeMode.Provider value={themeMode}>
            <PageLoadInstrumentation />
            <Component
              {...pageProps}
              path={path}
              toggleTheme={this.toggleTheme}
              themeMode={themeMode}
            />
          </ThemeMode.Provider>
        </NewsKitProvider>
      </>
    );
  }
}
