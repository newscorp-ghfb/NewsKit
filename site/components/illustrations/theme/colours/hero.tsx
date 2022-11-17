import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Hero: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Path
      d="M895 634C776.259 634 680 537.965 680 419.5C680 301.035 776.259 205 895 205C1013.74 205 1110 301.035 1110 419.5C1110 537.965 1013.74 634 895 634Z"
      fill="illustrationPalette030"
    />
    <Path
      d="M596 634C477.259 634 381 537.965 381 419.5C381 301.035 477.259 205 596 205C714.741 205 811 301.035 811 419.5C811 537.965 714.741 634 596 634Z"
      fill="illustrationPalette050"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M745.5 265.344C785.89 304.341 811 358.995 811 419.5C811 480.005 785.89 534.659 745.5 573.655C705.11 534.659 680 480.005 680 419.5C680 358.995 705.11 304.341 745.5 265.344Z"
      fill="illustrationInterface100"
    />
  </Svg>
);

export default Hero;
