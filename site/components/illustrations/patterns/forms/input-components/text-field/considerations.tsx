import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../../svg';
import {Path} from '../../../../path';
import {Rect} from '../../../../rect';

export const Considerations: React.FC = () => {
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
          x="387.504"
          y="309"
          width="351.552"
          height="22.3715"
          rx="11.1857"
          fill="illustrationInterface060"
        />
        <Rect
          x="385"
          y="362"
          width="728"
          height="124"
          rx="19.1756"
          fill="illustrationInterface010"
        />
        <Rect
          x="427.012"
          y="417.732"
          width="199.745"
          height="11.1857"
          rx="5.59287"
          fill="illustrationInterface060"
        />
        <Rect
          x="385"
          y="516.739"
          width="127.646"
          height="11.2629"
          rx="5.63143"
          fill="illustrationInterface060"
        />
        <Rect
          x="640.715"
          y="417.732"
          width="199.745"
          height="11.1857"
          rx="5.59287"
          fill="illustrationInterface060"
        />
        <Rect
          x="535.172"
          y="516.739"
          width="305.349"
          height="11.2629"
          rx="5.63143"
          fill="illustrationInterface060"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="379.994"
          y="306.497"
          width="738.011"
          height="229.013"
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
          <feOffset dy="2.50286" />
          <feGaussianBlur stdDeviation="2.50286" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1437_28944"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_28944"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Considerations;
