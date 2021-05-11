import {useTheme} from 'newskit';
import React, {SVGAttributes} from 'react';

export const Ellipse: React.FC<SVGAttributes<SVGEllipseElement>> = ({
  fill,
  stroke,
  ...props
}) => {
  const theme = useTheme();
  return (
    <ellipse
      {...props}
      fill={fill ? theme.colors[fill] || fill : undefined}
      stroke={stroke ? theme.colors[stroke] || stroke : undefined}
    />
  );
};
