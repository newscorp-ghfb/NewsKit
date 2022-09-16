export default {
  backend: {
    name: 'github',
    branch: 'main',
    repo: 'newscorp-ghfb/newskit/',
  },
  local_backend: {
    url: 'http://localhost:8082/api/v1',
    allowed_hosts: ['192.168.0.1'],
  },
  media_folder: 'site/public/static',
  public_folder: 'static',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      folder: 'site/content/posts',
      extension: 'mdx',
      format: 'frontmatter',
      create: true,
      slug: '{{slug}}',
      fields: [
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'mdx',
        },
        {
          label: 'Type',
          name: 'type',
          widget: 'string',
        },
        {
          label: 'Cover Image',
          name: 'coverImage',
          widget: 'image',
        },
        {
          label: 'Introduction',
          name: 'introduction',
          widget: 'string',
        },
        // {
        //   label: 'componentAPI',
        //   name: 'componentAPI',
        //   widget: 'object',
        //   fields: [
        //     {
        //       label: 'Introduction',
        //       name: 'introduction',
        //       widget: 'string',
        //     },
        //     {
        //       label: 'Components',
        //       name: 'components',
        //       widget: 'object',
        //       fields: [
        //         {
        //           label: 'Title',
        //           name: 'title',
        //           widget: 'string',
        //         },
        //         {
        //           label: 'propsRow',
        //           name: 'propsRow',
        //           widget: 'mdx',
        //         },
        //         {
        //           label: 'overridesRow',
        //           name: 'overridesRow',
        //           widget: 'mdx',
        //         },
        //       ],
        //     },
        //   ],
        // },
        {
          label: 'related',
          name: 'related',
          widget: 'object',
          fields: [
            {
              label: 'introduction',
              name: 'introduction',
              widget: 'string',
            },
            {
              label: 'related',
              name: 'related',
              widget: 'list',
            },
          ],
        },
        {
          label: 'featureCard',
          name: 'featureCard',
          widget: 'object',
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'string',
            },
            {
              label: 'Href',
              name: 'href',
              widget: 'string',
            },
          ],
        },
        {
          label: 'meta',
          name: 'meta',
          widget: 'object',
          fields: [
            {
              label: 'Status',
              name: 'status',
              widget: 'string',
            },
            {
              label: 'Introduced',
              name: 'introduced',
              widget: 'string',
            },
            {
              label: 'Introduced Link',
              name: 'introducedLink',
              widget: 'boolean',
            },
            {
              label: 'codeUrl',
              name: 'codeUrl',
              widget: 'string',
            },
            {
              label: 'figmaUrl',
              name: 'figmaUrl',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'mdx',
        },
      ],
    },
  ],
};
