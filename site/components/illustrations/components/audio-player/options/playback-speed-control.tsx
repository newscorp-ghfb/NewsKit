import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const PlaybackSpeedControl: React.FC = () => {
  const mask0 = getSSRId();
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
          <Rect
            width="4390"
            height="444.612"
            transform="translate(-3147 196.195)"
            fill="interfaceBackground"
          />
          <g clipPath={`url(#${clip1})`}>
            <Rect
              x="-1551.37"
              y="381.45"
              width="2052.93"
              height="74.1019"
              fill="illustrationInterface020"
            />
          </g>
          <Path
            d="M798.389 418.501C798.389 336.65 864.742 270.297 946.593 270.297V270.297C1028.44 270.297 1094.8 336.65 1094.8 418.501V418.501C1094.8 500.352 1028.44 566.705 946.593 566.705V566.705C864.742 566.705 798.389 500.352 798.389 418.501V418.501Z"
            fill="illustrationHighlight010"
          />
          <mask
            id={mask0}
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="872"
            y="344"
            width="149"
            height="149"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M940.418 357.054V369.528C931.402 370.639 923.19 374.221 916.335 379.531L907.566 370.701C916.706 363.229 928.006 358.289 940.418 357.054ZM953.077 404.854L934.243 390.713V446.289L953.077 432.148L971.294 418.501L953.077 404.854ZM907.628 388.238L898.797 379.469C891.326 388.608 886.385 399.909 885.15 412.321H897.624C898.736 403.305 902.317 395.092 907.628 388.238ZM885.15 424.67H897.624C898.736 433.686 902.317 441.899 907.628 448.691L898.797 457.522C891.326 448.383 886.385 437.082 885.15 424.67ZM907.566 466.291C916.706 473.763 928.068 478.703 940.418 479.938V467.464C931.402 466.353 923.19 462.771 916.335 457.46L907.566 466.291ZM953.077 479.939C984.138 476.667 1008.34 450.36 1008.34 418.497C1008.34 386.633 984.138 360.327 953.077 357.054V369.528C977.284 372.739 995.995 393.487 995.995 418.497C995.995 443.506 977.284 464.255 953.077 467.466V479.939Z"
              fill="#0A0A0A"
            />
          </mask>
          <g mask={`url(#${mask0})`}>
            <Rect
              x="872.491"
              y="344.398"
              width="148.204"
              height="148.204"
              fill="illustrationInterface010"
            />
          </g>
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
            result="effect1_dropShadow_1985_65810"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1985_65810"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1490" height="838" fill="white" />
        </clipPath>
        <clipPath id={clip1}>
          <Path
            d="M-1551.37 418.501C-1551.37 398.038 -1534.78 381.45 -1514.32 381.45H464.508C484.971 381.45 501.559 398.038 501.559 418.501V418.501C501.559 438.964 484.971 455.552 464.508 455.552H-1514.32C-1534.78 455.552 -1551.37 438.964 -1551.37 418.501V418.501Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default PlaybackSpeedControl;
