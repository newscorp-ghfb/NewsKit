import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const Hero: React.FC = () => {
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
        <Rect width="1490" height="838" fill="illustrationBackground020" />
        <Rect
          x="550.945"
          y="207"
          width="497.056"
          height="281.438"
          rx="22.6966"
          fill="illustrationInterface040"
        />
        <Path
          d="M550.945 229.697C550.945 217.162 561.107 207 573.642 207H1025.3C1037.84 207 1048 217.162 1048 229.697V286.438H550.945V229.697Z"
          fill="illustrationInterface060"
        />
        <g filter={`url(#${filter0})`}>
          <Rect
            x="442"
            y="347.719"
            width="497.056"
            height="281.438"
            rx="22.6966"
            fill="illustrationInterface010"
          />
          <Rect
            x="501.012"
            y="453.258"
            width="133.91"
            height="70.3596"
            rx="11.3483"
            fill="illustrationInterface050"
          />
          <Rect
            x="501.012"
            y="557.663"
            width="76.0337"
            height="19.2921"
            rx="9.64607"
            fill="illustrationInterface050"
          />
          <Rect
            x="602.012"
            y="557.663"
            width="76.0337"
            height="19.2921"
            rx="9.64607"
            fill="illustrationInterface050"
          />
          <Rect
            x="703.012"
            y="557.663"
            width="76.0337"
            height="19.2921"
            rx="9.64607"
            fill="illustrationInterface050"
          />
          <Rect
            x="804.012"
            y="557.663"
            width="76.0337"
            height="19.2921"
            rx="9.64607"
            fill="illustrationInterface050"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="423.843"
          y="338.64"
          width="533.369"
          height="317.753"
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
          <feOffset dy="9.07865" />
          <feGaussianBlur stdDeviation="9.07865" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1437_29361"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_29361"
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

export default Hero;
