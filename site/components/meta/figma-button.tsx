import React from 'react';
import {Button, ButtonSize} from 'newskit';

import {IconFilledFigma} from '../icons/icon-filled-figma';

export const FigmaButton: React.FC<{href?: string}> = ({href}) =>
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
      <IconFilledFigma />
      View Design
    </Button>
  ) : null;
