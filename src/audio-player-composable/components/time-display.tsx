import React, {useContext} from 'react';
import {getStylePreset, MQ, styled} from '../../utils';
import {AudioPlayerContext} from '../context';
import {withOwnTheme} from '../../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {Label} from '../../label/label';

interface StyledLabelProps {
  length?: number;
  format?: object;
  currentTime?: number[];
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
}
const calculateTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${returnedMinutes}:${returnedSeconds}`;
};

const TimeDisplayContainer = styled.div`
  ${getStylePreset(`container`, '')}
`;

export const ThemelessTimeDisplay = ({format, ...props}: StyledLabelProps) => {
  const {duration, trackPositionArr} = useContext(AudioPlayerContext);
  const currentTime = calculateTime((trackPositionArr as unknown) as number);
  const length = calculateTime((duration as unknown) as number);
  return (
    <TimeDisplayContainer>
      <Label overrides={props.overrides}>
        {currentTime} / {length}
      </Label>
    </TimeDisplayContainer>
  );
};

export const TimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
  defaults,
});
