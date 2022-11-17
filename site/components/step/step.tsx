import React from 'react';
import {Stack, Block, Flag} from 'newskit';
import {Illustration} from '../illustrations/illustration-loader';
import {IconFilledTimer} from '../icons';

interface StepProps {
  media?: string;
  stepText: string;
  timerText: string;
}

export const Step = ({media, stepText, timerText}: StepProps) => (
  <>
    {media && (
      <Block spaceStack="space060">
        <Illustration viewBox="0 0 1345 759" path={media} />
      </Block>
    )}
    <Stack
      flow="horizontal-center"
      stackDistribution="space-between"
      height="auto"
    >
      <Flag
        size="medium"
        overrides={{
          stylePreset: 'stepFlag',
          typographyPreset: 'utilityLabel020',
          spaceInset: 'spaceInsetSquish020',
        }}
      >
        {stepText}
      </Flag>
      <Flag
        size="small"
        overrides={{
          stylePreset: 'timerFlag',
          typographyPreset: 'utilityLabel020',
          spaceInset: 'spaceInsetSquish020',
        }}
      >
        <IconFilledTimer /> {timerText}
      </Flag>
    </Stack>
  </>
);
