import React from 'react';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const Spacing: React.FC = () => (
  <Svg
    width="1490"
    height="839"
    viewBox="0 0 1490 839"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M0 4.90577C0 2.69663 1.79086 0.905762 4 0.905762H1486.72C1488.93 0.905762 1490.72 2.69662 1490.72 4.90576V834.909C1490.72 837.119 1488.93 838.909 1486.72 838.909H4.00002C1.79088 838.909 0 837.119 0 834.909V4.90577Z"
      fill="illustrationBackground020"
    />
    <Path
      d="M482 231.741C482 221.891 489.998 213.906 499.864 213.906H881.709C891.575 213.906 899.573 221.891 899.573 231.741V531.071C899.573 540.921 891.575 548.906 881.709 548.906H499.864C489.998 548.906 482 540.921 482 531.071V231.741Z"
      fill="illustrationAnatomyBorder020"
    />
    <Rect
      x="450"
      y="181.906"
      width="481.573"
      height="399"
      rx="17.8641"
      stroke="#577FFB"
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="16 16"
    />
    <Rect
      opacity="0.6"
      x="955.573"
      y="181.906"
      width="86"
      height="399"
      fill="red020"
    />
    <Rect
      opacity="0.6"
      x="450"
      y="604.906"
      width="591.573"
      height="54"
      fill="green030"
    />
  </Svg>
);
export default Spacing;
