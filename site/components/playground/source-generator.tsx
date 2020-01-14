import prettier from 'prettier/standalone';
import parser from 'prettier/parser-flow';
import {isComponent} from './utils';

export interface GenerateArgs {
  newskitPath: string;
  componentName: string;
  state: Record<string, unknown>;
}

type PropFormatter = (key: string, value: unknown) => string;
const propFormatters: Record<string, PropFormatter> = {
  number: (k, v) => ` ${k}={${v}}`,
  string: (k, v) => ` ${k}="${v}"`,
  boolean: (k, v) => (v ? ` ${k}` : ''),
  object: (key, value) => {
    if (isComponent(value)) {
      // object is React Component class
      return ` ${key}={${value.displayName}}`;
    }
    return ` ${key}={${JSON.stringify(value, (k, v) =>
      v === '' ? undefined : v,
    )}}`;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function: (k, v: any) => {
    const {displayName} = v;
    if (displayName) {
      return ` ${k}={${displayName}}`;
    }
    return '';
  },
};
const formatProp: PropFormatter = (key, value) => {
  const formatter = propFormatters[typeof value];
  return formatter ? formatter(key, value) : '';
};

const formatChildren = (value: unknown) => {
  if (typeof value === 'object') {
    return `{${JSON.stringify(value)}}`;
  }
  return value;
};

export const generateSource = ({
  newskitPath,
  componentName,
  state,
}: GenerateArgs) => {
  const entries = Object.entries(state);
  const compProps = entries.reduce((acc, [key, value]) => {
    if (key === 'children') {
      return acc;
    }
    return `${acc}${formatProp(key, value)}`;
  }, '');

  const exportedComp =
    typeof state.children === 'undefined'
      ? `<${componentName}${compProps} />;`
      : `<${componentName}${compProps}>${formatChildren(
          state.children,
        )}</${componentName}>;`;

  try {
    return {
      code: prettier.format(
        `
  import React from 'react';
  import {${componentName}} from 'newskit${newskitPath}';

  export default () => ${exportedComp}
  `,
        {parser: 'flow', plugins: [parser], printWidth: 60, singleQuote: true},
      ),
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
