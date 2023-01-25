/* eslint-disable global-require */
import React from 'react';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {PatternPageTemplate} from '..';
import {PatternPageTemplateProps} from '../types';
import {LayoutProps} from '../../../components/layout';

// Added next-router-mock to avoid "Error: NextRouter was not mounted"
// This is needed for mocking 'next/link' reliably under Next 13
jest.mock('next/dist/client/router', () => require('next-router-mock'));

jest.mock('../../../components/layout', () => ({children, ...props}: any) => (
  <div data-comp="layout" data-props={JSON.stringify(props)}>
    {typeof children === 'function' ? children({themeMode: 'light'}) : children}
  </div>
));

jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

jest.mock('../../../components/table-of-contents', () => ({
  TableOfContents: () => 'TableOfContents Component',
}));

jest.mock('../../template-sections/', () => ({
  IntroductionSection: () => 'IntroductionSection Component',
  OnwardJourneySection: () => 'OnwardJourneySection Component',
}));

const mandatoryProps: PatternPageTemplateProps = {
  headTags: {
    title: 'title tag text',
    description: 'description for SEO',
  },
  layoutProps: {
    toggleTheme: ('toggle-theme-function' as any) as () => void,
    themeMode: 'theme-mode',
    path: '/the-path',
  } as LayoutProps,
  pageIntroduction: {
    type: 'Component',
    name: 'ComponentName',
    hero: {src: 'static/component-hero.svg', alt: 'component-image'},
    introduction: 'Component Introduction',
  },
  children: <div>Pattern template content</div>,
};

describe('Foundation Page Template', () => {
  test('renders with mandatory props only', () => {
    const fragment = renderToFragmentWithTheme(
      PatternPageTemplate,
      mandatoryProps,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with feature card', () => {
    const fragment = renderToFragmentWithTheme(PatternPageTemplate, {
      ...mandatoryProps,
      featureCard: {
        title: 'card title',
        description: 'card description',
        buttonLabel: 'card button label',
        stylePrefix: 'featureCardInsideTemplate',
        layout: 'horizontal',
        href: '#',
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
