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

  test('renders bold Paragraph', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph component',
      $bold: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with drop cap', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph component',
      $bold: true,
      $dropCap: true,
    } as ParagraphProps);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with coloured drop cap', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph component',
      $bold: true,
      $dropCap: true,
      $dropCapColor: 'link010',
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
