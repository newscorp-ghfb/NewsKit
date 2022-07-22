import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const Icon: React.FC = () => {
  const clip0 = getSSRId();
  const clip1 = getSSRId();
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
          <g clipPath={`url(#${clip1})`}>
            <Rect
              x="-27"
              y="232"
              width="1277"
              height="373"
              rx="22.4336"
              fill="illustrationInterface010"
            />
            <Path
              d="M1107.35 386.858L1064.13 429.987L1020.9 386.858L1007.62 400.136L1064.13 456.636L1120.63 400.136L1107.35 386.858Z"
              fill="illustrationHighlight010"
            />
            <Path
              d="M-56 418.5C-56 403.864 -45.0929 392 -31.6384 392H843.638C857.093 392 868 403.864 868 418.5C868 433.136 857.093 445 843.638 445H-31.6384C-45.093 445 -56 433.136 -56 418.5Z"
              fill="illustrationInterface020"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="-43"
          y="224"
          width="1309"
          height="405"
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
            result="effect1_dropShadow_1795_58544"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1795_58544"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1490" height="838" fill="white" />
        </clipPath>
        <clipPath id={clip1}>
          <Rect
            x="-27"
            y="232"
            width="1277"
            height="373"
            rx="22.4336"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
