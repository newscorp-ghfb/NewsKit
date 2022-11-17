import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const Orientation: React.FC = () => {
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
          x="203"
          y="112.576"
          width="413.175"
          height="610.269"
          rx="12.6806"
          fill="illustrationInterface010"
        />
      </g>
      <Path
        d="M219 132.768H600V382.768H219V132.768Z"
        fill="interactiveNegative010"
      />
      <Path
        d="M219 402.768H600V651.768H219V402.768Z"
        fill="interactivePrimary010"
      />
      <Path
        d="M600 722.653H219V672.768H600V722.653Z"
        fill="interactivePositive010"
      />
      <g filter={`url(#${filter1})`}>
        <Rect
          x="816"
          y="112.576"
          width="413.175"
          height="610.269"
          rx="12.6806"
          fill="illustrationInterface010"
        />
      </g>
      <Path
        d="M838 134.576H1113V701.576H838V134.576Z"
        fill="interactiveNegative010"
      />
      <Path
        d="M1229.05 137.576V704.576H1135V137.576H1229.05Z"
        fill="interactivePrimary010"
      />
      <Path
        d="M1278 426C1278 453.062 1256.06 475 1229 475C1201.94 475 1180 453.062 1180 426C1180 398.938 1201.94 377 1229 377C1256.06 377 1278 398.938 1278 426Z"
        fill="interfaceBrand030"
      />
      <Path
        d="M1222 436.093L1231.44 426.632L1222 417.17L1224.91 414.264L1237.27 426.632L1224.91 439L1222 436.093Z"
        fill="inkWhiteContrast"
      />
      <Path
        d="M767 426C767 453.062 788.938 475 816 475C843.062 475 865 453.062 865 426C865 398.938 843.062 377 816 377C788.938 377 767 398.938 767 426Z"
        fill="interfaceBrand030"
      />
      <Path
        d="M823 436.093L813.559 426.632L823 417.17L820.093 414.264L807.725 426.632L820.093 439L823 436.093Z"
        fill="inkWhiteContrast"
      />
      <Path
        d="M410 64C382.938 64 361 85.938 361 113C361 140.062 382.938 162 410 162C437.062 162 459 140.062 459 113C459 85.938 437.062 64 410 64Z"
        fill="interfaceBrand030"
      />
      <Path
        d="M399.907 120L409.368 110.559L418.83 120L421.736 117.093L409.368 104.725L397 117.093L399.907 120Z"
        fill="inkWhiteContrast"
      />
      <Path
        d="M410 772C382.938 772 361 750.062 361 723C361 695.938 382.938 674 410 674C437.062 674 459 695.938 459 723C459 750.062 437.062 772 410 772Z"
        fill="interfaceBrand030"
      />
      <Path
        d="M399.907 716L409.368 725.441L418.83 716L421.736 718.907L409.368 731.275L397 718.907L399.907 716Z"
        fill="inkWhiteContrast"
      />
      <defs>
        <filter
          id={filter0}
          x="187"
          y="104.576"
          width="445.175"
          height="642.269"
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
            result="effect1_dropShadow_2657_78602"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2657_78602"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="800"
          y="104.576"
          width="445.175"
          height="642.269"
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
            result="effect1_dropShadow_2657_78602"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2657_78602"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Orientation;
