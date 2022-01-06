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
import {createTheme} from '../../theme';

const theme = createTheme({
  overrides: {
    stylePresets: {
      linkInline: {
        base: {
          color: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.interactivePrimary030}}',
          textDecoration: 'underline',
        },
        hover: {
          color: '{{colors.interactivePrimary040}}',
          iconColor: '{{colors.interactivePrimary040}}',
          textDecoration: 'underline',
        },
        active: {
          color: '{{colors.interactivePrimary050}}',
          iconColor: '{{colors.interactivePrimary050}}',
          textDecoration: 'underline',
        },
        visited: {
          color: '{{colors.interactiveVisited010}}',
          iconColor: '{{colors.interactiveVisited010}}',
          textDecoration: 'underline',
        },
        'visited:hover': {
          color: '{{colors.interactiveVisited010}}',
          iconColor: '{{colors.interactiveVisited010}}',
          textDecoration: 'underline',
        },
      },
    },
  },
});

describe('Paragraph', () => {
  test('renders Paragraph', () => {
    const wrapper = renderToFragmentWithTheme(Paragraph, {
      children: 'paragraph component',
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders Paragraph with overrides', () => {
    const wrapper = renderToFragmentWithTheme(
      Paragraph,
      {
        children: 'paragraph component',
        overrides: {
          stylePreset: 'linkInline',
        },
      },
      theme,
    );
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
