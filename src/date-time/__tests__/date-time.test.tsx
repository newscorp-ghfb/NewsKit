import {renderToFragmentWithTheme} from '../../test/test-utils';
import {DateTime} from '..';

const date = '2019-01-25T15:32:00';

describe('DateTime', () => {
  test('renders with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(DateTime, {
      date,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with additional HTML attributes', () => {
    const fragment = renderToFragmentWithTheme(DateTime, {
      date,
      id: 'date-time-id',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with provided date, format, prefix and suffix', () => {
    const fragment = renderToFragmentWithTheme(DateTime, {
      date,
      prefix: 'Updated: ',
      dateFormat: 'd MMM yyyy, H:mm',
      suffix: ', The Times',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with overrides', () => {
    const fragment = renderToFragmentWithTheme(DateTime, {
      date: '2017-01-01T04:32:00.000Z',
      dateFormat: 'd MMM yyyy, H:mm',
      suffix: ', The Times',
      prefix: 'Updated:',
      overrides: {
        typographyPreset: 'utilityLabel010',
        stylePreset: 'articleHeadlineKicker',
        prefix: {
          typographyPreset: 'utilityLabel020',
          stylePreset: 'articleHeadlineKicker',
        },
        suffix: {
          typographyPreset: 'utilityLabel020',
          stylePreset: 'articleHeadlineKicker',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with logical props overrides', () => {
    const fragment = renderToFragmentWithTheme(DateTime, {
      date: '2017-01-01T04:32:00.000Z',
      dateFormat: 'd MMM yyyy, H:mm',
      suffix: ', The Times',
      prefix: 'Updated:',
      overrides: {
        marginInline: '30px',
        paddingInline: '30px',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with children', () => {
    const fragment = renderToFragmentWithTheme(DateTime, {
      date,
      children: '2 years ago',
    });
    expect(fragment).toMatchSnapshot();
  });
});
