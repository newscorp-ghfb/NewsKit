import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Checked: React.FC = () => (
  <Svg
    width="1000"
    height="1001"
    viewBox="0 0 1000 1001"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect
      y="0.34375"
      width="1000"
      height="1000"
      rx="22"
      fill="illustrationBackground020"
    />
    <Path
      d="M215 295C215 250.817 250.817 215 295 215H704.186C748.368 215 784.186 250.817 784.186 295V704.186C784.186 748.368 748.368 784.186 704.186 784.186H295C250.817 784.186 215 748.368 215 704.186V295Z"
      fill="interactiveInput040"
    />
    <Path
      d="M428.375 598.364L329.511 499.5L295.845 532.929L428.375 665.459L712.875 380.959L679.446 347.53L428.375 598.364Z"
      fill="white"
    />
  </Svg>
);

export default Checked;
