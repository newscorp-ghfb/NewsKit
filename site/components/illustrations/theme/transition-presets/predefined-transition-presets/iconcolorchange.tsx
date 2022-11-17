import React from 'react';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const iconColorChange: React.FC = () => (
  <Svg
    width="1000"
    height="1000"
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1000" height="1000" rx="22" fill="illustrationBackground020" />
    <Path
      d="M499.5 230C350.184 230 229 351.184 229 500.5C229 649.816 350.184 771 499.5 771C648.816 771 770 649.816 770 500.5C770 351.184 648.816 230 499.5 230Z"
      fill="illustrationPalette040"
    />
    <Path
      d="M369.516 737.745L594.06 247.008C696.788 285.38 769.999 384.442 769.999 500.499C769.999 649.815 648.815 770.999 499.499 770.999C452.399 770.999 408.097 758.941 369.516 737.745Z"
      fill="illustrationPalette090"
    />
    <Path
      d="M634 527.8H526.4V637H472.6V527.8H365V473.2H472.6V364H526.4V473.2H634V527.8Z"
      fill="white"
    />
  </Svg>
);

export default iconColorChange;
