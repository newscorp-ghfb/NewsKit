import * as React from 'react';
import {
  newskitLightTheme,
  ThemeProvider,
  Global,
  css,
  createEventInstrumentation,
  InstrumentationProvider,
  instrumentationHandlers,
  Theme,
} from 'newskit';
import App, {Container, AppContext} from 'next/app';
import '../prism-coy.css'; // light theme code highlighting
import '../tomorrow-night.css'; // dark theme code highlighting

const themes = {
  newskitLightTheme,
};

const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';
const LIGHT_MEDIA_QUERY = '(prefers-color-scheme: light)';

interface Props {
  Component: React.ReactNode;
  pageProps: unknown;
  path: string;
}

type State = {
  theme: Theme;
};

export default class MyApp extends App<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {
      theme: newskitLightTheme,
    } as State;
    this.mediaQueryListener = this.mediaQueryListener.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  static async getInitialProps({Component, ctx}: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {path: ctx.asPath, pageProps};
  }

  componentDidMount() {
    if (window.matchMedia) {
      const mmDark = window.matchMedia(DARK_MEDIA_QUERY);
      const mmLight = window.matchMedia(LIGHT_MEDIA_QUERY);
      if (mmDark.media === DARK_MEDIA_QUERY) {
        const theme = mmDark.matches ? 'dark' : 'light';
        localStorage.setItem('docs-theme', theme);
      }
      mmDark.addListener(this.mediaQueryListener);
      mmLight.addListener(this.mediaQueryListener);
    }
    this.setTheme();
  }

  componentWillUnmount() {
    if (window.matchMedia) {
      const mmDark = window.matchMedia(DARK_MEDIA_QUERY);
      const mmLight = window.matchMedia(LIGHT_MEDIA_QUERY);
      mmDark.removeListener(this.mediaQueryListener);
      mmLight.removeListener(this.mediaQueryListener);
    }
  }

  mediaQueryListener(e: MediaQueryListEvent) {
    if (e && e.matches) {
      if (e.media === DARK_MEDIA_QUERY) {
        this.setThemeStyle('dark');
      }
      if (e.media === LIGHT_MEDIA_QUERY) {
        this.setThemeStyle('light');
      }
      this.setTheme();
    }
  }

  setTheme() {
    const {search} = window.location;
    const ls = window.localStorage;

    const config = {
      font: 'system',
      theme: 'light',
    };

    const presetFont = ls.getItem('docs-font');
    const presetTheme = ls.getItem('docs-theme');

    let fontToSet;
    let themeToSet;

    if (search.includes('font=move')) {
      fontToSet = 'move';
      ls.setItem('docs-font', fontToSet);
    }

    if (search.includes('font=system')) {
      fontToSet = 'system';
      ls.setItem('docs-font', fontToSet);
    }

    if (search.includes('theme=dark')) {
      themeToSet = 'dark';
      ls.setItem('docs-theme', themeToSet);
    }

    if (search.includes('theme=light')) {
      themeToSet = 'light';
      ls.setItem('docs-theme', themeToSet);
    }

    config.font = fontToSet || presetFont || config.font;
    config.theme = themeToSet || presetTheme || config.theme;

    let themeName = '';

    if (config.theme === 'dark') {
      themeName += 'darkTheme';
    } else if (config.theme === 'light') {
      themeName += 'newskitLightTheme';
    }

    if (config.font === 'move') {
      themeName += 'Move';
    }

    if (config.theme === 'dark') {
      document.body.classList.add('darkTheme');
    } else {
      document.body.classList.remove('darkTheme');
    }

    this.setState({
      theme: themes[themeName as 'newskitLightTheme'] || newskitLightTheme,
    });
  }

  getThemeStyle = () => localStorage.getItem('docs-theme');

  setThemeStyle = (theme: string) => localStorage.setItem('docs-theme', theme);

  toggleTheme() {
    const theme = this.getThemeStyle();

    if (!theme) {
      this.setThemeStyle('dark');
    }

    if (theme === 'dark') {
      this.setThemeStyle('light');
    } else {
      this.setThemeStyle('dark');
    }

    this.setTheme();
  }

  render() {
    const {Component, pageProps, path} = this.props;
    const {theme} = this.state as State;

    const handlers = [
      instrumentationHandlers.createConsoleHandler(),
      instrumentationHandlers.createTealiumHandler(),
    ];

    return (
      <Container>
        <InstrumentationProvider
          {...createEventInstrumentation(handlers, {
            ...pageProps,
          })}
        >
          <ThemeProvider theme={theme}>
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
            />
          </ThemeProvider>
        </InstrumentationProvider>
      </Container>
    );
  }
}
