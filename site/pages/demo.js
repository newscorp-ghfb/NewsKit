import React from 'react';
import {Button} from 'newskit';

const items = [...Array(1000).keys()];

const Demo = props => {
  console.log({props});
  return (
    <>
      <Button size="large" onClick={() => props.toggleTheme()}>
        Toggle
      </Button>
      {items.map(i => (
        <Button>btn {i}</Button>
      ))}
    </>
  );
};

export default Demo;
