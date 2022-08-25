import React from 'react';
import {TextBlock, UnorderedList} from 'newskit';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {UnpackContent} from '../unpack-content';
import {Link} from '../../link';
import {InlineCode} from '../../markdown-elements';

describe('UnpackContent', () => {
  test('renders simple text', () => {
    const fragment = renderToFragmentWithTheme(UnpackContent, {
      children: 'simple text',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders component', () => {
    const fragment = renderToFragmentWithTheme(UnpackContent, {
      children: <TextBlock>text</TextBlock>,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders fragment with text and inline components', () => {
    const fragment = renderToFragmentWithTheme(UnpackContent, {
      children: (
        <>
          text{' '}
          <Link href="/" key="link">
            link
          </Link>{' '}
          another text <InlineCode key="code">code</InlineCode>
        </>
      ),
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders fragment with text and block components', () => {
    const fragment = renderToFragmentWithTheme(UnpackContent, {
      children: (
        <>
          text here
          <UnorderedList>
            <>Item 1</>
            <>Item 2</>
            <>Item 3</>
          </UnorderedList>
          more text
        </>
      ),
    });
    expect(fragment).toMatchSnapshot();
  });
});
