import {Button} from 'newskit';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {MetaStatus} from '../../meta/types';
import {ComponentPageTemplate} from '..';
import {ComponentPageTemplateProps} from '../types';

const layoutProps = {
  toggleTheme: () => {},
  themeMode: '',
  path: '/',
};

const mandatoryProps: ComponentPageTemplateProps = {
  layoutProps,
  componentDefaultsKey: 'component',
  pageIntroduction: {
    type: 'Component',
    name: 'ComponentName',
    hero: {src: '/static/component-hero.svg', alt: 'component-image'},
    introduction: 'Component Introduction',
  },
  meta: {
    status: MetaStatus.Supported,
    introduced: 'v0.3',
    codeUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
    figmaUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
  },
};

describe('Component Page Template', () => {
  test('renders with mandatory sections', () => {
    const fragment = renderToFragmentWithTheme(
      ComponentPageTemplate,
      mandatoryProps,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and interactiveDemo', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      interactiveDemo: {
        introduction: 'Section introduction',
        playground: {
          componentName: 'ComponentName',
          component: Button,
          knobs: [
            {
              name: 'Content',
              propName: 'children',
              value: 'Button Content',
            },
          ],
        },
      },
    };
    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and anatomy', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      anatomy: {
        introduction: 'Component Anatomy',
        list: ['Item', 'Item', 'Item', 'Item'],
        media: {
          src: '/static/placeholder-16x9.png',
          alt: 'Component Anatomy',
        },
      },
    };
    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and options', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      options: {
        introduction: 'Component options',
        cards: [
          {
            label: 'Options',
            description: 'Description',
            media: {
              src: '/static/placeholder-16x9.png',
              alt: 'Card Media',
            },
          },
        ],
      },
    };
    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and states', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      states: {
        introduction: 'Component states',
        cards: [
          {
            label: 'States',
            description: 'Description',
            media: {
              src: '/static/placeholder-16x9.png',
              alt: 'Card Media',
            },
          },
        ],
      },
    };
    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and behaviors', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      behaviors: {
        introduction: 'Component Behavior',
        cards: [
          {
            label: 'Title',
            description: 'Description',
            media: {
              src: '/static/placeholder-16x9.png',
              alt: 'Component Behavior',
            },
          },
        ],
      },
    };
    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and usage', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      usage: {
        introduction: 'Component Usage',
        cards: [
          {
            description: 'Description',
            kind: 'do',
            media: {
              src: '/static/placeholder-16x9.png',
              alt: 'src alt',
            },
          },
        ],
      },
    };
    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and focus order from accessibility', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      accessibility: {
        introduction: 'Component Accessibility.',
        focusOrder: {
          title: 'Focus order',
          description: 'Some random text here',
          table: {
            columns: ['Order', 'Element', 'Role'],
            rows: [
              {
                order: ['1'],
                element: 'element',
                role: 'Role',
              },
            ],
          },
        },
      },
    };
    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and seo', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      seo: {
        title: 'SEO Considerations',
        introduction: 'Seo text',
      },
    };
    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and component API', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      componentAPI: {
        introduction: 'Component API',
        components: [
          {
            title: 'Button',
            summary: 'Component Props',
            propsTable: {
              columns: ['Name', 'Type', 'Default', 'Description', 'Required'],
              rows: [
                {
                  name: 'children',
                  type: 'string',
                  required: true,
                  description: `Description`,
                },
              ],
            },
          },
        ],
      },
    };
    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and compliance', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      compliance: {interactive: true, variations: false, themes: null},
    };

    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders mandatory sections and related', () => {
    const props: ComponentPageTemplateProps = {
      ...mandatoryProps,
      related: {
        introduction: 'Related Components',
        cards: [
          {
            label: 'Title',
            description: 'Description',
            href: 'http://localhost:8081/components/action/button',
            media: {
              src: '/static/placeholder-16x9.png',
              alt: 'Card Media',
            },
          },
        ],
      },
    };

    const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
    expect(fragment).toMatchSnapshot();
  });
});
