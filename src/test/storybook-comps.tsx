import React from 'react';
import {TextBlock} from '../text-block';
import {MQ, styled, getColorCssFromTheme} from '../utils/style';

interface Props {
  children: React.ReactNode;
  stylePreset?: MQ<string>;
}

export const StorybookHeading: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="h1"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="editorialHeadline050"
    paddingBlock="space030"
  >
    {children}
  </TextBlock>
);

export const StorybookSubHeading: React.FC<Props> = ({
  children,
  stylePreset,
}) => (
  <TextBlock
    as="h2"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="editorialHeadline040"
    paddingBlock="space030"
  >
    {children}
  </TextBlock>
);

export const StorybookH3: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="h3"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="editorialHeadline020"
    paddingBlock="space020"
  >
    {children}
  </TextBlock>
);

export const StorybookH4: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="h3"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="editorialHeadline010"
    paddingBlock="space020"
  >
    {children}
  </TextBlock>
);

export const StorybookSpan: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="span"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="editorialLabel010"
  >
    {children}
  </TextBlock>
);

export const StorybookParah: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    stylePreset={stylePreset || 'inkContrast'}
    paddingBlockEnd="space020"
    typographyPreset="editorialParagraph010"
  >
    {children}
  </TextBlock>
);

export const StorybookLabel = styled.label`
  ${getColorCssFromTheme('color', 'inkBase')}
`;
