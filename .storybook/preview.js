import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withPerformance} from 'storybook-addon-performance';

import {
  ThemeProvider,
  MediaQueryProvider,
  styled,
  getColorCssFromTheme,
} from '../src';

import {getThemeObject} from '../src/test/theme-select-object';

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
`;
const Background = ({children}) => (
  <BackgroundColor>
    <PaddingReset>{children}</PaddingReset>
  </BackgroundColor>
);
const LimitSizeDecorator = ({children}) => <Container>{children}</Container>;
const MediaQueryProviderDecorator = ({children}) => (
  <MediaQueryProvider>{children}</MediaQueryProvider>
);
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
  // Disabled MediaQueryProvider for some stories,
  // this needs to placed before theme Decorator so that the order matters
  (Story, context) => {
    const {parameters} = context;
    const shouldDisableMQDecorator =
      parameters && parameters.disableMediaQueryDecorator;

    const Decorator = shouldDisableMQDecorator
      ? NoDecorator
      : MediaQueryProviderDecorator;

    return (
      <Decorator>
        <Story />
      </Decorator>
    );
  },
  (Story, context) => {
    return (
      <ThemeProvider
        theme={getThemeObject(context?.globals?.backgrounds?.value)}
      >
        <Background>
          <Story />
        </Background>
      </ThemeProvider>
    );
  },
  withPerformance,
];
