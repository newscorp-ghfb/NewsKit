import React from 'react';
import {
  DocsStoryProps,
  DocsContextProps,
  Description,
  Anchor,
  Canvas,
  Story,
} from '@storybook/addon-docs';
import {GridLayout} from '../grid-layout';
import {TextBlock} from '../text-block';
import {Block} from '../block';
import {MQ, styled, getColorCssFromTheme} from '../utils/style';
import {get} from '../utils/get';
import {LinkStandalone} from '../link';
import {TitleBar} from '../title-bar';
import {Divider} from '../divider';

interface StoriesProps {
  title?: JSX.Element | string;
  includePrimary?: boolean;
  context: DocsContextProps;
}

interface Props {
  children: React.ReactNode;
  stylePreset?: MQ<string>;
}

export const StorybookHeading: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="h1"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="utilitySubheading020"
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
    typographyPreset="utilityBody030"
    paddingBlock="space030"
  >
    {children}
  </TextBlock>
);

export const StorybookH3: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="h3"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="utilityBody030"
    paddingBlock="space020"
  >
    {children}
  </TextBlock>
);

export const StorybookH4: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="h3"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="utilityBody030"
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
  <GridLayout
    rowGap="space080"
    columnGap="space080"
    columns="repeat(auto-fill, minmax(300px, 1fr))"
    alignItems="start"
    overrides={{paddingBlock: 'space050', paddingInline: 'space030'}}
  >
    {children}
  </GridLayout>
);

type StorybookCaseProps = {
  title: string;
  children?: React.ReactNode;
};

export const StorybookCase = ({title, children}: StorybookCaseProps) => (
  <GridLayout rowGap="space040">
    <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </TextBlock>
    <Block>{children}</Block>
  </GridLayout>
);

export const StoryDocsHeader = ({context}: {context: DocsContextProps}) => {
  const autoTitle = get(context, 'title').replace('Components/', '');
  const title = get(context, 'parameters.nkDocs.title') || autoTitle;
  const description = get(context, 'parameters.nkDocs.description');
  const url = get(context, 'parameters.nkDocs.url');
  const link = () =>
    url ? <LinkStandalone href={url}>Documentation</LinkStandalone> : null;

  return (
    <GridLayout rowGap="space040" overrides={{marginBlockEnd: 'space060'}}>
      <TitleBar
        headingAs="h1"
        actionItem={link}
        overrides={{
          spaceInset: 'space000',
          heading: {
            typographyPreset: 'utilitySubheading050',
            stylePreset: 'inkBase',
          },
        }}
      >
        {title}
      </TitleBar>
      {description && (
        <TextBlock
          marginBlockStart="space020"
          typographyPreset="utilityBody030"
          stylePreset="inkBase"
        >
          {description}
        </TextBlock>
      )}
      <Divider />
    </GridLayout>
  );
};

const StyledCanvas = styled(Canvas)`
  & > div > div {
    padding: 0;
  }
`;

export const DocsStory = ({
  id,
  name,
  expanded = true,
  withToolbar = false,
  parameters = {},
}: DocsStoryProps) => {
  let description;
  const {docs} = parameters;
  if (expanded && docs) {
    description = docs.description?.story;
    if (!description) {
      description = docs.storyDescription;
    }
  }

  const subheading = expanded && name;

  return (
    // Have to ignore because the library typings are missing `children` prop.
    // @ts-ignore
    <Anchor storyId={id!}>
      {subheading && (
        <TextBlock
          typographyPreset="utilitySubheading020"
          stylePreset="inkBase"
          as="h2"
        >
          {subheading}
        </TextBlock>
      )}
      {description && <Description markdown={description} />}
      {/* Have to ignore because the library typings are missing `children` prop. */}
      {/* @ts-ignore */}
      <StyledCanvas withToolbar={withToolbar}>
        <Story id={id} parameters={parameters} />
      </StyledCanvas>
    </Anchor>
  );
};

export const Stories = ({
  context,
  title,
  includePrimary = false,
}: StoriesProps) => {
  const {componentStories} = context;
  let stories: DocsStoryProps[] = componentStories().filter(
    story => !story.parameters?.docs?.disable,
  );
  if (!includePrimary) stories = stories.slice(1);
  if (!stories || stories.length === 0) return null;

  return (
    <>
      <TextBlock
        typographyPreset="utilitySubheading020"
        marginBlockEnd="space050"
        stylePreset="inkBase"
        as="h2"
      >
        {title}
      </TextBlock>
      {stories.map(
        story => story && <DocsStory key={story.id} {...story} expanded />,
      )}
    </>
  );
};
