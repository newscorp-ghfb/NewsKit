import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';

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
      <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
      <Path
        d="M487 419C487 276.511 602.511 161 745 161V161C887.489 161 1003 276.511 1003 419V419C1003 561.489 887.489 677 745 677V677C602.511 677 487 561.489 487 419V419Z"
        fill="interface010"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M520.29 419C520.29 543.104 620.896 643.71 745 643.71C869.104 643.71 969.71 543.104 969.71 419C969.71 294.896 869.104 194.29 745 194.29C620.896 194.29 520.29 294.896 520.29 419ZM745 161C602.511 161 487 276.511 487 419C487 561.489 602.511 677 745 677C887.489 677 1003 561.489 1003 419C1003 276.511 887.489 161 745 161Z"
        fill="illustrationPalette040"
      />
      <Path
        d="M604 419C604 341.128 666.904 278 744.5 278C822.096 278 885 341.128 885 419C885 496.872 822.096 560 744.5 560C666.904 560 604 496.872 604 419Z"
        fill="illustrationPalette040"
      />
      <g filter={`url(#${filter0})`}>
        <mask
          id={mask0}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="603"
          y="277"
          width="284"
          height="284"
        >
          <Path
            d="M603.744 419C603.744 340.986 666.988 277.742 745.002 277.742C823.017 277.742 886.26 340.986 886.26 419C886.26 497.015 823.017 560.258 745.002 560.258C666.988 560.258 603.744 497.015 603.744 419Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${mask0})`}>
          <Path
            d="M674.293 207.897C557.616 239.16 488.316 358.873 519.508 475.283C550.7 591.693 670.572 660.717 787.249 629.454C903.927 598.19 973.226 478.477 942.035 362.067C910.843 245.658 790.971 176.633 674.293 207.897Z"
            fill="illustrationPalette060"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M982.575 370.287C962.726 255.353 898.77 228.704 897.297 227.916C854.254 204.883 760.217 162.258 693.97 186.046C627.723 209.833 561.359 351.458 630.858 419.754C693.66 481.47 682.881 550.803 727.156 575.911C771.432 601.02 834.504 602.96 894.499 573.988C954.495 545.016 1002.42 485.221 982.575 370.287Z"
            fill="illustrationPalette050"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M897.335 228.54C897.182 228.469 897.083 228.422 897.039 228.399C875.535 216.892 841.304 200.497 804.185 189.95C767.051 179.399 727.116 174.726 694.155 186.561C677.719 192.463 661.226 205.696 646.812 223.34C632.402 240.978 620.099 262.988 612.027 286.388C595.874 333.215 596.711 385.43 631.242 419.363C662.734 450.31 675.773 483.17 686.467 511.366C686.792 512.224 687.115 513.077 687.437 513.925C697.697 541.022 706.161 563.375 727.427 575.435C771.522 600.442 834.402 602.401 894.261 573.495C924.177 559.049 951.057 536.932 967.992 504.122C984.927 471.313 991.944 427.757 982.035 370.38C972.127 313.009 951.218 277.707 932.634 256.659C915.164 236.872 899.731 229.66 897.335 228.54ZM897.592 228.057C902.543 230.371 963.317 258.779 982.575 370.287C1002.42 485.221 954.495 545.016 894.499 573.988C834.504 602.96 771.432 601.02 727.156 575.911C705.716 563.752 697.186 541.222 686.958 514.208C676.066 485.439 663.248 451.583 630.858 419.754C561.359 351.458 627.723 209.833 693.97 186.046C760.217 162.258 854.254 204.883 897.297 227.916C897.341 227.939 897.44 227.986 897.592 228.057Z"
            fill="illustrationPalette050"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M966.064 261.82C1016.48 333.141 996.55 381.189 996.184 382.388C985.478 417.421 971.144 465.88 923.234 488.471C875.323 511.062 797.74 488.972 796.112 488.385C763.891 476.764 764.06 422.953 744.414 388.937C723.307 352.389 706.771 320.855 717.032 284.07C727.293 247.285 775.393 221.438 811.06 200.852C845.835 180.781 915.651 190.499 966.064 261.82Z"
            fill="illustrationPalette040"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M995.743 381.996C995.7 382.115 995.671 382.192 995.66 382.228L995.314 383.362C984.632 418.33 970.149 465.744 923 487.976C899.187 499.204 867.941 499.345 842.376 496.575C816.822 493.807 797.063 488.146 796.298 487.87C780.458 482.157 772.511 466.052 766.066 446.885C764.459 442.105 762.949 437.148 761.433 432.129C761.296 431.674 761.158 431.219 761.021 430.763C759.641 426.192 758.249 421.58 756.77 417.023C753.516 407.002 749.829 397.217 744.888 388.663C723.765 352.088 707.368 320.751 717.559 284.217C722.641 265.999 737.115 250.432 754.852 236.821C770.655 224.694 788.978 214.171 805.413 204.732C807.417 203.581 809.393 202.446 811.334 201.326C845.792 181.438 915.314 190.971 965.617 262.136C990.768 297.717 998.352 327.462 999.62 348.433C1000.81 368.145 996.425 380.131 995.743 381.996ZM996.266 382.157C997.676 378.305 1014.97 331.016 966.064 261.82C915.651 190.499 845.835 180.781 811.06 200.852C809.121 201.971 807.145 203.106 805.14 204.258C770.274 224.281 726.735 249.286 717.032 284.07C706.771 320.855 723.307 352.389 744.414 388.937C751.559 401.308 756.083 416.296 760.497 430.922C768.221 456.512 775.609 480.99 796.112 488.385C797.74 488.972 875.323 511.062 923.234 488.471C970.603 466.135 985.15 418.512 995.82 383.58C995.942 383.181 996.063 382.784 996.184 382.388C996.195 382.353 996.223 382.275 996.266 382.157Z"
            fill="illustrationPalette040"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M953.503 262.845C982.434 303.773 970.998 331.346 970.788 332.034C964.644 352.138 956.418 379.947 928.924 392.911C901.43 405.875 856.908 393.199 855.974 392.862C837.483 386.193 837.58 355.313 826.306 335.792C814.194 314.819 804.704 296.723 810.593 275.613C816.481 254.504 844.084 239.671 864.552 227.857C884.508 216.339 924.573 221.916 953.503 262.845Z"
            fill="illustrationPalette030"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M970.312 331.741C970.287 331.809 970.27 331.854 970.264 331.874L970.073 332.5C963.938 352.583 955.654 379.702 928.691 392.416C915.086 398.831 897.209 398.918 882.548 397.33C875.23 396.537 868.737 395.33 864.017 394.3C861.657 393.785 859.741 393.314 858.387 392.962C857.71 392.787 857.174 392.64 856.793 392.533C856.603 392.48 856.453 392.436 856.343 392.404C856.289 392.387 856.245 392.374 856.213 392.364L856.174 392.352C856.164 392.348 856.159 392.347 856.159 392.347C847.185 389.11 842.652 379.976 838.953 368.972C838.032 366.233 837.166 363.391 836.296 360.511C836.217 360.25 836.139 359.989 836.06 359.727C835.268 357.105 834.468 354.455 833.619 351.838C831.75 346.082 829.628 340.449 826.78 335.518C814.652 314.518 805.302 296.618 811.12 275.76C814.016 265.38 822.272 256.485 832.438 248.684C841.494 241.735 851.995 235.704 861.427 230.286C862.577 229.626 863.712 228.974 864.826 228.331C884.465 216.996 924.236 222.388 953.056 263.161C967.465 283.546 971.802 300.574 972.527 312.563C973.208 323.829 970.703 330.672 970.312 331.741ZM970.835 331.902C971.644 329.691 981.571 302.553 953.503 262.845C924.573 221.916 884.508 216.339 864.552 227.857C863.439 228.5 862.305 229.151 861.155 229.812C841.146 241.302 816.161 255.652 810.593 275.613C804.704 296.723 814.194 314.819 826.306 335.792C830.406 342.891 833.002 351.493 835.536 359.886C839.968 374.571 844.208 388.618 855.974 392.862C856.908 393.199 901.43 405.875 928.924 392.911C956.108 380.093 964.456 352.764 970.579 332.718C970.649 332.489 970.718 332.261 970.788 332.034C970.794 332.014 970.81 331.97 970.835 331.902Z"
            fill="illustrationPalette030"
          />
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="594.984"
          y="273.362"
          width="300.036"
          height="300.036"
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
          <feOffset dy="4.38009" />
          <feGaussianBlur stdDeviation="4.38009" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_973_177532"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_973_177532"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
