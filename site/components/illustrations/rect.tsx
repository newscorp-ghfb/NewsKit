import {useTheme} from 'newskit';
import React, {SVGAttributes} from 'react';
import {toCSSVar} from './utils';

export const Rect: React.FC<SVGAttributes<SVGRectElement>> = props => {
  const theme = useTheme();
  return <rect {...toCSSVar(theme, props)} />;
};
