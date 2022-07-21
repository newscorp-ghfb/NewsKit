import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../../svg';
import {Path} from '../../../../path';
import {Rect} from '../../../../rect';

export const Select: React.FC = () => {
  const filter0 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M0 0H1490V838H0V0Z" fill="illustrationInterface020" />
      <g filter={`url(#${filter0})`}>
        <Rect
          x="381.504"
          y="309"
          width="351.958"
          height="22.3973"
          rx="11.1987"
          fill="illustrationInterface060"
        />
        <Rect
          x="379"
          y="362"
          width="733"
          height="125"
          rx="19.1977"
          fill="illustrationInterface010"
        />
        <Rect
          x="421.598"
          y="417.999"
          width="413.449"
          height="11.2759"
          rx="5.63794"
          fill="illustrationInterface060"
        />
        <Rect
          x="379"
          y="516.977"
          width="127.793"
          height="11.2759"
          rx="5.63794"
          fill="illustrationInterface060"
        />
        <Rect
          x="529.344"
          y="516.977"
          width="305.701"
          height="11.2759"
          rx="5.63794"
          fill="illustrationInterface060"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1046.62 438.578C1045.05 439.044 1043.28 438.658 1042.04 437.42L1022.5 417.874C1020.7 416.075 1020.7 413.158 1022.5 411.359C1024.3 409.56 1027.21 409.56 1029.01 411.359L1045.31 427.658L1061.62 411.349C1063.42 409.55 1066.34 409.55 1068.14 411.349C1069.94 413.148 1069.94 416.065 1068.14 417.865L1048.59 437.41C1048.02 437.98 1047.34 438.369 1046.62 438.578Z"
          fill="illustrationInterface060"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="373.989"
          y="306.494"
          width="743.023"
          height="229.275"
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
          <feOffset dy="2.50575" />
          <feGaussianBlur stdDeviation="2.50575" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1437_28872"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_28872"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Select;
