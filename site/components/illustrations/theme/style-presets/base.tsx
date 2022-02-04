import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Base: React.FC = () => (
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
      fill="interactiveInput040"
    />
  </Svg>
);

export default Base;
