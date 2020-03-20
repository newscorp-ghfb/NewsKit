/* global module */
import {storiesOf} from '@storybook/react';

const req = require.context('../src', true, /\.scenario\.tsx$/);

const scenarios = req.keys().map(req);

scenarios.reduce(
  (stories, scenario) => {
    if(scenario.name) {
      storiesOf('NewsKit Light/' + scenario.name, module).add(scenario.name, scenario.component);
      return stories;
    }
    else if(scenario.default && scenario.default.children){
      scenario.default.children.map(child => {
        storiesOf('NewsKit Light/' + scenario.default.name, module).add(child.name, child.component);
      return stories;
      })
    }
  },
  storiesOf('NewsKit Light', module),
);

