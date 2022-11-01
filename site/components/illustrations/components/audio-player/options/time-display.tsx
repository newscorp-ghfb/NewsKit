import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const TimeDisplay: React.FC = () => {
  const clip0 = getSSRId();
  const clip1 = getSSRId();
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
      <g filter={`url(#${filter0})`}>
        <Rect
          width="1249"
          height="143.55"
          transform="translate(120 347)"
          fill="interfaceBackground"
        />
        <Rect
          x="167.85"
          y="370.925"
          width="95.7001"
          height="95.7001"
          rx="47.8501"
          fill="illustrationInterface030"
        />
        <Path
          d="M207.725 404.817V432.73L229.656 418.774L207.725 404.817Z"
          fill="interfaceBackground"
        />
        <Path
          d="M314.271 417.507C314.271 411.989 315.196 407.682 317.047 404.588C318.929 401.462 322.151 399.899 326.712 399.899C331.274 399.899 334.48 401.462 336.33 404.588C338.212 407.682 339.153 411.989 339.153 417.507C339.153 423.09 338.212 427.46 336.33 430.618C334.48 433.745 331.274 435.308 326.712 435.308C322.151 435.308 318.929 433.745 317.047 430.618C315.196 427.46 314.271 423.09 314.271 417.507ZM333.794 417.507C333.794 414.923 333.619 412.738 333.268 410.952C332.949 409.166 332.279 407.714 331.258 406.598C330.237 405.449 328.722 404.875 326.712 404.875C324.703 404.875 323.187 405.449 322.167 406.598C321.146 407.714 320.46 409.166 320.109 410.952C319.79 412.738 319.631 414.923 319.631 417.507C319.631 420.187 319.79 422.436 320.109 424.254C320.428 426.073 321.098 427.54 322.119 428.656C323.171 429.773 324.703 430.331 326.712 430.331C328.722 430.331 330.237 429.773 331.258 428.656C332.311 427.54 332.997 426.073 333.316 424.254C333.635 422.436 333.794 420.187 333.794 417.507ZM344.925 417.507C344.925 411.989 345.85 407.682 347.701 404.588C349.583 401.462 352.805 399.899 357.366 399.899C361.928 399.899 365.134 401.462 366.984 404.588C368.866 407.682 369.807 411.989 369.807 417.507C369.807 423.09 368.866 427.46 366.984 430.618C365.134 433.745 361.928 435.308 357.366 435.308C352.805 435.308 349.583 433.745 347.701 430.618C345.85 427.46 344.925 423.09 344.925 417.507ZM364.448 417.507C364.448 414.923 364.273 412.738 363.922 410.952C363.603 409.166 362.933 407.714 361.912 406.598C360.891 405.449 359.376 404.875 357.366 404.875C355.357 404.875 353.841 405.449 352.821 406.598C351.8 407.714 351.114 409.166 350.763 410.952C350.444 412.738 350.284 414.923 350.284 417.507C350.284 420.187 350.444 422.436 350.763 424.254C351.082 426.073 351.752 427.54 352.773 428.656C353.825 429.773 355.357 430.331 357.366 430.331C359.376 430.331 360.891 429.773 361.912 428.656C362.965 427.54 363.651 426.073 363.97 424.254C364.289 422.436 364.448 420.187 364.448 417.507ZM378.498 435.738C377.509 435.738 376.68 435.403 376.01 434.733C375.34 434.064 375.005 433.234 375.005 432.245C375.005 431.256 375.34 430.427 376.01 429.757C376.68 429.087 377.509 428.752 378.498 428.752C379.455 428.752 380.269 429.087 380.938 429.757C381.608 430.427 381.943 431.256 381.943 432.245C381.943 433.234 381.608 434.064 380.938 434.733C380.269 435.403 379.455 435.738 378.498 435.738ZM378.498 415.641C377.509 415.641 376.68 415.306 376.01 414.636C375.34 413.966 375.005 413.137 375.005 412.148C375.005 411.159 375.34 410.33 376.01 409.66C376.68 408.99 377.509 408.655 378.498 408.655C379.455 408.655 380.269 408.99 380.938 409.66C381.608 410.33 381.943 411.159 381.943 412.148C381.943 413.137 381.608 413.966 380.938 414.636C380.269 415.306 379.455 415.641 378.498 415.641ZM387.212 409.134C387.404 406.167 388.536 403.854 390.61 402.195C392.715 400.537 395.395 399.707 398.649 399.707C400.882 399.707 402.812 400.106 404.438 400.903C406.065 401.701 407.293 402.786 408.123 404.157C408.952 405.529 409.367 407.076 409.367 408.799C409.367 410.776 408.841 412.467 407.788 413.871C406.735 415.274 405.475 416.215 404.008 416.694V416.885C405.89 417.46 407.357 418.512 408.41 420.043C409.463 421.543 409.989 423.473 409.989 425.833C409.989 427.715 409.558 429.39 408.697 430.858C407.836 432.325 406.56 433.489 404.869 434.351C403.178 435.18 401.153 435.595 398.792 435.595C395.347 435.595 392.508 434.717 390.275 432.963C388.074 431.177 386.893 428.625 386.734 425.307H391.997C392.125 426.998 392.779 428.385 393.959 429.47C395.14 430.523 396.735 431.049 398.744 431.049C400.69 431.049 402.189 430.523 403.242 429.47C404.295 428.385 404.821 426.998 404.821 425.307C404.821 423.074 404.103 421.495 402.668 420.57C401.264 419.613 399.095 419.134 396.16 419.134H394.916V414.636H396.208C398.792 414.604 400.754 414.174 402.094 413.344C403.465 412.515 404.151 411.207 404.151 409.421C404.151 407.89 403.657 406.677 402.668 405.784C401.679 404.859 400.275 404.396 398.457 404.396C396.671 404.396 395.283 404.859 394.294 405.784C393.305 406.677 392.715 407.794 392.524 409.134H387.212ZM415.719 417.507C415.719 411.989 416.644 407.682 418.494 404.588C420.376 401.462 423.598 399.899 428.16 399.899C432.722 399.899 435.928 401.462 437.778 404.588C439.66 407.682 440.601 411.989 440.601 417.507C440.601 423.09 439.66 427.46 437.778 430.618C435.928 433.745 432.722 435.308 428.16 435.308C423.598 435.308 420.376 433.745 418.494 430.618C416.644 427.46 415.719 423.09 415.719 417.507ZM435.242 417.507C435.242 414.923 435.066 412.738 434.716 410.952C434.397 409.166 433.727 407.714 432.706 406.598C431.685 405.449 430.17 404.875 428.16 404.875C426.15 404.875 424.635 405.449 423.614 406.598C422.594 407.714 421.908 409.166 421.557 410.952C421.238 412.738 421.078 414.923 421.078 417.507C421.078 420.187 421.238 422.436 421.557 424.254C421.876 426.073 422.546 427.54 423.566 428.656C424.619 429.773 426.15 430.331 428.16 430.331C430.17 430.331 431.685 429.773 432.706 428.656C433.759 427.54 434.444 426.073 434.763 424.254C435.082 422.436 435.242 420.187 435.242 417.507Z"
          fill="illustrationHighlight010"
        />
        <g clipPath={`url(#${clip0})`}>
          <Rect
            x="492.25"
            y="406.851"
            width="660.297"
            height="23.925"
            fill="illustrationInterface020"
          />
        </g>
        <g clipPath={`url(#${clip1})`}>
          <Rect
            x="492.25"
            y="406.851"
            width="330.025"
            height="23.925"
            fill="illustrationInterface030"
          />
        </g>
        <Path
          d="M851 419C851 432.255 840.255 443 827 443C813.745 443 803 432.255 803 419C803 405.745 813.745 395 827 395C840.255 395 851 405.745 851 419Z"
          fill="illustrationInterface030"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M827 439.976C838.585 439.976 847.976 430.585 847.976 419C847.976 407.415 838.585 398.024 827 398.024C815.415 398.024 806.024 407.415 806.024 419C806.024 430.585 815.415 439.976 827 439.976ZM827 443C840.255 443 851 432.255 851 419C851 405.745 840.255 395 827 395C813.745 395 803 405.745 803 419C803 432.255 813.745 443 827 443Z"
          fill="interface010"
        />
        <Path
          d="M1203.6 417.507C1203.6 411.989 1204.53 407.682 1206.38 404.588C1208.26 401.462 1211.48 399.899 1216.04 399.899C1220.6 399.899 1223.81 401.462 1225.66 404.588C1227.54 407.682 1228.48 411.989 1228.48 417.507C1228.48 423.09 1227.54 427.46 1225.66 430.618C1223.81 433.745 1220.6 435.308 1216.04 435.308C1211.48 435.308 1208.26 433.745 1206.38 430.618C1204.53 427.46 1203.6 423.09 1203.6 417.507ZM1223.12 417.507C1223.12 414.923 1222.95 412.738 1222.6 410.952C1222.28 409.166 1221.61 407.714 1220.59 406.598C1219.57 405.449 1218.05 404.875 1216.04 404.875C1214.03 404.875 1212.52 405.449 1211.5 406.598C1210.48 407.714 1209.79 409.166 1209.44 410.952C1209.12 412.738 1208.96 414.923 1208.96 417.507C1208.96 420.187 1209.12 422.436 1209.44 424.254C1209.76 426.073 1210.43 427.54 1211.45 428.656C1212.5 429.773 1214.03 430.331 1216.04 430.331C1218.05 430.331 1219.57 429.773 1220.59 428.656C1221.64 427.54 1222.33 426.073 1222.65 424.254C1222.96 422.436 1223.12 420.187 1223.12 417.507ZM1233.54 405.497V400.521H1243.49V435.403H1237.99V405.497H1233.54ZM1253.9 435.738C1252.91 435.738 1252.08 435.403 1251.41 434.733C1250.74 434.064 1250.41 433.234 1250.41 432.245C1250.41 431.256 1250.74 430.427 1251.41 429.757C1252.08 429.087 1252.91 428.752 1253.9 428.752C1254.86 428.752 1255.67 429.087 1256.34 429.757C1257.01 430.427 1257.35 431.256 1257.35 432.245C1257.35 433.234 1257.01 434.064 1256.34 434.733C1255.67 435.403 1254.86 435.738 1253.9 435.738ZM1253.9 415.641C1252.91 415.641 1252.08 415.306 1251.41 414.636C1250.74 413.966 1250.41 413.137 1250.41 412.148C1250.41 411.159 1250.74 410.33 1251.41 409.66C1252.08 408.99 1252.91 408.655 1253.9 408.655C1254.86 408.655 1255.67 408.99 1256.34 409.66C1257.01 410.33 1257.35 411.159 1257.35 412.148C1257.35 413.137 1257.01 413.966 1256.34 414.636C1255.67 415.306 1254.86 415.641 1253.9 415.641ZM1262.71 417.507C1262.71 411.989 1263.64 407.682 1265.49 404.588C1267.37 401.462 1270.59 399.899 1275.15 399.899C1279.72 399.899 1282.92 401.462 1284.77 404.588C1286.65 407.682 1287.6 411.989 1287.6 417.507C1287.6 423.09 1286.65 427.46 1284.77 430.618C1282.92 433.745 1279.72 435.308 1275.15 435.308C1270.59 435.308 1267.37 433.745 1265.49 430.618C1263.64 427.46 1262.71 423.09 1262.71 417.507ZM1282.24 417.507C1282.24 414.923 1282.06 412.738 1281.71 410.952C1281.39 409.166 1280.72 407.714 1279.7 406.598C1278.68 405.449 1277.16 404.875 1275.15 404.875C1273.14 404.875 1271.63 405.449 1270.61 406.598C1269.59 407.714 1268.9 409.166 1268.55 410.952C1268.23 412.738 1268.07 414.923 1268.07 417.507C1268.07 420.187 1268.23 422.436 1268.55 424.254C1268.87 426.073 1269.54 427.54 1270.56 428.656C1271.61 429.773 1273.14 430.331 1275.15 430.331C1277.16 430.331 1278.68 429.773 1279.7 428.656C1280.75 427.54 1281.44 426.073 1281.76 424.254C1282.08 422.436 1282.24 420.187 1282.24 417.507ZM1293.37 417.507C1293.37 411.989 1294.29 407.682 1296.14 404.588C1298.02 401.462 1301.25 399.899 1305.81 399.899C1310.37 399.899 1313.58 401.462 1315.43 404.588C1317.31 407.682 1318.25 411.989 1318.25 417.507C1318.25 423.09 1317.31 427.46 1315.43 430.618C1313.58 433.745 1310.37 435.308 1305.81 435.308C1301.25 435.308 1298.02 433.745 1296.14 430.618C1294.29 427.46 1293.37 423.09 1293.37 417.507ZM1312.89 417.507C1312.89 414.923 1312.71 412.738 1312.36 410.952C1312.04 409.166 1311.37 407.714 1310.35 406.598C1309.33 405.449 1307.82 404.875 1305.81 404.875C1303.8 404.875 1302.28 405.449 1301.26 406.598C1300.24 407.714 1299.56 409.166 1299.2 410.952C1298.89 412.738 1298.73 414.923 1298.73 417.507C1298.73 420.187 1298.89 422.436 1299.2 424.254C1299.52 426.073 1300.19 427.54 1301.21 428.656C1302.27 429.773 1303.8 430.331 1305.81 430.331C1307.82 430.331 1309.33 429.773 1310.35 428.656C1311.41 427.54 1312.09 426.073 1312.41 424.254C1312.73 422.436 1312.89 420.187 1312.89 417.507Z"
          fill="illustrationHighlight010"
        />
      </g>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M852 626.375V631.925L415.065 631.925C393.098 631.925 375.29 614.117 375.29 592.15L375.29 552.3C375.29 550.767 376.533 549.525 378.065 549.525C379.598 549.525 380.84 550.767 380.84 552.3V592.15C380.84 611.052 396.163 626.375 415.065 626.375L852 626.375Z"
        fill="illustrationHighlight010"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M780.29 626.375V631.925L1217.22 631.925C1239.19 631.925 1257 614.117 1257 592.15L1257 552.3C1257 550.767 1255.76 549.525 1254.22 549.525C1252.69 549.525 1251.45 550.767 1251.45 552.3V592.15C1251.45 611.052 1236.13 626.375 1217.22 626.375L780.29 626.375Z"
        fill="illustrationHighlight010"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M378.277 543.475C376.744 543.475 375.502 542.232 375.502 540.7V532.275C375.502 530.742 376.744 529.5 378.277 529.5C379.81 529.5 381.052 530.742 381.052 532.275V540.7C381.052 542.232 379.81 543.475 378.277 543.475ZM378.277 518.2C376.744 518.2 375.502 516.957 375.502 515.425V498.575C375.502 497.042 376.744 495.8 378.277 495.8C379.81 495.8 381.052 497.042 381.052 498.575V515.425C381.052 516.957 379.81 518.2 378.277 518.2ZM378.277 484.5C376.744 484.5 375.502 483.257 375.502 481.725L375.502 473.3C375.502 471.767 376.744 470.525 378.277 470.525C379.81 470.525 381.052 471.767 381.052 473.3L381.052 481.725C381.052 483.257 379.81 484.5 378.277 484.5Z"
        fill="illustrationHighlight010"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1254.28 543.475C1252.74 543.475 1251.5 542.232 1251.5 540.7V532.275C1251.5 530.742 1252.74 529.5 1254.28 529.5C1255.81 529.5 1257.05 530.742 1257.05 532.275V540.7C1257.05 542.232 1255.81 543.475 1254.28 543.475ZM1254.28 518.2C1252.74 518.2 1251.5 516.957 1251.5 515.425V498.575C1251.5 497.042 1252.74 495.8 1254.28 495.8C1255.81 495.8 1257.05 497.042 1257.05 498.575V515.425C1257.05 516.957 1255.81 518.2 1254.28 518.2ZM1254.28 484.5C1252.74 484.5 1251.5 483.257 1251.5 481.725V473.3C1251.5 471.767 1252.74 470.525 1254.28 470.525C1255.81 470.525 1257.05 471.767 1257.05 473.3V481.725C1257.05 483.257 1255.81 484.5 1254.28 484.5Z"
        fill="illustrationHighlight010"
      />
      <defs>
        <filter
          id={filter0}
          x="96.075"
          y="335.037"
          width="1296.85"
          height="191.4"
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
          <feOffset dy="11.9625" />
          <feGaussianBlur stdDeviation="11.9625" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2539_122445"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2539_122445"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect
            x="492.25"
            y="406.812"
            width="660.297"
            height="23.925"
            rx="11.9625"
            fill="white"
          />
        </clipPath>
        <clipPath id={clip1}>
          <Rect
            x="492.25"
            y="406.812"
            width="330.025"
            height="23.925"
            rx="11.9625"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default TimeDisplay;
