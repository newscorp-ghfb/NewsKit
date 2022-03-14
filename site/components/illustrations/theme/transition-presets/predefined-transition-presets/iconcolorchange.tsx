import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const iconColorChange: React.FC = () => {
  const mask0 = getSSRId();

  return (
    <Svg
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        width="1000"
        height="1000"
        rx="22"
        fill="illustrationBackground020"
      />
      <Path
        d="M499.5 230C350.184 230 229 351.184 229 500.5C229 649.816 350.184 771 499.5 771C648.816 771 770 649.816 770 500.5C770 351.184 648.816 230 499.5 230Z"
        fill="illustrationPalette040"
      />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="229"
        y="230"
        width="541"
        height="541"
      >
        <Path
          d="M499.5 230C350.184 230 229 351.184 229 500.5C229 649.816 350.184 771 499.5 771C648.816 771 770 649.816 770 500.5C770 351.184 648.816 230 499.5 230Z"
          fill="illustrationPalette040"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Path
          d="M602 229.656H826C870.183 229.656 906 265.473 906 309.656V691.656C906 735.839 870.183 771.656 826 771.656H354L602 229.656Z"
          fill="illustrationPalette090"
        />
      </g>
      <Path
        d="M634 527.8H526.4V637H472.6V527.8H365V473.2H472.6V364H526.4V473.2H634V527.8Z"
        fill="white"
      />
    </Svg>
  );
};

export default iconColorChange;
