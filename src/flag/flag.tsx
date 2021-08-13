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
  BaseFlagProps<BaseFlagOverrides> & {as?: keyof JSX.IntrinsicElements}
>(({children, overrides, loading, disabled, as, ...props}, ref) => {
  const theme = useTheme();

  return (
    <IE11FixContainer overrides={overrides}>
      <StyledBaseFlag
        {...props}
        $loading={loading}
        $disabled={disabled} // Used to avoid passing disabled HTML attribute to an anchor link
        disabled={as !== 'a' && disabled}
        overrides={overrides}
        ref={ref}
        as={as}
      >
        <Stack
          spaceInline={getToken({theme, overrides}, '', '', 'spaceInline')}
          flow={Flow.HorizontalCenter}
          stackDistribution={StackDistribution.Center}
        >
          {React.Children.map(children, child =>
            ['string', 'number'].includes(typeof child) ? (
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
