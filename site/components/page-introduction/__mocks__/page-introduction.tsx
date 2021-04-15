import React from 'react';

export const PageIntroduction: React.FC = props => (
  <div>
    PageIntroduction Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
