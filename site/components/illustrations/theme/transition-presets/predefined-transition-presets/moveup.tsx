import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const moveUp: React.FC = () => {
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
        d="M462.153 164.791C459.021 169.778 462.639 176.235 468.566 176.235H492.555V241.75C492.555 245.283 495.18 247 498.745 247C505.465 247 505.925 241.751 505.925 241.751L505.465 176.235H530.434C536.36 176.235 539.978 169.78 536.848 164.793L505.925 115.532C502.97 110.824 496.056 110.823 493.099 115.53L462.153 164.791Z"
        fill="illustrationInterface090"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          d="M142 316C142 293.909 159.909 276 182 276H818C840.091 276 858 293.909 858 316V839C858 861.091 840.091 879 818 879H182C159.909 879 142 861.091 142 839V316Z"
          fill="illustrationPalette010"
        />
      </g>
      <Path
        d="M233 558.5C233 552.701 237.701 548 243.5 548H690.5C696.299 548 701 552.701 701 558.5C701 564.299 696.299 569 690.5 569H243.5C237.701 569 233 564.299 233 558.5Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M476.5 548H690.5C696.299 548 701 552.701 701 558.5C701 564.299 696.299 569 690.5 569H468.5L476.5 548Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M233 606.5C233 600.701 237.701 596 243.5 596H532.5C538.299 596 543 600.701 543 606.5C543 612.299 538.299 617 532.5 617H243.5C237.701 617 233 612.299 233 606.5Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M458.5 596H532.5C538.299 596 543 600.701 543 606.5C543 612.299 538.299 617 532.5 617H450.5L458.5 596Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M233 478C233 466.954 241.954 458 253 458H681C692.046 458 701 466.954 701 478C701 489.046 692.046 498 681 498H253C241.954 498 233 489.046 233 478Z"
        fill="illustrationPalette030"
      />
      <Path
        d="M510.5 458H681C692.046 458 701 466.954 701 478C701 489.046 692.046 498 681 498H495.375L510.5 458Z"
        fill="illustrationPalette030"
      />
      <Path
        d="M483 774.5C483 753.237 500.237 736 521.5 736H751.5C772.763 736 790 753.237 790 774.5C790 795.763 772.763 813 751.5 813H521.5C500.237 813 483 795.763 483 774.5Z"
        fill="illustrationPalette040"
      />
      <Path
        d="M559 774C559 769.582 562.582 766 567 766H707C711.418 766 715 769.582 715 774C715 778.418 711.418 782 707 782H567C562.582 782 559 778.418 559 774Z"
        fill="white"
      />
      <Path
        d="M758.605 389L749 380.342L758.605 370.803L807.851 322L817 331.131L758.605 389Z"
        fill="illustrationPalette030"
      />
      <Path
        d="M807.395 389L817 380.342L807.395 370.803L758.149 322L749 331.131L807.395 389Z"
        fill="illustrationPalette030"
      />
      <defs>
        <filter
          id={filter0}
          x="118"
          y="268"
          width="764"
          height="651"
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
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_831_135874"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_831_135874"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default moveUp;
