import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../svg';

import {Rect} from '../rect';
import {Circle} from '../circle';

export const BylineIllustration: React.FC = () => {
  const mask0 = getSSRId();

  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1344" height="759" fill="illustrationBackground020" />
      <Rect
        x="555.656"
        y="385"
        width="409"
        height="27"
        rx="13.5"
        fill="blue040"
      />
      <Rect
        x="555.656"
        y="316"
        width="507"
        height="27"
        rx="13.5"
        fill="blue040"
      />
      <Circle cx="394" cy="364" r="113" fill="illustrationPalette040" />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="281"
        y="251"
        width="226"
        height="226"
      >
        <Circle cx="394" cy="364" r="113" fill="illustrationPalette040" />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Circle cx="394" cy="336.926" r="41.1979" fill="blue020" />
        <Circle cx="394" cy="476.999" r="85.9271" fill="blue020" />
      </g>
    </Svg>
  );
};
export default BylineIllustration;
