import * as React from 'react';
import format from 'date-fns/format';
import {
  getTypePresetFromTheme,
  getColorFromTheme,
  styled,
} from '../utils/style';
import {ColorKeys} from '../themes';
import {DateLineProps} from './types';

const StyledDate = styled.time<{$color?: ColorKeys}>`
  position: relative;
  ${getTypePresetFromTheme('body030')}
  color: ${getColorFromTheme(undefined, '$color')};
`;

const iso8601DateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
const defaultDateFormat = "MMMM d yyyy, h:mmaaaaa'm'";

export const DateLine: React.FC<DateLineProps> = ({
  date,
  dateFormat = defaultDateFormat,
  prefix,
  suffix,
  color,
}) => (
  <StyledDate
    $color={color}
    dateTime={format(new Date(date), iso8601DateFormat)}
  >
    {prefix}
    {format(new Date(date), dateFormat)}
    {suffix}
  </StyledDate>
);
