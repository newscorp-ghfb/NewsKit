import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {LineTruncationProps} from '..';
import {LineTruncation} from '../line-truncation';

describe('LineTruncation', () => {
  test('renders default line truncation', () => {
    const fragment = renderToFragmentWithTheme(LineTruncation);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with line truncation attribute', () => {
    const props: LineTruncationProps = {
      lines: '2',
      children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed eleifend arcu. Etiam vehicula cursus tellus vitae eleifend. Vivamus eget tellus id tellus porttitor ornare pharetra eget ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent mollis est ipsum.',
    };
    const fragment = renderToFragmentWithTheme(LineTruncation, props);
    expect(fragment).toMatchSnapshot();
  });
});
