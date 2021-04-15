import React from 'react';

export const FeatureCard: React.FC = props => (
  <div>
    FeatureCard Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
