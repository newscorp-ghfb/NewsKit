import React from 'react';

export const OptionsSection: React.FC = props => (
  <div>
    OptionsSection Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
