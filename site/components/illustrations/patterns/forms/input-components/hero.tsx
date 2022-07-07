import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const Hero: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1490" height="838" fill="illustrationBackground020" />
      <g filter={`url(#${filter0})`}>
        <Rect
          x="486"
          y="462.503"
          width="508.638"
          height="166.286"
          rx="19.8053"
          fill="illustrationInterface060"
        />
        <Rect
          x="496.105"
          y="450.379"
          width="508.638"
          height="166.286"
          rx="24.2494"
          fill="illustrationInterface030"
        />
        <Rect
          x="554.707"
          y="490.794"
          width="282.91"
          height="10.1039"
          rx="5.05196"
          fill="illustrationInterface060"
        />
        <Rect
          x="554.707"
          y="515.044"
          width="375.866"
          height="54.5612"
          rx="8.763"
          fill="illustrationInterface010"
        />
        <Rect
          x="574.914"
          y="541.314"
          width="262.702"
          height="4.04157"
          rx="2.02078"
          fill="illustrationInterface060"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M900.137 544.273L905.521 538.89C906.115 538.296 907.078 538.296 907.672 538.89C908.266 539.484 908.266 540.447 907.672 541.041L901.218 547.496C900.909 547.805 900.5 547.953 900.095 547.941C899.718 547.932 899.344 547.783 899.056 547.496L892.602 541.041C892.008 540.447 892.008 539.484 892.602 538.889C893.196 538.295 894.159 538.295 894.753 538.889L900.137 544.273Z"
          fill="illustrationInterface060"
        />
      </g>
      <g filter={`url(#${filter1})`}>
        <Rect
          x="486"
          y="222.125"
          width="508.638"
          height="166.286"
          rx="19.8053"
          fill="illustrationInterface060"
        />
        <Rect
          x="496.105"
          y="210"
          width="508.638"
          height="166.286"
          rx="24.2494"
          fill="illustrationInterface030"
        />
        <Rect
          x="554.707"
          y="250.416"
          width="282.91"
          height="10.1039"
          rx="5.05196"
          fill="illustrationInterface060"
        />
        <Rect
          x="554.707"
          y="274.665"
          width="375.866"
          height="54.5612"
          rx="8.763"
          fill="illustrationInterface010"
        />
        <Rect
          x="575"
          y="288"
          width="3"
          height="28"
          rx="1.5"
          fill="illustrationInterface060"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="469.834"
          y="442.296"
          width="551.075"
          height="210.743"
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
          <feOffset dy="8.08314" />
          <feGaussianBlur stdDeviation="8.08314" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1437_28398"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_28398"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="469.834"
          y="201.917"
          width="551.075"
          height="210.743"
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
          <feOffset dy="8.08314" />
          <feGaussianBlur stdDeviation="8.08314" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1437_28398"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_28398"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
