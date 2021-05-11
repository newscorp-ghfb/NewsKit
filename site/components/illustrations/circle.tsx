import {useTheme} from 'newskit';
import React, {SVGAttributes} from 'react';

export const Circle: React.FC<SVGAttributes<SVGCircleElement>> = ({
  fill,
  stroke,
  ...props
}) => {
  const theme = useTheme();
  return (
    <circle
      {...props}
      fill={fill ? theme.colors[fill] || fill : undefined}
      stroke={stroke ? theme.colors[stroke] || stroke : undefined}
    />
  );
};
