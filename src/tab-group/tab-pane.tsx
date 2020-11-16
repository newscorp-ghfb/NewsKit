import React from 'react';
import {TabPaneProps} from './types';
import {TextBlock} from '../text-block';

export const TabPane: React.FC<TabPaneProps> = ({children}) => (
  <TextBlock typographyPreset="utilityBody020" data-testid="tab-pane">
    {children}
  </TextBlock>
);
