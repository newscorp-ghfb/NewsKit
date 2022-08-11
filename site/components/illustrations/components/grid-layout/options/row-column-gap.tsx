import React from 'react';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const RowColumnGap: React.FC = () => (
  <Svg
    width="1490"
    height="838"
    viewBox="0 0 1490 838"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1490" height="838" fill="illustrationBackground020" />
    <Rect
      x="337"
      y="487"
      width="240"
      height="240"
      rx="20"
      fill="illustrationPalette040"
    />
    <Rect
      x="337"
      y="199"
      width="240"
      height="240"
      rx="20"
      fill="illustrationPalette040"
    />
    <Rect
      x="625"
      y="486"
      width="240"
      height="240"
      rx="20"
      fill="illustrationPalette040"
    />
    <Rect
      x="913"
      y="486"
      width="240"
      height="240"
      rx="20"
      fill="illustrationPalette040"
    />
    <Rect
      x="625"
      y="199"
      width="240"
      height="240"
      rx="20"
      fill="illustrationPalette040"
    />
    <Rect
      x="913"
      y="199"
      width="240"
      height="240"
      rx="20"
      fill="illustrationPalette040"
    />
    <Path
      opacity="0.6"
      d="M337 477L337 449L1153 449L1153 477L337 477Z"
      fill="green030"
    />
    <Path opacity="0.6" d="M587 199H615V439H587V199Z" fill="red020" />
    <Path opacity="0.6" d="M875 199H903V439H875V199Z" fill="red020" />
    <Path opacity="0.6" d="M587 487H615V727H587V487Z" fill="red020" />
    <Path opacity="0.6" d="M875 487H903V727H875V487Z" fill="red020" />
    <Path
      d="M625 179V155C625 143.954 616.046 135 605 135H597C585.954 135 577 143.954 577 155V179"
      stroke="#577FFB"
      stroke-width="3"
    />
    <Path
      d="M317 439L293 439C281.954 439 273 447.954 273 459L273 467C273 478.046 281.954 487 293 487L317 487"
      stroke="#577FFB"
      stroke-width="3"
    />
    <Path
      d="M889 135V111C889 99.9543 880.046 91 869 91H620C608.954 91 600 99.9543 600 111V135"
      stroke="#577FFB"
      stroke-width="3"
    />
    <Path
      d="M913 179V155C913 143.954 904.046 135 893 135H885C873.954 135 865 143.954 865 155V179"
      stroke="#577FFB"
      stroke-width="3"
    />
  </Svg>
);

export default RowColumnGap;
