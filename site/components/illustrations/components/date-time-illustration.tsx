import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const DateTimeIllustration: React.FC = () => {
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
          d="M520 588C520 610.091 537.909 628 560 628L930 628C952.092 628 970 610.091 970 588L970 320L520 320L520 588Z"
          fill="illustrationInterface010"
        />
        <Path
          d="M970 250C970 227.909 952.091 210 930 210L560 210C537.909 210 520 227.909 520 250L520 320L970 320L970 250Z"
          fill="illustrationInterface060"
        />
        <Path
          d="M895 563L942.5 570.5L970 551.5V588C970 610.091 952.091 628 930 628H895V563Z"
          fill="illustrationShadow010"
        />
        <Path
          d="M892.952 551C936.5 567 970 551 970 551C970 593.526 935.478 628 892.952 628C875.5 582 892.952 551 892.952 551Z"
          fill="illustrationDisabled"
        />
        <Path
          d="M637 412.46V373.882H704.54V551H661.139V412.46H637Z"
          fill="inkContrast"
        />
        <Path
          d="M731.599 517.76C737.126 513.393 739.646 511.371 739.158 511.694C755.088 498.592 767.604 487.836 776.707 479.425C785.973 471.014 793.775 462.198 800.115 452.978C806.454 443.758 809.624 434.781 809.624 426.047C809.624 419.415 808.08 414.239 804.991 410.519C801.903 406.798 797.27 404.938 791.093 404.938C784.916 404.938 780.04 407.284 776.463 411.974C773.05 416.503 771.343 422.974 771.343 431.385H731.112C731.437 417.636 734.363 406.151 739.889 396.931C745.579 387.711 752.975 380.918 762.078 376.551C771.343 372.183 781.584 370 792.8 370C812.143 370 826.692 374.933 836.445 384.8C846.36 394.667 851.318 407.526 851.318 423.378C851.318 440.685 845.385 456.78 833.519 471.661C821.653 486.38 806.535 500.776 788.167 514.848H854V548.574H731.599V517.76Z"
          fill="inkContrast"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="504"
          y="202"
          width="482"
          height="450"
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
            result="effect1_dropShadow_1003_33951"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1003_33951"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default DateTimeIllustration;
