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

  test('renders with override spaceInset010Squish', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: 'spaceInset010Squish',
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

  test('renders responsive override spaceInset010Squish for xs, spaceInset020Squish for sm, and spaceInset030Squish for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        xs: 'spaceInset010Squish',
        sm: 'spaceInset020Squish',
        md: 'spaceInset030Squish',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceInset010Squish for xs, spaceInset020Squish for sm, and spaceInset030Squish for md breakpoints in reverser order', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        md: 'spaceInset030Squish',
        sm: 'spaceInset020Squish',
        xs: 'spaceInset010Squish',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceInset010Squish for xs, spaceInset020Squish for sm, and wrong for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        xs: 'spaceInset010Squish',
        sm: 'spaceInset020Squish',
        md: 'wrong',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceInset010Squish for xs, and spaceInset030Squish for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        xs: 'spaceInset010Squish',
        md: 'spaceInset030Squish',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override spaceInset010Squish for xs, spaceInset020Squish for sm, spaceInset030Squish for md, spaceInset040Squish for lg breakpoints and ignore wrong prop', () => {
    const fragment = renderToFragmentWithTheme(TestBlock, {
      padding: {
        xs: 'spaceInset010Squish',
        sm: 'spaceInset020Squish',
        md: 'spaceInset030Squish',
        lg: 'spaceInset040Squish',
        wrong: 'spaceInset050Squish',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });
});
