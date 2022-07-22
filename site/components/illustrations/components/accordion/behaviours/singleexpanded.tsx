import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const SingleExpanded: React.FC = () => {
  const clip0 = getSSRId();
  const filter0 = getSSRId();
  const filter1 = getSSRId();
  const filter2 = getSSRId();
  const filter3 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
        <g filter={`url(#${filter0})`}>
          <Path
            d="M457 -19H1032V131H457V-19Z"
            fill="illustrationInterface010"
          />
          <Path
            d="M972.683 44.3491L957 59.9975L941.317 44.3491L936.5 49.1666L957 69.6666L977.5 49.1666L972.683 44.3491Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M512 56C512 49.3726 516.415 44 521.861 44H876.139C881.585 44 886 49.3726 886 56C886 62.6274 881.585 68 876.139 68H521.861C516.415 68 512 62.6274 512 56Z"
            fill="illustrationInterface020"
          />
        </g>
        <g filter={`url(#${filter1})`}>
          <Path
            d="M457 137H1032V287H457V137Z"
            fill="illustrationInterface010"
          />
          <Path
            d="M972.683 225.666L957 210.018L941.317 225.666L936.5 220.849L957 200.349L977.5 220.849L972.683 225.666Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M512 212C512 205.373 516.415 200 521.861 200H876.139C881.585 200 886 205.373 886 212C886 218.627 881.585 224 876.139 224H521.861C516.415 224 512 218.627 512 212Z"
            fill="illustrationInterface030"
          />
        </g>
        <g filter={`url(#${filter2})`}>
          <Path
            d="M457 288H1032V591H457V288Z"
            fill="illustrationInterface010"
          />
          <Path
            d="M512 288H977V528C977 532.418 973.418 536 969 536H520C515.582 536 512 532.418 512 528V288Z"
            fill="illustrationInterface020"
          />
        </g>
        <g filter={`url(#${filter3})`}>
          <Path
            d="M457 597H1032V724.6C1032 736.971 1021.97 747 1009.6 747H479.4C467.029 747 457 736.971 457 724.6V597Z"
            fill="illustrationInterface010"
          />
          <Path
            d="M972.683 660.349L957 675.997L941.317 660.349L936.5 665.167L957 685.667L977.5 665.167L972.683 660.349Z"
            fill="illustrationHighlight010"
          />
          <Path
            d="M512 672C512 665.373 516.415 660 521.861 660H876.139C881.585 660 886 665.373 886 672C886 678.627 881.585 684 876.139 684H521.861C516.415 684 512 678.627 512 672Z"
            fill="illustrationInterface020"
          />
        </g>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1078.5 581.379V139.5H1081.5V581.379L1088.49 574.393C1089.07 573.808 1090.02 573.808 1090.61 574.393C1091.19 574.979 1091.19 575.929 1090.61 576.515L1081.06 586.061C1080.47 586.646 1079.53 586.646 1078.94 586.061L1069.39 576.515C1068.81 575.929 1068.81 574.979 1069.39 574.393C1069.98 573.808 1070.93 573.808 1071.51 574.393L1078.5 581.379Z"
          fill="illustrationHighlight010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="441"
          y="-27"
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
            result="effect1_dropShadow_1807_58563"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1807_58563"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="441"
          y="129"
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
            result="effect1_dropShadow_1807_58563"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1807_58563"
            result="shape"
          />
        </filter>
        <filter
          id={filter2}
          x="441"
          y="280"
          width="607"
          height="335"
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
            result="effect1_dropShadow_1807_58563"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1807_58563"
            result="shape"
          />
        </filter>
        <filter
          id={filter3}
          x="441"
          y="589"
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
            result="effect1_dropShadow_1807_58563"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1807_58563"
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

export default SingleExpanded;
