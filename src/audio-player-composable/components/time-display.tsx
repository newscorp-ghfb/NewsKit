import React, {useContext} from 'react';
import {styled} from '../../utils';
import {AudioPlayerContext} from '../context';

interface StyledSliderLabelProps {
  duration?: number;
  trackPositionArr?: number[];
}

const TimeDisplayLabel = styled.label<StyledSliderLabelProps>``;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TimeDisplay: any = () => {
  const {duration, trackPositionArr} = useContext(AudioPlayerContext);
  return (
    <TimeDisplayLabel duration={duration} trackPositionArr={trackPositionArr}>
      Time goes here {trackPositionArr} {duration}
    </TimeDisplayLabel>
  );
};
