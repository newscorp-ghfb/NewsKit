import {useTheme} from 'newskit';
import React, {SVGAttributes} from 'react';
import {toCSSVar} from './utils';

export const Path: React.FC<SVGAttributes<SVGPathElement>> = props => {
  const theme = useTheme();
  return <path {...toCSSVar(theme, props)} />;
};
