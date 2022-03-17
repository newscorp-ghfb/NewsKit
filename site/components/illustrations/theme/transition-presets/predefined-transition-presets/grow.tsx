import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const grow: React.FC = () => {
  const filter0 = getSSRId();

  return (
    <Svg
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        width="1000"
        height="1000"
        rx="22"
        fill="illustrationBackground020"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M462.153 279.791C459.021 284.778 462.639 291.235 468.566 291.235H492.555V356.75C492.555 360.283 495.18 362 498.745 362C505.465 362 505.925 356.751 505.925 356.751L505.465 291.235H530.434C536.36 291.235 539.978 284.78 536.848 279.793L505.925 230.532C502.97 225.824 496.056 225.823 493.099 230.53L462.153 279.791Z"
        fill="illustrationInterface090"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          d="M219 407.132C219 395.461 226.112 386 234.886 386H765.114C773.888 386 781 395.461 781 407.132V588.868C781 600.539 773.888 610 765.114 610H234.886C226.112 610 219 600.539 219 588.868V407.132Z"
          fill="illustrationPalette030"
        />
      </g>
      <Path
        d="M291 469C291 462.925 295.925 458 302 458H655C661.075 458 666 462.925 666 469C666 475.075 661.075 480 655 480H302C295.925 480 291 475.075 291 469Z"
        fill="illustrationPalette010"
      />
      <Path
        d="M291 525C291 518.925 295.925 514 302 514H388C394.075 514 399 518.925 399 525C399 531.075 394.075 536 388 536H302C295.925 536 291 531.075 291 525Z"
        fill="illustrationPalette010"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M888.209 461.153C883.222 458.021 876.765 461.639 876.765 467.566V491.555H811.25C807.717 491.555 806 494.18 806 497.745C806 504.465 811.249 504.925 811.249 504.925L876.765 504.465V529.434C876.765 535.36 883.22 538.978 888.207 535.848L937.468 504.925C942.176 501.97 942.177 495.056 937.47 492.099L888.209 461.153Z"
        fill="illustrationInterface090"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.791 461.153C116.778 458.021 123.235 461.639 123.235 467.566V491.555H188.75C192.283 491.555 194 494.18 194 497.745C194 504.465 188.751 504.925 188.751 504.925L123.235 504.465V529.434C123.235 535.36 116.78 538.978 111.793 535.848L62.5318 504.925C57.8237 501.97 57.8225 495.056 62.5296 492.099L111.791 461.153Z"
        fill="illustrationInterface090"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M462.153 721.209C459.021 716.222 462.639 709.765 468.566 709.765H492.555V644.25C492.555 640.717 495.18 639 498.745 639C505.465 639 505.925 644.249 505.925 644.249L505.465 709.765H530.434C536.36 709.765 539.978 716.22 536.848 721.207L505.925 770.468C502.97 775.176 496.056 775.177 493.099 770.47L462.153 721.209Z"
        fill="illustrationInterface090"
      />
      <defs>
        <filter
          id={filter0}
          x="187"
          y="374"
          width="626"
          height="288"
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
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="16" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_831_135905"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_831_135905"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default grow;
