import React from 'react';
import {ExampleProps} from './types';
  
export const Example: React.FC<ExampleProps>  = () => {
  return (
    <div>Hello World!</div>
  );
}

Example.displayName = 'Example';