import React, {useContext} from 'react';
import {getStylePreset, MQ, styled} from '../../../utils';
import {AudioPlayerContext} from '../../context';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';
import {LabelProps} from '../../../label/types';

interface StyledLabelProps extends Omit<LabelProps, 'children'> {
  length?: number;
  format?: string;
  defaultTime?: number;
  currentTime?: number[];
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
}

const TimeDisplayContainer = styled.div`
  ${getStylePreset(`container`, '')}
`;

const StyledLabel = styled.label<Partial<StyledLabelProps>>``;

export const ThemelessTimeDisplay = ({
  format,
  defaultTime,
  ...props
}: StyledLabelProps) => {
  const {currentTime, totalLength, formatFunction} = useContext(
    AudioPlayerContext,
  );
  formatFunction!;

  return (
    <TimeDisplayContainer>
      {format ? (
        <StyledLabel overrides={props.overrides}>
          {formatFunction! && formatFunction(format)}
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
