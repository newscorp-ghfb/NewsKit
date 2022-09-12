import React from 'react';
import {GridLayout} from '../grid-layout';
import {TextBlock} from '../text-block';
import {Block} from '../block';
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

type StorybookPageProps = {
  children?: React.ReactNode;
};

export const StorybookPage = ({children}: StorybookPageProps) => (
  <GridLayout rowGap="space060">{children}</GridLayout>
);

type StorybookCaseProps = {
  title: string;
  children?: React.ReactNode;
};

export const StorybookCase = ({title, children}: StorybookCaseProps) => (
  <GridLayout rowGap="space030">
    <TextBlock stylePreset="inkBase" typographyPreset="editorialHeadline010">
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </TextBlock>
    <Block paddingBlock="space050" paddingInline="space050">
      {children}
    </Block>
  </GridLayout>
);
