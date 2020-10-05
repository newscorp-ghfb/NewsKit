import {renderToFragmentWithTheme} from '../../test/test-utils';
import {
  getMarginPresetFromTheme,
  getSpacingInsetFromTheme,
  styled,
  MQ,
} from '../style';
import {SpacePresetKeys, PaddingPresetKeys} from '../../theme';

interface SpacingPresetProp {
  margin?: MQ<SpacePresetKeys>;
  padding?: MQ<PaddingPresetKeys>;
}

const TestBlock = styled.div<SpacingPresetProp>`
  ${getMarginPresetFromTheme({sm: 'space040', md: 'space020'}, 'margin')}
  ${getSpacingInsetFromTheme(undefined, 'padding')}
`;

describe('MarginPreset', () => {
  test('renders default', () => {
    const fragment = renderToFragmentWithTheme(TestBlock);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with override spaceStack010', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      margin: 'spaceStack010',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with override incorrect object', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      margin: {
        foo: 'bar',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceStack010 for xs, spaceStack020 for sm, and spaceStack030 for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      margin: {
        xs: 'spaceStack010',
        sm: 'spaceStack020',
        md: 'spaceStack030',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceStack010 for xs, spaceStack020 for sm, and wrong for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      margin: {
        xs: 'spaceStack010',
        sm: 'spaceStack020',
        md: 'wrong',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceStack010 for sm and spaceStack030 for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      margin: {
        sm: 'spaceStack010',
        md: 'spaceStack030',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceStack010 for xs, spaceStack020 for sm, spaceStack030 for md, spaceStack040 for lg breakpoings, and ignore wrong prop', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      margin: {
        xs: 'spaceStack010',
        sm: 'spaceStack020',
        md: 'spaceStack030',
        lg: 'spaceStack040',
        wrong: 'spaceStack050',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });
});

describe('SpaceInset', () => {
  test('renders default', () => {
    const fragment = renderToFragmentWithTheme(TestBlock);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with override spaceInsetSquish010', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: 'spaceInsetSquish010',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with override incorrect object', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        foo: 'bar',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceInsetSquish010 for xs, spaceInsetSquish020 for sm, and spaceInsetSquish030 for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        xs: 'spaceInsetSquish010',
        sm: 'spaceInsetSquish020',
        md: 'spaceInsetSquish030',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceInsetSquish010 for xs, spaceInsetSquish020 for sm, and spaceInsetSquish030 for md breakpoints in reverser order', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        md: 'spaceInsetSquish030',
        sm: 'spaceInsetSquish020',
        xs: 'spaceInsetSquish010',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceInsetSquish010 for xs, spaceInsetSquish020 for sm, and wrong for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        xs: 'spaceInsetSquish010',
        sm: 'spaceInsetSquish020',
        md: 'wrong',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceInsetSquish010 for xs, and spaceInsetSquish030 for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        xs: 'spaceInsetSquish010',
        md: 'spaceInsetSquish030',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceInsetSquish010 for xs, spaceInsetSquish020 for sm, spaceInsetSquish030 for md, spaceInsetSquish040 for lg breakpoints and ignore wrong prop', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        xs: 'spaceInsetSquish010',
        sm: 'spaceInsetSquish020',
        md: 'spaceInsetSquish030',
        lg: 'spaceInsetSquish040',
        wrong: 'spaceInsetSquish050',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });
});
