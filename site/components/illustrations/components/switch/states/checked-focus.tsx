import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const CheckedFocus: React.FC = () => {
  const mask0 = getSSRId();
  const clip0 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
      <Rect
        x="296"
        y="283"
        width="509.993"
        height="272"
        rx="136"
        fill="illustrationHighlight010"
      />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="329"
        y="317"
        width="205"
        height="204"
      >
        <Path
          d="M406.497 454.7L370.798 419.001L358.898 430.9L406.497 478.499L508.494 376.502L496.594 364.603L406.497 454.7Z"
          fill="#0A0A0A"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Rect
          x="329.999"
          y="317.007"
          width="203.994"
          height="203.994"
          fill="interface010"
        />
      </g>
      <g clipPath={`url(#${clip0})`}>
        <Rect
          width="203.994"
          height="203.994"
          transform="translate(568 317.007)"
          fill="interface010"
        />
      </g>
      <Rect
        x="288"
        y="275"
        width="525.984"
        height="287.992"
        rx="143.996"
        stroke="#577FFB"
        stroke-width="16"
        stroke-dasharray="23 23"
      />
      <Path
        d="M868.359 455.381H900.021V467.786H853V374.068H868.359V455.381Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M907.746 430.299C907.746 422.838 909.272 416.23 912.326 410.477C915.47 404.723 919.692 400.273 924.991 397.127C930.38 393.891 936.308 392.272 942.775 392.272C948.614 392.272 953.688 393.441 958 395.778C962.401 398.026 965.904 400.858 968.509 404.274V393.486H984.003V467.786H968.509V456.729C965.904 460.235 962.356 463.157 957.865 465.494C953.374 467.831 948.254 469 942.506 469C936.129 469 930.29 467.382 924.991 464.146C919.692 460.819 915.47 456.235 912.326 450.391C909.272 444.458 907.746 437.761 907.746 430.299ZM968.509 430.569C968.509 425.445 967.431 420.995 965.275 417.219C963.209 413.443 960.47 410.567 957.057 408.589C953.643 406.611 949.961 405.622 946.009 405.622C942.057 405.622 938.374 406.611 934.961 408.589C931.548 410.477 928.763 413.308 926.608 417.084C924.542 420.77 923.509 425.175 923.509 430.299C923.509 435.423 924.542 439.918 926.608 443.784C928.763 447.649 931.548 450.616 934.961 452.684C938.464 454.661 942.147 455.65 946.009 455.65C949.961 455.65 953.643 454.661 957.057 452.684C960.47 450.706 963.209 447.829 965.275 444.053C967.431 440.188 968.509 435.693 968.509 430.569Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M1019.54 404.543C1022.14 400.947 1025.69 398.026 1030.18 395.778C1034.76 393.441 1039.83 392.272 1045.4 392.272C1051.96 392.272 1057.89 393.846 1063.19 396.992C1068.49 400.138 1072.66 404.633 1075.72 410.477C1078.77 416.23 1080.3 422.838 1080.3 430.299C1080.3 437.761 1078.77 444.458 1075.72 450.391C1072.66 456.235 1068.44 460.819 1063.05 464.146C1057.75 467.382 1051.87 469 1045.4 469C1039.66 469 1034.54 467.876 1030.04 465.629C1025.64 463.381 1022.14 460.505 1019.54 456.999V467.786H1004.18V368H1019.54V404.543ZM1064.67 430.299C1064.67 425.175 1063.59 420.77 1061.44 417.084C1059.37 413.308 1056.59 410.477 1053.08 408.589C1049.67 406.611 1045.99 405.622 1042.04 405.622C1038.17 405.622 1034.49 406.611 1030.99 408.589C1027.57 410.567 1024.79 413.443 1022.63 417.219C1020.57 420.995 1019.54 425.445 1019.54 430.569C1019.54 435.693 1020.57 440.188 1022.63 444.053C1024.79 447.829 1027.57 450.706 1030.99 452.684C1034.49 454.661 1038.17 455.65 1042.04 455.65C1045.99 455.65 1049.67 454.661 1053.08 452.684C1056.59 450.616 1059.37 447.649 1061.44 443.784C1063.59 439.918 1064.67 435.423 1064.67 430.299Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M1163.53 428.816C1163.53 431.603 1163.35 434.12 1162.99 436.367H1106.27C1106.71 442.3 1108.92 447.065 1112.87 450.661C1116.82 454.257 1121.67 456.055 1127.42 456.055C1135.68 456.055 1141.52 452.594 1144.93 445.672H1161.5C1159.26 452.504 1155.17 458.122 1149.24 462.527C1143.41 466.842 1136.13 469 1127.42 469C1120.32 469 1113.95 467.427 1108.29 464.28C1102.72 461.044 1098.32 456.549 1095.08 450.796C1091.94 444.952 1090.37 438.21 1090.37 430.569C1090.37 422.927 1091.89 416.23 1094.95 410.477C1098.09 404.633 1102.45 400.138 1108.02 396.992C1113.68 393.846 1120.14 392.272 1127.42 392.272C1134.42 392.272 1140.67 393.801 1146.15 396.857C1151.62 399.914 1155.89 404.229 1158.94 409.802C1162 415.286 1163.53 421.624 1163.53 428.816ZM1147.49 423.961C1147.4 418.298 1145.38 413.758 1141.43 410.342C1137.48 406.926 1132.58 405.218 1126.74 405.218C1121.45 405.218 1116.91 406.926 1113.14 410.342C1109.36 413.668 1107.12 418.208 1106.4 423.961H1147.49Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M1194 368V467.786H1178.64V368H1194Z"
        fill="illustrationHighlight010"
      />
      <defs>
        <clipPath id={clip0}>
          <Rect
            x="568"
            y="317.007"
            width="203.994"
            height="203.994"
            rx="101.997"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default CheckedFocus;
