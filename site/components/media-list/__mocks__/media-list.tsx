import React from 'react';

export const MediaList: React.FC = props => (
  <div>
    MediaList Component with props:
    {JSON.stringify(props, null, 2)}
  </div>
);
