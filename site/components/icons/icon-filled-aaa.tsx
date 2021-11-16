import React from 'react';
import {Svg, SvgProps, toNewsKitIcon, withDefaultProps} from 'newskit';

const FilledAAA: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.47 6.47 2 12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12ZM7.36652 9H6.15364L4 15H5.35441L5.81572 13.65H7.68864L8.14994 15H10.6027L11.064 13.65H12.9369L13.3982 15H15.8509L16.3123 13.65H18.1852L18.6465 15H20L17.8631 9H16.6502L14.6246 14.6431L12.6148 9H11.4019L9.37636 14.6431L7.36652 9ZM7.29509 12.5132L6.75218 10.9394L6.20927 12.5132H7.29509ZM12.5434 12.5132L12.0004 10.9394L11.4575 12.5132H12.5434ZM16.7058 12.5132L17.2487 10.9394L17.7916 12.5132H16.7058Z"
    />
  </Svg>
);

export const IconFilledAAA = withDefaultProps(toNewsKitIcon(FilledAAA), {});

IconFilledAAA.displayName = 'IconFilledAAA';
