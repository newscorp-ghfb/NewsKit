import React from 'react';

import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {MetaStatus} from '../../../components/meta/types';
import {ComponentPageTemplate} from '..';
import {ComponentPageTemplateProps} from '../types';
import {LayoutProps} from '../../../components/layout';
import {GenericComponent} from '../../../components/playground/types';

jest.mock('../../../components/layout', () => ({children, ...props}: any) => (
  <div data-comp="layout" data-props={JSON.stringify(props)}>
    {children}
  </div>
));

jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

jest.mock('../../../components/table-of-contents', () => ({
  TableOfContents: () => 'TableOfContents Component',
}));

jest.mock('../../template-sections/accessibility-section');
jest.mock('../../template-sections/anatomy-section');
jest.mock('../../template-sections/behaviors-section');
jest.mock('../../template-sections/compliance-section');
jest.mock('../../template-sections/component-api-section');
jest.mock('../../template-sections/interactive-demo-section');
jest.mock('../../template-sections/introduction-section');
jest.mock('../../template-sections/onward-journey-section');
jest.mock('../../template-sections/options-section');
jest.mock('../../template-sections/related-components-section');
jest.mock('../../template-sections/seo-section');
jest.mock('../../template-sections/states-section');
jest.mock('../../template-sections/usage-section');
jest.mock('../../template-sections/code-examples-section');

const mandatoryProps: ComponentPageTemplateProps<GenericComponent> = {
  headTags: {
    title: 'title tag text',
    description: 'description for SEO',
  },
  layoutProps: {
    toggleTheme: ('toggle-theme-function' as any) as () => void,
    themeMode: 'theme-mode',
    path: '/the-path',
  } as LayoutProps,
  componentDefaultsKey: 'component',
  pageIntroduction: {
    type: 'Component',
    name: 'ComponentName',
    hero: {src: 'static/component-hero.svg', alt: 'component-image'},
    introduction: 'Component Introduction',
  },
  meta: {
    status: MetaStatus.Supported,
    introduced: 'v0.3',
    codeUrl: 'https://github.com/newscorp-ghfb/newskit',
    figmaUrl: 'https://github.com/newscorp-ghfb/newskit',
  },
};

describe('Component Page Template', () => {
  test('renders with mandatory props only', () => {
    const fragment = renderToFragmentWithTheme(
      ComponentPageTemplate,
      mandatoryProps,
    );
    expect(fragment).toMatchSnapshot();
  });

  [
    ['Interactive Demo', 'interactiveDemo'],
    ['Anatomy', 'anatomy'],
    ['Options', 'options'],
    ['States', 'states'],
    ['Behaviors', 'behaviors'],
    ['CodeExamplesSection', 'example'],
    ['Usage', 'usage'],
    ['Accessibility', 'accessibility'],
    ['SEO', 'seo'],
    ['Component API', 'componentAPI'],
    ['Compliance', 'compliance'],
    ['Related', 'related'],
  ].forEach(([section, prop]) => {
    test(`renders the ${section} section when prop ${prop} is passed`, () => {
      const props = {
        ...mandatoryProps,
        [prop]: {
          'props for': `the ${section} section`,
        },
      };
      const fragment = renderToFragmentWithTheme(ComponentPageTemplate, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});
