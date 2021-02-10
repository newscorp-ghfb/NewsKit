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
  ...props
}) => {
  // Ignore line rather than use "as any" - only want to ignore overrides
  // prop not existing in type, don't want to lose typing on the rest of props.
  // @ts-ignore
  const {overrides, ...p} = props;
  return (
    <svg
      {...p}
      {...modeProps[title ? 'standalone' : 'decorative']}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
};
