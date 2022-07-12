import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';
import {Circle} from '../../../circle';

export const Hero: React.FC = () => {
  const mask0 = getSSRId();
  const filter0 = getSSRId();

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
        <mask
          id={mask0}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="518"
          y="238"
          width="364"
          height="364"
        >
          <Path
            d="M870.998 510.886L816.088 467.373C804.692 458.568 788.633 460.121 779.307 471.001C769.463 482.398 762.728 489.65 760.658 491.72C744.079 508.299 713 480.324 676.219 443.546C639.438 406.765 611.467 376.202 628.045 359.108C630.116 357.037 637.368 350.302 648.764 340.459C659.644 331.136 661.198 314.558 652.392 303.677L608.879 248.768C601.11 239.445 588.16 235.817 577.28 240.999C562.259 247.214 540.498 264.83 533.246 272.082C494.394 311.963 532.212 414.538 619.239 501.048C706.265 587.558 808.317 625.892 848.205 586.52C855.457 579.268 872.552 557.512 879.288 542.486C883.949 531.093 880.842 518.143 870.999 510.891L870.998 510.886Z"
            fill="black"
          />
        </mask>
        <g mask={`url(#${mask0})`}>
          <Path
            d="M499.11 697.355C619.464 775.536 776.689 741.681 850.281 621.739C923.874 501.797 885.966 341.188 765.612 263.007C645.258 184.827 488.033 218.681 414.44 338.623C340.848 458.565 378.755 619.175 499.11 697.355Z"
            fill="illustrationPalette070"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M372.075 443.399C359.279 578.551 424.479 629.674 425.927 631.047C468.228 671.154 563.03 750.171 646.48 745.652C729.93 741.132 854.46 688.833 795.791 589.287C686.744 504.186 759.971 366.3 716.897 323.461C673.823 280.622 614.186 232.55 536.31 244.951C458.434 257.352 384.871 308.247 372.075 443.399Z"
            fill="illustrationPalette050"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M348.368 345.273C368.25 244.194 425.001 223.666 426.312 223.038C464.614 204.696 517.35 198.148 564.387 209.683C611.425 221.218 655.127 270.743 660.685 313.061C666.243 355.378 647.21 371.439 634.421 440.078C621.633 508.718 654.748 553.334 615.319 573.458C575.89 593.583 467.55 545.613 421.409 530.461C376.422 515.688 328.487 446.353 348.368 345.273Z"
            fill="illustrationPalette040"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M395.279 366.168C406.688 308.162 439.255 296.382 440.008 296.022C461.988 285.496 472.601 254.973 505.708 268.957C532.704 261.352 587.42 295.98 579.925 342.493C572.431 389.006 565.52 456.32 652.009 562.64C738.498 668.959 543.704 470.636 521.078 482.185C498.451 493.733 463.673 481.136 437.194 472.441C411.377 463.963 383.869 424.174 395.279 366.168Z"
            fill="illustrationPalette030"
          />
        </g>
        <Circle
          cx="854.576"
          cy="257.568"
          r="117.568"
          fill="illustrationInterface010"
        />
        <Path
          d="M754.984 322.726C756.475 317.575 762.983 315.968 766.7 319.835L792.829 347.025C796.545 350.892 794.682 357.332 789.475 358.617L752.863 367.651C747.656 368.936 743.01 364.102 744.501 358.95L754.984 322.726Z"
          fill="illustrationInterface010"
        />
        <Circle
          cx="801.018"
          cy="258.004"
          r="12.6277"
          fill="illustrationInterface070"
        />
        <Circle
          cx="855.01"
          cy="258.004"
          r="12.6277"
          fill="illustrationInterface070"
        />
        <Circle
          cx="909.007"
          cy="258.004"
          r="12.6277"
          fill="illustrationInterface070"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="503.199"
          y="132.6"
          width="483.746"
          height="491.601"
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
          <feOffset dy="7.40032" />
          <feGaussianBlur stdDeviation="7.40032" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1437_29374"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_29374"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
