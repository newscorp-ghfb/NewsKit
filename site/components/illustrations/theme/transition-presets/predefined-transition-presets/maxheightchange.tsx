import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const MaxHeightChange: React.FC = () => {
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
          d="M148 569C148 546.909 165.909 529 188 529H824C846.091 529 864 546.909 864 569V849C864 871.091 846.091 880 824 880H188C165.909 880 148 871.091 148 849V569Z"
          fill="illustrationPalette010"
        />
      </g>
      <Path
        d="M219 730.5C219 724.701 223.701 720 229.5 720H676.5C682.299 720 687 724.701 687 730.5C687 736.299 682.299 741 676.5 741H229.5C223.701 741 219 736.299 219 730.5Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M219 611.5C219 605.701 222.335 601 226.449 601H543.551C547.665 601 551 605.701 551 611.5C551 617.299 547.665 622 543.551 622H226.449C222.335 622 219 617.299 219 611.5Z"
        fill="illustrationPalette030"
      />
      <Path
        d="M219 778.5C219 772.701 223.701 768 229.5 768H518.5C524.299 768 529 772.701 529 778.5C529 784.299 524.299 789 518.5 789H229.5C223.701 789 219 784.299 219 778.5Z"
        fill="illustrationPalette020"
      />
      <Path
        d="M778.5 585.672L788.105 594.329L778.5 603.868L754.5 628L745 619L778.5 585.672Z"
        fill="illustrationPalette030"
      />
      <Path
        d="M779 585L770 594L779 603.5L803.605 628L813.105 619L779 585Z"
        fill="illustrationPalette030"
      />
      <g filter={`url(#${filter1})`}>
        <Path
          d="M136 161C136 138.909 153.909 121 176 121H812C834.091 121 852 138.909 852 161V246C852 268.091 834.091 287 812 287H176C153.909 287 136 268.091 136 246V161Z"
          fill="illustrationPalette010"
        />
      </g>
      <Path
        d="M207 203.5C207 197.701 210.335 193 214.449 193H531.551C535.665 193 539 197.701 539 203.5C539 209.299 535.665 214 531.551 214H214.449C210.335 214 207 209.299 207 203.5Z"
        fill="illustrationPalette030"
      />
      <Path
        d="M766.5 219.328L776.105 210.671L766.5 201.132L742.5 177L733 186L766.5 219.328Z"
        fill="illustrationPalette030"
      />
      <Path
        d="M767 220L758 211L767 201.5L791.605 177L801.105 186L767 220Z"
        fill="illustrationPalette030"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M543.847 422.209C546.979 417.222 543.361 410.765 537.434 410.765H513.445V345.25C513.445 341.717 510.82 340 507.255 340C500.535 340 500.075 345.249 500.075 345.249L500.535 410.765H475.566C469.64 410.765 466.022 417.22 469.152 422.207L500.075 471.468C503.03 476.176 509.944 476.177 512.901 471.47L543.847 422.209Z"
        fill="illustrationInterface090"
      />
      <defs>
        <filter
          id={filter0}
          x="124"
          y="521"
          width="764"
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
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2227_75389"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2227_75389"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="112"
          y="113"
          width="764"
          height="214"
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
            result="effect1_dropShadow_2227_75389"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2227_75389"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default MaxHeightChange;
