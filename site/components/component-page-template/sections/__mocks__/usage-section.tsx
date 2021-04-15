import React from 'react';

export const UsageSection: React.FC = props => (
  <div>
    UsageSection Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
