import {SVGAttributes} from 'react';
import {Theme} from '../../../src/theme';

export const toCSSVar = (
  theme: Theme,
  props: SVGAttributes<SVGPathElement>,
) => {
  const inlineStyle = {} as SVGAttributes<SVGPathElement>;
  const newProps = {...props};

  if (theme.colors[props?.fill!]) {
    inlineStyle.fill = `var(--color-${props.fill})`;
    delete newProps.fill;
  }
  if (theme.colors[props?.stroke!]) {
    inlineStyle.stroke = `var(--color-${props.fill})`;
    delete newProps.stroke;
  }
  return {
    style: inlineStyle,
    ...newProps,
  };
};

const escapeRegExp = (string: string): string =>
  // $& means the whole matched string
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const pathToID = (path: string) => {
  if (path) {
    return path
      .replace(new RegExp(escapeRegExp('../'), 'g'), '')
      .replace(new RegExp(escapeRegExp('./'), 'g'), '')
      .replace(new RegExp(escapeRegExp('/'), 'g'), '-');
  }
  return '';
};
