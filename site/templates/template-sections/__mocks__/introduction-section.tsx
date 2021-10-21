import React from 'react';

export const IntroductionSection: React.FC = props => (
  <div>
    IntroductionSection Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
