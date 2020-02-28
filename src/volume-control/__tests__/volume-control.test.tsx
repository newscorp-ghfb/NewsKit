import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {VolumeControl} from '../index';

describe('VolumeControl', () => {
  beforeAll(() => {
    // Hides needless forwardRef React errors (because of our mockRange above).
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  test('renders horizontal volume control by default', () => {
    const fragment = renderToFragmentWithTheme(VolumeControl, {
      volume: 1,
      onChange: () => {},
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders vertical volume control by default', () => {
    const fragment = renderToFragmentWithTheme(VolumeControl, {
      volume: 1,
      onChange: () => {},
      vertical: true,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('onChange is called when slider changes value', async () => {
    const onChange = jest.fn();

    // Render the volume control, starting volume at 1
    const volumeControl = renderWithTheme(VolumeControl, {
      volume: 1,
      onChange,
    });

    // Simulate down arrow press, lowering volume by 0.1
    const thumb = volumeControl.getByRole('slider');
    fireEvent.keyDown(thumb, {key: 'ArrowDown', code: 40});

    // Should pass that new volume value back out
    expect(onChange).toHaveBeenCalledWith(0.9);
  });

  test('mute button mutes and unmutes volume', async () => {
    const onChange = jest.fn();

    const volumeControl = renderWithTheme(VolumeControl, {
      volume: 0.8,
      onChange,
    });

    const getMuteButton = () => volumeControl.getByTestId('mute-button');

    // First click, should mute
    fireEvent.click(getMuteButton());

    // Should call onChange and update slider props
    expect(onChange).toHaveBeenCalledWith(0);
    // Now muted, propagate volume change back to comp
    volumeControl.rerender(<VolumeControl volume={0} onChange={onChange} />);
    // Check slider props were updated as expected
    expect(volumeControl.asFragment()).toMatchSnapshot('after muting');

    // Second click, should unmute and return back to starting volume
    onChange.mockClear();
    fireEvent.click(getMuteButton());

    // Should call onChange and update slider props again
    expect(onChange).toHaveBeenCalledWith(0.8);
    // Now unmuted, propagate volume change back to comp
    volumeControl.rerender(<VolumeControl volume={0.8} onChange={onChange} />);
    expect(volumeControl.asFragment()).toMatchSnapshot('after unmuting');

    // Update the volume to a new value (testing this updated unmuted volume level)
    volumeControl.rerender(<VolumeControl volume={0.5} onChange={onChange} />);

    // Mute
    fireEvent.click(getMuteButton());
    volumeControl.rerender(<VolumeControl volume={0} onChange={onChange} />);

    onChange.mockClear();

    // Unmute
    fireEvent.click(getMuteButton());

    // Should call onChange with the updated unmuted value
    expect(onChange).toHaveBeenCalledWith(0.5);
  });

  test('mute button unmutes to 1 if initialised with 0', async () => {
    const onChange = jest.fn();

    const volumeControl = renderWithTheme(VolumeControl, {
      volume: 0,
      onChange,
    });

    const getMuteButton = () => volumeControl.getByTestId('mute-button');

    // Already 0 so this first click will unmute
    fireEvent.click(getMuteButton());

    // Should call onChange with new unmuted volume
    expect(onChange).toHaveBeenCalledWith(1);
  });

  test('volumeup button increases volume to 1', async () => {
    const onChange = jest.fn();

    const volumeControl = renderWithTheme(VolumeControl, {
      volume: 0.4,
      onChange,
    });

    const getVolumeUpButton = () =>
      volumeControl.getByTestId('volumeup-button');

    // First click, should increase volume
    fireEvent.click(getVolumeUpButton());

    // Should call onChange with the updated value
    expect(onChange).toHaveBeenCalledWith(1);

    // Volume set to 1, propagate volume change back to comp
    volumeControl.rerender(<VolumeControl volume={1} onChange={onChange} />);

    // Check slider props were updated as expected
    expect(volumeControl.asFragment()).toMatchSnapshot('volume at 100%');
  });
});
