import React from 'react';
import {Path} from '../path';
import {Rect} from '../rect';
import {Ellipse} from '../ellipse';
import {Svg} from '../svg';

export const DividerIllustration: React.FC = () => (
  <Svg
    width="1344"
    height="759"
    viewBox="0 0 1344 759"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1344" height="759" fill="illustrationBackground020" />
    <Ellipse
      cx="671.5"
      cy="616.5"
      rx="124.5"
      ry="9.5"
      fill="illustrationShadow010"
    />
    <Path
      d="M672.5 614C783.785 614 874 524.009 874 413H471C471 524.009 561.215 614 672.5 614Z"
      fill="illustrationInterface040"
    />
    <Path
      d="M302 380H1042"
      stroke="#BBC3C9"
      stroke-width="8"
      stroke-linecap="round"
      stroke-dasharray="4 20"
    />
    <Path
      d="M672.5 146C561.215 146 471 235.991 471 347L874 347C874 235.991 783.785 146 672.5 146Z"
      fill="illustrationPalette050"
    />
  </Svg>
);
export default DividerIllustration;
