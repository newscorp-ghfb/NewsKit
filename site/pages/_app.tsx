import * as React from 'react';
import {
  newskitLightTheme,
  ThemeProvider,
  createEventInstrumentation,
  InstrumentationProvider,
  instrumentationHandlers,
  instrumentationMiddleware,
  composeInstrumentationMiddleware,
} from 'newskit';
import App, {Container} from 'next/app';
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
  constructor(props) {
    super(props);
    this.state = {
      theme: newskitLightTheme,
    } as State;
    this.mediaQueryListener = this.mediaQueryListener.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  static async getInitialProps({Component, ctx}) {
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

  mediaQueryListener(e) {
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
      theme: themes[themeName] || newskitLightTheme,
    });
  }

  getThemeStyle = () => localStorage.getItem('docs-theme');

  setThemeStyle = theme => localStorage.setItem('docs-theme', theme);

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

    const consoleHandler = composeInstrumentationMiddleware(
      instrumentationHandlers.createConsoleHandler('Instrumentation event:'),
      instrumentationMiddleware.filterByOriginator('link'),
    );

    const tealiumHandler = composeInstrumentationMiddleware(
      instrumentationHandlers.createTealiumHandler(),
      instrumentationMiddleware.filterByOriginator('link'),
    );

    return (
      <Container>
        <InstrumentationProvider
          {...createEventInstrumentation([consoleHandler, tealiumHandler], {
            ...pageProps,
          })}
        >
          <ThemeProvider theme={theme}>
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
