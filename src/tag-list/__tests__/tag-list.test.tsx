import {renderToFragmentWithTheme} from '../../test/test-utils';
import {BorderRadiusShape} from '../../themes';
import {TagList, TagListProps} from '..';
import {TagSize} from '../../tag';
import {TagListLayout} from '../types';

describe('TagList', () => {
  test('renders with defaults', () => {
    const props: TagListProps = {
      tagData: [
        {label: 'first label', href: 'www.url1.com'},
        {label: 'second label', href: 'www.url2.com'},
        {label: 'third label', href: 'www.url3.com'},
      ],
    };
    const fragment = renderToFragmentWithTheme(TagList, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom size and shape', () => {
    const props: TagListProps = {
      $size: TagSize.Large,
      $shape: BorderRadiusShape.Rounded,
      tagData: [
        {label: 'first label', href: 'www.url1.com'},
        {label: 'second label', href: 'www.url2.com'},
        {label: 'third label', href: 'www.url3.com'},
      ],
      $layout: TagListLayout.Right,
    };
    const fragment = renderToFragmentWithTheme(TagList, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom margins', () => {
    const props: TagListProps = {
      tagData: [
        {label: 'first label', href: 'www.url1.com'},
        {label: 'second label', href: 'www.url2.com'},
        {label: 'third label', href: 'www.url3.com'},
      ],
      $spacing: 'sizing080',
    };
    const fragment = renderToFragmentWithTheme(TagList, props);
    expect(fragment).toMatchSnapshot();
  });
});
