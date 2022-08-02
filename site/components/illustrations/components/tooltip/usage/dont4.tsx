import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const Dont4: React.FC = () => {
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
        <Rect width="1490" height="838" fill="illustrationBackground010" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-376.044 242C-416.889 242 -450 275.111 -450 315.956V473.112C-450 513.957 -416.889 547.068 -376.044 547.068H200.709L247.035 593.394L293.361 547.068H870.114C910.958 547.068 944.07 513.957 944.07 473.112V315.956C944.07 275.111 910.958 242 870.114 242H-376.044Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M-302.088 441.688C-302.088 451.87 -293.834 460.125 -283.652 460.125H491.441C501.623 460.125 509.877 451.87 509.877 441.688C509.877 431.506 501.623 423.252 491.441 423.252H-283.652C-293.834 423.252 -302.088 431.506 -302.088 441.688Z"
          fill="illustrationInterface010"
        />
        <Path
          d="M-302.088 352.206C-302.088 362.015 -294.136 369.967 -284.327 369.967H763.082C772.891 369.967 780.843 362.015 780.843 352.206C780.843 342.396 772.891 334.444 763.082 334.444H-284.327C-294.136 334.444 -302.088 342.396 -302.088 352.206Z"
          fill="illustrationInterface010"
        />
        <g filter={`url(#${filter0})`}>
          <Path
            d="M1312.1 387.551C1312.1 467.936 1246.94 533.102 1166.55 533.102C1086.17 533.102 1021 467.936 1021 387.551C1021 307.165 1086.17 242 1166.55 242C1246.94 242 1312.1 307.165 1312.1 387.551Z"
            fill="illustrationInterface010"
          />
        </g>
        <Path
          d="M1214.37 332.555L1204.19 342.733C1193.08 333.917 1179.11 328.613 1163.91 328.613C1150.8 328.613 1138.61 332.555 1128.43 339.221L1138.9 349.685C1146.21 345.456 1154.81 342.948 1163.91 342.948C1191.65 342.948 1214.08 365.381 1214.08 393.119C1214.08 402.221 1211.58 410.822 1207.35 418.132L1217.74 428.525C1224.48 418.419 1228.42 406.235 1228.42 393.119C1228.42 377.924 1223.11 363.948 1214.3 352.91L1224.48 342.733L1214.37 332.555ZM1185.41 307.111H1142.41V321.446H1185.41V307.111ZM1156.75 367.603L1171.08 381.938V357.282H1156.75V367.603ZM1099.55 328.613L1090.45 337.716L1110.16 357.497C1103.35 367.675 1099.41 379.931 1099.41 393.119C1099.41 428.74 1128.22 457.624 1163.91 457.624C1177.1 457.624 1189.36 453.682 1199.61 446.873L1217.52 464.791L1226.63 455.689L1099.55 328.613ZM1163.91 443.29C1136.18 443.29 1113.74 420.856 1113.74 393.119C1113.74 383.945 1116.25 375.344 1120.55 367.89L1189.07 436.409C1181.69 440.781 1173.09 443.29 1163.91 443.29Z"
          fill="illustrationHighlight010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="987.731"
          y="225.366"
          width="357.639"
          height="357.639"
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
          <feOffset dy="16.6344" />
          <feGaussianBlur stdDeviation="16.6344" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1890_59164"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1890_59164"
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

export default Dont4;
