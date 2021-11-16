import React from 'react';
import {Svg, SvgProps, toNewsKitIcon, withDefaultProps} from 'newskit';

const FilledAA: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.47 6.47 2 12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12ZM8.7732 8.7002L6.57422 14.8265H8.07627L8.53757 13.4765H10.3074L10.7687 14.8265H13.3245L13.7858 13.4765H15.5557L16.017 14.8265H17.5179L15.336 8.7002H14.0215L12.0469 14.2012L10.0877 8.7002H8.7732ZM9.87045 12.2134H8.97455L9.4225 10.9149L9.87045 12.2134ZM14.2228 12.2134L14.6708 10.9149L15.1187 12.2134H14.2228Z"
    />
  </Svg>
);

export const IconFilledAA = withDefaultProps(toNewsKitIcon(FilledAA), {});

IconFilledAA.displayName = 'IconFilledAA';
