import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../svg';
import {Rect} from '../rect';
import {Circle} from '../circle';
import {Ellipse} from '../ellipse';

export const HeroShadowsIllustration: React.FC = () => {
  const mask0 = getSSRId();
  return (
    <Svg
      width="1344"
      height="759"
      viewBox="0 0 1344 759"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="1344" height="759" fill="illustrationBackground020" />
      <Ellipse
        cx="673.654"
        cy="588.5"
        rx="124.5"
        ry="9.5"
        fill="illustrationSubtle010"
      />
      <Circle
        cx="672.499"
        cy="367.5"
        r="217.5"
        transform="rotate(-30 672.499 367.5)"
        fill="Palette040"
      />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="454"
        y="149"
        width="437"
        height="437"
      >
        <Circle
          cx="672.499"
          cy="367.5"
          r="217.5"
          transform="rotate(-30 672.499 367.5)"
          fill="illustrationInterface040"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Circle
          cx="672.499"
          cy="367.5"
          r="217.5"
          transform="rotate(-30 672.499 367.5)"
          fill="illustrationPalette060"
        />
        <Circle
          cx="752.111"
          cy="309.111"
          r="217.5"
          transform="rotate(-30 752.111 309.111)"
          fill="illustrationPalette040"
        />
        <Circle
          cx="812.077"
          cy="278.077"
          r="165.5"
          transform="rotate(-30 812.077 278.077)"
          fill="illustrationPalette030"
        />
        <Circle
          cx="828.984"
          cy="264.984"
          r="75.3894"
          transform="rotate(-30 828.984 264.984)"
          fill="illustrationPalette020"
        />
      </g>
    </Svg>
  );
};
export default HeroShadowsIllustration;
