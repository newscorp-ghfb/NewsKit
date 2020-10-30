import React from 'react';
import {SvgProps} from './types';

const modeProps = {
  decorative: {
    'aria-hidden': true,
  },
  standalone: {
    role: 'img',
  },
};

export const Svg: React.FC<SvgProps & React.SVGProps<SVGSVGElement>> = ({
  children,
  title,
  overrides,
  ...props
}) => (
  <svg
    {...props}
    {...modeProps[title ? 'standalone' : 'decorative']}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
);
