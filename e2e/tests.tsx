/* eslint-disable no-console */
/* eslint-env browser */

import React from 'react';

interface Scenario {
  default: {
    name: string;
    children: [
      {
        name: string;
        type: string;
        component: () => JSX.Element;
      },
    ];
  };
  name: string;
  component: () => JSX.Element;
}

const req = require.context('../src', true, /\.scenario\.tsx$/);
const scenarios = req.keys().map(req) as Scenario[];

const nameCounts = scenarios.reduce((acc, s) => {
  if (!acc[s.default ? s.default.name : s.name]) {
    acc[s.default ? s.default.name : s.name] = 1;
  } else {
    acc[s.default ? s.default.name : s.name] += 1;
  }
  return acc;
}, {} as Record<string, number>);

const collisions = Object.entries(nameCounts).filter(([, count]) => count > 1);
if (collisions.length >= 1) {
  console.error(`Found colliding scenario name(s): ${collisions
    .map(([name]) => name)
    .join(', ')}. Double check your scenario file name export.
  `);
}

interface A11yFailProps {
  message: string;
}

const A11yFail = ({message}: A11yFailProps) => <div role={message} />;

export default function showTestcase() {
  // needs polyfill for IE
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');

  if (!name) {
    const message = 'No scenario name provided.';
    console.error(message);
    return <A11yFail message={message} />;
  }

  const scenario = scenarios.find(s =>
    s.default ? s.default.name === name : s.name === name,
  );

  if (!scenario) {
    const message = `No scenario found with the name: '${name}.'`;
    console.error(message);
    return <A11yFail message={message} />;
  }

  return (
    <div>
      {scenario.default
        ? scenario.default.children.map(({component}) => component())
        : scenario.component()}
    </div>
  );
}
