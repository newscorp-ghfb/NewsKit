import {fireEvent} from '@testing-library/react';
import {renderWithTheme} from '../../test/test-utils';
import {StatefulSlider} from '../stateful-slider';

describe('StatefulSlider', () => {
  test('holds the slider values in state', () => {
    const slider = renderWithTheme(StatefulSlider, {
      values: [50],
      min: 25,
      max: 75,
      step: 1,
    });

    // Simulate pressing page down to lower value by 10
    const thumb = slider.getByRole('slider');
    fireEvent.keyDown(thumb, {key: 'PageDown', code: 34});

    // Should render the slider with updated value
    expect(slider.asFragment()).toMatchSnapshot();
  });

  test('calls onChange with value updates', () => {
    const onChange = jest.fn();

    const slider = renderWithTheme(StatefulSlider, {
      onChange,
      values: [50],
      min: 25,
      max: 75,
      step: 1,
    });

    // Simulate pressing page up to raise value by 10
    const thumb = slider.getByRole('slider');
    fireEvent.keyDown(thumb, {key: 'PageUp', code: 33});

    // Should call onChange with new value
    expect(onChange).toHaveBeenCalledWith([60]);
  });
});
