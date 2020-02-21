import {renderToFragmentWithTheme} from '../../test/test-utils';
import {CircularProgressIndicator} from '../circular-progress-indicator';

describe('Circle progress indicator', () => {
  test(`renders default circle progress indicator`, () => {
    const fragment = renderToFragmentWithTheme(CircularProgressIndicator);

    expect(fragment).toMatchSnapshot();
  });

  test(`renders circle progress indicator with size`, () => {
    const fragment = renderToFragmentWithTheme(CircularProgressIndicator, {
      $size: 'iconSize040',
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders circle progress indicator without track`, () => {
    const fragment = renderToFragmentWithTheme(CircularProgressIndicator, {
      hideTrack: true,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders circle progress indicator with different style`, () => {
    const fragment = renderToFragmentWithTheme(CircularProgressIndicator, {
      $sliderTrackStylePreset: 'circularProgressIndicatorTrackInverse',
      $sliderIndicatorTrackStylePreset:
        'circularProgressIndicatorIndicatorInverse',
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders circle progress indicator with aria label`, () => {
    const fragment = renderToFragmentWithTheme(CircularProgressIndicator, {
      ariaLabel: 'progress',
    });

    expect(fragment).toMatchSnapshot();
  });
});
