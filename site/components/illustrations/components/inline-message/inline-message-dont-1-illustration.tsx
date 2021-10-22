import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const InlineMessageDont1Illustration: React.FC = () => {
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
      <g clipPath={`url(#${clip0})`}>
        <Path
          d="M0 4.02052C0 1.81138 1.79086 0.0205078 4 0.0205078H1486.72C1488.93 0.0205078 1490.72 1.81137 1490.72 4.02051V834.024C1490.72 836.233 1488.93 838.024 1486.72 838.024H4.00002C1.79088 838.024 0 836.233 0 834.024V4.02052Z"
          fill="illustrationBackground020"
        />
        <g filter={`url(#${filter0})`}>
          <Rect
            x="262.873"
            y="232.041"
            width="1754.86"
            height="372.958"
            rx="22.4336"
            fill="illustrationInterface010"
          />
          <Rect
            x="730.177"
            y="338.179"
            width="782.77"
            height="41.276"
            rx="20.638"
            fill="illustrationInterface020"
          />
          <Rect
            x="730.177"
            y="450.214"
            width="1208.8"
            height="41.276"
            rx="20.638"
            fill="illustrationInterface020"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M411.024 331.869L424.015 318.878L582.762 477.625L569.771 490.616L539.182 460.027L503.158 504.896L395.914 371.302C395.981 371.249 396.059 371.189 396.146 371.12C398.813 369.024 410.821 359.588 429.911 350.756L411.024 331.869ZM609.791 370.832C610.045 371.029 610.249 371.186 610.402 371.302L562.4 431.189L469.161 337.95C479.664 335.738 490.997 334.449 503.158 334.449C562.694 334.449 603.176 365.722 609.791 370.832Z"
            fill="illustrationHighlight010"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="246.873"
          y="224.041"
          width="1786.86"
          height="404.958"
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
          <Rect
            width="1490"
            height="838.004"
            fill="white"
            transform="translate(0 0.0205078)"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default InlineMessageDont1Illustration;
