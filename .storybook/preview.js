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

const unlimitedScenarios = [
  'Accordion',
  'Grid',
  'Paragraph',
  'Stack',
  'card',
  'drawer',
  'modal',
  'Image',
  'image-e2e',
  'grid-layout',
  'Popover',
  'audio-player-composable',
  'text-area',
  'useIntersection',
];

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

const Container = styled.div`
  max-width: 1024px;
  max-height: 768px;
  overflow: hidden;
`;

const Background = ({children}) => (
  <BackgroundColor>{children}</BackgroundColor>
);
const LimitSizeDecorator = ({children}) => <Container>{children}</Container>;

const NoDecorator = ({children}) => <>{children}</>;

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
        name: 'The Times Light',
        value: '#006699',
      },
      {
        name: 'The Times Dark',
        value: '#006691',
      },

      {
        name: 'NK-TNL-Business Light',
        value: 'NK-TNL-Business Light',
      },
      {
        name: 'NK-TNL-Business Dark',
        value: 'NK-TNL-Business Dark',
      },
      {
        name: 'NK-TNL-Comment Light',
        value: 'NK-TNL-Comment Light',
      },
      {
        name: 'NK-TNL-Comment Dark',
        value: 'NK-TNL-Comment Dark',
      },
      {
        name: 'NK-TNL-Culture Light',
        value: 'NK-TNL-Culture Light',
      },
      {
        name: 'NK-TNL-Culture Dark',
        value: 'NK-TNL-Culture Dark',
      },
      {
        name: 'NK-TNL-Home Light',
        value: 'NK-TNL-Home Light',
      },
      {
        name: 'NK-TNL-Home Dark',
        value: 'NK-TNL-Home Dark',
      },
      {
        name: 'NK-TNL-Money Light',
        value: 'NK-TNL-Money Light',
      },
      {
        name: 'NK-TNL-Money Dark',
        value: 'NK-TNL-Money Dark',
      },
      {
        name: 'NK-TNL-News Light',
        value: 'NK-TNL-News Light',
      },
      {
        name: 'NK-TNL-News Dark',
        value: 'NK-TNL-News Dark',
      },
      {
        name: 'NK-TNL-Puzzle Light',
        value: 'NK-TNL-Puzzle Light',
      },
      {
        name: 'NK-TNL-Puzzle Dark',
        value: 'NK-TNL-Puzzle Dark',
      },
      {
        name: 'NK-TNL-Register Light',
        value: 'NK-TNL-Register Light',
      },
      {
        name: 'NK-TNL-Register Dark',
        value: 'NK-TNL-Register Dark',
      },
      {
        name: 'NK-TNL-Sport Light',
        value: 'NK-TNL-Sport Light',
      },
      {
        name: 'NK-TNL-Sport Dark',
        value: 'NK-TNL-Sport Dark',
      },
      {
        name: 'NK-TNL-Times2 Light',
        value: 'NK-TNL-Times2 Light',
      },
      {
        name: 'NK-TNL-Times2 Dark',
        value: 'NK-TNL-Times2 Dark',
      },
      {
        name: 'NK-TNL-Travel Light',
        value: 'NK-TNL-Travel Light',
      },
      {
        name: 'NK-TNL-Travel Dark',
        value: 'NK-TNL-Travel Dark',
      },
      {
        name: 'NK-TNL-World Light',
        value: 'NK-TNL-World Light',
      },
      {
        name: 'NK-TNL-World Dark',
        value: 'NK-TNL-World Dark',
      },
      {
        name: 'NK-TNL-TimesPlus Light',
        value: 'NK-TNL-TimesPlus Light',
      },
      {
        name: 'NK-TNL-TimesPlus Dark',
        value: 'NK-TNL-TimesPlus Dark',
      },
    ],
  },
  docs: {
    // We create a custom Docs page, using of our components for the header
    page: () => {
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
};

export const decorators = [
  // Add wrapper around stories to limit their size
  (Story, context) => {
    const kind = context.kind.split('/')[1];
    const Decorator =
      unlimitedScenarios.includes(kind) ||
      context.componentId === 'welcome' ||
      context.componentId === 'theme-checker'
        ? NoDecorator
        : LimitSizeDecorator;
    return (
      <Decorator>
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </Decorator>
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
