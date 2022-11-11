import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const PlaybackSpeedControl: React.FC = () => {
  const clip0 = getSSRId();
  const filter0 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
        <g filter={`url(#${filter0})`}>
          <Rect
            width="4390"
            height="444.612"
            transform="translate(-3147 196.195)"
            fill="interfaceBackground"
          />
          <Rect
            x="-1551.37"
            y="381.396"
            width="2052.71"
            height="74.1019"
            rx="37.051"
            fill="illustrationInterface020"
          />
          <Rect
            x="798.389"
            y="270.297"
            width="296.408"
            height="296.408"
            rx="148.204"
            fill="illustrationHighlight010"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M940.417 357.054V369.528C931.401 370.639 923.188 374.221 916.334 379.531L907.565 370.701C916.705 363.229 928.005 358.289 940.417 357.054ZM953.076 404.854L934.242 390.713V446.289L953.076 432.148L971.293 418.501L953.076 404.854ZM907.627 388.238L898.797 379.469C891.325 388.608 886.385 399.909 885.15 412.321H897.623C898.735 403.305 902.317 395.092 907.627 388.238ZM885.15 424.67H897.623C898.735 433.686 902.317 441.899 907.627 448.691L898.797 457.522C891.325 448.383 886.385 437.082 885.15 424.67ZM907.565 466.291C916.705 473.763 928.067 478.703 940.417 479.938V467.464C931.401 466.353 923.188 462.771 916.334 457.46L907.565 466.291ZM953.076 479.939C984.137 476.667 1008.34 450.36 1008.34 418.497C1008.34 386.633 984.137 360.327 953.076 357.054V369.528C977.283 372.739 995.994 393.487 995.994 418.497C995.994 443.506 977.283 464.255 953.076 467.466V479.939Z"
            fill="illustrationInterface010"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="-3221.1"
          y="159.144"
          width="4538.2"
          height="592.815"
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
          <feOffset dy="37.051" />
          <feGaussianBlur stdDeviation="37.051" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2539_123964"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2539_123964"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1490" height="838" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default PlaybackSpeedControl;
