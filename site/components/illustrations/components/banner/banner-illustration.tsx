import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const BannerIllustration: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Path
      d="M325.5 289C325.5 278.23 334.23 269.5 345 269.5H1145C1155.77 269.5 1164.5 278.23 1164.5 289V549C1164.5 559.77 1155.77 568.5 1145 568.5H345C334.23 568.5 325.5 559.77 325.5 549V289Z"
      fill="illustrationPalette040"
      stroke="#577FFB"
    />
    <Rect
      x="370"
      y="320"
      width="531"
      height="24"
      rx="12"
      fill="illustrationPalette010"
    />
    <Rect
      x="370"
      y="375"
      width="235"
      height="24"
      rx="12"
      fill="illustrationPalette010"
    />
    <Rect
      x="776.5"
      y="441.5"
      width="347"
      height="87"
      rx="43.5"
      fill="illustrationPalette030"
      stroke="#87A4FC"
    />
  </Svg>
);

export default BannerIllustration;
