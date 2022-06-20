import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Hero: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Path
      d="M648 661C534.782 661 443 569.218 443 456C443 342.782 534.782 251 648 251C761.218 251 853 342.782 853 456C853 569.218 761.218 661 648 661Z"
      fill="illustrationPalette040"
    />
    <Path
      d="M833 607C714.259 607 618 510.965 618 392.5C618 274.035 714.259 178 833 178C951.741 178 1048 274.035 1048 392.5C1048 510.965 951.741 607 833 607Z"
      fill="illustrationShadow010"
    />
  </Svg>
);

export default Hero;
