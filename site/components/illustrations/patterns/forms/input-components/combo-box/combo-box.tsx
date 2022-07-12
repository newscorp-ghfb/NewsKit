import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../../svg';
import {Path} from '../../../../path';
import {Rect} from '../../../../rect';

export const ComboBox: React.FC = () => {
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
          x="380"
          y="216"
          width="732"
          height="469"
          rx="20"
          fill="illustrationInterface010"
        />
        <Rect
          x="380"
          y="421"
          width="733"
          height="88"
          fill="illustrationBackground020"
        />
        <Rect
          x="379.508"
          y="153"
          width="351.958"
          height="22.3973"
          rx="11.1987"
          fill="illustrationInterface060"
        />
        <Path
          d="M380 225.198C380 214.595 388.595 206 399.198 206H1093.8C1104.4 206 1113 214.595 1113 225.198V331H380V225.198Z"
          fill="illustrationInterface060"
        />
        <Rect
          x="433.602"
          y="262"
          width="413.449"
          height="11.2759"
          rx="5.63794"
          fill="illustrationInterface010"
        />
        <Rect
          x="424"
          y="373"
          width="234"
          height="11"
          rx="5.5"
          fill="illustrationInterface060"
        />
        <Rect
          x="424"
          y="459"
          width="234"
          height="11"
          rx="5.5"
          fill="illustrationInterface060"
        />
        <Rect
          x="424"
          y="548"
          width="234"
          height="11"
          rx="5.5"
          fill="illustrationInterface060"
        />
        <Rect
          x="424"
          y="636"
          width="234"
          height="11"
          rx="5.5"
          fill="illustrationInterface060"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1047.62 282.578C1046.05 283.044 1044.29 282.658 1043.05 281.42L1023.5 261.874C1021.7 260.075 1021.7 257.158 1023.5 255.359C1025.3 253.56 1028.22 253.56 1030.02 255.359L1046.32 271.658L1062.63 255.349C1064.42 253.55 1067.34 253.55 1069.14 255.349C1070.94 257.148 1070.94 260.065 1069.14 261.865L1049.59 281.41C1049.03 281.98 1048.34 282.369 1047.62 282.578Z"
          fill="illustrationInterface010"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1061.02 450.683C1061.93 449.772 1063.41 449.772 1064.32 450.683C1065.23 451.595 1065.23 453.072 1064.32 453.983L1038.65 479.65C1037.74 480.561 1036.26 480.561 1035.35 479.65L1023.68 467.983C1022.77 467.072 1022.77 465.595 1023.68 464.683C1024.59 463.772 1026.07 463.772 1026.98 464.683L1037 474.7L1061.02 450.683Z"
          fill="illustrationInterface060"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="374.496"
          y="150.494"
          width="743.515"
          height="542.023"
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
            result="effect1_dropShadow_1437_28927"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_28927"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default ComboBox;
