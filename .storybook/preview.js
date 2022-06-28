import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withPerformance} from 'storybook-addon-performance';

import {
  ThemeProvider,
  MediaQueryProvider,
  styled,
} from '../src';

import {themeObject} from '../src/test/theme-select-object'

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
];

const Container = styled.div`
  max-width: 1024px;
  max-height: 768px;
  overflow: hidden;
`;
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
    default: 'Newskit light',
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
        value: 'sun',
      },
      {
        name: 'The Times',
        value: 'times',
      },
      {
        name: 'Virgin',
        value: 'virgin',
      }
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
      : MediaQueryProvider;

    return (
      <Decorator>
        <Story />
      </Decorator>
    );
  },
  (Story, context) => {
    return (
      <ThemeProvider theme={themeObject[context?.globals?.backgrounds?.value || '#ffffff']}>
        <Story />
      </ThemeProvider>
    );
  },
  withPerformance,
];
