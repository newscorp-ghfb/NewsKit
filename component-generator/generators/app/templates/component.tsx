import React from 'react';
import {<%= componentName %>Props} from './types';
  
export const <%= componentName %>: React.FC<<%= componentName %>Props>  = () => {
  return (
    <div>Hello World!</div>
  );
}

<%= componentName %>.displayName = '<%= componentName %>';
