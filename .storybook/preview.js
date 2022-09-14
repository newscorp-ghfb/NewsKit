import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withPerformance} from 'storybook-addon-performance';
import {Stories, DocsContext} from '@storybook/addon-docs';
import {
  NewsKitProvider,
  styled,
  getColorCssFromTheme,
  newskitLightTheme,
  ThemeProvider,
} from '../src';
import {getThemeObject} from '../src/test/theme-select-object';
import {StoryDocsHeader} from '../src/test/storybook-comps';

const unlimitedScenarios = [
  'grid',
  'stack',
  'card',
  'drawer',
  'modal',
  'image',
  'image-e2e',
  'grid-layout',
  'theme-checker',
  'popover',
  'audio-player-composable',
  'text-area',
];

const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  ${getColorCssFromTheme('background', 'interfaceBackground')}
`;

const PaddingReset = styled.div`
  position: relative;
  padding: 0;
  padding-left: 8px;
  padding-right: 8px;
`;

const Container = styled.div`
  max-width: 1024px;
  max-height: 768px;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
`;
const Background = ({children}) => (
  <BackgroundColor>
    <PaddingReset>{children}</PaddingReset>
  </BackgroundColor>
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
    ],
  },
  docs: {
    // We create a custom Docs page, using of our components for the header
    page: () => {
      const docsContext = React.useContext(DocsContext);
      return (
        <ThemeProvider theme={newskitLightTheme}>
          <StoryDocsHeader context={docsContext} />
          <Stories includePrimary />
        </ThemeProvider>
      );
    },
  },
  // TODO_PERCY_POC
  percy: {
    // include a few problematic tests (each will 8x - 4x browsers and 2x resolutions)
    include: [
      // complicated use of waits
      'audio-player-composable: audio-player-with-initial-props',
      // doesn't work on Applitools
      'accordion: accordion-group-controlled',
      // flaky on Applitools
      'tabs: tabs-outline-overrides',
    ].map(name => `^NewsKit Light/${name}$`),
  },
};

export const decorators = [
  // Add wrapper around stories to limit their size
  (Story, context) => {
    const kind = context.kind.split('/')[1];
    const Decorator = unlimitedScenarios.includes(kind)
      ? NoDecorator
      : LimitSizeDecorator;
    return (
      <Decorator>
        <Story />
      </Decorator>
    );
  },
  (Story, context) => {
    return (
      <NewsKitProvider
        theme={getThemeObject(context?.globals?.backgrounds?.value)}
      >
        <Background>
          <Story />
        </Background>
      </NewsKitProvider>
    );
  },
  withPerformance,
];
