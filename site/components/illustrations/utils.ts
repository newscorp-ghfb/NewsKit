// @ts-ignore
export const toCSSVar = (theme, props) => {
  const inlineStyle = {};
  const newProps = {...props};

  if (theme.colors[props?.fill]) {
    // @ts-ignore
    inlineStyle.fill = `var(--color-${props.fill})`;
    // @ts-ignore
    delete newProps.fill;
  }
  if (theme.colors[props?.stroke]) {
    // @ts-ignore
    inlineStyle.stroke = `var(--color-${props.fill})`;
    // @ts-ignore
    delete newProps.stroke;
  }
  return {
    style: inlineStyle,
    ...newProps,
  };
};

export const pathToID = (path: string) =>
  path.replaceAll('../', '').replaceAll('./', '').replaceAll('/', '-');
