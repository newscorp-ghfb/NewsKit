import * as React from 'react';
import {Button, ThemeChecker} from 'newskit';

// @ts-ignore
const items = [...Array(1000).keys()];

// @ts-ignore
const Comp = ({toggleTheme}) => (
  <>
    <Button size="large" onClick={toggleTheme}>
      Toggle
    </Button>
    <ThemeChecker />
    {items.map(i => (
      <Button key={i}>btn {i}</Button>
    ))}
  </>
);

export default Comp;
