import React from 'react';
import {
  Paragraph,
  P,
  Subscript,
  Sub,
  Superscript,
  Sup,
  ParagraphProps,
  getFirstLetter,
  removeFirstLetter,
} from '../paragraph';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('Paragraph', () => {
  test('renders Paragraph', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph component',
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with additional HTML attributes', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph component',
      id: 'paragraph-id',
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders Paragraph with overrides', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph component',
      overrides: {
        stylePreset: 'inkInverse',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders Paragraph with logical props', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph component',
      overrides: {
        paddingInline: 'space020',
        paddingBlock: 'space040',
        marginBlock: 'space060',
        marginInline: 'space080',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders empty Paragraph with dropCap without crashing ', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: undefined,
      dropCap: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with drop cap', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph component',
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with drop cap and complex children', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: (
        <>
          paragraph <b>component</b> with <a href="/">link</a>
        </>
      ),
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with dropCap logical props', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'dropcap with logical props',
      dropCap: true,
      overrides: {
        dropCap: {
          paddingInline: 'space020',
          paddingBlock: 'space020',
          marginBlock: 'space020',
          marginInline: 'space020',
        },
      },
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('does not render dropCap when first children is not plain text', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: (
        <>
          <b>paragraph</b> component
        </>
      ),
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles dropCap with numeric first child', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: [123, ' text content'],
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles dropCap with null first child', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: [null, 'text content'],
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles dropCap with empty string', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: '',
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles dropCap with React element as first child', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: [<span key="1">element</span>, ' text'],
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with dropCap overrides for both stylePreset and typographyPreset', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph with full dropCap overrides',
      dropCap: true,
      overrides: {
        dropCap: {
          stylePreset: 'inkInverse',
          typographyPreset: 'editorialHeadline010',
        },
      },
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles dropCap with fragment containing string as first child', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: (
        <>
          Hello world from fragment
          <span>more content</span>
        </>
      ),
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles dropCap with nested fragment structure', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: (
        <>
          <>Testing nested fragment</>
          <span>additional content</span>
        </>
      ),
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles dropCap with complex fragment containing mixed content', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: (
        <>
          <>
            <>Deep nested fragment starts here</>
            <b>bold text</b>
          </>
          <span>span content</span>
        </>
      ),
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles dropCap with true React Fragment as first child', () => {
    // Create a proper React Fragment element that will trigger the fragment branches
    const FragmentChild = React.Fragment;
    const fragmentElement = React.createElement(
      FragmentChild,
      null,
      'Fragment text content',
      React.createElement('span', null, 'additional content'),
    );

    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: [fragmentElement, 'more text'],
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles dropCap with nested React Fragment structure', () => {
    // Create nested fragments that will exercise the recursive fragment handling
    const innerFragment = React.createElement(
      React.Fragment,
      null,
      'Nested fragment text',
    );

    const outerFragment = React.createElement(
      React.Fragment,
      null,
      innerFragment,
      React.createElement('em', null, 'emphasized text'),
    );

    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: outerFragment,
      dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('P alias for Paragraph', () => {
    expect(P).toEqual(Paragraph);
  });
});

describe('Subscript', () => {
  test('renders Subscript', () => {
    const wrapper = renderToFragmentWithTheme(Subscript, {
      children: 'subscript component',
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('Sub alias for Subscript', () => {
    expect(Sub).toEqual(Subscript);
  });
});

describe('Superscript', () => {
  test('renders Superscript', () => {
    const wrapper = renderToFragmentWithTheme(Superscript, {
      children: 'superscript component',
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('Sup alias for Superscript', () => {
    expect(Sup).toEqual(Superscript);
  });
});

describe('getFirstLetter', () => {
  test('returns first letter of simple string', () => {
    expect(getFirstLetter(['hello'])).toBe('h');
  });

  test('returns empty string for non-string, non-fragment', () => {
    expect(getFirstLetter([123])).toBe('');
  });

  test('recurses into single-level fragment', () => {
    const frag = React.createElement(React.Fragment, null, 'world');
    expect(getFirstLetter([frag])).toBe('w');
  });

  test('recurses into nested fragments', () => {
    const inner = React.createElement(React.Fragment, null, 'nested');
    const outer = React.createElement(React.Fragment, null, inner);
    expect(getFirstLetter([outer])).toBe('n');
  });

  test('handles fragment with multiple children', () => {
    const frag = React.createElement(React.Fragment, null, 'first', 'second');
    expect(getFirstLetter([frag])).toBe('f');
  });

  test('handles fragment with invalid props (no children)', () => {
    const invalidFrag = React.createElement(React.Fragment, {});
    expect(getFirstLetter([invalidFrag])).toBe('');
  });

  test('handles deeply nested fragments with mixed content', () => {
    const deepInner = React.createElement(React.Fragment, null, 'deep');
    const mid = React.createElement(
      React.Fragment,
      null,
      deepInner,
      <span>mid</span>,
    );
    const outer = React.createElement(React.Fragment, null, mid);
    expect(getFirstLetter([outer])).toBe('d');
  });
});

describe('removeFirstLetter', () => {
  test('removes first letter from simple string', () => {
    const result = removeFirstLetter(['hello']);
    expect(result).toEqual(['ello']);
  });

  test('returns original for non-string, non-fragment', () => {
    const input = [123, 'text'];
    const result = removeFirstLetter(input);
    expect(result).toEqual(input);
  });

  test('recurses into single-level fragment', () => {
    const frag = React.createElement(React.Fragment, null, 'world');
    const result = removeFirstLetter([frag]);
    expect(result).toEqual([['orld']]);
  });

  test('recurses into nested fragments', () => {
    const inner = React.createElement(React.Fragment, null, 'nested');
    const outer = React.createElement(React.Fragment, null, inner);
    const result = removeFirstLetter([outer]);
    expect(result).toEqual([[['ested']]]);
  });

  test('handles fragment with multiple children', () => {
    const frag = React.createElement(React.Fragment, null, 'first', 'second');
    const result = removeFirstLetter([frag]);
    expect(result).toEqual([['irst', 'second']]);
  });

  test('handles fragment with invalid props (no children)', () => {
    const invalidFrag = React.createElement(React.Fragment, {});
    const result = removeFirstLetter([invalidFrag, 'fallback']);
    expect(result).toEqual([[], 'fallback']);
  });

  test('handles deeply nested fragments with mixed content', () => {
    const deepInner = React.createElement(React.Fragment, null, 'deep');
    const mid = React.createElement(
      React.Fragment,
      null,
      deepInner,
      <span>mid</span>,
    );
    const outer = React.createElement(React.Fragment, null, mid);
    const result = removeFirstLetter([outer]);
    expect(result).toEqual([[[['eep'], <span>mid</span>]]]);
  });
});
