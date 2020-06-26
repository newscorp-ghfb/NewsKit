import {AspectRatio} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('Aspect Ratio', () => {
  const props = {
    children: 'aspect ratio text',
  };

  test('renders with no dimensions or aspect ratio', () => {
    const fragment = renderToFragmentWithTheme(AspectRatio, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with string dimensions or aspect ratio', () => {
    const fragment = renderToFragmentWithTheme(AspectRatio, {
      ...props,
      height: 'auto',
      width: 'auto',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with number dimensions or aspect ratio', () => {
    const fragment = renderToFragmentWithTheme(AspectRatio, {
      ...props,
      height: '100',
      width: '100',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with no dimensions and 1:1 aspect ratio', () => {
    const fragment = renderToFragmentWithTheme(AspectRatio, {
      ...props,
      aspectRatio: '1:1',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with no dimensions and invalid aspect ratio', () => {
    const fragment = renderToFragmentWithTheme(AspectRatio, {
      ...props,
      aspectRatio: '1:awefa',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with width dimensions and 1:3 aspect ratio', () => {
    const fragment = renderToFragmentWithTheme(AspectRatio, {
      ...props,
      aspectRatio: '1:3',
      width: '100',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with width dimensions in px and 1:3 aspect ratio', () => {
    const fragment = renderToFragmentWithTheme(AspectRatio, {
      ...props,
      aspectRatio: '1:3',
      width: '100px',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with height dimensions and 1:3 aspect ratio', () => {
    const fragment = renderToFragmentWithTheme(AspectRatio, {
      ...props,
      aspectRatio: '1:3',
      height: '300',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with height dimensions in px and 1:3 aspect ratio', () => {
    const fragment = renderToFragmentWithTheme(AspectRatio, {
      ...props,
      aspectRatio: '1:3',
      height: '300px',
    });
    expect(fragment).toMatchSnapshot();
  });
});
