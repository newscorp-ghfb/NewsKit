import {renderToFragmentWithTheme} from '../../test/test-utils';
import {DateLine} from '..';

const date = '2019-01-25T15:32:00';

jest.mock('date-fns/format', () => () => 'Mock Date');

describe('DateLine', () => {
  test('renders with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(DateLine, {
      date,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with provided date, format, prefix and suffix', () => {
    const fragment = renderToFragmentWithTheme(DateLine, {
      date,
      prefix: 'Updated: ',
      dateFormat: 'd MMM yyyy, H:mm',
      suffix: ', The Times',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom color', () => {
    const fragment = renderToFragmentWithTheme(DateLine, {
      date,
      color: 'inkSubtle',
    });
    expect(fragment).toMatchSnapshot();
  });
});
