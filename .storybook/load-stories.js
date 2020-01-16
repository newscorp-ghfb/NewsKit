/* global module */
import {storiesOf} from '@storybook/react';

const req = require.context('../src', true, /\.scenario\.tsx$/);

const scenarios = req.keys().map(req);

scenarios.reduce(
  (stories, scenario) => stories.add(scenario.name, scenario.component),
  storiesOf('NewsKit Light', module),
);
