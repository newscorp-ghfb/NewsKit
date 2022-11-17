import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const PlayPauseLive: React.FC = () => {
  const clip0 = getSSRId();
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
      <g clipPath={`url(#${clip0})`}>
        <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
        <g filter={`url(#${filter0})`}>
          <Rect
            x="-73"
            y="83"
            width="1664"
            height="304"
            rx="6.82903"
            fill="interfaceBackground"
          />
        </g>
        <g filter={`url(#${filter1})`}>
          <Rect
            x="-97"
            y="450"
            width="1736"
            height="304"
            rx="6.82903"
            fill="interfaceBackground"
          />
        </g>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M350.762 213.268H343.463V257.059H350.762V213.268ZM387.254 257.059L356.235 235.163L387.254 213.268V257.059Z"
          fill="illustrationPalette020"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M579.833 230.483C580.415 228.65 580.665 226.317 580.665 223.651V217.486C580.665 214.82 580.332 212.57 579.75 210.654C579.167 208.738 578.335 207.155 577.253 205.905C576.172 204.655 574.924 203.739 573.426 203.155C571.928 202.572 570.347 202.322 568.517 202.322C566.686 202.322 565.022 202.572 563.607 203.155C562.193 203.739 560.862 204.655 559.863 205.905C558.865 207.155 558.032 208.821 557.45 210.654C556.868 212.487 556.618 214.82 556.618 217.486V223.651C556.618 226.317 556.951 228.567 557.533 230.483C558.116 232.4 558.948 233.983 560.029 235.232C561.111 236.482 562.359 237.399 563.857 237.982C565.355 238.565 566.936 238.815 568.766 238.815C570.597 238.815 572.261 238.565 573.676 237.982C575.09 237.399 576.421 236.482 577.42 235.232C578.418 233.983 579.25 232.316 579.833 230.483ZM537.98 238.312H545.052V202.736H544.303L529.576 207.985V213.733L537.98 211.151V238.312ZM573.593 216.489C573.593 214.906 573.51 213.573 573.26 212.49C573.01 211.407 572.678 210.574 572.262 209.907C571.846 209.241 571.346 208.741 570.681 208.491C570.015 208.241 569.349 208.074 568.6 208.074C567.852 208.074 567.103 208.241 566.52 208.491C565.938 208.741 565.355 209.241 564.939 209.907C564.523 210.574 564.19 211.407 563.941 212.49C563.691 213.573 563.608 214.906 563.608 216.489V224.571C563.608 226.154 563.691 227.487 563.941 228.57C564.19 229.653 564.523 230.57 564.939 231.236C565.355 231.903 565.855 232.403 566.52 232.652C567.186 232.902 567.852 233.069 568.6 233.069C569.349 233.069 570.098 232.902 570.681 232.652C571.263 232.403 571.846 231.903 572.262 231.236C572.678 230.57 573.01 229.653 573.177 228.57C573.343 227.487 573.51 226.154 573.51 224.571V216.489H573.593ZM569.718 268.009L553.765 257.061L569.718 246.114V268.009ZM552.827 268.009L536.874 257.061L552.827 246.114V268.009Z"
          fill="illustrationPalette020"
        />
        <Rect
          x="657.3"
          y="147.582"
          width="175.165"
          height="175.165"
          rx="87.5823"
          fill="illustrationHighlight010"
        />
        <Path
          d="M730.285 209.619V260.709L770.427 235.164L730.285 209.619Z"
          fill="illustrationInterface010"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1251.17 255.327H1255.17V215.266H1251.17V255.327ZM1243.15 247.313H1247.16V223.276H1243.15V247.313ZM1239.15 239.304H1235.14V231.292H1239.15V239.304ZM1259.18 247.313H1263.19V223.276H1259.18V247.313ZM1267.19 239.304V231.292H1271.2V239.304H1267.19Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M1308.06 243.997H1316.53V247.314H1303.95V222.256H1308.06V243.997ZM1322.06 224.816C1321.31 224.816 1320.69 224.564 1320.18 224.059C1319.68 223.554 1319.43 222.929 1319.43 222.184C1319.43 221.439 1319.68 220.814 1320.18 220.309C1320.69 219.804 1321.31 219.552 1322.06 219.552C1322.78 219.552 1323.39 219.804 1323.9 220.309C1324.4 220.814 1324.66 221.439 1324.66 222.184C1324.66 222.929 1324.4 223.554 1323.9 224.059C1323.39 224.564 1322.78 224.816 1322.06 224.816ZM1324.08 227.448V247.314H1319.97V227.448H1324.08ZM1337.16 243.637L1342.78 227.448H1347.14L1339.57 247.314H1334.67L1327.13 227.448H1331.53L1337.16 243.637ZM1368.46 236.895C1368.46 237.64 1368.41 238.313 1368.31 238.914H1353.13C1353.25 240.5 1353.84 241.774 1354.9 242.735C1355.96 243.697 1357.26 244.178 1358.79 244.178C1361.01 244.178 1362.57 243.252 1363.48 241.401H1367.92C1367.32 243.228 1366.22 244.731 1364.64 245.908C1363.07 247.062 1361.13 247.639 1358.79 247.639C1356.9 247.639 1355.19 247.218 1353.67 246.377C1352.18 245.512 1351.01 244.31 1350.14 242.772C1349.3 241.209 1348.88 239.406 1348.88 237.363C1348.88 235.32 1349.29 233.529 1350.11 231.991C1350.95 230.429 1352.11 229.227 1353.6 228.386C1355.12 227.544 1356.85 227.124 1358.79 227.124C1360.67 227.124 1362.34 227.532 1363.81 228.349C1365.27 229.167 1366.41 230.32 1367.23 231.811C1368.05 233.277 1368.46 234.972 1368.46 236.895ZM1364.17 235.597C1364.14 234.082 1363.6 232.868 1362.54 231.955C1361.49 231.042 1360.18 230.585 1358.61 230.585C1357.2 230.585 1355.98 231.042 1354.97 231.955C1353.96 232.844 1353.36 234.058 1353.17 235.597H1364.17Z"
          fill="illustrationHighlight010"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M350.762 580.492H343.463V624.283H350.762V580.492ZM387.254 624.283L356.235 602.388L387.254 580.492V624.283Z"
          fill="illustrationPalette020"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M579.833 597.708C580.415 595.875 580.665 593.542 580.665 590.876V584.71C580.665 582.044 580.332 579.795 579.75 577.879C579.167 575.962 578.335 574.379 577.253 573.129C576.172 571.88 574.924 570.963 573.426 570.38C571.928 569.797 570.347 569.547 568.517 569.547C566.686 569.547 565.022 569.797 563.607 570.38C562.193 570.963 560.862 571.88 559.863 573.129C558.865 574.379 558.032 576.046 557.45 577.879C556.868 579.711 556.618 582.044 556.618 584.71V590.876C556.618 593.542 556.951 595.792 557.533 597.708C558.116 599.624 558.948 601.207 560.029 602.457C561.111 603.707 562.359 604.623 563.857 605.206C565.355 605.79 566.936 606.039 568.766 606.039C570.597 606.039 572.261 605.79 573.676 605.206C575.09 604.623 576.421 603.707 577.42 602.457C578.418 601.207 579.25 599.541 579.833 597.708ZM537.98 605.536H545.052V569.96H544.303L529.576 575.209V580.958L537.98 578.375V605.536ZM573.593 583.707C573.593 582.124 573.51 580.79 573.26 579.707C573.01 578.624 572.678 577.791 572.262 577.125C571.846 576.458 571.346 575.958 570.681 575.708C570.015 575.458 569.349 575.292 568.6 575.292C567.852 575.292 567.103 575.458 566.52 575.708C565.938 575.958 565.355 576.458 564.939 577.125C564.523 577.791 564.19 578.624 563.941 579.707C563.691 580.79 563.608 582.124 563.608 583.707V591.788C563.608 593.371 563.691 594.704 563.941 595.787C564.19 596.871 564.523 597.787 564.939 598.454C565.355 599.12 565.855 599.62 566.52 599.87C567.186 600.12 567.852 600.287 568.6 600.287C569.349 600.287 570.098 600.12 570.681 599.87C571.263 599.62 571.846 599.12 572.262 598.454C572.678 597.787 573.01 596.871 573.177 595.787C573.343 594.704 573.51 593.371 573.51 591.788V583.707H573.593ZM569.718 635.234L553.765 624.286L569.718 613.338V635.234ZM552.827 635.234L536.874 624.286L552.827 613.338V635.234Z"
          fill="illustrationPalette020"
        />
        <Rect
          x="657.3"
          y="514.807"
          width="175.165"
          height="175.165"
          rx="87.5823"
          fill="illustrationHighlight010"
        />
        <Path
          d="M722.986 580.494H766.777V624.285H722.986V580.494Z"
          fill="illustrationInterface010"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1251.17 622.549H1255.17V582.488H1251.17V622.549ZM1243.15 614.535H1247.16V590.499H1243.15V614.535ZM1239.15 606.527H1235.14V598.515H1239.15V606.527ZM1259.18 614.535H1263.19V590.499H1259.18V614.535ZM1267.19 606.527V598.515H1271.2V606.527H1267.19Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M1308.06 611.22H1316.53V614.537H1303.95V589.479H1308.06V611.22ZM1322.06 592.039C1321.31 592.039 1320.69 591.786 1320.18 591.282C1319.68 590.777 1319.43 590.152 1319.43 589.407C1319.43 588.662 1319.68 588.037 1320.18 587.532C1320.69 587.027 1321.31 586.775 1322.06 586.775C1322.78 586.775 1323.39 587.027 1323.9 587.532C1324.4 588.037 1324.66 588.662 1324.66 589.407C1324.66 590.152 1324.4 590.777 1323.9 591.282C1323.39 591.786 1322.78 592.039 1322.06 592.039ZM1324.08 594.671V614.537H1319.97V594.671H1324.08ZM1337.16 610.859L1342.78 594.671H1347.14L1339.57 614.537H1334.67L1327.13 594.671H1331.53L1337.16 610.859ZM1368.46 604.117C1368.46 604.862 1368.41 605.535 1368.31 606.136H1353.13C1353.25 607.723 1353.84 608.997 1354.9 609.958C1355.96 610.92 1357.26 611.4 1358.79 611.4C1361.01 611.4 1362.57 610.475 1363.48 608.624H1367.92C1367.32 610.451 1366.22 611.953 1364.64 613.131C1363.07 614.285 1361.13 614.862 1358.79 614.862C1356.9 614.862 1355.19 614.441 1353.67 613.6C1352.18 612.734 1351.01 611.533 1350.14 609.994C1349.3 608.432 1348.88 606.629 1348.88 604.586C1348.88 602.543 1349.29 600.752 1350.11 599.214C1350.95 597.651 1352.11 596.449 1353.6 595.608C1355.12 594.767 1356.85 594.346 1358.79 594.346C1360.67 594.346 1362.34 594.755 1363.81 595.572C1365.27 596.389 1366.41 597.543 1367.23 599.033C1368.05 600.5 1368.46 602.194 1368.46 604.117ZM1364.17 602.819C1364.14 601.305 1363.6 600.091 1362.54 599.178C1361.49 598.264 1360.18 597.808 1358.61 597.808C1357.2 597.808 1355.98 598.264 1354.97 599.178C1353.96 600.067 1353.36 601.281 1353.17 602.819H1364.17Z"
          fill="illustrationHighlight010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="-82.646"
          y="78.1941"
          width="1683.29"
          height="323.292"
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
          <feOffset dy="4.84007" />
          <feGaussianBlur stdDeviation="4.823" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2539_101662"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2539_101662"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="-106.646"
          y="445.194"
          width="1755.29"
          height="323.292"
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
          <feOffset dy="4.84007" />
          <feGaussianBlur stdDeviation="4.823" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2539_101662"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2539_101662"
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

export default PlayPauseLive;
