import React from 'react';
import {
  IconFilledLaunch,
  IconOutlinedArrowForwardIos,
  NewsKitIconProps,
} from '../icons';
import {isLinkExternal} from '../link/utils';
import {Stack} from '../stack';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';

export const StructuredListIcon: React.FC<NewsKitIconProps> = ({
  overrides,
  href,
}) => {
  const theme = useTheme();
  const iconSizeToken = getToken(
    {theme, overrides},
    'structuredListItem.icon',
    'icon',
    'size',
  );

  const iconStylePresetToken = getToken(
    {theme, overrides},
    'structuredListItem.icon',
    'icon',
    'stylePreset',
  );

  return (
    <Stack stackDistribution="flex-end" flow="horizontal-center">
      {href && isLinkExternal(href) ? (
        <IconFilledLaunch
          overrides={{
            size: iconSizeToken,
            stylePreset: iconStylePresetToken,
          }}
        />
      ) : (
        <IconOutlinedArrowForwardIos
          overrides={{
            size: iconSizeToken,
            stylePreset: iconStylePresetToken,
          }}
        />
      )}
    </Stack>
  );
};
