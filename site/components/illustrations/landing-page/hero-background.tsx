import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

const HeroBackground: React.FC = () => {
  const clip0 = getSSRId();
  const filter0 = getSSRId();
  const filter1 = getSSRId();

  return (
    <Svg
      width="1440"
      height="898"
      viewBox="0 0 1440 898"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Rect width="1440" height="898" fill="white" />
        <Rect width="1440" height="898" fill="interfaceSkeleton010" />
        <g opacity="0.3" filter={`url(#${filter0})`}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 751.73V222.27C15.5754 219.465 31.6167 218 48 218C196.565 218 317 338.435 317 487C317 635.565 196.565 756 48 756C31.6167 756 15.5754 754.535 0 751.73Z"
            fill="interfaceBrand030"
          />
        </g>
        <g opacity="0.6" filter={`url(#${filter1})`}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1157.86 0L1440 0V400.362C1423.8 403.407 1407.09 405 1390 405C1241.44 405 1121 284.565 1121 136C1121 86.3829 1134.43 39.9034 1157.86 0Z"
            fill="interfaceBrand030"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="-400"
          y="-182"
          width="1117"
          height="1338"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="200"
            result="effect1_foregroundBlur_2129_695935"
          />
        </filter>
        <filter
          id={filter1}
          x="721"
          y="-400"
          width="1119"
          height="1205"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="200"
            result="effect1_foregroundBlur_2129_695935"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1440" height="898" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default HeroBackground;
