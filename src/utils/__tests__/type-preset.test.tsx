import {renderToFragmentWithTheme} from '../../test/test-utils';
import {getTypePresetFromTheme, styled, MQ} from '../style';
import {TypePresetKeys} from '../../themes';

interface TestTextProp {
  $typePreset: MQ<TypePresetKeys>;
}

const TestText = styled.p<TestTextProp>`
  ${getTypePresetFromTheme('body030', '$typePreset')}
`;

describe('TypePreset', () => {
  test('renders default', () => {
    const fragment = renderToFragmentWithTheme(TestText);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with override body010', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      $typePreset: 'body010',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override body010 for xs, body020 for sm, and body030 for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      $typePreset: {
        xs: 'body010',
        sm: 'body020',
        md: 'body030',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override body010 for xs, body020 for sm, and wrong for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      $typePreset: {
        xs: 'body010',
        sm: 'body020',
        md: 'wrong',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override body010 for xs and body030 for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      $typePreset: {
        xs: 'body010',
        md: 'body030',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders responsive override body010 for xs, body020 for sm, body030 for md, code010 for lg breakpoints and ignore wrong prop', () => {
    const fragment = renderToFragmentWithTheme(TestText, {
      $typePreset: {
        xs: 'body010',
        sm: 'body020',
        md: 'body030',
        lg: 'code010',
        wrong: 'code020',
      } as any,
    });
    expect(fragment).toMatchSnapshot();
  });
});
