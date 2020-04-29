import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TagList, TagListProps} from '..';
import {TagSize} from '../../tag';
import {TagListLayout} from '../types';

const tagDataWithHref = [
  {label: 'first label', href: 'www.url1.com'},
  {label: 'second label', href: 'www.url2.com'},
  {label: 'third label', href: 'www.url3.com'},
];
const tagDataWithoutHref = [
  {label: 'first label'},
  {label: 'second label'},
  {label: 'third label'},
];

describe('TagList', () => {
  describe('renders as an anchor', () => {
    test('with defaults', () => {
      const props: TagListProps = {
        tagData: tagDataWithHref,
      };
      const fragment = renderToFragmentWithTheme(TagList, props);
      expect(fragment).toMatchSnapshot();
    });

    test('with custom size', () => {
      const props: TagListProps = {
        size: TagSize.Large,
        tagData: tagDataWithHref,
        layout: TagListLayout.Right,
      };
      const fragment = renderToFragmentWithTheme(TagList, props);
      expect(fragment).toMatchSnapshot();
    });

    test('with custom margins', () => {
      const props: TagListProps = {
        tagData: tagDataWithHref,
        spacing: 'sizing080',
      };
      const fragment = renderToFragmentWithTheme(TagList, props);
      expect(fragment).toMatchSnapshot();
    });
  });
  describe('renders as a span', () => {
    test('with defaults', () => {
      const props: TagListProps = {
        tagData: tagDataWithoutHref,
      };
      const fragment = renderToFragmentWithTheme(TagList, props);
      expect(fragment).toMatchSnapshot();
    });

    test('with custom size', () => {
      const props: TagListProps = {
        size: TagSize.Large,
        tagData: tagDataWithoutHref,
        layout: TagListLayout.Right,
      };
      const fragment = renderToFragmentWithTheme(TagList, props);
      expect(fragment).toMatchSnapshot();
    });

    test('with custom margins', () => {
      const props: TagListProps = {
        tagData: tagDataWithoutHref,
        spacing: 'sizing080',
      };
      const fragment = renderToFragmentWithTheme(TagList, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});
