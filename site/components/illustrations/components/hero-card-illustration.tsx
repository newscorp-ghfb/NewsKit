import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const HeroCardIllustration: React.FC = () => {
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
        <Rect
          x="550.131"
          y="171.036"
          width="390.869"
          height="497.893"
          rx="12"
          fill="illustrationPalette040"
        />
        <Path
          d="M550 181C550 174.373 555.373 169 562 169H929C935.627 169 941 174.373 941 181V379H550V181Z"
          fill="illustrationPalette060"
        />
        <Rect
          x="581.535"
          y="410.495"
          width="325.822"
          height="20"
          rx="10"
          fill="white"
        />
        <Rect
          x="581.535"
          y="453.676"
          width="213.943"
          height="20"
          rx="10"
          fill="white"
        />
        <Rect
          x="581.535"
          y="536.114"
          width="325.822"
          height="11.7767"
          rx="5.88835"
          fill="illustrationPalette010"
        />
        <Rect
          x="581.535"
          y="563.592"
          width="325.822"
          height="11.7767"
          rx="5.88835"
          fill="illustrationPalette010"
        />
        <Rect
          x="581.535"
          y="508.633"
          width="325.822"
          height="11.7767"
          rx="5.88835"
          fill="illustrationPalette010"
        />
        <Rect
          x="581.535"
          y="591.071"
          width="164.874"
          height="11.7767"
          rx="5.88835"
          fill="illustrationPalette010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="534"
          y="161"
          width="423"
          height="531.928"
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
            result="effect1_dropShadow_987_43691"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_987_43691"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default HeroCardIllustration;
