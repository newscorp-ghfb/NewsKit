import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const Do01: React.FC = () => {
  const clip0 = getSSRId();
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
      <g clipPath={`url(#${clip0})`}>
        <Rect width="1490" height="838" fill="illustrationBackground010" />
        <g filter={`url(#${filter0})`}>
          <Rect
            x="495.723"
            y="52.1807"
            width="498.23"
            height="735.897"
            rx="15.2909"
            fill="illustrationInterface010"
          />
          <Path
            d="M495.723 65.2909C495.723 56.846 502.569 50 511.014 50H978.661C987.106 50 993.952 56.846 993.952 65.2909V372.704H495.723V65.2909Z"
            fill="illustrationInterface030"
          />
          <Rect
            x="535.906"
            y="476.274"
            width="415.177"
            height="25.4849"
            rx="12.7424"
            fill="illustrationPalette020"
          />
          <Rect
            x="535.906"
            y="531.296"
            width="272.616"
            height="25.4849"
            rx="12.7424"
            fill="illustrationPalette020"
          />
          <Rect
            x="535.906"
            y="633.397"
            width="415.177"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
          <Rect
            x="535.906"
            y="668.41"
            width="415.177"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
          <Rect
            x="535.906"
            y="598.379"
            width="415.177"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
          <Rect
            x="535.906"
            y="703.424"
            width="210.09"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
          <Rect
            x="536.061"
            y="403.23"
            width="121.014"
            height="49.7773"
            fill="illustrationHighlight010"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M556.797 428.114C556.797 422.391 561.442 417.746 567.165 417.746C572.888 417.746 577.532 422.391 577.532 428.114C577.532 433.836 572.888 438.481 567.165 438.481C561.442 438.481 556.797 433.836 556.797 428.114ZM568.202 429.15H572.349V427.077H568.202V422.93H566.128V427.077H561.981V429.15H566.128V433.297H568.202V429.15Z"
            fill="illustrationInterface010"
          />
          <Path
            d="M602.57 420.178V422.203H596.147V426.666H601.155V428.691H596.147V435.309H593.665V420.178H602.57Z"
            fill="illustrationInterface010"
          />
          <Path
            d="M607.352 419.198V435.309H604.87V419.198H607.352Z"
            fill="illustrationInterface010"
          />
          <Path
            d="M609.783 429.257C609.783 428.052 610.03 426.985 610.524 426.056C611.032 425.127 611.714 424.409 612.57 423.901C613.441 423.378 614.399 423.117 615.444 423.117C616.388 423.117 617.208 423.306 617.904 423.683C618.615 424.046 619.182 424.503 619.602 425.055V423.313H622.106V435.309H619.602V433.524C619.182 434.09 618.608 434.562 617.883 434.939C617.157 435.317 616.329 435.505 615.401 435.505C614.37 435.505 613.427 435.244 612.57 434.721C611.714 434.184 611.032 433.444 610.524 432.501C610.03 431.543 609.783 430.461 609.783 429.257ZM619.602 429.3C619.602 428.473 619.428 427.755 619.08 427.145C618.746 426.535 618.303 426.071 617.752 425.752C617.2 425.432 616.605 425.273 615.967 425.273C615.328 425.273 614.733 425.432 614.181 425.752C613.63 426.056 613.18 426.514 612.831 427.123C612.498 427.718 612.331 428.429 612.331 429.257C612.331 430.084 612.498 430.81 612.831 431.434C613.18 432.058 613.63 432.537 614.181 432.871C614.747 433.19 615.342 433.35 615.967 433.35C616.605 433.35 617.2 433.19 617.752 432.871C618.303 432.552 618.746 432.087 619.08 431.477C619.428 430.853 619.602 430.128 619.602 429.3Z"
            fill="illustrationInterface010"
          />
          <Path
            d="M630.2 423.117C631.128 423.117 631.949 423.306 632.66 423.683C633.385 424.046 633.951 424.503 634.358 425.055V423.313H636.862V435.505C636.862 436.608 636.629 437.588 636.165 438.444C635.7 439.315 635.026 439.997 634.14 440.491C633.269 440.984 632.224 441.231 631.005 441.231C629.379 441.231 628.03 440.847 626.956 440.077C625.881 439.323 625.272 438.292 625.127 436.986H627.587C627.776 437.61 628.175 438.111 628.784 438.488C629.408 438.88 630.149 439.076 631.005 439.076C632.007 439.076 632.812 438.771 633.422 438.161C634.046 437.552 634.358 436.666 634.358 435.505V433.502C633.937 434.068 633.364 434.547 632.638 434.939C631.927 435.317 631.114 435.505 630.2 435.505C629.154 435.505 628.197 435.244 627.326 434.721C626.469 434.184 625.787 433.444 625.279 432.501C624.786 431.543 624.539 430.461 624.539 429.257C624.539 428.052 624.786 426.985 625.279 426.056C625.787 425.127 626.469 424.409 627.326 423.901C628.197 423.378 629.154 423.117 630.2 423.117ZM634.358 429.3C634.358 428.473 634.184 427.755 633.835 427.145C633.502 426.535 633.059 426.071 632.507 425.752C631.956 425.432 631.361 425.273 630.722 425.273C630.083 425.273 629.488 425.432 628.937 425.752C628.385 426.056 627.935 426.514 627.587 427.123C627.253 427.718 627.086 428.429 627.086 429.257C627.086 430.084 627.253 430.81 627.587 431.434C627.935 432.058 628.385 432.537 628.937 432.871C629.503 433.19 630.098 433.35 630.722 433.35C631.361 433.35 631.956 433.19 632.507 432.871C633.059 432.552 633.502 432.087 633.835 431.477C634.184 430.853 634.358 430.128 634.358 429.3Z"
            fill="illustrationInterface010"
          />
        </g>
        <g filter={`url(#${filter1})`}>
          <Rect
            x="1057.45"
            y="52.1807"
            width="498.23"
            height="735.897"
            rx="15.2909"
            fill="illustrationInterface010"
          />
          <Path
            d="M1057.45 65.2909C1057.45 56.846 1064.29 50 1072.74 50H1540.38C1548.83 50 1555.67 56.846 1555.67 65.2909V372.704H1057.45V65.2909Z"
            fill="illustrationInterface030"
          />
          <Rect
            x="1097.63"
            y="476.274"
            width="415.177"
            height="25.4849"
            rx="12.7424"
            fill="illustrationPalette020"
          />
          <Rect
            x="1097.63"
            y="531.296"
            width="272.616"
            height="25.4849"
            rx="12.7424"
            fill="illustrationPalette020"
          />
          <Rect
            x="1097.63"
            y="633.397"
            width="415.177"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
          <Rect
            x="1097.63"
            y="668.41"
            width="415.177"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
          <Rect
            x="1097.63"
            y="598.379"
            width="415.177"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
          <Rect
            x="1097.63"
            y="703.424"
            width="210.09"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
        </g>
        <g filter={`url(#${filter2})`}>
          <Rect
            x="-66"
            y="52.1807"
            width="498.23"
            height="735.897"
            rx="15.2909"
            fill="illustrationInterface010"
          />
          <Path
            d="M-66 65.2909C-66 56.846 -59.154 50 -50.7091 50H416.939C425.384 50 432.23 56.846 432.23 65.2909V372.704H-66V65.2909Z"
            fill="illustrationInterface030"
          />
          <Rect
            x="-25.8164"
            y="476.274"
            width="415.177"
            height="25.4849"
            rx="12.7424"
            fill="illustrationPalette020"
          />
          <Rect
            x="-25.8164"
            y="531.296"
            width="272.616"
            height="25.4849"
            rx="12.7424"
            fill="illustrationPalette020"
          />
          <Rect
            x="-25.8164"
            y="633.397"
            width="415.177"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
          <Rect
            x="-25.8164"
            y="668.41"
            width="415.177"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
          <Rect
            x="-25.8162"
            y="598.379"
            width="415.177"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
          <Rect
            x="-25.8164"
            y="703.424"
            width="210.09"
            height="15.0064"
            rx="7.5032"
            fill="illustrationInterface020"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="475.335"
          y="39.806"
          width="539.005"
          height="778.854"
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
          <feOffset dy="10.194" />
          <feGaussianBlur stdDeviation="10.194" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1931_59086"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1931_59086"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="1037.06"
          y="39.806"
          width="539.005"
          height="778.854"
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
          <feOffset dy="10.194" />
          <feGaussianBlur stdDeviation="10.194" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1931_59086"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1931_59086"
            result="shape"
          />
        </filter>
        <filter
          id={filter2}
          x="-86.3879"
          y="39.806"
          width="539.005"
          height="778.854"
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
          <feOffset dy="10.194" />
          <feGaussianBlur stdDeviation="10.194" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1931_59086"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1931_59086"
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

export default Do01;
