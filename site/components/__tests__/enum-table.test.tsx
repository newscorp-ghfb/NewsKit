import React from 'react';
import {renderToFragmentWithTheme} from '../../utils/test-utils';
import {EnumTable} from '../enum-table';

enum MyTestEnum {
  Value1 = 'test-value-1',
  Value2 = 'test-value-2',
  Value3 = 'test-value-3',
}

describe('EnumTable', () => {
  test('renders enum as expected', () => {
    const fragment = renderToFragmentWithTheme(EnumTable, {
      children: (MyTestEnum as unknown) as React.ReactNode,
    });
    expect(fragment).toMatchSnapshot();
  });
});
