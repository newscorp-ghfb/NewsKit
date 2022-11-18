import React from 'react';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';
import {Circle} from '../circle';
import {Ellipse} from '../ellipse';

export const ImageIllustration: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Rect
      x="445"
      y="181"
      width="600"
      height="413.725"
      rx="36"
      fill="illustrationPalette050"
    />
    <Path
      d="M491.314 213.274C484.686 213.274 479.314 218.647 479.314 225.274V542.451C479.314 549.078 484.686 554.451 491.314 554.451H998.686C1005.31 554.451 1010.69 549.078 1010.69 542.451V225.274C1010.69 218.647 1005.31 213.274 998.686 213.274H491.314Z"
      fill="illustrationPalette040"
    />
    <Circle
      cx="574.902"
      cy="308.863"
      r="54.4118"
      fill="illustrationPalette010"
    />
    <Path
      d="M1009.19 548.253C1007.15 551.949 1003.21 554.451 998.686 554.451H491.314C487.794 554.451 484.628 552.936 482.433 550.522L578.165 428.839C583.831 421.637 594.186 420.222 601.577 425.64L682.041 484.631C689.534 490.124 700.049 488.584 705.653 481.173L826.515 321.32C833.516 312.06 847.534 312.386 854.097 321.962L1009.19 548.253Z"
      fill="illustrationPalette030"
    />
    <Ellipse
      cx="745.5"
      cy="688.5"
      rx="205.5"
      ry="9.5"
      fill="illustrationShadow010"
    />
  </Svg>
);

export default ImageIllustration;
