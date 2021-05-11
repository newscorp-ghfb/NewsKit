import React from 'react';
import {getSSRId} from 'newskit';
import {Path} from '../path';
import {Rect} from '../rect';
import {Circle} from '../circle';
import {Ellipse} from '../ellipse';
import {Svg} from '../svg';

export const ImageIllustration: React.FC = () => {
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
        x="372"
        y="149"
        width="600"
        height="413.725"
        rx="36"
        fill="illustrationPalette050"
      />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="406"
        y="181"
        width="532"
        height="342"
      >
        <Rect
          x="406.313"
          y="181.274"
          width="531.373"
          height="341.176"
          rx="12"
          fill="blue050"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Rect
          x="406.313"
          y="181.274"
          width="531.373"
          height="341.176"
          rx="12"
          fill="illustrationPalette040"
        />
        <Circle
          cx="501.902"
          cy="276.863"
          r="54.4118"
          fill="illustrationPalette010"
        />
        <Path
          d="M505.164 396.839L406.389 522.391C397.615 533.543 405.559 549.902 419.75 549.902H926.993C940.67 549.902 948.748 534.573 941.016 523.291L781.097 289.962C774.534 280.386 760.516 280.06 753.514 289.32L632.652 449.173C627.049 456.584 616.534 458.124 609.041 452.631L528.576 393.64C521.186 388.222 510.83 389.637 505.164 396.839Z"
          fill="illustrationPalette030"
        />
      </g>
      <Ellipse
        cx="672.5"
        cy="656.5"
        rx="205.5"
        ry="9.5"
        fill="illustrationShadow010"
      />
    </Svg>
  );
};
export default ImageIllustration;
