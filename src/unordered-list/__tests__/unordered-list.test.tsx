import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {UnorderedList, UnorderedListProps} from '..';
import {IconFilledMood} from '../../icons';
import {Link} from '../../link/link';
import {StyledUl} from '../styled';

const renderUnorderedListWithItems = (props: UnorderedListProps) => (
  <UnorderedList {...props}>
    {[
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      'second node',
      'third node',
    ]}
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

  test('renders with additional HTML attributes', () => {
    const props: UnorderedListProps = {
      id: 'unordered-list-id',
      children: ['ListItem'],
    };

    const fragment = renderToFragmentWithTheme(UnorderedList, props);
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

  test('renders with no list item marker', () => {
    const props: UnorderedListProps = {
      listItemMarker: null,
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

  test('renders with marker at the start when list takes more than one line', () => {
    const props: UnorderedListProps = {
      markerAlign: 'start',
      listItemMarker: IconFilledMood,
    };
    const fragment = renderToFragmentWithTheme(
      renderUnorderedListWithItems,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with marker at the end when list takes more than one line', () => {
    const props: UnorderedListProps = {
      markerAlign: 'end',
      listItemMarker: IconFilledMood,
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

  test('renders with logical props', () => {
    const props: UnorderedListProps = {
      overrides: {
        paddingInline: 'space020',
        paddingBlock: 'space040',
        marginBlock: 'space060',
        marginInline: 'space080',
      },
      listItemMarker: IconFilledMood,
    };
    const fragment = renderToFragmentWithTheme(
      renderUnorderedListWithItems,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });
});
