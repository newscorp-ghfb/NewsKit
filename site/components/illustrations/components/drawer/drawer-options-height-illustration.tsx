import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const DrawerOptionsHeightIllustration: React.FC = () => {
  const mask0 = getSSRId();

  const clip0 = getSSRId();

  const filter0 = getSSRId();

  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path
          d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
          fill="illustrationBackground010"
        />
        <Rect
          x="590.685"
          y="-240"
          width="1446.05"
          height="886.807"
          rx="25.5656"
          fill="illustrationInterface020"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M525 647L465 647L465 639L490.355 639L490.355 354L465 354L465 346L525 346L525 354L500.005 354L500.005 639L525 639L525 647Z"
          fill="illustrationHighlight010"
        />
        <g filter={`url(#${filter0})`}>
          <Rect
            x="591"
            y="346"
            width="1445"
            height="300"
            rx="10.1259"
            fill="illustrationInterface010"
          />
        </g>
        <mask
          id={mask0}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="613"
          y="366"
          width="52"
          height="52"
        >
          <Path
            d="M654.07 380.39L651.067 377.386L639.157 389.296L627.248 377.386L624.244 380.39L636.153 392.3L624.244 404.209L627.248 407.213L639.157 395.303L651.067 407.213L654.07 404.209L642.161 392.3L654.07 380.39Z"
            fill="#0A0A0A"
          />
        </mask>
        <g mask={`url(#${mask0})`}>
          <Rect
            x="613.592"
            y="366.734"
            width="51.1312"
            height="51.1312"
            fill="illustrationHighlight010"
          />
        </g>
        <Rect
          x="1389.22"
          y="461"
          width="160.117"
          height="13.823"
          rx="6.91151"
          fill="illustrationInterface030"
        />
        <Rect
          x="1389.22"
          y="499.013"
          width="316.777"
          height="16.1269"
          rx="7.61793"
          fill="illustrationInterface020"
        />
        <Rect
          x="1389.22"
          y="539.331"
          width="315.626"
          height="13.823"
          rx="6.91151"
          fill="illustrationInterface020"
        />
        <Rect
          x="1389.22"
          y="577.344"
          width="315.626"
          height="16.1269"
          rx="7.61793"
          fill="illustrationInterface020"
        />
        <Rect
          x="1006.61"
          y="461"
          width="160.117"
          height="13.823"
          rx="6.91151"
          fill="illustrationInterface030"
        />
        <Rect
          x="1006.61"
          y="499.013"
          width="316.777"
          height="16.1269"
          rx="7.61793"
          fill="illustrationInterface020"
        />
        <Rect
          x="1006.61"
          y="539.331"
          width="315.626"
          height="13.823"
          rx="6.91151"
          fill="illustrationInterface020"
        />
        <Rect
          x="1006.61"
          y="577.344"
          width="315.626"
          height="16.1269"
          rx="7.61793"
          fill="illustrationInterface020"
        />
        <Rect
          x="624"
          y="461"
          width="160.117"
          height="13.823"
          rx="6.91151"
          fill="illustrationInterface030"
        />
        <Rect
          x="624"
          y="499.013"
          width="316.777"
          height="16.1269"
          rx="7.61793"
          fill="illustrationInterface020"
        />
        <Rect
          x="624"
          y="539.331"
          width="315.626"
          height="13.823"
          rx="6.91151"
          fill="illustrationInterface020"
        />
        <Rect
          x="624"
          y="577.344"
          width="315.626"
          height="16.1269"
          rx="7.61793"
          fill="illustrationInterface020"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="575"
          y="338"
          width="1477"
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
          <Rect width="1490.72" height="838.004" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default DrawerOptionsHeightIllustration;
