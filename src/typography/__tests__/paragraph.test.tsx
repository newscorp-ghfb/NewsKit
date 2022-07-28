import React from 'react';
import {
  Paragraph,
  P,
  Subscript,
  Sub,
  Superscript,
  Sup,
  ParagraphProps,
} from '../paragraph';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('Paragraph', () => {
  test('renders Paragraph', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph component',
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
