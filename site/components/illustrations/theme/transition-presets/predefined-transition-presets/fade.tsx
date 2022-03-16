import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const fade: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();

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
      <g filter={`url(#${filter0})`}>
        <Path
          d="M142 239C142 216.909 159.909 199 182 199H818C840.091 199 858 216.909 858 239V762C858 784.091 840.091 802 818 802H182C159.909 802 142 784.091 142 762V239Z"
          fill="white"
        />
      </g>
      <g opacity="0.4" filter={`url(#${filter1})`}>
        <Path
          d="M142 239C142 216.909 159.909 199 182 199H818C840.091 199 858 216.909 858 239V762C858 784.091 840.091 802 818 802H182C159.909 802 142 784.091 142 762V239Z"
          fill="illustrationPalette010"
        />
      </g>
      <Path
        d="M579 199H818C840.091 199 858 216.909 858 239V762C858 784.091 840.091 802 818 802H352L579 199Z"
        fill="illustrationPalette010"
      />
      <Path
        d="M233 481.5C233 475.701 237.701 471 243.5 471H690.5C696.299 471 701 475.701 701 481.5C701 487.299 696.299 492 690.5 492H243.5C237.701 492 233 487.299 233 481.5Z"
        fill="illustrationPalette010"
      />
      <Path
        d="M476.5 471H690.5C696.299 471 701 475.701 701 481.5C701 487.299 696.299 492 690.5 492H468.5L476.5 471Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M233 529.5C233 523.701 237.701 519 243.5 519H532.5C538.299 519 543 523.701 543 529.5C543 535.299 538.299 540 532.5 540H243.5C237.701 540 233 535.299 233 529.5Z"
        fill="illustrationPalette010"
      />
      <Path
        d="M458.5 519H532.5C538.299 519 543 523.701 543 529.5C543 535.299 538.299 540 532.5 540H450.5L458.5 519Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M233 401C233 389.954 241.954 381 253 381H681C692.046 381 701 389.954 701 401C701 412.046 692.046 421 681 421H253C241.954 421 233 412.046 233 401Z"
        fill="illustrationPalette010"
      />
      <Path
        d="M510.5 381H681C692.046 381 701 389.954 701 401C701 412.046 692.046 421 681 421H495.375L510.5 381Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M483 697.5C483 676.237 500.237 659 521.5 659H751.5C772.763 659 790 676.237 790 697.5C790 718.763 772.763 736 751.5 736H521.5C500.237 736 483 718.763 483 697.5Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M559 697C559 692.582 562.582 689 567 689H707C711.418 689 715 692.582 715 697C715 701.418 711.418 705 707 705H567C562.582 705 559 701.418 559 697Z"
        fill="illustrationPalette010"
      />
      <Path
        d="M758.605 312L749 303.342L758.605 293.803L807.851 245L817 254.131L758.605 312Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M807.395 312L817 303.342L807.395 293.803L758.149 245L749 254.131L807.395 312Z"
        fill="illustrationPalette020"
      />
      <defs>
        <filter
          id={filter0}
          x="118"
          y="191"
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
            result="effect1_dropShadow_831_135736"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_831_135736"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="118"
          y="191"
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
            result="effect1_dropShadow_831_135736"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_831_135736"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default fade;
