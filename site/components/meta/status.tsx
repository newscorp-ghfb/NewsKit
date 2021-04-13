import React from 'react';
import {Block, Flag, FlagSize, Flow, Headline, Stack, TextBlock} from 'newskit';
import {MetaFlagStylePresets} from './types';

export const Status: React.FC<{status?: string}> = ({status}) =>
  status ? (
    <Stack flow={Flow.VerticalLeft} spaceInline="space040">
      <Headline overrides={{typographyPreset: 'utilityLabel010'}}>
        Status
      </Headline>
      <Flag
        size={FlagSize.Small}
        overrides={{
          stylePreset: MetaFlagStylePresets.Supported,
        }}
      >
        <Block spaceStack="space010">
          <TextBlock typographyPreset="utilityLabel010">{status}</TextBlock>
        </Block>
      </Flag>
    </Stack>
  ) : null;
