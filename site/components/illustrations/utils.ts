/* eslint-disable @typescript-eslint/no-use-before-define */
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

// export const pathToID = (path: string) =>
//   path.replaceAll('../', '').replaceAll('./', '').replaceAll('/', '-');
export const pathToID = (path: string) => {
  if (path) {
    return path
      .replace(new RegExp(escapeRegExp('../'), 'g'), '')
      .replace(new RegExp(escapeRegExp('./'), 'g'), '')
      .replace(new RegExp(escapeRegExp('/'), 'g'), '-');
  }
  return '';
};

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// function replaceAll(str: string, find: string, replace: string): string {
//   return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
// }

// //  replaceAll().replaceAll('./', '').replaceAll('/', '-')
// export const pathToID = (path: string) =>
//   replaceAll(replaceAll(replaceAll(path, '../', ''), './', ''), '/', '-');
