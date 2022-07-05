import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';
import {Circle} from '../../../circle';

export const Hero: React.FC = () => {
  const mask0 = getSSRId();
  const mask1 = getSSRId();
  const mask2 = getSSRId();
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
          x="519"
          y="188"
          width="275"
          height="378"
        >
          <Circle
            cx="656.163"
            cy="428.22"
            r="112.75"
            stroke="#ED6B5A"
            stroke-width="48.8023"
          />
          <Rect
            x="632.602"
            y="198.511"
            width="47.9609"
            height="112.75"
            rx="23.9804"
            fill="#ED6B5A"
          />
          <Rect
            x="625.871"
            y="221.536"
            width="47.9609"
            height="112.75"
            rx="23.9804"
            transform="rotate(-60 625.871 221.536)"
            fill="#ED6B5A"
          />
          <Rect
            x="662.934"
            y="180"
            width="47.9609"
            height="112.75"
            rx="23.9804"
            transform="rotate(60 662.934 180)"
            fill="#ED6B5A"
          />
        </mask>
        <g mask={`url(#${mask0})`}>
          <Path
            d="M382.391 554.994C441.239 671.521 580.333 716.84 693.065 656.217C805.797 595.593 849.478 451.984 790.629 335.457C731.78 218.93 592.687 173.611 479.955 234.234C367.223 294.858 323.542 438.467 382.391 554.994Z"
            fill="illustrationPalette070"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M676.551 552.674C783.279 476.737 782.165 399.663 782.314 397.803C786.682 343.446 788.497 228.441 735.753 173.668C683.009 118.895 570.881 65.7316 532.603 168.669C534.762 297.324 390.233 333.258 384.319 389.862C378.405 446.466 378.463 517.785 433.688 563.767C488.912 609.749 569.822 628.61 676.551 552.674Z"
            fill="illustrationPalette050"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M672.939 409.233C649.334 499.916 596.68 515.436 595.456 515.934C559.672 530.483 511.431 533.531 469.357 520.474C427.284 507.417 390.325 460.051 387.604 421.323C384.882 382.596 403.046 369.06 418.427 307.441C433.809 245.823 406.194 203.495 443.098 187.389C480.003 171.284 575.734 220.789 616.795 237.081C656.83 252.965 696.543 318.551 672.939 409.233Z"
            fill="illustrationPalette040"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M170.77 307.162C240.599 417.983 317.614 421.194 319.463 421.448C373.489 428.858 504.279 433.872 561.925 384.285C619.571 334.697 625.032 210.952 545.856 202.538C516.622 199.432 405.905 33.6059 349.721 24.5254C293.538 15.4449 222.328 11.5012 173.32 64.0589C124.312 116.617 100.941 196.341 170.77 307.162Z"
            fill="illustrationPalette030"
          />
        </g>
        <mask
          id={mask1}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="695"
          y="291"
          width="275"
          height="367"
        >
          <Circle
            cx="832.851"
            cy="428.217"
            r="112.75"
            stroke="black"
            stroke-width="48.8023"
          />
          <Rect
            x="809.289"
            y="545.174"
            width="47.9609"
            height="112.75"
            rx="23.9804"
            fill="black"
          />
          <Rect
            x="758.805"
            y="625.95"
            width="47.9609"
            height="148.09"
            rx="23.9804"
            transform="rotate(-90 758.805 625.95)"
            fill="black"
          />
          <Rect
            x="758.805"
            y="625.95"
            width="47.9609"
            height="148.09"
            rx="23.9804"
            transform="rotate(-90 758.805 625.95)"
            fill="black"
          />
        </mask>
        <g mask={`url(#${mask1})`}>
          <Path
            d="M685.305 599.589C744.153 716.116 883.247 761.435 995.979 700.812C1108.71 640.188 1152.39 496.579 1093.54 380.052C1034.69 263.525 895.601 218.206 782.869 278.83C670.137 339.453 626.456 483.062 685.305 599.589Z"
            fill="illustrationPalette070"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M809.673 596.56C861.144 586.282 873.366 557.915 873.726 557.259C884.23 538.098 903.74 496.342 893.428 467.67C883.117 438.998 850.827 401.183 819.961 432.552C799.668 479.951 740.93 469.408 729.492 489.137C718.054 508.866 706.388 534.955 719.047 560.819C731.706 586.683 758.202 606.838 809.673 596.56Z"
            fill="illustrationPalette050"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1095.93 227.264C1172.4 283.639 1167.18 339.05 1167.19 340.391C1167.41 379.555 1152.11 426.114 1123.97 460.801C1095.83 495.488 1037.32 512.438 999.842 500.413C962.361 488.388 956.46 466.192 904.251 428.504C852.041 390.816 801.795 400.869 800.534 360.063C799.274 319.257 881.932 247.788 912.734 215.273C942.765 183.57 1019.46 170.889 1095.93 227.264Z"
            fill="illustrationPalette040"
          />
        </g>
        <mask
          id={mask2}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="703"
          y="421"
          width="91"
          height="123"
        >
          <mask id="path-17-inside-1_1437_29131" fill="white">
            <Path d="M729.683 543.991C750.132 531.004 766.776 512.831 777.922 491.323C789.069 469.815 794.319 445.738 793.14 421.542L744.769 423.899C745.532 439.552 742.135 455.127 734.925 469.04C727.714 482.954 716.947 494.71 703.719 503.111L729.683 543.991Z" />
          </mask>
          <Path
            d="M729.683 543.991C750.132 531.004 766.776 512.831 777.922 491.323C789.069 469.815 794.319 445.738 793.14 421.542L744.769 423.899C745.532 439.552 742.135 455.127 734.925 469.04C727.714 482.954 716.947 494.71 703.719 503.111L729.683 543.991Z"
            stroke="#ED6B5A"
            stroke-width="97.6046"
            mask="url(#path-17-inside-1_1437_29131)"
          />
        </mask>
        <g mask={`url(#${mask2})`}>
          <Path
            d="M382.379 554.994C441.228 671.521 580.321 716.84 693.053 656.217C805.785 595.593 849.466 451.984 790.617 335.457C731.769 218.93 592.675 173.611 479.943 234.234C367.212 294.858 323.53 438.467 382.379 554.994Z"
            fill="illustrationPalette070"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M676.539 552.673C783.268 476.736 782.153 399.662 782.303 397.802C786.67 343.445 788.486 228.44 735.742 173.667C682.998 118.894 570.869 65.7306 532.591 168.668C534.75 297.323 390.222 333.257 384.308 389.861C378.394 446.465 378.451 517.784 433.676 563.766C488.901 609.748 569.81 628.609 676.539 552.673Z"
            fill="illustrationPalette050"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="503.012"
          y="180.773"
          width="482.988"
          height="501.15"
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
            result="effect1_dropShadow_1437_29131"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1437_29131"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
