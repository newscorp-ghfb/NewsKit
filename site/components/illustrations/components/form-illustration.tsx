import React from 'react';
import {Path} from '../path';
import {Rect} from '../rect';
import {Circle} from '../circle';
import {Svg} from '../svg';

export const FormIllustration: React.FC = () => (
  <Svg
    width="1344"
    height="759"
    viewBox="0 0 1344 759"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1344" height="759" fill="illustrationBackground020" />
    <Rect
      x="253"
      y="274"
      width="839"
      height="212"
      rx="106"
      fill="illustrationPalette060"
    />
    <Circle cx="987" cy="380" r="84" fill="illustrationInterface050" />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1027.24 352.001C1029.59 354.344 1029.59 358.143 1027.24 360.486L977.243 410.486C974.86 412.732 971.14 412.732 968.757 410.486L947.757 389.486C945.414 387.143 945.414 383.344 947.757 381.001C950.101 378.657 953.899 378.657 956.243 381.001L973 397.758L1018.76 352.001C1021.1 349.657 1024.9 349.657 1027.24 352.001Z"
      fill="white"
    />
  </Svg>
);
export default FormIllustration;
