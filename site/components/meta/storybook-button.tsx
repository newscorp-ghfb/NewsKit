import React from 'react';
import {Button} from 'newskit';

import {IconFilledStorybook} from '../icons/icon-filled-storybook';

export const StorybookButton: React.FC<{storybookId?: string}> = ({
  storybookId,
}) =>
  storybookId ? (
    <Button
      size="small"
      overrides={{
        typographyPreset: 'utilityButton010',
        stylePreset: 'buttonOutlinedSecondary',
        minWidth: '176px',
        width: '100%',
        minHeight: '44px',
      }}
      href={`https://storybook.newskit.co.uk/?path=/docs/${storybookId}`}
      target="_blank"
    >
      <IconFilledStorybook />
      View Storybook
    </Button>
  ) : null;
