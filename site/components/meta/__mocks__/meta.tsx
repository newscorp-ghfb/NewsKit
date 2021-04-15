import React from 'react';

export const Meta: React.FC = props => (
  <div>
    Meta Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
