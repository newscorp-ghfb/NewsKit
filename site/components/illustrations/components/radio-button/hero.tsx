import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';

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
      <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M520.29 419C520.29 543.104 620.896 643.71 745 643.71C869.104 643.71 969.71 543.104 969.71 419C969.71 294.896 869.104 194.29 745 194.29C620.896 194.29 520.29 294.896 520.29 419ZM745 161C602.511 161 487 276.511 487 419C487 561.489 602.511 677 745 677C887.489 677 1003 561.489 1003 419C1003 276.511 887.489 161 745 161Z"
        fill="illustrationPalette040"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          d="M745.002 277.742C666.987 277.742 603.744 340.986 603.744 419C603.744 497.015 666.987 560.258 745.002 560.258C823.017 560.258 886.26 497.015 886.26 419C886.26 340.986 823.017 277.742 745.002 277.742Z"
          fill="illustrationPalette050"
        />
        <Path
          d="M608.081 384.131C605.249 395.284 603.744 406.967 603.744 419.001C603.744 483.221 646.6 537.432 705.273 554.595C697.959 543.265 692.729 529.451 686.958 514.209C676.066 485.439 663.248 451.584 630.858 419.755C620.276 409.355 612.843 397.256 608.081 384.131Z"
          fill="illustrationPalette060"
        />
        <Path
          d="M718.237 280.274C726.903 278.612 735.851 277.742 745.002 277.742C823.017 277.742 886.26 340.986 886.26 419C886.26 448.485 877.227 475.859 861.777 498.507C827.457 497.415 797.124 488.749 796.112 488.385C775.609 480.99 768.221 456.512 760.497 430.922C756.083 416.296 751.559 401.308 744.415 388.937C723.307 352.389 706.771 320.855 717.032 284.07C717.389 282.792 717.791 281.527 718.237 280.274Z"
          fill="illustrationPalette040"
        />
        <Path
          d="M809.008 293.041C848.933 313.37 877.906 352.123 884.725 398.1C868.973 396.618 856.464 393.038 855.974 392.861C844.208 388.618 839.968 374.571 835.536 359.886C833.002 351.493 830.406 342.891 826.306 335.792C817.641 320.788 810.318 307.257 809.008 293.041Z"
          fill="illustrationPalette030"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="594.984"
          y="273.362"
          width="300.036"
          height="300.036"
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
          <feOffset dy="4.38009" />
          <feGaussianBlur stdDeviation="4.38009" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2551_83428"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2551_83428"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
