import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';
import {Circle} from '../../circle';

export const BannerDont3Illustration: React.FC = () => {
  const clip0 = getSSRId();
  const clip1 = getSSRId();

  const filter0 = getSSRId();

  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <Path
          d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
          fill="illustrationBackground010"
        />
        <g filter={`url(#${filter0})`}>
          <g clipPath="url(#clip1)">
            <Rect
              width="1191"
              height="300"
              rx="4"
              transform="matrix(-1 0 0 1 1191 269)"
              fill="illustrationInterface010"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M529.984 363C538.821 363 545.984 370.163 545.984 379C545.984 387.837 538.821 395 529.984 395H-261C-269.837 395 -277 387.837 -277 379C-277 370.163 -269.837 363 -261 363H529.984ZM762.176 443C771.012 443 778.176 450.163 778.176 459C778.176 467.837 771.012 475 762.176 475H-118.999C-127.836 475 -134.999 467.837 -134.999 459C-134.999 450.163 -127.836 443 -118.999 443H762.176Z"
              fill="illustrationInterface020"
            />
            <Circle
              cx="1021"
              cy="419"
              r="89"
              stroke="#577FFB"
              strokeWidth="12"
            />
            <Path
              d="M1064.75 384.062L1055.94 375.25L1021 410.188L986.062 375.25L977.25 384.062L1012.19 419L977.25 453.938L986.062 462.75L1021 427.812L1055.94 462.75L1064.75 453.938L1029.81 419L1064.75 384.062Z"
              fill="illustrationHighlight010"
            />
          </g>
        </g>
        <Path
          d="M1083.95 210.238C1084.84 211.451 1083.97 213.156 1082.47 213.156L1046.84 213.156C1045.34 213.156 1044.47 211.451 1045.36 210.238L1063.17 185.809C1063.9 184.803 1065.4 184.803 1066.14 185.809L1083.95 210.238Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M1083.95 177.183C1084.84 178.397 1083.97 180.102 1082.47 180.102L1046.84 180.102C1045.34 180.102 1044.47 178.397 1045.36 177.183L1063.17 152.754C1063.9 151.748 1065.4 151.748 1066.14 152.754L1083.95 177.183Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M981.951 210.238C982.836 211.451 981.969 213.156 980.467 213.156L944.84 213.156C943.338 213.156 942.471 211.451 943.356 210.238L961.169 185.809C961.902 184.803 963.403 184.803 964.137 185.809L981.951 210.238Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M981.951 177.183C982.836 178.397 981.969 180.102 980.467 180.102L944.84 180.102C943.338 180.102 942.471 178.397 943.356 177.183L961.169 152.754C961.902 151.748 963.403 151.748 964.137 152.754L981.951 177.183Z"
          fill="illustrationHighlight010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="-16"
          y="261"
          width="1223"
          height="332"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
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
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1490.72" height="838.004" fill="white" />
        </clipPath>
        <clipPath id={clip1}>
          <Rect
            width="1191"
            height="300"
            rx="4"
            transform="matrix(-1 0 0 1 1191 269)"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default BannerDont3Illustration;
