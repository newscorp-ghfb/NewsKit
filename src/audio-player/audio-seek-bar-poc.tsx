import React from 'react'
import { Slider } from '..'

interface AudioSeekBar {
  duration: number;
  trackPositionArr: number[];
  onChangeSlider: (values: number[]) => void;
}

export const AudioSeekBar = ({
  duration,
  trackPositionArr,
  onChangeSlider,
}: AudioSeekBar) => {

  return <Slider
        min={0}
        max={Math.floor(duration) || 1}
        values={trackPositionArr}
        step={1}
        ariaLabel="seek bar"
        onChange={onChangeSlider}
        // minLabel={formattedTime}
        // maxLabel={formattedDuration}
        // ariaValueText={`Playback time: ${seekBarAriaValueText(
        //   trackPositionArr,
        //   )} of ${seekBarAriaValueText([duration])}`}
          // renderTrack={renderTrack}
          // labelPosition={LabelPosition.After}
          // dataTestId="audio-slider"
          // ariaDescribedBy={srOnlyForwardRewind}
          // overrides={{
          //   ...seekBarSliderDefaults,
          //   ...filterOutFalsyProperties(seekBarSliderOverrides),
          // }}
        />
        {/* <ScreenReaderOnly id={srOnlyForwardRewind} aria-hidden="true">
          Use the arrow keys to fast forward or rewind
        </ScreenReaderOnly> */}
}