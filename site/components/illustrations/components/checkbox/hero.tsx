import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Hero: React.FC = () => {
  const mask0 = getSSRId();
  const mask1 = getSSRId();
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
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="524"
        y="198"
        width="442"
        height="442"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M564 198C541.909 198 524 215.909 524 238V600C524 622.091 541.909 640 564 640H926C948.091 640 966 622.091 966 600V238C966 215.909 948.091 198 926 198H564ZM894.074 339.21C901.922 331.438 901.983 318.775 894.21 310.926C886.438 303.078 873.775 303.017 865.926 310.79L698.811 476.296L640.618 413.977C633.079 405.904 620.423 405.47 612.35 413.009C604.277 420.548 603.844 433.204 611.382 441.277L680.822 515.639C690.057 525.529 705.637 525.833 715.251 516.312L894.074 339.21Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <g filter={`url(#${filter0})`}>
          <mask
            id={mask1}
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="524"
            y="198"
            width="442"
            height="442"
          >
            <Rect
              x="524"
              y="198"
              width="442"
              height="442"
              rx="40"
              fill="white"
            />
          </mask>
          <g mask={`url(#${mask1})`}>
            <Path
              d="M595.917 59.8416C382.812 116.943 256.239 335.592 313.21 548.208C370.18 760.824 589.12 886.894 802.225 829.793C1015.33 772.691 1141.9 554.042 1084.93 341.426C1027.96 128.81 809.022 2.74025 595.917 59.8416Z"
              fill="illustrationPalette060"
            />
            <Path
              d="M1002.99 96.8476C1003.07 96.8906 1003.25 96.9756 1003.53 97.1056C1007.91 99.1526 1036.17 112.36 1068.14 148.574C1102.15 187.09 1140.38 251.652 1158.49 356.525C1176.6 461.403 1163.78 541.071 1132.79 601.112C1101.8 661.153 1052.61 701.617 997.897 728.038C888.443 780.893 773.421 777.333 692.718 731.566C653.719 709.449 638.199 668.461 619.489 619.046C618.892 617.47 618.291 615.884 617.687 614.29C598.159 562.801 574.374 502.873 516.939 446.432C453.671 384.259 452.19 288.648 481.721 203.039C496.483 160.247 518.982 119.995 545.339 87.7332C571.7 55.4657 601.893 31.2242 632.027 20.4037C692.377 -1.2663 765.441 7.30182 833.298 26.583C901.14 45.8601 963.697 75.8223 1002.99 96.8476Z"
              fill="illustrationPalette050"
              stroke="#446BE4"
            />
            <Path
              d="M1183.35 378.396C1183.37 378.33 1183.42 378.189 1183.5 377.972C1184.75 374.565 1192.78 352.597 1190.6 316.494C1188.28 278.095 1174.39 223.679 1128.41 158.619C1036.43 28.4967 909.184 10.9171 845.958 47.4087C842.415 49.4536 838.806 51.5266 835.144 53.6294C805.131 70.8659 771.635 90.1034 742.743 112.274C710.321 137.154 683.779 165.67 674.452 199.103C655.775 266.059 685.85 323.476 724.416 390.252C733.413 405.83 740.134 423.662 746.074 441.955C748.775 450.273 751.316 458.692 753.836 467.04C754.087 467.873 754.338 468.705 754.589 469.535C757.357 478.701 760.117 487.761 763.055 496.501C774.823 531.5 789.398 561.145 818.576 571.668C820.018 572.188 856.146 582.535 902.851 587.595C949.565 592.656 1006.75 592.413 1050.37 571.844C1136.69 531.143 1163.2 444.353 1182.7 380.519C1182.92 379.808 1183.13 379.101 1183.35 378.396Z"
              fill="illustrationPalette040"
              stroke="#577FFB"
            />
            <Path
              d="M1136.97 286.429C1136.98 286.391 1137.01 286.31 1137.06 286.185C1137.78 284.231 1142.38 271.656 1141.13 250.981C1139.8 228.986 1131.84 197.797 1105.47 160.492C1052.73 85.8803 979.827 75.864 943.667 96.734C941.634 97.9077 939.562 99.0974 937.461 100.304C920.236 110.196 901.027 121.229 884.459 133.942C865.864 148.212 850.678 164.54 845.345 183.659C834.654 221.984 851.859 254.857 873.997 293.188C879.171 302.148 883.033 312.397 886.444 322.899C887.994 327.675 889.453 332.509 890.899 337.299C891.043 337.777 891.187 338.254 891.331 338.731C892.92 343.991 894.503 349.187 896.188 354.199C902.942 374.288 911.28 391.202 927.919 397.202C928.728 397.494 949.444 403.429 976.232 406.331C1003.03 409.234 1035.8 409.089 1060.78 397.311C1110.22 373.995 1125.41 324.271 1136.61 287.624C1136.73 287.224 1136.85 286.826 1136.97 286.429Z"
              fill="illustrationPalette030"
              stroke="#87A4FC"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id={filter0}
          x="508"
          y="190"
          width="474"
          height="474"
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
            result="effect1_dropShadow_568_193186"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_568_193186"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default Hero;
