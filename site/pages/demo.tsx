import React from 'react';

const Buttons = React.lazy(() => import('../components/buttons-comp'));

// @ts-ignore
const Demo = ({toggleTheme}) => (
  <React.Suspense>
    <h1>DEMO</h1>
    <Buttons toggleTheme={toggleTheme} />
  </React.Suspense>
);

export default Demo;
