import React from 'react';
import {Stack, Block, Flow, Flag, FlagSize, IconFilledGitHub} from 'newskit';
import {Illustration} from '../illustrations/illustration-loader';

interface StepProps {
  media?: string;
  stepText: string;
  timerText: string;
}

export const Step = ({media, stepText, timerText}: StepProps) => (
  <>
    {media && (
      <Block spaceStack="space060">
        <Illustration path={media} />
      </Block>
    )}
    <Stack flow={Flow.HorizontalCenter} stackDistribution="space-between">
      <Flag
        size={FlagSize.Medium}
        overrides={{
          stylePreset: 'stepFlag',
          typographyPreset: 'utilityLabel020',
          spaceInset: 'spaceInsetSquish020',
        }}
      >
        {stepText}
      </Flag>
      <Flag
        size={FlagSize.Small}
        overrides={{
          stylePreset: 'timerFlag',
          typographyPreset: 'utilityLabel020',
          spaceInset: 'spaceInsetSquish020',
        }}
      >
        <IconFilledGitHub /> {timerText}
      </Flag>
    </Stack>
  </>
);
