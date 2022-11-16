import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const ScrollStepDistance: React.FC = () => {
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
        d="M240 64.1914H621V314.191H240V64.1914Z"
        fill="interactiveNegative010"
      />
      <Path
        d="M240 334.191H621V583.191H240V334.191Z"
        fill="interactivePrimary010"
      />
      <Path
        d="M621 724.077H240V604.191H621V724.077Z"
        fill="interactivePositive010"
      />
      <g filter={`url(#${filter1})`}>
        <Rect
          x="852"
          y="114"
          width="413.175"
          height="610.269"
          rx="12.6806"
          fill="illustrationInterface010"
        />
      </g>
      <Path
        d="M1249 114.191V167.191H868V114.191H1249Z"
        fill="interactiveNegative010"
      />
      <Path
        d="M868 187.191H1249V436.191H868V187.191Z"
        fill="interactivePrimary010"
      />
      <Path
        d="M868 457.191H1249V706.191H868V457.191Z"
        fill="interactivePositive010"
      />
      <Path
        d="M1259 615C1255.69 615 1253 612.147 1253 608.627V228.373C1253 224.853 1255.69 222 1259 222V222C1262.31 222 1265 224.853 1265 228.373V608.627C1265 612.147 1262.31 615 1259 615V615Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M1259 615C1255.69 615 1253 612.314 1253 609V393C1253 389.686 1255.69 387 1259 387V387C1262.31 387 1265 389.686 1265 393V609C1265 612.314 1262.31 615 1259 615V615Z"
        fill="illustrationPalette050"
      />
      <Path
        d="M631 615C627.686 615 625 612.147 625 608.627V228.373C625 224.853 627.686 222 631 222V222C634.314 222 637 224.853 637 228.373V608.627C637 612.147 634.314 615 631 615V615Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M631 423C627.686 423 625 420.314 625 417V326.5C625 323.186 627.686 320.5 631 320.5C634.314 320.5 637 323.186 637 326.5V417C637 420.314 634.314 423 631 423Z"
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
            result="effect1_dropShadow_2657_78670"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2657_78670"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="836"
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
            result="effect1_dropShadow_2657_78670"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2657_78670"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default ScrollStepDistance;
