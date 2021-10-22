import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const InlineMessageOptionsIconIllustration: React.FC = () => {
  const clip0 = getSSRId();
  const filter0 = getSSRId();
  return (
    <Svg
      width="1490"
      height="839"
      viewBox="0 0 1490 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 4.00733C0 1.79819 1.79086 0.00732422 4 0.00732422H1486.72C1488.93 0.00732422 1490.72 1.79819 1490.72 4.00732V834.011C1490.72 836.22 1488.93 838.011 1486.72 838.011H4.00002C1.79088 838.011 0 836.22 0 834.011V4.00733Z"
        fill="illustrationBackground020"
      />
      <g filter={`url(#${filter0})`}>
        <g clipPath={`url(#${clip0})`}>
          <Path
            d="M299.855 293.007C299.855 279.752 310.601 269.007 323.855 269.007H1490.28V569.007H323.855C310.601 569.007 299.855 558.262 299.855 545.007V293.007Z"
            fill="illustrationInterface010"
          />
          <Rect
            x="578.031"
            y="370.007"
            width="823"
            height="28"
            rx="14"
            fill="illustrationPalette020"
          />
          <Rect
            x="577.855"
            y="439.007"
            width="913.175"
            height="28"
            rx="14"
            fill="illustrationInterface020"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M441.855 340.507C407.355 340.507 379.355 368.507 379.355 403.007C379.355 437.507 407.355 465.507 441.855 465.507C476.355 465.507 504.355 437.507 504.355 403.007C504.355 368.507 476.355 340.507 441.855 340.507ZM435.605 434.257V396.757H448.105V434.257H435.605ZM435.605 371.757V384.257H448.105V371.757H435.605Z"
            fill="illustrationHighlight010"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="283.855"
          y="261.007"
          width="1222.42"
          height="332"
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
          <Path
            d="M299.855 293.007C299.855 279.752 310.601 269.007 323.855 269.007H1490.28V569.007H323.855C310.601 569.007 299.855 558.262 299.855 545.007V293.007Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default InlineMessageOptionsIconIllustration;
