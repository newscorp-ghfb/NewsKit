/* global module */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {styled} from '../src/utils/style';

const req = require.context('../src', true, /\.scenario\.tsx$/);
const scenarios = req.keys().map(req);

const unlimitedScenarios = ['grid', 'card', 'drawer'];

const Container = styled.div`
  max-width: 1024px;
  max-height: 768px;
  overflow: hidden;
`;
const LimitSizeDecorator = (storyFn) => <Container>{ storyFn() }</Container>;
const NoDecorator = (storyFN)=>storyFN();

scenarios.reduce(
  (storybookStories, scenario) => {
    const {title: componentTitle, children: stories} = scenario.default;
    if (!stories) return;

    const decorator = unlimitedScenarios.includes(componentTitle)? NoDecorator : LimitSizeDecorator;
    stories.map(story => {
      const {storyName, storyFn, parameters} = story;

      storiesOf('NewsKit Light/' + componentTitle, module)
        .addDecorator(decorator)
        .add(storyName, storyFn, parameters);
    return storybookStories;
    });
  },
  storiesOf('NewsKit Light', module),
);