import {defineConfig, defineSchema} from 'tinacms';
import {MarkdownFieldPlugin} from 'react-tinacms-editor';
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
      label: 'Docs',
      name: 'docs',
      path: 'docs',
      format: 'md',
      fields: [
        {
          name: 'body',
          label: 'Main Content',
          type: 'string',
          isBody: true,
          ui: {
            component: 'markdown',
          },
        },
      ],
    },
  ],
});

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
