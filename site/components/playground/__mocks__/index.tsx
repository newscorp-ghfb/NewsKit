import React from 'react';

export const Playground: React.FC = props => (
  <div>
    Playground Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
