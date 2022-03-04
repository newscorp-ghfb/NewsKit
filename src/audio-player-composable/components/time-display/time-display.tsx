import React, {useContext} from 'react';
import {getStylePreset, MQ, styled} from '../../../utils';
import {AudioPlayerContext} from '../../context';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {Label} from '../../../label/label';
import {LabelProps} from '../../../label/types';

interface StyledLabelProps extends Omit<LabelProps, 'children'> {
  length?: number;
  format?: any;
  defaultTime?:any
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

const StyledLabel = styled.label<StyledLabelProps>``

export const ThemelessTimeDisplay = ({format, defaultTime, ...props}: StyledLabelProps) => {
  const {duration, trackPositionArr} = useContext(AudioPlayerContext);
  const currentTime = calculateTime((trackPositionArr as unknown) as number);
  const totalLength = calculateTime((duration as unknown) as number);
  defaultTime= currentTime  + totalLength 
  const formatFunction = (current?: string, length?: string) => {
    // if (current === 'current' && length === 'length') {
    //   return `ciao ${currentTime} ${totalLength} first answer`;
    // }
    if (length && current) {
      return `${totalLength} / ${currentTime}`;
    } else if (current === 'current' && !length) {
      return ` ${currentTime}`;
    } else return `${totalLength} `;
  };


  //if format exsists use formatFunction to handle
  console.log(formatFunction('current'));
  return (
    <TimeDisplayContainer>

      {format && (
        <StyledLabel overrides={props.overrides}>
          {format=formatFunction()}  
        </StyledLabel>
      )}
       {!format && (
        <StyledLabel overrides={props.overrides}>
          {currentTime} / {totalLength}
        </StyledLabel>
      )}

     {/* {currentTime} / {totalLength} */}
    </TimeDisplayContainer>
  );
};

export const TimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
  defaults,
});
