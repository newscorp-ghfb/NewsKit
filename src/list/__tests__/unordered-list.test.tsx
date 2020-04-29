import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {UnorderedList} from '..';
import {Twitter} from '../../icons';

describe('UnorderedList', () => {
  test('renders with defaults', () => {
    const props = {
      children: ['first node', 'second node', 'third node'],
    };
    const fragment = renderToFragmentWithTheme(UnorderedList, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom list item marker', () => {
    const props = {
      children: ['first node', 'second node', 'third node'],
      listItemMarker: () => <Twitter size="iconSize010" />,
    };
    const fragment = renderToFragmentWithTheme(UnorderedList, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with defaults when marker is incorrect', () => {
    const props = {
      children: [null, 'second node', 'third node'],
      listItemMarker: '' as any,
    };
    const fragment = renderToFragmentWithTheme(UnorderedList, props);
    expect(fragment).toMatchSnapshot();
  });
});
