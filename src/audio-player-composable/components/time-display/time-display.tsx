import React, {useContext} from 'react';
import {getStylePreset, getTypographyPreset, MQ, styled} from '../../../utils';
import {AudioPlayerContext} from '../../context';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';

interface StyledLabelProps {
  length?: number;
  format?: ({
    currentTime,
    length,
  }: {
    currentTime?: number;
    length?: number;
  }) => string;
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
}

const TimeDisplayContainer = styled.div`
  ${getStylePreset(`container`, '')}
`;

const StyledLabel = styled.label<Partial<StyledLabelProps>>`
  ${getStylePreset(`currentTimeDisplay`, '')}
  ${getTypographyPreset('timeDisplay.currentTimeDisplay', 'currentTimeDisplay')}
`;

export const ThemelessTimeDisplay = ({format, ...props}: StyledLabelProps) => {
  const {getTimeDisplayProps} = useContext(AudioPlayerContext);
  const {defaultFormat, currentTime, length} = getTimeDisplayProps!();

  return (
    <TimeDisplayContainer>
      <StyledLabel overrides={props.overrides}>
        {format ? format({currentTime, length}) : defaultFormat}
      </StyledLabel>
    </TimeDisplayContainer>
  );
};

export const TimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
  defaults,
  stylePresets,
});
