import {useTheme} from 'newskit';
import React, {SVGAttributes} from 'react';

export const Rect: React.FC<SVGAttributes<SVGRectElement>> = ({
  fill,
  stroke,
  ...props
}) => {
  const theme = useTheme();
  return (
    <rect
      {...props}
      fill={fill ? theme.colors[fill] || fill : undefined}
      stroke={stroke ? theme.colors[stroke] || stroke : undefined}
    />
  );
};
