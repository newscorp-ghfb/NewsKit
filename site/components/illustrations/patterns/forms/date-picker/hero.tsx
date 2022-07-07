import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const Hero: React.FC = () => {
  const filter0 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1490" height="838" fill="illustrationBackground020" />
      <g filter={`url(#${filter0})`}>
        <Path
          d="M520 587.522C520 609.877 538.123 628 560.478 628L934.904 628C957.26 628 975.383 609.877 975.383 587.522L975.383 316.316L520 316.316L520 587.522Z"
          fill="illustrationInterface010"
        />
        <Path
          d="M975.383 245.478C975.383 223.123 957.26 205 934.904 205L560.479 205C538.123 205 520 223.123 520 245.478L520 316.316L975.383 316.316L975.383 245.478Z"
          fill="illustrationInterface060"
        />
        <Path
          d="M899.486 562.223L947.555 569.812L975.383 550.585V587.522C975.383 609.877 957.261 628 934.905 628H899.486V562.223Z"
          fill="illustrationShadow010"
        />
        <Path
          d="M897.414 550.079C941.483 566.27 975.383 550.079 975.383 550.079C975.383 593.113 940.448 628 897.414 628C879.753 581.449 897.414 550.079 897.414 550.079Z"
          fill="illustrationBorder010"
        />
        <Path
          d="M638.4 409.882V370.842H706.748V550.079H662.828V409.882H638.4Z"
          fill="illustrationInterface070"
        />
        <Path
          d="M734.131 516.442C739.724 512.022 742.274 509.976 741.78 510.303C757.901 497.045 770.567 486.16 779.778 477.648C789.155 469.136 797.05 460.215 803.466 450.885C809.881 441.555 813.089 432.47 813.089 423.631C813.089 416.92 811.526 411.682 808.401 407.917C805.275 404.153 800.587 402.27 794.336 402.27C788.085 402.27 783.151 404.644 779.532 409.391C776.077 413.974 774.35 420.521 774.35 429.033H733.637C733.966 415.12 736.927 403.498 742.52 394.168C748.278 384.838 755.762 377.963 764.974 373.543C774.35 369.124 784.713 366.914 796.064 366.914C815.638 366.914 830.361 371.906 840.231 381.891C850.265 391.876 855.282 404.889 855.282 420.93C855.282 438.445 849.278 454.732 837.27 469.791C825.261 484.686 809.963 499.254 791.375 513.495H857.996V547.624H734.131V516.442Z"
          fill="illustrationInterface070"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="503.809"
          y="196.904"
          width="487.766"
          height="455.383"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8.09569" />
          <feGaussianBlur stdDeviation="8.09569" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1437_29087"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_29087"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
