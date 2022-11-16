import React from 'react';
import {Path} from '../path';
import {Rect} from '../rect';
import {Ellipse} from '../ellipse';
import {Svg} from '../svg';

export const DividerIllustration: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Ellipse
      cx="744.5"
      cy="649.5"
      rx="124.5"
      ry="9.5"
      fill="illustrationShadow010"
    />
    <Path
      d="M946.499 446.5C946.229 557.002 856.343 646.5 745.5 646.5C634.657 646.5 544.771 557.002 544.501 446.5H946.499Z"
      fill="illustrationPalette030"
      stroke="#87A4FC"
    />
    <Path
      d="M375 413H1115"
      stroke="#BBC3C9"
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="4 20"
    />
    <Path
      d="M544.501 379.5C544.771 268.998 634.657 179.5 745.5 179.5C856.343 179.5 946.229 268.998 946.499 379.5L544.501 379.5Z"
      fill="illustrationPalette050"
      stroke="#446BE4"
    />
  </Svg>
);
export default DividerIllustration;
