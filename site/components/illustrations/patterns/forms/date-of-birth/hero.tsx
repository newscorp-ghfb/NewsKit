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
      <Rect
        x="1090.82"
        y="214.304"
        width="7.9797"
        height="55.8579"
        rx="3.98985"
        transform="rotate(69.8083 1090.82 214.304)"
        fill="illustrationInterface060"
      />
      <Rect
        x="895"
        y="91"
        width="7.9797"
        height="55.8579"
        rx="3.98985"
        fill="illustrationInterface060"
      />
      <Rect
        x="1032.2"
        y="107.42"
        width="7.9797"
        height="76.8085"
        rx="3.98985"
        transform="rotate(37.8744 1032.2 107.42)"
        fill="illustrationInterface060"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          d="M520 588C520 610.091 537.909 628 560 628L930 628C952.091 628 970 610.091 970 588L970 320L520 320L520 588Z"
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
          d="M892.952 551C936.5 567 970 551 970 551V551C970 593.526 935.478 628 892.952 628V628C875.5 582 892.952 551 892.952 551Z"
          fill="illustrationBorder010"
        />
      </g>
      <Path
        d="M737.835 372.591C740.248 365.166 750.752 365.166 753.165 372.591L771.867 430.149C772.946 433.47 776.041 435.718 779.532 435.718H840.053C847.86 435.718 851.106 445.709 844.79 450.298L795.828 485.871C793.003 487.924 791.821 491.562 792.9 494.882L811.602 552.441C814.015 559.866 805.516 566.041 799.199 561.452L750.237 525.879C747.413 523.826 743.587 523.826 740.763 525.879L691.801 561.452C685.484 566.041 676.985 559.866 679.398 552.441L698.1 494.882C699.179 491.562 697.997 487.924 695.172 485.871L646.21 450.298C639.894 445.709 643.14 435.718 650.947 435.718H711.468C714.959 435.718 718.054 433.47 719.133 430.149L737.835 372.591Z"
        fill="illustrationInterface070"
      />
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
            result="effect1_dropShadow_1437_29097"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_29097"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
