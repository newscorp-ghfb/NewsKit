import React from 'react';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const TextAreaIllustration: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Rect
      x="326"
      y="207"
      width="839"
      height="415"
      rx="20"
      fill="illustrationPalette040"
    />
    <Rect x="373" y="249" width="9" height="101" rx="4.5" fill="white" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1141.18 608.77C1140.66 608.253 1140.66 607.415 1141.18 606.898L1149.9 598.177C1150.42 597.66 1151.25 597.66 1151.77 598.177C1152.29 598.694 1152.29 599.533 1151.77 600.05L1143.05 608.77C1142.53 609.287 1141.69 609.287 1141.18 608.77Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1127.94 608.77C1127.42 608.253 1127.42 607.415 1127.94 606.898L1149.9 584.936C1150.42 584.419 1151.25 584.419 1151.77 584.936C1152.29 585.453 1152.29 586.291 1151.77 586.808L1129.81 608.77C1129.29 609.287 1128.45 609.287 1127.94 608.77Z"
      fill="white"
    />
  </Svg>
);

export default TextAreaIllustration;
