import {SVGAttributes} from 'react';
import {Theme} from '../../../src/theme';

// @ts-ignore
export const toCSSVar = (theme: Theme, props) => {
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

const safariUACheck = /^((?!chrome|android).)*safari/i;
const isWindowLoaded = typeof window !== 'undefined';

export const isSafari =
  isWindowLoaded && safariUACheck.test(window.navigator.userAgent);
export const isNotSafari =
  isWindowLoaded && !safariUACheck.test(window.navigator.userAgent);
