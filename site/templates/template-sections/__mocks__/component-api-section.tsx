import React from 'react';

export const ComponentAPISection: React.FC = props => (
  <div>
    ComponentAPISection Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
