import React from 'react';
import {GridLayout} from '../grid-layout';
import {LinkStandalone} from '../link';
import {TextBlock} from '../text-block';
import {TitleBar} from '../title-bar';
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
  title: string;
  url?: string;
  children?: React.ReactNode;
};

export const StorybookPage = ({title, url, children}: StorybookPageProps) => {
  if (process.env.STORYBOOK_APPLITOOLS || window.STORYBOOK_APPLITOOLS) {
    return (
      <GridLayout rowGap="space020">
        <div>{title}</div>

        {children}
      </GridLayout>
    );
  }
  const link = () =>
    url ? <LinkStandalone href={url}>Documentation</LinkStandalone> : null;
  return (
    <GridLayout rowGap="space060">
      <TitleBar
        actionItem={link}
        overrides={{
          spaceInset: 'space000',
          heading: {typographyPreset: 'editorialHeadline050'},
        }}
      >
        {title}
      </TitleBar>
      {children}
    </GridLayout>
  );
};

type StorybookCaseProps = {
  title: string;
  children?: React.ReactNode;
};

// TODO: this styling can be done via style preset
const StyledBlock = styled(Block)`
  border: 1px solid #c6c6c6;
  box-shadow: 0px 2px 4px rgba(10, 10, 10, 0.08);
  border-radius: 8px;
`;

export const StorybookCase = ({title, children}: StorybookCaseProps) => {
  if (process.env.STORYBOOK_APPLITOOLS) {
    return (
      <GridLayout rowGap="space010">
        <div>{title}</div>
        {children}
      </GridLayout>
    );
  }

  return (
    <GridLayout rowGap="space030">
      <TextBlock stylePreset="inkBase" typographyPreset="editorialHeadline010">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </TextBlock>
      <StyledBlock paddingBlock="space050" paddingInline="space050">
        {children}
      </StyledBlock>
    </GridLayout>
  );
};
