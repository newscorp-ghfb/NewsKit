import {defineConfig, defineSchema} from 'tinacms';

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
      label: 'Page Content',
      name: 'page',
      path: 'site/pages/components',
      format: 'mdx',
      fields: [
        {
          name: 'body',
          label: 'Main Content',
          type: 'rich-text',
          isBody: true,
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
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (['page'].includes(collection.name)) {
          if (document._sys.filename === 'home') {
            return '/';
          }
        }

        if (['post'].includes(collection.name)) {
          return `/posts/${document._sys.filename}`;
        }

        return undefined;
      });

      cms.plugins.add(RouteMapping);
    });
    return cms;
  },
});
