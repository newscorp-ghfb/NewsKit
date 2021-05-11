import {useTheme} from 'newskit';
import React, {SVGAttributes} from 'react';

export const Path: React.FC<SVGAttributes<SVGPathElement>> = ({
  fill,
  stroke,
  ...props
}) => {
  const theme = useTheme();
  return (
    <path
      {...props}
      fill={fill ? theme.colors[fill] || fill : undefined}
      stroke={stroke ? theme.colors[stroke] || stroke : undefined}
    />
  );
};
