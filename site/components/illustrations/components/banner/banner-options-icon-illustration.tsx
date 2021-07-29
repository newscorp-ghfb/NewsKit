import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const BannerOptionsIconIllustration: React.FC = () => {
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
            <Path
              d="M300 293C300 279.745 310.745 269 324 269H1491V569H324C310.745 569 300 558.255 300 545V293Z"
              fill="illustrationInterface010"
            />
            <Rect
              x="578.176"
              y="367"
              width="823"
              height="28"
              rx="14"
              fill="illustrationInterface020"
            />
            <Rect
              x="578"
              y="443"
              width="978"
              height="28"
              rx="14"
              fill="illustrationInterface020"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M442 340.5C407.5 340.5 379.5 368.5 379.5 403C379.5 437.5 407.5 465.5 442 465.5C476.5 465.5 504.5 437.5 504.5 403C504.5 368.5 476.5 340.5 442 340.5ZM435.75 434.25V396.75H448.25V434.25H435.75ZM435.75 371.75V384.25H448.25V371.75H435.75Z"
              fill="illustrationHighlight010"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="284"
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
          <Path
            d="M300 293C300 279.745 310.745 269 324 269H1491V569H324C310.745 569 300 558.255 300 545V293Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default BannerOptionsIconIllustration;
