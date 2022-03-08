import React, {useContext} from 'react';
import {getStylePreset, MQ, styled} from '../../../utils';
import {AudioPlayerContext} from '../../context';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';

interface StyledLabelProps {
  length?: number;
  format?: (currentTime: number, length: number) => string;
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
}

const TimeDisplayContainer = styled.div`
  ${getStylePreset(`container`, '')}
`;

const StyledLabel = styled.label<Partial<StyledLabelProps>>``;

export const ThemelessTimeDisplay = ({format, ...props}: StyledLabelProps) => {
  const {trackPositionArr, duration, getTimeDisplayProps} = useContext(
    AudioPlayerContext,
  );
  const {defaultFormat} = getTimeDisplayProps!();

  return (
    <TimeDisplayContainer>
      <StyledLabel overrides={props.overrides}>
        {format ? format(trackPositionArr![0], duration!) : defaultFormat}
      </StyledLabel>
    </TimeDisplayContainer>
  );
};

export const TimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
  defaults,
});
