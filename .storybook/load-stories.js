/* global module */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withViewport} from '@storybook/addon-viewport';
import {styled} from '../src/utils/style';
const req = require.context('../src', true, /\.scenario\.tsx$/);
const scenarios = req.keys().map(req);
const Container = styled.div`
  max-width: 1024px;
  max-height: 768px;
  overflow: hidden;
`;
const LimitSizeDecorator = (storyFn) => <Container>{ storyFn() }</Container>;
const unlimitedScenarios = ['grid', 'card', 'drawer'];
scenarios.reduce(
  (storybookStories, scenario) => {
    const {name: categoryName, children: stories} = scenario.default;
    if (!stories) return;
    const decorator = unlimitedScenarios.includes(categoryName) ? 
      withViewport('responsive') : 
      LimitSizeDecorator;
    stories.map(child => {
      if(child.parameters && child.parameters.disable) {
        return ;
      }
      storiesOf('NewsKit Light/' + categoryName, module)
        .addDecorator(decorator)
        .add(child.name, child.component, child.parameters);
    return storybookStories;
    });
  },
  storiesOf('NewsKit Light', module),
);