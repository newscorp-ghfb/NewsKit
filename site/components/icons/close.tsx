import * as React from 'react';
import {Svg} from 'newskit';

const CloseIcon: React.FC = () => (
  <Svg $size="iconSize010" viewBox="0 0 14 14" title="close icon">
    <g fill="none" fillRule="evenodd" transform="translate(-5 -5)">
      <polygon
        points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"
        fill="#333"
      />
    </g>
  </Svg>
);

export default CloseIcon;
