import React, {PropsWithChildren} from 'react';

import {FlagProps, BaseFlagProps, BaseFlagOverrides} from './types';
import {Stack} from '../stack';
import {StyledBaseFlag} from './styled';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {TextBlock} from '../text-block';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const BaseFlag = React.forwardRef<
  HTMLDivElement,
  BaseFlagProps<BaseFlagOverrides> & {as?: keyof JSX.IntrinsicElements}
>(({children, overrides, loading, disabled, as, ...props}, ref) => {
  const theme = useTheme();

  return (
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
        flow="horizontal-center"
        stackDistribution="center"
      >
        {React.Children.map(children, child =>
          ['string', 'number'].includes(typeof child) ? (
            <TextBlock
              as="span"
              typographyPreset={overrides && overrides.typographyPreset}
            >
              {child}
            </TextBlock>
          ) : (
            child
          ),
        )}
      </Stack>
    </StyledBaseFlag>
  );
});

const ThemelessFlag = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<FlagProps>
>(({overrides = {}, ...props}, ref) => {
  const theme = useTheme();
  const {size = 'medium'} = props;

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

export const Flag = withOwnTheme(ThemelessFlag)({defaults, stylePresets});
