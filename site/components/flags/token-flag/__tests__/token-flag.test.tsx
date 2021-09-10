import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import React from 'react';
import {TokenFlagProps} from '..';
import {TokenFlag} from '../token-flag';

const renderTokenFlag = (props: TokenFlagProps) => (
  <TokenFlag {...props}>Text</TokenFlag>
);

describe('TokenFlag', () => {
  test('renders default token flag without color', () => {
    const fragment = renderToFragmentWithTheme(renderTokenFlag);
    expect(fragment).toMatchSnapshot();
  });

  test('renders color token flag', () => {
    const props: TokenFlagProps = {
      color: 'inkNegative',
    };
    const fragment = renderToFragmentWithTheme(renderTokenFlag, props);
    expect(fragment).toMatchSnapshot();
  });
});
