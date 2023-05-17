import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withPerformance} from 'storybook-addon-performance';
import {DocsContext} from '@storybook/addon-docs';
import {
  NewsKitProvider,
  styled,
  getColorCssFromTheme,
  newskitLightTheme,
  ThemeProvider,
} from '../src';
import {getThemeObject} from '../src/test/theme-select-object';
import {StoryDocsHeader, Stories} from '../src/test/storybook-comps';
import {
  instrumentationHandlers,
  createEventInstrumentation,
} from '../src/instrumentation';

const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  ${getColorCssFromTheme('background', 'interfaceBackground')}
`;

const StoryWrapper = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;

const Background = ({children}) => (
  <BackgroundColor>{children}</BackgroundColor>
);

const SKIP_GITHUB_CHECK = process.env.STORYBOOK_SKIP_PERCY_CHECK === 'true';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Welcome', 'Components', 'Utilities', 'Deprecated', '*'],
    },
  },
  backgrounds: {
    values: [
      {
        name: 'Newskit light',
        value: '#ffffff',
      },
      {
        name: 'Newskit dark',
        value: '#2E2E2E',
      },
      {
        name: 'The Sun',
        value: '#eb1801',
      },
      {
        name: 'The Times',
        value: '#006699',
      },
      {
        name: 'Virgin',
        value: '#e10a0a',
      },
      {
        name: 'The Wall Street Journal',
        value: '#0274B6',
      },
      {
        name: 'MarketWatch',
        value: '#367F2E',
      },
    ],
  },
  docs: {
    // We create a custom Docs page, using of our components for the header
    page: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const docsContext = React.useContext(DocsContext);
      return (
        <ThemeProvider theme={newskitLightTheme}>
          <StoryDocsHeader context={docsContext} />
          <Stories context={docsContext} includePrimary />
        </ThemeProvider>
      );
    },
  },
  viewMode: 'docs',
  percy: {
    ...(SKIP_GITHUB_CHECK ? {include: 'skip-percy-tests'} : {}),
    include: [
      // 'Components/Video Player: Overrides',
      // 'Components/Video Player: Playlist',
      // 'Components/Video Player: Default',
      // 'Components/CardComposable: Default',
      // 'Components/CardComposable: Card areas',
      // 'Components/CardComposable: Variations',
      // 'Components/CardComposable: Inset card',
      // 'Components/CardComposable: Layout',
      // 'Components/CardComposable: Span',
      // 'Components/CardComposable: Order',
      // 'Components/CardComposable: Responsive card',
      // 'Components/CardComposable: Logical props',
      // 'Components/CardComposable: Styling overrides',
      // 'Components/CardComposable: Other story',
      // 'Components/audio-player-composable: audio-player',
      // 'Components/audio-player-composable: audio-player-sub-components',
      // 'Components/audio-player-composable: audio-player-with-initial-props',
      // 'Components/audio-player-composable: audio-player-overrides',
      // 'Components/audio-player-composable: audio-player-loading-state',
    ],
  },
};

export const decorators = [
  Story => {
    return (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    );
  },
  (Story, context) => {
    const handlers = [instrumentationHandlers.createConsoleHandler()];

    return (
      <NewsKitProvider
        theme={getThemeObject(context?.globals?.backgrounds?.value)}
        instrumentation={createEventInstrumentation(handlers, {})}
      >
        <Background>
          <Story />
        </Background>
      </NewsKitProvider>
    );
  },
  withPerformance,
];
