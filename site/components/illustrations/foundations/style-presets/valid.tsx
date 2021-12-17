import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Valid: React.FC = () => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M704.186 241H295C265.177 241 241 265.177 241 295V704.186C241 734.009 265.177 758.186 295 758.186H704.186C734.009 758.186 758.186 734.009 758.186 704.186V295C758.186 265.177 734.009 241 704.186 241ZM295 215C250.817 215 215 250.817 215 295V704.186C215 748.368 250.817 784.186 295 784.186H704.186C748.368 784.186 784.186 748.368 784.186 704.186V295C784.186 250.817 748.368 215 704.186 215H295Z"
      fill="interactivePositive040"
    />
    <Path
      d="M736.833 653C678.413 653 631 700.413 631 758.833C631 817.253 678.413 864.667 736.833 864.667C795.253 864.667 842.667 817.253 842.667 758.833C842.667 700.413 795.253 653 736.833 653Z"
      fill="inkPositive"
    />
    <Path
      d="M715.667 811.75L662.75 758.833L677.672 743.911L715.667 781.799L795.994 701.472L810.917 716.5L715.667 811.75Z"
      fill="inkInverse"
    />
  </Svg>
);

export default Valid;
