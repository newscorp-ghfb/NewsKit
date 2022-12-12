const sizes = ['small', 'medium', 'large'];

const commonButton = [
  {
    name: 'children',
    type: {type: 'string'},
  },
  {
    name: 'size',
    type: {type: 'enum', choices: sizes},
  },
  {
    name: 'disabled',
    type: {type: 'boolean'},
  },
  {
    name: 'loading',
    type: {type: 'boolean'},
  },
];

const commonLink = [
  {
    name: 'children',
    type: {type: 'string'},
  },
  {
    name: 'textOnly',
    type: {type: 'boolean'},
  },
  {
    name: 'href',
    type: {type: 'string'},
  },
];

const commonBlock = [
  {
    name: 'children',
    type: {type: 'any'},
  },
  {
    name: 'stylePreset',
    type: {type: 'string'},
  },
  {
    name: 'transitionPreset',
    type: {type: 'string'},
  },
];

export default {
  Button: [...commonButton],
  Flag: [...commonButton],
  Tag: [...commonButton],
  IconButton: [...commonButton],
  LinkInline: [...commonLink],
  LinkStandalone: [...commonLink],
  GridLayout: [
    {
      name: 'rowGap',
      type: {type: 'string'},
    },
    {
      name: 'columnGap',
      type: {type: 'string'},
    },
    {
      name: 'columns',
      type: {type: 'string'},
    },
    {
      name: 'rows',
      type: {type: 'string'},
    },
    {
      name: 'justifyContent',
      type: {type: 'string'},
    },
    {
      name: 'alignContent',
      type: {type: 'string'},
    },
    {
      name: 'justifyItems',
      type: {type: 'string'},
    },
    {
      name: 'alignItems',
      type: {type: 'string'},
    },
    {
      name: 'areas',
      type: {type: 'string'},
    },
    {
      name: 'autoColumns',
      type: {type: 'string'},
    },
    {
      name: 'inline',
      type: {type: 'boolean'},
    },
    {
      name: 'autoRows',
      type: {type: 'string'},
    },
    {
      name: 'autoFlow',
      type: {type: 'string'},
    },
    {
      name: 'children',
      type: {type: 'any'},
    },
  ],
  GridLayoutItem: [
    ...commonBlock,
    {
      name: 'area',
      type: {type: 'string'},
    },
    {
      name: 'order',
      type: {type: 'number'},
    },
    {
      name: 'justifySelf',
      type: {type: 'string'},
    },
    {
      name: 'alignSelf',
      type: {type: 'string'},
    },
    {
      name: 'column',
      type: {type: 'string'},
    },
    {
      name: 'row',
      type: {type: 'string'},
    },
  ],
  TextBlock: [
    ...commonBlock,
    {
      name: 'typographyPreset',
      type: {type: 'any'},
    },
  ],
  Block: [...commonBlock],
  Headline: [],
  Paragraph: [],
  Divider: [
    {
      name: 'vertical',
      type: {type: 'boolean'},
    },
  ],
  Image: [],
  InlineMessage: [],
};
