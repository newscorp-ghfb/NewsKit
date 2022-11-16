import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const StackIllustration: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  const filter2 = getSSRId();

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
        x="390"
        y="125"
        width="710"
        height="588"
        stroke="#AEBFFF"
        stroke-width="8"
        stroke-dasharray="54 54"
      />
      <g filter={`url(#${filter0})`}>
        <Rect
          x="451"
          y="538"
          width="600"
          height="120"
          rx="20"
          fill="illustrationPalette040"
        />
      </g>
      <g filter={`url(#${filter1})`}>
        <Path
          d="M451 379C451 367.954 459.954 359 471 359H1031C1042.05 359 1051 367.954 1051 379V459C1051 470.046 1042.05 479 1031 479H471C459.954 479 451 470.046 451 459V379Z"
          fill="illustrationPalette040"
        />
      </g>
      <g filter={`url(#${filter2})`}>
        <Rect
          x="451"
          y="180"
          width="600"
          height="120"
          rx="20"
          fill="illustrationPalette040"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="419"
          y="526"
          width="664"
          height="184"
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
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="16" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_987_44564"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_987_44564"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="419"
          y="347"
          width="664"
          height="184"
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
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="16" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_987_44564"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_987_44564"
            result="shape"
          />
        </filter>
        <filter
          id={filter2}
          x="419"
          y="168"
          width="664"
          height="184"
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
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="16" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_987_44564"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_987_44564"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default StackIllustration;
