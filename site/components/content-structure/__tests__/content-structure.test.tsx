import React from 'react';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {
  ContentPrimary,
  ContentSecondary,
  ContentTertiary,
  ContentSection,
} from '..';
import {
  ContentPrimaryProps,
  ContentSecondaryProps,
  ContentTertiaryProps,
} from '../types';

describe(`Content Section`, () => {
  test('renders with children', () => {
    const fragment = renderToFragmentWithTheme(ContentSection, {
      children: () => <div>Content Section custom react component</div>,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders without section name', () => {
    const fragment = renderToFragmentWithTheme(ContentSection, {
      children: () => <div>Content Section custom react component</div>,
      sectionName: 'Content Section Name',
    });
    expect(fragment).toMatchSnapshot();
  });
});

[
  {
    componentName: 'Content Primary',
    component: ContentPrimary,
  },
  {
    componentName: 'Content Secondary',
    component: ContentSecondary,
  },
  {
    componentName: 'Content Tertiary',
    component: ContentTertiary,
  },
].forEach(
  ({
    componentName,
    component: Component,
  }: {
    componentName: string;
    component: any;
  }) => {
    const isPrimary = componentName === 'Content Primary';
    const tocAttributes = {
      toc: 'Content Primary test page',
      id: 'contentprimary',
    } as Partial<ContentPrimaryProps>;

    const props = isPrimary
      ? (tocAttributes as ContentPrimaryProps)
      : ({} as ContentSecondaryProps | ContentTertiaryProps);

    describe(`${componentName}`, () => {
      test('renders with headline only', () => {
        const fragment = renderToFragmentWithTheme(Component, {
          ...props,
          headline: `${componentName} headline`,
        });
        expect(fragment).toMatchSnapshot();
      });

      test('renders with description only', () => {
        const fragment = renderToFragmentWithTheme(Component, {
          description: `${componentName} description`,
        });
        expect(fragment).toMatchSnapshot();
      });

      test('renders with children only', () => {
        const fragment = renderToFragmentWithTheme(Component, {
          children: () => (
            <div>{`${componentName}`} custom react component</div>
          ),
        });
        expect(fragment).toMatchSnapshot();
      });

      test('renders with headline and description', () => {
        const fragment = renderToFragmentWithTheme(Component, {
          ...(isPrimary ? tocAttributes : {}),
          headline: `${componentName} headline`,
          description: `${componentName} description`,
        });
        expect(fragment).toMatchSnapshot();
      });

      test('renders with headline and children', () => {
        const fragment = renderToFragmentWithTheme(Component, {
          ...(isPrimary ? tocAttributes : {}),
          headline: `${componentName} headline`,
          children: () => <div>Content Primary custom react component</div>,
        });
        expect(fragment).toMatchSnapshot();
      });

      test('renders with description and children', () => {
        const fragment = renderToFragmentWithTheme(Component, {
          description: `${componentName} description`,
          children: () => (
            <div>{`${componentName}`} custom react component</div>
          ),
        });
        expect(fragment).toMatchSnapshot();
      });

      test('renders with headline, description and content', () => {
        const fragment = renderToFragmentWithTheme(Component, {
          ...(isPrimary ? tocAttributes : {}),
          headline: `${componentName} headline`,
          description: `${componentName} description`,
          children: () => (
            <div>{`${componentName}`} custom react component</div>
          ),
        });
        expect(fragment).toMatchSnapshot();
      });
    });
  },
);
