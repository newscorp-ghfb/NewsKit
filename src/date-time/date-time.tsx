import * as React from 'react';
import format from 'date-fns/format';
import {styled} from '../utils/style';
import {DateTimeProps} from './types';
import {TextBlock} from '../text-block';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';

const StyledDateText = styled(TextBlock)`
  white-space: pre;
`;

const StyledPrefix = StyledDateText;
const StyledSuffix = StyledDateText;

const defaultDateFormat = "MMMM d yyyy, h:mmaaaaa'm'";

export const DateTime: React.FC<DateTimeProps> = ({
  date,
  dateFormat = defaultDateFormat,
  prefix,
  suffix,
  overrides = {},
}) => {
  const theme = useTheme();

  const getOverrides = (path: string) => ({
    typePreset: getToken(
      {theme, overrides},
      `dateTime.${path}`,
      `${path}`,
      'typePreset',
    ),
    stylePreset: getToken(
      {theme, overrides},
      `dateTime.${path}`,
      `${path}`,
      'stylePreset',
    ),
  });
  return (
    <time>
      {prefix && (
        <StyledPrefix as="span" overrides={getOverrides('prefix')}>
          {`${prefix} `}
        </StyledPrefix>
      )}
      <StyledDateText as="span" overrides={getOverrides('')}>
        {format(new Date(date), dateFormat)}
        {suffix ? `, ` : ` `}
      </StyledDateText>
      {suffix && (
        <StyledSuffix as="span" overrides={getOverrides('suffix')}>
          {suffix}
        </StyledSuffix>
      )}
    </time>
  );
};
