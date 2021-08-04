/* global module */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {styled} from '../src/utils/style';

const req = require.context('../src', true, /\.scenario\.tsx$/);
const scenarios = req.keys().map(req);
import {MediaQueryProvider} from '../src/utils/hooks';

const unlimitedScenarios = [
  'grid',
  'card',
  'drawer',
  'modal',
  'image',
  'image-e2e',
];

const Container = styled.div`
  max-width: 1024px;
  max-height: 768px;
  overflow: hidden;
`;
const LimitSizeDecorator = storyFn => <Container>{storyFn()}</Container>;
const MediaQueryDecorator = storyFn => (
  <MediaQueryProvider>{storyFn()}</MediaQueryProvider>
);
const NoDecorator = storyFN => storyFN();

scenarios.reduce((storybookStories, scenario) => {
  const {
    title: componentTitle,
    children: stories,
    parameters,
  } = scenario.default;
  if (!stories) return;

  const decorator = unlimitedScenarios.includes(componentTitle)
    ? NoDecorator
    : LimitSizeDecorator;
  stories.map(story => {
    const {storyName, storyFn, parameters} = story;
    const shouldDisableMQDecorator =
      parameters && parameters.disableMediaQueryDecorator;

    storiesOf('NewsKit Light/' + componentTitle, module)
      .addDecorator(
        shouldDisableMQDecorator ? NoDecorator : MediaQueryDecorator,
      )
      .addDecorator(decorator)
      .add(storyName, storyFn, parameters);
    return storybookStories;
  });
}, storiesOf('NewsKit Light', module));
