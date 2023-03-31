import * as React from 'react';
import format from 'date-fns/format';
import {styled} from '../utils/style';
import {DateTimeProps} from './types';
import {TextBlock} from '../text-block';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {
  extractLogicalPropsFromOverrides,
  logicalProps,
} from '../utils/logical-properties';

const StyledDateText = styled(TextBlock)`
  white-space: pre;
  &:before,
  &:after {
    white-space: normal;
  }
`;
const StyledWrapper = styled.span`
  ${logicalProps('dateTime')};
`;

const StyledPrefix = StyledDateText;
const StyledSuffix = StyledDateText;

const defaultDateFormat = "MMMM d yyyy, h:mmaaaaa'm'";
const defaultDateFormatAttr = 'yyyy-MM-dd hh:mm:ssx';

const ThemelessDateTime = React.forwardRef<HTMLSpanElement, DateTimeProps>(
  (
    {
      children,
      date: dateProp,
      dateFormat = defaultDateFormat,
      prefix,
      suffix,
      overrides = {},
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme();

    const getPresets = (path: string) => ({
      typographyPreset: getToken(
        {theme, overrides},
        `dateTime.${path}`,
        `${path}`,
        'typographyPreset',
      ),
      stylePreset: getToken(
        {theme, overrides},
        `dateTime.${path}`,
        `${path}`,
        'stylePreset',
      ),
    });

    const prefixPresets = getPresets('prefix');
    const datePresets = getPresets('');
    const suffixPresets = getPresets('suffix');

    const logicalPropsOverrides = extractLogicalPropsFromOverrides(overrides);

    const date = new Date(dateProp);
    const dateTimeAttr = format(date, defaultDateFormatAttr);

    return (
      <StyledWrapper {...logicalPropsOverrides} ref={ref} {...rest}>
        {prefix && (
          <StyledPrefix as="span" {...prefixPresets}>
            {`${prefix} `}
          </StyledPrefix>
        )}

        <StyledDateText
          // @ts-ignore allow to render as time element only for this case
          as="time"
          dateTime={dateTimeAttr}
          {...datePresets}
        >
          {children || format(date, dateFormat)}
          {suffix ? `, ` : ` `}
        </StyledDateText>
        {suffix && (
          <StyledSuffix as="span" {...suffixPresets}>
            {suffix}
          </StyledSuffix>
        )}
      </StyledWrapper>
    );
  },
);

export const DateTime = withOwnTheme(ThemelessDateTime)({
  defaults,
});
