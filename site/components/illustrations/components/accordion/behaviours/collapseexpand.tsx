import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const CollapseExpand: React.FC = () => {
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  const filter2 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
      <g filter={`url(#${filter0})`}>
        <Rect
          x="122"
          y="158"
          width="575"
          height="150"
          rx="22.4336"
          fill="illustrationInterface010"
        />
        <Path
          d="M637.683 221.349L622 236.997L606.317 221.349L601.5 226.167L622 246.667L642.5 226.167L637.683 221.349Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M177 233C177 226.373 181.415 221 186.861 221H541.139C546.585 221 551 226.373 551 233C551 239.627 546.585 245 541.139 245H186.861C181.415 245 177 239.627 177 233Z"
          fill="illustrationInterface020"
        />
      </g>
      <g filter={`url(#${filter1})`}>
        <Path
          d="M793 180.434C793 168.044 803.044 158 815.434 158H1345.57C1357.96 158 1368 168.044 1368 180.434V308H793V180.434Z"
          fill="illustrationInterface010"
        />
        <Path
          d="M1308.68 246.666L1293 231.018L1277.32 246.666L1272.5 241.849L1293 221.349L1313.5 241.849L1308.68 246.666Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M848 233C848 226.373 852.415 221 857.861 221H1212.14C1217.59 221 1222 226.373 1222 233C1222 239.627 1217.59 245 1212.14 245H857.861C852.415 245 848 239.627 848 233Z"
          fill="illustrationInterface030"
        />
      </g>
      <g filter={`url(#${filter2})`}>
        <Path
          d="M793 309H1368V653.566C1368 665.956 1357.96 676 1345.57 676H815.434C803.044 676 793 665.956 793 653.566V309Z"
          fill="illustrationInterface010"
        />
        <Path
          d="M848 390C848 385.029 853.489 381 860.26 381H1300.74C1307.51 381 1313 385.029 1313 390C1313 394.971 1307.51 399 1300.74 399H860.26C853.489 399 848 394.971 848 390Z"
          fill="illustrationInterface020"
        />
        <Path
          d="M848 524C848 519.029 853.489 515 860.26 515H1300.74C1307.51 515 1313 519.029 1313 524C1313 528.971 1307.51 533 1300.74 533H860.26C853.489 533 848 528.971 848 524Z"
          fill="illustrationInterface020"
        />
        <Path
          d="M848 457C848 452.029 852.415 448 857.861 448H1212.14C1217.59 448 1222 452.029 1222 457C1222 461.971 1217.59 466 1212.14 466H857.861C852.415 466 848 461.971 848 457Z"
          fill="illustrationInterface020"
        />
        <Path
          d="M848 591C848 586.029 852.415 582 857.861 582H1212.14C1217.59 582 1222 586.029 1222 591C1222 595.971 1217.59 600 1212.14 600H857.861C852.415 600 848 595.971 848 591Z"
          fill="illustrationInterface020"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="106"
          y="150"
          width="607"
          height="182"
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
            result="effect1_dropShadow_1798_58585"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1798_58585"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="777"
          y="150"
          width="607"
          height="182"
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
            result="effect1_dropShadow_1798_58585"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1798_58585"
            result="shape"
          />
        </filter>
        <filter
          id={filter2}
          x="777"
          y="301"
          width="607"
          height="399"
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
            result="effect1_dropShadow_1798_58585"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1798_58585"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default CollapseExpand;
