import React from 'react';
import {Svg, SvgProps, toNewsKitIcon, withDefaultProps} from 'newskit';

const FilledNpm: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.46897 2H20.531C21.3423 2 22 2.65768 22 3.46897V20.531C22 21.3423 21.3423 22 20.531 22H3.46897C2.65768 22 2 21.3423 2 20.531V3.46897C2 2.65768 2.65768 2 3.46897 2ZM12.0337 17.975H6.26069L6.27538 6.43624L17.8068 6.45092L17.7994 17.9823H14.9129L14.9203 9.3301H12.0411L12.0337 17.975Z"
      fill="#0A0A0A"
    />
  </Svg>
);

export const IconFilledNpm = withDefaultProps(toNewsKitIcon(FilledNpm), {});

IconFilledNpm.displayName = 'IconFilledNpm';
