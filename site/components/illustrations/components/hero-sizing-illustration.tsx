import React from 'react';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const HeroSizingIllustration: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Path
      d="M824 418.5C824 527.024 736.024 615 627.5 615C518.976 615 431 527.024 431 418.5C431 309.976 518.976 222 627.5 222C736.024 222 824 309.976 824 418.5Z"
      fill="illustrationPalette060"
    />
    <Path
      d="M961 418.5C961 504.38 891.828 574 806.5 574C721.172 574 652 504.38 652 418.5C652 332.62 721.172 263 806.5 263C891.828 263 961 332.62 961 418.5Z"
      fill="illustrationPalette040"
    />
    <Path
      d="M1059 418.5C1059 472.9 1015.35 517 961.5 517C907.652 517 864 472.9 864 418.5C864 364.1 907.652 320 961.5 320C1015.35 320 1059 364.1 1059 418.5Z"
      fill="illustrationPalette020"
    />
  </Svg>
);

export default HeroSizingIllustration;
