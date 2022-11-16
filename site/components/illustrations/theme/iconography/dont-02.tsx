import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Dont02: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  const filter2 = getSSRId();
  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1344" height="759" fill="illustrationBackground020" />
      <g filter={`url(#${filter0})`}>
        <Rect
          x="241"
          y="265"
          width="230"
          height="230"
          rx="115"
          fill="illustrationInterface010"
        />
        <Rect
          x="243"
          y="267"
          width="226"
          height="226"
          rx="113"
          stroke="#F4F4F4"
          strokeWidth="4"
        />
      </g>
      <g filter={`url(#${filter1})`}>
        <Rect
          x="873"
          y="265"
          width="230"
          height="230"
          rx="115"
          fill="illustrationInterface010"
        />
        <Rect
          x="875"
          y="267"
          width="226"
          height="226"
          rx="113"
          stroke="#F4F4F4"
          strokeWidth="4"
        />
      </g>
      <g filter={`url(#${filter2})`}>
        <Rect
          x="557"
          y="265"
          width="230"
          height="230"
          rx="115"
          fill="illustrationInterface010"
        />
        <Rect
          x="559"
          y="267"
          width="226"
          height="226"
          rx="113"
          stroke="#F4F4F4"
          strokeWidth="4"
        />
      </g>
      <Path
        d="M710.875 387.125H677.125V420.875H665.875V387.125H632.125V375.875H665.875V342.125H677.125V375.875H710.875V387.125Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M376.341 358.681L368.41 350.75L334.66 384.5L368.41 418.25L376.341 410.319L350.579 384.5L376.341 358.681Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M1027.08 348.789L1019.21 340.917L987.999 372.128L956.789 340.917L948.916 348.789L980.127 380L948.916 411.211L956.789 419.084L987.999 387.873L1019.21 419.084L1027.08 411.211L995.872 380L1027.08 348.789Z"
        fill="illustrationHighlight010"
      />
      <defs>
        <filter
          id={filter0}
          x="217"
          y="257"
          width="278"
          height="278"
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
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="849"
          y="257"
          width="278"
          height="278"
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
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={filter2}
          x="533"
          y="257"
          width="278"
          height="278"
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
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};
export default Dont02;
