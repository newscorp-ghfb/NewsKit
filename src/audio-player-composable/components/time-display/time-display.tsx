import React, {useContext} from 'react';
import {getStylePreset, styled} from '../../../utils';
import {AudioPlayerContext} from '../../context';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {Label} from '../../../label';
import {StyledLabelProps} from './types';

const TimeDisplayContainer = styled.div<StyledLabelProps>`
  ${getStylePreset(`container`, '')}
`;

export const ThemelessTimeDisplay = ({
  overrides = {},
  format,
}: StyledLabelProps) => {
  const {getTimeDisplayProps} = useContext(AudioPlayerContext);
  const {defaultFormat, currentTime, length} = getTimeDisplayProps!();
  return (
    <TimeDisplayContainer>
      <Label size="large" overrides={overrides}>
        {format ? format({currentTime, length}) : defaultFormat}
      </Label>
    </TimeDisplayContainer>
  );
};

export const TimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
  defaults,
  stylePresets,
});
