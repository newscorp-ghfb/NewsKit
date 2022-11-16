import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const ScrollBarVisibility: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();

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
        <Rect
          x="224"
          y="114"
          width="413.175"
          height="610.269"
          rx="12.6806"
          fill="illustrationInterface010"
        />
      </g>
      <Path
        d="M240 134.192H621V384.192H240V134.192Z"
        fill="interactiveNegative010"
      />
      <Path
        d="M240 404.192H621V653.192H240V404.192Z"
        fill="interactivePrimary010"
      />
      <Path
        d="M621 724.078H240V674.192H621V724.078Z"
        fill="interactivePositive010"
      />
      <g filter={`url(#${filter1})`}>
        <Rect
          x="853"
          y="114"
          width="413.175"
          height="610.269"
          rx="12.6806"
          fill="illustrationInterface010"
        />
      </g>
      <Path d="M875 136H1150V734H875V136Z" fill="interactiveNegative010" />
      <Path
        d="M1266.05 139V711.405C1266.05 717.927 1261.12 723.298 1254.78 724H1172V139H1266.05Z"
        fill="interactivePrimary010"
      />
      <Path
        d="M875 718C875 714.686 877.686 712 881 712H1239C1242.31 712 1245 714.686 1245 718V718C1245 721.314 1242.31 724 1239 724H881C877.686 724 875 721.314 875 718V718Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M946 718C946 714.686 948.686 712 952 712H1168C1171.31 712 1174 714.686 1174 718V718C1174 721.314 1171.31 724 1168 724H952C948.686 724 946 721.314 946 718V718Z"
        fill="illustrationPalette050"
      />
      <Path
        d="M631 615C627.686 615 625 612.147 625 608.627V228.373C625 224.853 627.686 222 631 222V222C634.314 222 637 224.853 637 228.373V608.627C637 612.147 634.314 615 631 615V615Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M631 532C627.686 532 625 529.314 625 526V313.5C625 310.186 627.686 307.5 631 307.5C634.314 307.5 637 310.186 637 313.5V526C637 529.314 634.314 532 631 532Z"
        fill="illustrationPalette050"
      />
      <defs>
        <filter
          id={filter0}
          x="208"
          y="106"
          width="445.175"
          height="642.27"
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
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2657_78649"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2657_78649"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="837"
          y="106"
          width="445.175"
          height="642.27"
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
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2657_78649"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2657_78649"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default ScrollBarVisibility;
