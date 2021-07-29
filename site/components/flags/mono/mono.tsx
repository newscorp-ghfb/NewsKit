import React from 'react';
import {TextBlock} from 'newskit';
import {MonoProps} from './types';
import {StyledFlag} from './styled';

export const Mono: React.FC<MonoProps> = ({
  minimal = false,
  overrides,
  children,
  ...props
}) =>
  minimal ? (
    <TextBlock
      noCrop
      stylePreset="flagMinimalNeutral"
      typographyPreset="utilityCode020"
      {...overrides}
    >
      {children}
    </TextBlock>
  ) : (
    <StyledFlag
      {...props}
      overrides={{
        typographyPreset: 'utilityCode020',
        stylePreset: 'flagSolidNeutral',
        ...overrides,
      }}
      size="small"
    >
      {children}
    </StyledFlag>
  );
