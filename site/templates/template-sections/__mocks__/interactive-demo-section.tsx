import React from 'react';

export const InteractiveDemoSection: React.FC = props => (
  <div>
    InteractiveDemoSection Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
