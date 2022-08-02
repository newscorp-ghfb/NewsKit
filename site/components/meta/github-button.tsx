import React from 'react';
import {Button, ButtonSize} from 'newskit';

import {IconFilledGitHub} from '../icons/icon-filled-github';

export const GitHubButton: React.FC<{href?: string}> = ({href}) =>
  href ? (
    <Button
      size={ButtonSize.Small}
      overrides={{
        typographyPreset: 'utilityButton010',
        stylePreset: 'buttonOutlinedSecondary',
        minWidth: '176px',
        width: '100%',
        minHeight: '44px',
      }}
      href={href}
      target="_blank"
    >
      <IconFilledGitHub />
      View code
    </Button>
  ) : null;
