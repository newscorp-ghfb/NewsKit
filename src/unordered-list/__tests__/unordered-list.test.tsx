import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {UnorderedList, UnorderedListProps} from '..';
import {IconFilledMood} from '../../icons';
import {Link} from '../../link/link';
import {StyledUl} from '../unordered-list';

const renderUnorderedListWithItems = (props: UnorderedListProps) => (
  <UnorderedList {...props}>
    {['first node', 'second node', 'third node']}
  </UnorderedList>
);

const renderStyledUlWithItems = (props: any) => (
  <StyledUl {...props}>{['first node', 'second node', 'third node']}</StyledUl>
);

describe('UnorderedList', () => {
  test('renders with defaults', () => {
    const fragment = renderToFragmentWithTheme(renderUnorderedListWithItems);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom list item marker', () => {
    const props: UnorderedListProps = {
      listItemMarker: IconFilledMood,
    };
    const fragment = renderToFragmentWithTheme(
      renderUnorderedListWithItems,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom list item marker with different size', () => {
    const props: UnorderedListProps = {
      overrides: {marker: {size: 'iconSize010'}},
      listItemMarker: IconFilledMood,
    };
    const fragment = renderToFragmentWithTheme(
      renderUnorderedListWithItems,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with defaults when marker is incorrect', () => {
    const props = {
      listItemMarker: '' as any,
    };
    const fragment = renderToFragmentWithTheme(
      renderUnorderedListWithItems,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders different types of children', () => {
    const props = {
      children: [
        'String node',
        null,
        100,
        <Link key="uniqueLinkKey" href="http://localhost:6006">
          Link component
        </Link>,
      ],
    };
    const fragment = renderToFragmentWithTheme(UnorderedList, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders default StyledUl', () => {
    const fragment = renderToFragmentWithTheme(renderStyledUlWithItems);
    expect(fragment).toMatchSnapshot();
  });

  test('renders StyledUl with given display prop', () => {
    const props = {
      display: 'inline-block',
    };
    const fragment = renderToFragmentWithTheme(renderStyledUlWithItems, props);
    expect(fragment).toMatchSnapshot();
  });
});
