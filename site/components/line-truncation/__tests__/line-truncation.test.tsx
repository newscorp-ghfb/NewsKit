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
    };
    const fragment = renderToFragmentWithTheme(LineTruncation, props);
    expect(fragment).toMatchSnapshot();
  });
});
