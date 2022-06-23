import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withPerformance} from 'storybook-addon-performance';

import {NewskitProvider, newskitLightTheme, styled} from '../src';

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
};

const getThemeFromContext = ({kind}) =>
  [['', newskitLightTheme]].find(([name, theme]) =>
    kind.toLowerCase().includes(name) ? theme : false,
  )[1];

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
      <NewskitProvider theme={getThemeFromContext(context)}>
        <Story />
      </NewskitProvider>
    );
  },
  withPerformance,
];
