import React, {PropsWithChildren} from 'react';

import {FlagProps, FlagSize, BaseFlagProps, BaseFlagOverrides} from './types';
import {Stack} from '../stack';
import {Flow, StackDistribution} from '../stack/types';
import {
  StyledBaseFlag,
  StyledTextCropWrapper,
  IE11FixContainer,
} from './styled';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {filterOutFalsyProperties} from '../utils/filter-object';

const BaseFlag = React.forwardRef<
  HTMLDivElement,
  BaseFlagProps<BaseFlagOverrides>
>(({children, overrides, ...props}, ref) => {
  const theme = useTheme();
  return (
    <IE11FixContainer overrides={overrides}>
      <StyledBaseFlag {...props} overrides={overrides} ref={ref}>
        <Stack
          spaceInline={getToken({theme, overrides}, '', '', 'spaceInline')}
          flow={Flow.HorizontalCenter}
          stackDistribution={StackDistribution.Center}
        >
          {React.Children.map(children, child =>
            typeof child === 'string' ? (
              <StyledTextCropWrapper overrides={overrides}>
                {child}
              </StyledTextCropWrapper>
            ) : (
              child
            ),
          )}
        </Stack>
      </StyledBaseFlag>
    </IE11FixContainer>
  );
});

export const Flag = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<FlagProps>
>(({overrides = {}, ...props}, ref) => {
  const theme = useTheme();
  const {size = FlagSize.Medium} = props;

  return (
    <BaseFlag
      data-testid="flag"
      {...props}
      ref={ref}
      overrides={{
        ...theme.componentDefaults.flag[size],
        ...filterOutFalsyProperties(overrides),
      }}
    />
  );
});
