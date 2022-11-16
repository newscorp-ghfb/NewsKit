import React from 'react';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';
import {Circle} from '../circle';

export const BylineIllustration: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Path
      d="M642.156 440.437H1024.16C1031.37 440.437 1037.22 446.285 1037.22 453.499C1037.22 460.714 1031.37 466.562 1024.16 466.562H642.156C634.942 466.562 629.094 460.714 629.094 453.499C629.094 446.285 634.942 440.437 642.156 440.437ZM642.156 371.437H1122.16C1129.37 371.437 1135.22 377.285 1135.22 384.499C1135.22 391.714 1129.37 397.562 1122.16 397.562H642.157C634.942 397.562 629.094 391.714 629.094 384.499C629.094 377.285 634.942 371.437 642.156 371.437Z"
      fill="illustrationPalette040"
      stroke="#577FFB"
      strokeWidth="0.874743"
    />
    <Circle
      cx="467"
      cy="419"
      r="112.5"
      fill="illustrationPalette040"
      stroke="#577FFB"
    />
    <Path
      d="M508.198 391.927C508.198 414.68 489.753 433.125 467 433.125C444.247 433.125 425.802 414.68 425.802 391.927C425.802 369.174 444.247 350.729 467 350.729C489.753 350.729 508.198 369.174 508.198 391.927Z"
      fill="illustrationPalette020"
    />
    <Path
      d="M387.509 499.313C400.37 468.068 431.117 446.073 467 446.073C502.884 446.073 533.63 468.069 546.492 499.313C526.076 519.521 497.995 532 467 532C436.005 532 407.924 519.521 387.509 499.313Z"
      fill="illustrationPalette020"
    />
  </Svg>
);

export default BylineIllustration;
