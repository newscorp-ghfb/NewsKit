// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const splitAriaProps = (props: {[key: string]: any}) => {
  /* istanbul ignore next */
  if (typeof props !== 'object') {
    return {aria: {}, rest: {}};
  }

  const ariaProps = {} as {[key: string]: string};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nonAriaProps = {} as {[key: string]: any};
  Object.keys(props).forEach((propName: string) => {
    if (propName.startsWith('aria')) {
      ariaProps[propName] = props[propName];
    } else {
      nonAriaProps[propName] = props[propName];
    }
  });

  return {
    aria: ariaProps,
    rest: nonAriaProps,
  };
};
