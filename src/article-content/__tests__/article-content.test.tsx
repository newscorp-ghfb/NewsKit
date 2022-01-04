import React from 'react';
import {ArticleContent} from '../article-content';
import {renderToFragmentWithTheme} from '../../test/test-utils';

const createRenderPropsComp = (name?: string) => {
  const comp: React.FC = props => (
    <code data-name={name}>{JSON.stringify(props, null, 2)}</code>
  );
  comp.displayName = name;
  return comp;
};
const RenderPropsComp = createRenderPropsComp();
const headingComps = [
  'Heading1',
  'Heading2',
  'Heading3',
  'Heading4',
  'Heading5',
  'Heading6',
].map(name => createRenderPropsComp(name));

describe('ArticleContent', () => {
  test('renders empty ArticleContent', () => {
    const wrapper = renderToFragmentWithTheme(ArticleContent);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders null ArticleContent children', () => {
    const wrapper = renderToFragmentWithTheme(ArticleContent, {
      children: [null],
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders ArticleContent with children', () => {
    const children = [<RenderPropsComp />, <RenderPropsComp />];
    const wrapper = renderToFragmentWithTheme(ArticleContent, {children});
    expect(wrapper).toMatchSnapshot();
  });

  test('renders ArticleContent with bold intro', () => {
    const children = [
      <RenderPropsComp />,
      <RenderPropsComp />,
      ...headingComps,
    ];
    const wrapper = renderToFragmentWithTheme(ArticleContent, {
      children,
      $boldIntro: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders ArticleContent with bold headings', () => {
    const children = [
      <RenderPropsComp />,
      <RenderPropsComp />,
      ...headingComps,
    ];
    const wrapper = renderToFragmentWithTheme(ArticleContent, {
      children,
      $boldHeadings: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders ArticleContent with bold intro and bold headings', () => {
    const children = [
      <RenderPropsComp />,
      <RenderPropsComp />,
      ...headingComps,
    ];
    const wrapper = renderToFragmentWithTheme(ArticleContent, {
      children,
      $boldHeadings: true,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
