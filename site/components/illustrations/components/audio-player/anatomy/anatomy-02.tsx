import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';
import {Circle} from '../../../circle';

export const Anatomy02: React.FC = () => {
  const clip0 = getSSRId();
  const clip1 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1490" height="838" fill="illustrationBackground010" />
      <Rect
        x="401"
        y="295"
        width="687"
        height="204.423"
        stroke="#AEBFFF"
        strokeWidth="4"
        strokeDasharray="41 41"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M460.194 408.191V386.593H474.593L492.591 368.595V426.189L474.593 408.191H460.194ZM499.79 382.886C505.118 385.55 508.789 391.021 508.789 397.392C508.789 403.764 505.118 409.235 499.79 411.863V382.886Z"
        fill="illustrationPalette040"
      />
      <g clipPath={`url(#${clip0})`}>
        <Rect
          x="636.577"
          y="386.593"
          width="405"
          height="22"
          fill="illustrationInterface020"
        />
      </g>
      <g clipPath={`url(#${clip1})`}>
        <Rect
          x="636.577"
          y="386.593"
          width="202"
          height="22"
          fill="illustrationPalette040"
        />
      </g>
      <Rect
        x="801.261"
        y="356.896"
        width="80.9922"
        height="80.9922"
        rx="40.4961"
        fill="illustrationPalette040"
      />
      <Rect
        x="801.261"
        y="356.896"
        width="80.9922"
        height="80.9922"
        rx="40.4961"
        stroke="white"
        strokeWidth="5.39948"
      />
      <Path
        d="M484 613.5L482 617.5L480.847 460.518H481.96C479.749 460.498 477.963 458.823 477.963 456.759C477.963 454.683 479.77 453 482 453C484.23 453 486.037 454.683 486.037 456.759C486.037 458.823 484.251 460.498 482.04 460.518H483.153L484 613.5Z"
        fill="illustrationPalette040"
      />
      <Circle cx="482" cy="630" r="22" fill="#577FFB" />
      <Path
        d="M477.958 625.438V621.94H484.052V638H480.136V625.438H477.958Z"
        fill="white"
      />
      <Path
        d="M674 613.5L672 617.5L670.847 460.518H671.96C669.749 460.498 667.963 458.823 667.963 456.759C667.963 454.683 669.77 453 672 453C674.23 453 676.037 454.683 676.037 456.759C676.037 458.823 674.251 460.498 672.04 460.518H673.153L674 613.5Z"
        fill="illustrationPalette040"
      />
      <Circle cx="672" cy="630" r="22" fill="#577FFB" />
      <Path
        d="M666.074 634.986C666.572 634.59 666.8 634.407 666.756 634.436C668.193 633.248 669.322 632.273 670.144 631.51C670.98 630.747 671.684 629.948 672.256 629.112C672.828 628.276 673.114 627.462 673.114 626.67C673.114 626.069 672.974 625.599 672.696 625.262C672.417 624.925 671.999 624.756 671.442 624.756C670.884 624.756 670.444 624.969 670.122 625.394C669.814 625.805 669.66 626.391 669.66 627.154H666.03C666.059 625.907 666.323 624.866 666.822 624.03C667.335 623.194 668.002 622.578 668.824 622.182C669.66 621.786 670.584 621.588 671.596 621.588C673.341 621.588 674.654 622.035 675.534 622.93C676.428 623.825 676.876 624.991 676.876 626.428C676.876 627.997 676.34 629.457 675.27 630.806C674.199 632.141 672.835 633.446 671.178 634.722H677.118V637.78H666.074V634.986Z"
        fill="white"
      />
      <defs>
        <clipPath id={clip0}>
          <Rect
            x="636.577"
            y="386.593"
            width="404.961"
            height="21.5979"
            rx="10.799"
            fill="white"
          />
        </clipPath>
        <clipPath id={clip1}>
          <Rect
            x="636.577"
            y="386.593"
            width="202.481"
            height="21.5979"
            rx="10.799"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Anatomy02;
