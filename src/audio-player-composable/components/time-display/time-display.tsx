import React from 'react';
import {getStylePreset, styled} from '../../../utils';
import {useAudioPlayerContext} from '../../context';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {Label} from '../../../label';
import {StyledLabelProps} from './types';

const TimeDisplayContainer = styled.div<StyledLabelProps>`
  ${getStylePreset(`container`, '')}
`;
// 15-20
export const ThemelessTimeDisplay = ({
  overrides = {},
  format,
}: StyledLabelProps) => {
  const {getTimeDisplayProps} = useAudioPlayerContext();
  const {format: defaultFormat, currentTime, duration} = getTimeDisplayProps!();
  const formatFn = typeof format === 'function' ? format : defaultFormat;
  return (
    <TimeDisplayContainer>
      <Label size="large" overrides={overrides}>
        {formatFn({currentTime, duration})}
      </Label>
    </TimeDisplayContainer>
  );
};

export const TimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
  defaults,
  stylePresets,
});
