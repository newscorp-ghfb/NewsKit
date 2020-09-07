import React from 'react';

import {FlagProps, FlagSize, BaseFlagProps} from './types';
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

const BaseFlag: React.FC<BaseFlagProps> = ({children, overrides, ...props}) => {
  const theme = useTheme();

  return (
    <IE11FixContainer overrides={overrides}>
      <StyledBaseFlag {...props} overrides={overrides}>
        <Stack
          spaceInline={getToken({theme, overrides}, '', '', 'space')}
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
};

export const Flag: React.FC<FlagProps> = ({overrides = {}, ...props}) => {
  const theme = useTheme();
  const {size = FlagSize.Small} = props;

  return (
    <BaseFlag
      data-testid="flag"
      {...props}
      overrides={{
        ...theme.componentDefaults.flag[size],
        ...filterOutFalsyProperties(overrides),
      }}
    />
  );
};
