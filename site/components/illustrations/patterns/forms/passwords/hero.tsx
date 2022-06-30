import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';
import {Circle} from '../../../circle';

export const Hero: React.FC = () => {
  const mask0 = getSSRId();
  const mask1 = getSSRId();
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
        <mask
          id={mask0}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="592"
          y="394"
          width="313"
          height="235"
        >
          <Rect
            x="592"
            y="394.684"
            width="312.421"
            height="234.316"
            rx="26.7789"
            fill="illustrationPalette040"
          />
        </mask>
        <g mask={`url(#${mask0})`}>
          <Path
            d="M437.635 638.669C507.574 777.158 672.882 831.018 806.861 758.969C940.839 686.92 992.752 516.245 922.813 377.756C852.873 239.267 687.565 185.407 553.587 257.456C419.608 329.505 367.695 500.18 437.635 638.669Z"
            fill="illustrationPalette070"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M650.8 243.848C515.662 301.081 500.513 389.357 499.95 391.44C483.521 452.276 457.038 583.036 504.191 660.099C551.345 737.162 665.046 828.766 729.613 721.836C754.568 574.4 923.339 573.249 941.971 510.275C960.603 447.301 975.706 365.884 923.918 298.171C872.129 230.458 785.938 186.615 650.8 243.848Z"
            fill="illustrationPalette050"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M548.298 302.685C621.837 219.054 686.022 230.732 687.589 230.859C733.348 234.548 786.182 257.105 823.858 293.459C861.535 329.813 875.437 399.849 857.62 442.41C839.803 484.971 813.287 489.627 764.015 546.805C714.744 603.983 721.424 663.676 673.642 661.039C625.86 658.402 550.718 554.673 515.846 515.427C481.846 477.162 474.76 386.315 548.298 302.685Z"
            fill="illustrationPalette040"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M488.456 360.124C530.657 312.131 567.491 318.833 568.39 318.905C594.649 321.023 621.163 298.275 644.492 329.343C673.85 336.916 706.144 399.021 673.85 438.405C641.556 477.788 598.497 536.924 621.495 683.29C644.492 829.655 570.33 538.438 542.909 536.924C515.489 535.411 489.845 504.73 469.833 482.209C450.321 460.25 446.255 408.116 488.456 360.124Z"
            fill="illustrationPalette030"
          />
        </g>
        <mask
          id={mask1}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="592"
          y="205"
          width="313"
          height="190"
        >
          <Rect
            x="592"
            y="205"
            width="312.421"
            height="189.684"
            fill="#C4C4C4"
          />
        </mask>
        <g mask={`url(#${mask1})`}>
          <Rect
            x="665.642"
            y="238.474"
            width="167.368"
            height="272.253"
            rx="83.6842"
            stroke="#06808E"
            stroke-width="66.9474"
          />
        </g>
      </g>
      <g filter={`url(#${filter1})`}>
        <Circle
          cx="748.5"
          cy="477.5"
          r="33.5"
          fill="illustrationBackground020"
        />
        <Rect
          x="737"
          y="494"
          width="22"
          height="86"
          rx="11"
          fill="illustrationBackground020"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="570.17"
          y="194.085"
          width="356.082"
          height="467.66"
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
          <feOffset dy="10.9149" />
          <feGaussianBlur stdDeviation="10.9149" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1437_29110"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_29110"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="699"
          y="436"
          width="99"
          height="168"
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
            result="effect1_dropShadow_1437_29110"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_29110"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
