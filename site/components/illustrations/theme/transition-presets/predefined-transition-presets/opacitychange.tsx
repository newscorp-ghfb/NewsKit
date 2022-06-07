import React from 'react';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const OpacityChange: React.FC = () => (
  <Svg
    width="1000"
    height="1000"
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1000" height="1000" rx="22" fill="illustrationBackground020" />
    <Path
      opacity="0.2"
      d="M214 500C214 342.047 342.047 214 500 214V214C657.953 214 786 342.047 786 500V500C786 657.953 657.953 786 500 786V786C342.047 786 214 657.953 214 500V500Z"
      fill="illustrationPalette030"
    />
    <Path
      d="M314.941 359.294C314.941 333.954 335.484 313.412 360.824 313.412H637.647C662.987 313.412 683.53 333.954 683.53 359.294V636.117C683.53 661.458 662.987 682 637.647 682H360.824C335.484 682 314.941 661.458 314.941 636.117V359.294Z"
      fill="illustrationPalette040"
    />
    <Path
      d="M460.044 552.778L403.442 496.176L384.168 515.315L460.044 591.191L622.926 428.309L603.788 409.17L460.044 552.778Z"
      fill="white"
    />
  </Svg>
);

export default OpacityChange;
