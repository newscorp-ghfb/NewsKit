import React from 'react';
import {TabPaneProps} from './types';
import {TabPaneBlock} from './styled';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';

export const TabPane: React.FC<TabPaneProps> = ({children, overrides}) => {
  const theme = useTheme();

  const tabPaneTypographyPresetToken = getToken(
    {theme, overrides},
    'tabs.tabPane',
    '',
    'typographyPreset',
  );

  return (
    <TabPaneBlock
      data-testid="tab-pane"
      typographyPreset={tabPaneTypographyPresetToken}
      as="div"
    >
      {children}
    </TabPaneBlock>
  );
};
