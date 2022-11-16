import {useTheme} from 'newskit';
import React, {SVGAttributes} from 'react';
import {toCSSVar} from './utils';

export const Ellipse: React.FC<SVGAttributes<SVGEllipseElement>> = props => {
  const theme = useTheme();
  return <ellipse {...toCSSVar(theme, props)} />;
};
