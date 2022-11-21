import {useTheme} from 'newskit';
import React, {SVGAttributes} from 'react';
import {toCSSVar} from './utils';

export const Circle: React.FC<SVGAttributes<SVGCircleElement>> = props => {
  const theme = useTheme();
  return <circle {...toCSSVar(theme, props)} />;
};
