import React from 'react';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {MetaStatus} from '../../meta/types';
import {ComponentPageTemplate} from '..';
import {ComponentPageTemplateProps} from '../types';

jest.mock('../../layout', () => ({children, ...props}: any) => (
  <div data-comp="layout" data-props={JSON.stringify(props)}>
    {children}
  </div>
));

jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

jest.mock('../sections/accessibility-section');
jest.mock('../sections/anatomy-section');
jest.mock('../sections/behaviors-section');
jest.mock('../sections/compliance-section');
jest.mock('../sections/component-api-section');
jest.mock('../sections/interactive-demo-section');
jest.mock('../sections/introduction-section');
jest.mock('../sections/onward-journey-section');
jest.mock('../sections/options-section');
jest.mock('../sections/related-components-section');
jest.mock('../sections/seo-section');
jest.mock('../sections/states-section');
jest.mock('../sections/usage-section');
jest.mock('../../table-of-contents', () => ({
  TableOfContents: () => 'TableOfContents Component',
}));

const mandatoryProps: ComponentPageTemplateProps = {
  layoutProps: {
    toggleTheme: ('toggle-theme-function' as any) as () => void,
    themeMode: 'theme-mode',
    path: '/the-path',
  },
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
  test('renders with mandatory sections only', () => {
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
    ['Usage', 'usage'],
    ['Accessibility', 'accessibility'],
    ['SEO', 'seo'],
    ['Component API', 'componentAPI'],
    ['Compliance', 'compliance'],
    ['Related', 'related'],
    ['Feature Card', 'featureCard'],
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
