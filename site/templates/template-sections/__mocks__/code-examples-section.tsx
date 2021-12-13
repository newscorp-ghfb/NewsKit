import React from 'react';

export const CodeExamplesSection: React.FC = props => (
  <div>
    CodeExamplesSection Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
