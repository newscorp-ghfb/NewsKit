import React, {useContext} from 'react';
import {getStylePreset, MQ, styled} from '../../../utils';
import {AudioPlayerContext} from '../../context';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';
import {LabelProps} from '../../../label/types';

interface StyledLabelProps extends Omit<LabelProps, 'children'> {
  length?: number;
  format?: string;
  defaultTime?: any;
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

const StyledLabel = styled.label<StyledLabelProps>``;

export const ThemelessTimeDisplay = ({
  format,
  defaultTime,
  ...props
}: StyledLabelProps) => {
  const {duration, trackPositionArr} = useContext(AudioPlayerContext);
  const currentTime = calculateTime((trackPositionArr as unknown) as number);
  const totalLength = calculateTime((duration as unknown) as number);
  defaultTime = currentTime + totalLength;

  const formatFunction = (answer: string) => {
    if (answer === 'length, current') {
      return `${totalLength} / ${currentTime}`;
    }
    if (answer === 'current') {
      return ` ${currentTime}`;
    }
    if (answer === 'length') return `${totalLength} `;
    else return `${currentTime}/ ${totalLength} `;
  };
  console.log(formatFunction('length'), 'answer');
  return (
    <TimeDisplayContainer>
      {format ? (
        <StyledLabel overrides={props.overrides}>
          {(format = formatFunction(format))}
        </StyledLabel>
      ) : (
        <StyledLabel overrides={props.overrides}>
          {currentTime} / {totalLength}
        </StyledLabel>
      )}
    </TimeDisplayContainer>
  );
};

export const TimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
  defaults,
});
