import React from 'react';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const FlagIllustration: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Path
      d="M813 426C813 392.863 786.137 366 753 366H560C521.892 366 491 396.892 491 435V615C491 621.627 496.373 627 503 627H753C786.137 627 813 600.137 813 567V426Z"
      fill="illustrationPalette060"
    />
    <Path
      d="M591 498H813V598.5L787.5 569H621C604.431 569 591 555.569 591 539V498Z"
      fill="illustrationPalette070"
    />
    <Path
      d="M986.796 211.5C997.005 211.5 1002.15 223.812 994.981 231.078L873.395 354.272C868.619 359.112 868.587 366.881 873.323 371.76L995.378 497.49C1002.46 504.782 997.29 517 987.126 517H663.202C661.397 517 659.605 517.169 657.85 517.5H617.5C605.12 517.5 594.686 525.832 591.5 537.194V271C591.5 238.139 618.139 211.5 651 211.5H986.796Z"
      fill="illustrationPalette040"
      stroke="#577FFB"
    />
    <Rect
      x="580"
      y="569"
      width="233"
      height="58"
      rx="29"
      fill="illustrationPalette060"
    />
  </Svg>
);

export default FlagIllustration;
