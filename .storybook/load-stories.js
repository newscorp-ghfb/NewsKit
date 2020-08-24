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

const unlimitedScenarios = ['grid', 'card'];

scenarios.reduce(
  (stories, scenario) => {
    if(unlimitedScenarios.includes(scenario.name) ||  scenario.default && unlimitedScenarios.includes(scenario.default.name)) {
      const storyName = scenario.name || scenario.default.name;
      const storyComponents = [scenario.component][0] ? [scenario.component] : scenario.default && scenario.default.children;

      storyComponents.map(child => {
        if(child.parameters && child.parameters.disable) {
          return ;
        }

        storiesOf('NewsKit Light/' + storyName, module)
        .addDecorator(withViewport('responsive'))
        .add(child.name || storyName, child.component? child.component : child,  child.parameters);
      return stories;
      })
    }
    else if(scenario.name) {
      storiesOf('NewsKit Light/' + scenario.name, module)
      .addDecorator(LimitSizeDecorator)
      .add(scenario.name, scenario.component);
      return stories;
    }
    else if(scenario.default && scenario.default.children){
      scenario.default.children.map(child => {
        storiesOf('NewsKit Light/' + scenario.default.name, module)
        .addDecorator(LimitSizeDecorator)
        .add(child.name, child.component);
      return stories;
      })
    }
  },
  storiesOf('NewsKit Light', module),
);

