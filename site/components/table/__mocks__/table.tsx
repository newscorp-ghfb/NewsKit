import React from 'react';

export const Table: React.FC = props => (
  <div>
    Table Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
