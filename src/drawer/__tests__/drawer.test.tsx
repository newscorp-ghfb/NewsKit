import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Drawer} from '../drawer';

describe('Drawer layout', () => {
  test('renders default right position', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      children: <div>Drawer content</div>,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders left position', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      children: <div>Drawer content</div>,
      placement: 'left',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders closed drawer', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: false,
      children: <div>Drawer content</div>,
    });
    expect(fragment).toMatchSnapshot();
  });
});
