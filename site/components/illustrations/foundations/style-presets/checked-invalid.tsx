import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const CheckedInvalid: React.FC = () => (
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
      fill="interactiveNegative040"
    />
    <Path
      d="M428.375 598.363L329.511 499.5L295.845 532.928L428.375 665.458L712.875 380.958L679.446 347.529L428.375 598.363Z"
      fill="white"
    />
    <Path
      d="M736.833 655C678.413 655 631 702.413 631 760.833C631 819.253 678.413 866.667 736.833 866.667C795.253 866.667 842.667 819.253 842.667 760.833C842.667 702.413 795.253 655 736.833 655Z"
      fill="interactiveNegative050"
    />
    <Path
      d="M697.667 816.278L682 802.028L697.667 786.328L777.994 706L792.916 721.028L697.667 816.278Z"
      fill="inkInverse"
    />
    <Path
      d="M777.25 816.278L792.917 802.028L777.25 786.328L696.922 706L682 721.028L777.25 816.278Z"
      fill="inkInverse"
    />
  </Svg>
);

export default CheckedInvalid;
