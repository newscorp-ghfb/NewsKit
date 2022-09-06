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
    <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
    <Rect
      x="363"
      y="230"
      width="763.08"
      height="377.347"
      rx="188.674"
      fill="illustrationInterface050"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M647.633 359.448C652.153 364.015 652.118 371.383 647.553 375.906L543.544 478.957C537.952 484.498 528.89 484.321 523.519 478.566L483.131 435.296C478.746 430.599 478.998 423.235 483.693 418.848C488.389 414.461 495.75 414.714 500.135 419.411L533.982 455.673L631.182 359.369C635.746 354.846 643.112 354.882 647.633 359.448Z"
      fill="white"
    />
    <Path
      d="M886.53 236.177C785.169 263.337 724.967 367.335 752.064 468.463C779.161 569.592 883.297 629.555 984.658 602.396C1086.02 575.236 1146.22 471.238 1119.12 370.11C1092.03 268.981 987.891 209.018 886.53 236.177Z"
      fill="illustrationInterface080"
    />
  </Svg>
);

export default Hero;
