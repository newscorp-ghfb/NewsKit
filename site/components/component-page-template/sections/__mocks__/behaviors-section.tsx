import React from 'react';

export const BehaviorsSection: React.FC = props => (
  <div>
    BehaviorsSection Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
