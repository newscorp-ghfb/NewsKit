import React from 'react';

export const RelatedComponentsSection: React.FC = props => (
  <div>
    RelatedComponentsSection Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
