import React from 'react';
import {Block, Flag, Headline, Stack, TextBlock} from 'newskit';
import {MetaFlagStylePresets} from './types';

export const Status: React.FC<{status?: string}> = ({status}) =>
  status ? (
    <Stack flow="vertical-left" spaceInline="space040">
      <Headline overrides={{typographyPreset: 'utilityLabel020'}}>
        Status
      </Headline>
      <Flag
        size="small"
        overrides={{
          stylePreset: MetaFlagStylePresets.Supported,
        }}
      >
        <Block spaceInset="space010">
          <TextBlock typographyPreset="utilityLabel010">{status}</TextBlock>
        </Block>
      </Flag>
    </Stack>
  ) : null;
