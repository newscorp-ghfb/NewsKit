import React from 'react';
import {Block, IconFilledInfo, TextBlock, Stack, Flow} from 'newskit';

export const InfoNotice: React.FC = ({children}) => (
  <Block stylePreset="infoNotice" spaceInset="spaceInsetSquish040">
    <Stack flow={Flow.HorizontalCenter} spaceInline="space020">
      <IconFilledInfo overrides={{size: 'iconSize020'}} />
      <TextBlock typographyPreset="editorialParagraph020">{children}</TextBlock>
    </Stack>
  </Block>
);
