import {defineConfig, defineSchema} from 'tinacms';
import {MarkdownFieldPlugin} from 'react-tinacms-editor';
import { TinaFieldInner } from "@tinacms/schema-tools";

export const pageIntroductionField: TinaFieldInner<false> = {
  type: "object",
  label: "Page introduction",
  name: "pageIntro",
  fields: [
    {
      label: "Type",
      name: "type",
      type: "string",
    },
    {
      label: "Name",
      name: "name",
      type: "string",
    },
    {
      label: "Cover Image",
      name: "coverImage",
      type: "image",
    },
    {
      label: "Introduction",
      name: "introduction",
      type: "string",
    },
  ],
};

// is Table supported?
// export const componentAPIField: TinaFieldInner<false> = {
//   type: "object",
//   label: "Component API",
//   name: "componentAPI",
//   fields: [
//     {
//       label: "Title",
//       name: "title",
//       type: "string",
//     },
//     {
//       label: "Props",
//       name: "props",
//       type: "object",
//     },

//   ],
// };


const schema = defineSchema({
  config: {
    media: {
      tina: {
        mediaRoot: '',
        publicFolder: 'site/public',
      },
    },
  },
  collections: [
    {
      label: 'Components',
      name: 'component',
      path: 'content/component',
      format: 'mdx',
      fields: [
        pageIntroductionField,
      ],
    },
  ],
});

//API table - nested obj

export default schema;

const branch = process.env.NEXT_PUBLIC_EDIT_BRANCH || 'main';
const apiURL =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:4001/graphql'
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  schema,
  cmsCallback: cms => {
    import('tinacms').then(({RouteMappingPlugin}) => {
      cms.plugins.add(MarkdownFieldPlugin);
    });
    return cms;
  },
});