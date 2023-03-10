import {coy} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const multiPropSameColor = (props: Array<string>, value: string) =>
  props.reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: {
        color: value,
      },
    }),
    {},
  );

export const generateCodeHighlighterTheme = (
  colors: Record<string, string>,
) => ({
  ...coy,
  ':not(pre) > code[class*="language-"]': {
    ...coy[':not(pre) > code[class*="language-"]'],
    color: colors.interfaceBackground,
  },
  'pre[class*="language-"]': {
    ...coy['pre[class*="language-"]'],
    color: colors.inkSubtle,
    background: 'none',
    backgroundColor: colors.interface020,
  },
  'code[class*="language-"]': {
    ...coy['code[class*="language-"]'],
    color: colors.inkSubtle,
  },
  ...multiPropSameColor(['cdata', 'comment'], colors.inkSubtle),
  punctuation: {
    color: colors.inkSubtle,
  },
  ...multiPropSameColor(
    [
      'class-name',
      'property',
      'tag',
      'boolean',
      'number',
      'constant',
      'symbol',
      'deleted',
    ],
    colors.inkInformative,
  ),
  ...multiPropSameColor(
    ['selector', 'attr-name', 'inserted', 'string', 'char', 'builtin'],
    colors.inkPositive,
  ),
  operator: {
    color: colors.blue040,
  },
  'attr-value': {
    color: colors.interfaceNotice010,
  },
  variable: {
    ...coy.variable,
    color: colors.interfaceNotice010,
  },
  function: {
    color: colors.inkNegative,
  },
  keyword: {
    color: colors.inkBrand010,
  },
});
