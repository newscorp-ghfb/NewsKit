import React, {useContext} from 'react';
import {Slider} from '..';
import {AudioPlayerContext} from './context';

// interface AudioSeekBarPOCProps {
//   duration: number;
//   trackPositionArr: number[];
//   onChangeSlider: (values: number[]) => void;
// }

export const AudioSeekBarPOC = () => {
  const {duration, trackPositionArr, onChangeSlider} = useContext(
    AudioPlayerContext,
  );

  return (
    <Slider
      min={0}
      max={Math.floor(duration!) || 1}
      values={trackPositionArr!}
      step={1}
      ariaLabel="seek bar"
      onChange={onChangeSlider!}
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
  );
};
//   {
//     /* <ScreenReaderOnly id={srOnlyForwardRewind} aria-hidden="true">
//           Use the arrow keys to fast forward or rewind
//         </ScreenReaderOnly> */
//   }
