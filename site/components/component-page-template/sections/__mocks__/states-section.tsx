import React from 'react';

export const StatesSection: React.FC = props => (
  <div>
    StatesSection Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
