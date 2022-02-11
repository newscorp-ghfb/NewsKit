import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const CheckedValid: React.FC = () => (
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
      fill="interactivePositive040"
    />
    <Path
      d="M428.375 598.363L329.511 499.5L295.845 532.928L428.375 665.458L712.875 380.958L679.446 347.529L428.375 598.363Z"
      fill="white"
    />
    <Path
      d="M736.833 655C678.413 655 631 702.413 631 760.833C631 819.253 678.413 866.667 736.833 866.667C795.253 866.667 842.667 819.253 842.667 760.833C842.667 702.413 795.253 655 736.833 655Z"
      fill="inkPositive"
    />
    <Path
      d="M715.667 813.75L662.75 760.833L677.672 745.911L715.667 783.799L795.994 703.472L810.917 718.5L715.667 813.75Z"
      fill="inkInverse"
    />
  </Svg>
);

export default CheckedValid;
